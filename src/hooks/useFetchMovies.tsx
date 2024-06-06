import { useEffect, useState } from "react";
import MovieInfo from "../interface/MovieInfo";

const useFetchMovies = () => {
    const [movies, setMovies] = useState<MovieInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch('../movies.json', {
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                }).then((response)=> {
                    return response.json()
                }).then((data)=>{
                    setMovies(data);
                })
            } catch(error) {
                setError(new Error('An anknown error occurred'));
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []); 
    return {movies, loading, error};
}

export default useFetchMovies;