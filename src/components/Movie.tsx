import { useContext } from "react";
import MovieInfo from "../interface/MovieInfo";
import MovieOverview from "./MovieOverview";
import { PropContext, PropContextProps } from "../App";

type MovieProps = {
    movie: MovieInfo;
    // onSelect?: any;
}

const Movie = ({movie}: MovieProps) => {
    const {onSelect} = useContext(PropContext) as PropContextProps;

    return ( 
        <div className="container-overview" onClick={() => onSelect(movie.id)}>
            <MovieOverview movie={movie}/>
        </div>
                

    );
}
export default Movie;