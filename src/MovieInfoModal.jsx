//MovieInfoModal.jsx
import React from 'react';

//Function to render the modal with movie details such as title, backdrop image, release date, runtime, genres, and overview
const MovieModal = ({ movie, trailerKey, onClose }) => {
    if (!movie) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
          <img
            className="modal-backdrop"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>

          <br></br>
         <h3>Watch Trailer Now!</h3>
        {trailerKey && (
          <div className="modal-trailer">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        </div>
      </div>
    );
  };

  export default MovieModal;
