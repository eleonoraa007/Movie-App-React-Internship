import { useContext } from 'react';
import Movie from "./Movie";
import { PropContext, PropContextProps } from "../context/PropContext";

const ListMovie = () => {
    const {movies} = useContext(PropContext) as PropContextProps;
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <>
                <Movie movie={movie} key={movie.id}/>
                </>
            ))}
        </ul>
    )
}
export default ListMovie;