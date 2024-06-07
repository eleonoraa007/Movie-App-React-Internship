import { createContext, useState } from "react";
import MovieInfo from "../interface/MovieInfo";
import useFetchMovies from "../hooks/useFetchMovies";
import useStorage from "../hooks/useStorage";

export interface PropContextProps {
    filtered: MovieInfo[];
    movies: MovieInfo[];
    onSelect: (id: any) => void;
    favorites: MovieInfo[];
    onToggle: (id: any) => void;
    onClose: () => void;
    selectedId: number | null;
    movie: MovieInfo | null;
    onAddToFavorites: (movie: MovieInfo) => void;
}
type ChildrenContext = {
    children?: JSX.Element|JSX.Element[];
}

export const PropContext = createContext<PropContextProps | undefined>(undefined);


const PropProvider = ({children}: ChildrenContext) => {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const {movies} = useFetchMovies();

    const selectedMovie = movies.find((movie) => movie.id === selectedId) || null;

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.actors.find((actor) => actor.toLowerCase().includes(query.toLowerCase())) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.releaseDate.includes(query)
    );

    const handleAddToFavorites = (movie: MovieInfo) => {
        setFavorites((favorites) => [...favorites, movie]);
    }

    const handleDeleteFromFavorites = (id: any) => {
        setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
    }

    const handleToggleSelectMovie = (id: any) => {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    return (
        <PropContext.Provider value={{
            filtered: filteredMovies,
            movies,
            onSelect: handleToggleSelectMovie,
            favorites,
            onToggle: handleDeleteFromFavorites,
            onClose: handleCloseMovie,
            selectedId,
            movie: selectedMovie,
            onAddToFavorites: handleAddToFavorites
        }}>
        {children}
        </PropContext.Provider>
    );
}

export default PropProvider;