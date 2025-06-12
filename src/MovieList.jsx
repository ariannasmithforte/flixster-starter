import React from 'react';
import MovieCard from './MovieCard.jsx';

// Function that renders a list of movies
const MovieList = ({ movies, onMovieClick }) => {

    return (
        <main>
            <section className="movies-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={() => onMovieClick(movie.id)}
                    />
                ))}
            </section>
        </main>
    );
};

export default MovieList;
