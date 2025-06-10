import React from 'react';

const MovieCard = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <article className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <header>
                <h2>{movie.title}</h2>
            </header>
            <p> {movie.vote_average}</p>
        </article>
    )
}

export default MovieCard;
