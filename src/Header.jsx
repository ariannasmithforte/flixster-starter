//Header.jsx
import React, { useState } from 'react';

// Function that contains the search bar, app name, and sort options
const Header = ({ onSearch, onClear, onSortChange }) => {
    // State variable to hold the current search query
    const [searchQuery, setSearchQuery] = useState('');

    // Event handler function to update state when user types in search bar
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Event handler for search button click
    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    // Event handler for clear button click
    const handleClearClick = () => {
        setSearchQuery('');
        onClear();
    };

    // Event handler for Enter key press in search input
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    // Event handler for sort options change
    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        onSortChange(sortValue);
    };

    
    return (
        <div className="app-header">
            <div className="header-left">
                <div className="search-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for movies..."
                        className="search-input"
                    />
                    <button
                        className="search-button"
                        onClick={handleSearchClick}
                        disabled={!searchQuery.trim()}
                    >
                     Search
                    </button>
                    <button
                        className="clear-button"
                        onClick={handleClearClick}
                    >
                      Clear
                    </button>
                </div>
            </div>
            <div className="header-center">
                <h1 className="app-name">Flixster</h1>
            </div>
            <div className="header-right">
            <label htmlFor="sortOptions"></label>
            <select id="sortOptions" name="sort" onChange={(e)  => onSortChange(e.target.value)} defaultValue="">
                <option value="" disabled>Sort by</option>
                <option value="title-desc">Alphabetic A-Z</option>
                <option value="release-date-desc">Release Date Descending</option>
                <option value="rating-desc">Rating Descending</option>
            </select>



            </div>
        </div>
    );
}

export default Header;
