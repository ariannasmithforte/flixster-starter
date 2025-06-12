import React, { useState } from 'react';

// MovieCard component
const MovieCard = ({ movie, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  const toggleWatched = (e) => {
    e.stopPropagation();
    setIsWatched((prev) => !prev);
  };

  return (
    <article className="movie-card" onClick={onClick}>
      <img src={imageUrl} alt={movie.title} />
      <header>
        <h2>{movie.title}</h2>
      </header>
      <p>{movie.vote_average}</p>

      <section className="movie-actions">
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className={`heart-btn ${isFavorite ? 'liked' : ''}`}
          label="Toggle favorite"
        >
          ♥
        </button>

        {/* Watched toggle button */}
        <button
          onClick={toggleWatched}
          className={`watchlist-btn ${isWatched ? 'watched' : ''}`}
          label="Toggle watchlist"
        >
          {isWatched ? '✓' : '+'}
        </button>
      </section>
    </article>
  );
};

export default MovieCard;
