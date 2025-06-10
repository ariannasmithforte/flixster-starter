import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieCard from './Movie.jsx'
import LoadMore from './LoadMore.jsx'

const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const API_KEY =import.meta.env.VITE_API_KEY

const App = () => {

  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2I4ZmE5MGZjZTA0NDJjNTQxOWU2YjA5ZTFjMGNiOCIsIm5iZiI6MTc0OTUwNjY4OC45NjYsInN1YiI6IjY4NDc1YTgwZDk5NGYxOTE4ZjlmNTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3f1wsETtGvuXQ-xD3v7bamOOmu_lQEstgQdrteb7mPc'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setMovies(res.results)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Header />
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie_image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            movie_name={movie.title}
            movie_rating={movie.vote_average}
          />
        ))}
      </div>
      <LoadMore />
    </>
  )
}

export default App
