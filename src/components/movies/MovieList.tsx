import { useContext } from 'react';
import Movie from "./Movie";
import { PropContext, PropContextProps } from "../../context/PropContext";

const MovieList = () => {
    const {movies} = useContext(PropContext) as PropContextProps;
    return (
        <ul>
            {movies?.map((movie) => (
                <>
                <Movie movie={movie} key={movie.id}/>
                </>
            ))}
        </ul>
    )
}
export default MovieList;