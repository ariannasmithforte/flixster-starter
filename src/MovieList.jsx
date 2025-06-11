//MovieList.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';


const MovieList = () => {
    // State variables
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch movies from the API
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2I4ZmE5MGZjZTA0NDJjNTQxOWU2YjA5ZTFjMGNiOCIsIm5iZiI6MTc0OTUwNjY4OC45NjYsInN1YiI6IjY4NDc1YTgwZDk5NGYxOTE4ZjlmNTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3f1wsETtGvuXQ-xD3v7bamOOmu_lQEstgQdrteb7mPc'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMovies(res.results);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <main className="loading">Loading movies...</main>;
    }

    // Renders through the list of movies
    return (
        <main>
            <section className="movies-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </section>
        </main>
    );
};

export default MovieList;
