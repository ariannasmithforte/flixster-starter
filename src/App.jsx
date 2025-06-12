// App.jsx
import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import LoadMoreButton from './LoadMoreButton.jsx'
import ViewToggle from './ToggleView.jsx'
import MovieModal from './MovieInfoModal.jsx'

const API_KEY = import.meta.env.VITE_API_KEY
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmE1NzQwZDQwZWVhNWVkYjJjNTIzNWYyMWI3YmQwMyIsIm5iZiI6MTc0OTUwNjY4OC45NjYsInN1YiI6IjY4NDc1YTgwZDk5NGYxOTE4ZjlmNTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEeDNQVZan7uPBJakdXNVYY3j3Ojcmdkr6DoWGjVyck'
  }
};

const App = () => {
  // States variables
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
  const [view, setView] = useState('nowPlaying');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState('');

  // Fetch movies from API
  const fetchMovies = (page = 1) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
      .then(res => res.json())
      .then(data => {
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies(prev => [...prev, ...data.results]);
        }
        setHasMoreMovies(page < data.total_pages);
      })
      .catch(err => console.error(err));
  };

  // Fetch now playing function that resets the search term and page
  const fetchNowPlaying = () => {
    setSearchTerm('');
    setCurrentPage(1);
    fetchMovies(1);
  };

  // Fetch movies on initial load
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchTerm(query);
    setView('search');
    console.log('Searching for:', query);
  };

  // Function to clear search
  const handleClear = () => {
    setSearchTerm('');
    setView('nowPlaying');
    fetchNowPlaying();
    console.log('Search cleared');
  };

  // Function to handle sort change
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Function to load more movies
  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setLoadingMore(true);

    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${nextPage}`, options)
      .then(res => res.json())
      .then(data => {
        setMovies(prev => [...prev, ...data.results]);
        setCurrentPage(nextPage);
        setHasMoreMovies(nextPage < data.total_pages);
      })
      .catch(err => console.error(err))
      .finally(() => setLoadingMore(false));
  };

  const fetchMovieDetails = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(res => res.json())
      .then(data => setSelectedMovie(data))
      .catch(err => console.error(err));
  };

  const handleMovieClick = (movieId) => {
    console.log("Movie clicked:", movieId);
    fetchMovieDetails(movieId);
  };

  // Filter movies based on search term
  const filteredMovies = view === 'search'
    ? movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  // Sort the filtered movies
  const sortedFilteredMovies = [...filteredMovies].sort((a, b) => {
    if (sortOption === 'title-desc') return a.title.localeCompare(b.title); // Alphabetic A-Z
    if (sortOption === 'release-date-desc') return new Date(b.release_date) - new Date(a.release_date);
    if (sortOption === 'rating-desc') return b.vote_average - a.vote_average;
    return 0;
  });

  // Returns the header, toggle view, movie list, load more
  return (
    <>
      <Header
        onSearch={handleSearch}
        onClear={handleClear}
        onSortChange={handleSortChange}
      />
      <ViewToggle
        view={view}
        setView={setView}
        onNowPlayingClick={fetchNowPlaying}
      />
      <MovieList movies={sortedFilteredMovies} onMovieClick={handleMovieClick} />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <LoadMoreButton
        onLoadMore={handleLoadMore}
        loading={loadingMore}
        hasMoreMovies={hasMoreMovies}
      />
    </>
  );
};

export default App;
