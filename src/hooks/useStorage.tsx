import { useEffect, useState } from "react";
import MovieInfo from "../interface/MovieInfo";

const useStorage = (): [MovieInfo[], React.Dispatch<React.SetStateAction<MovieInfo[]>>] => {
    const [favorites, setFavorites] = useState<MovieInfo[]>(() => {
        const value = localStorage.getItem("favorites");
        return value ? JSON.parse(value) : [];
    });
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    return [favorites, setFavorites];
}
export default useStorage;