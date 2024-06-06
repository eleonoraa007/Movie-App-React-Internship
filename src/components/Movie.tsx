import MovieInfo from "../interface/MovieInfo";
import MovieOverview from "./MovieOverview";

type MovieProps = {
    movie: MovieInfo;
    onSelect?: any;
}

const Movie = ({ movie, onSelect }: MovieProps) => {

    return ( 
        <div className="container-overview" onClick={() => onSelect(movie.id)}>
            <MovieOverview movie={movie}/>
        </div>
                

    );
}
export default Movie;