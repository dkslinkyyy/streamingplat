"use client"
import MovieCard from '@components/MovieCard';
import { useEffect, useState } from 'react';

const Page = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let res = await fetch("http://localhost:3000/api/movies", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const allMovies = await res.json();
                setMovies(allMovies.data); // Assuming the data structure is { status: 200, data: ... }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className='w-screen px-10 py-10 flex flex-wrap gap-5 items-center justify-between'>
            {movies.map(movie => {
                // Check if the thumbnail property is a valid URL
                if (isValidURL(movie.thumbnail)) {
                    return <MovieCard key={movie._id} movie={movie} />;
                }
                return null; // Don't render MovieCard if thumbnail is not a valid URL
            })}
        </div>
    );
}

// Function to check if a given string is a valid URL
const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

export default Page;
