// LoadMore.jsx
import React from 'react';


const LoadMore = ({ onLoadMore, loading }) => {
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

export default LoadMore;
