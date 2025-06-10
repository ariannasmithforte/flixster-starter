import React from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieCard from './Movie.jsx'
import data from './data/data.js'

const App = () => {
  return (
    <>
    <Header />
    <div className="movies-container">
      {data.results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie_image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          movie_name={movie.title}
          movie_rating={movie.vote_average}
        />
      ))}
    </div>
    </>
)
}

export default App
