// MovieCard.jsx
import React from 'react';


const MovieCard = ({ movie_image, movie_name, movie_rating }) => {
    return (
        <div className="movie-card">
            <img src={movie_image} alt={movie_name} />
            <h2>{movie_name}</h2>
            <p>{movie_rating}</p>
        </div>
    )
}
export default MovieCard;
