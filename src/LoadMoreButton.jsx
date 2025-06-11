// LoadMore Button.jsx
import React from 'react';

// Button to load more movies on the page.
const LoadMoreButton = ({ onLoadMore, loading }) => {
    return (
      <div className="load-more-container">
        <button
          className="load-more-button"
          onClick={onLoadMore}
          disabled={loading}
        >
          Load More
        </button>
      </div>
    );
  };

export default LoadMoreButton;
