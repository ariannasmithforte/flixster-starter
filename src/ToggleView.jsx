//ToggleView.jsx
import React from 'react';

//Function to switch from search results to now playing view
const ViewToggle = ({ view, setView, onNowPlayingClick }) => {
  return (
    <div className="toggle-buttons">
      <button
        className={view === 'nowPlaying' ? 'active' : ''}
        onClick={() => {
          setView('nowPlaying');
          onNowPlayingClick();
        }}
      >
        Now Playing
      </button>
    </div>
  );
};

export default ViewToggle;
