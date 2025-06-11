//Header.jsx
import React from 'react';

// Header component that contains the search bar, app name, and sort options
const Header = () => {
    return (
        <div className="app-header">
            <div className="header-left">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                    />
                    <button className="search-button">
                     Search
                    </button>
                    <button className="clear-button">
                      Clear
                    </button>
                </div>
            </div>
            <div className="header-center">
                <h1 className="app-name">Flixter</h1>
            </div>
            <div className="header-right">
            <label htmlFor="sortOptions"></label>
            <select id="sortOptions" name="sort" defaultValue="">
                <option value="" disabled>Sort by</option>
                <option value="popularity-desc">Popularity Descending</option>
                <option value="release-date-desc">Release Date Descending</option>
                <option value="rating-desc">Rating Descending</option>
            </select>



            </div>
        </div>
    );
}

export default Header;
