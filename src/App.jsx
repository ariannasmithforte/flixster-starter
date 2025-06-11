//App.jsx
import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import LoadMoreButton from './LoadMoreButton.jsx'
import ViewToggle from './ToggleView.jsx'
import MovieModal from './MovieInfoModal.jsx'

const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const API_KEY = import.meta.env.VITE_API_KEY

const App = () => {

  //Use state variables for search term, movies, current page, loading more, and has more movies
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
  const [view, setView] = useState('nowPlaying');
  const [selectedMovie, setSelectedMovie] = useState(null);

  //Fetch movies from API
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmE1NzQwZDQwZWVhNWVkYjJjNTIzNWYyMWI3YmQwMyIsIm5iZiI6MTc0OTUwNjY4OC45NjYsInN1YiI6IjY4NDc1YTgwZDk5NGYxOTE4ZjlmNTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEeDNQVZan7uPBJakdXNVYY3j3Ojcmdkr6DoWGjVyck'
    }
  };

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

// Fetch now playing movies, cureent page, and loading more
  const fetchNowPlaying = () => {
    setSearchTerm('');
    setCurrentPage(1);
    fetchMovies(1);
  };


  // Fetch movies on initial load
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Search for movies
  const handleSearch = (query) => {
    setSearchTerm(query);
    setView('search');
    console.log('Searching for:', query);
  };

  // Clear search
  const handleClear = () => {
    setSearchTerm('');
    setView('nowPlaying');
    fetchNowPlaying();
    console.log('Search cleared');
  };


  //Load more movies
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


  //Filter movies based on search term
  const filteredMovies = view === 'search'
  ? movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : movies;

  //Return header, view toggle, movie list, movie modal and load more button
  return (
    <>
      <Header onSearch={handleSearch} onClear={handleClear} />
      <ViewToggle
        view={view}
        setView={setView}
        onNowPlayingClick={fetchNowPlaying}
      />
      <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      ) }
      <LoadMoreButton
      onLoadMore={handleLoadMore}
      loading={loadingMore}
      hasMoreMovies={hasMoreMovies}
    />

    </>
  )
}

export default App
