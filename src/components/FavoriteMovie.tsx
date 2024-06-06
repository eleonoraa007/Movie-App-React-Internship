import { useContext } from "react";
import MovieInfo from "../interface/MovieInfo";
import MovieOverview from "./MovieOverview";
import { PropContext, PropContextProps } from "../App";

type FavoriteProps = {
    movie: MovieInfo;
    // onToggle: any;
} 

const FavoriteMovie = ({movie}: FavoriteProps) => {
    const {onToggle} = useContext(PropContext) as PropContextProps;

    return (
        <div className="container-favorite">
            <MovieOverview movie={movie} />
            <button className="btn btn-favorite" onClick={() => onToggle(movie.id)}>Delete from favorites</button>
        </div>
    )
} 
export default FavoriteMovie;