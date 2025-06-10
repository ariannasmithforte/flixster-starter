import React from 'react';

const Header = () => {
    return (
        <>
        <h1 className = "App-header">Flixter</h1>
        <div className = "Search-Bar">
            <input type="text" placeholder="" />
            <button>Search</button>
        </div>
        </>
    )
}

export default Header;
