// LoadMore Button.jsx
import React from 'react';

// Button to load more movies on the page.
const LoadMoreButton = ({ onLoadMore, loading, hasMoreMovies }) => {
    if (!hasMoreMovies) {
      return (
        <div className="load-more-container">
          <p className="no-more-movies">No more movies to show!</p>
        </div>
      );
    }

    return (
      <div className="load-more-container">
        <button
          className="load-more-button"
          onClick={onLoadMore}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    );
  };

export default LoadMoreButton;
