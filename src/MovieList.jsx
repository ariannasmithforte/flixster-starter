import React from 'react';
import MovieCard from './MovieCard.jsx';

const MovieList = ({ movies, onMovieClick }) => {
    // Renders through the list of movies
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
