import MovieInfo from "../interface/MovieInfo";
import MovieOverview from "./MovieOverview";

type FavoriteProps = {
    movie: MovieInfo;
    onToggle: any;
} 

const FavoriteMovie = ({movie, onToggle}: FavoriteProps) => {

    return (
        <div className="container-favorite">
            <MovieOverview movie={movie} />
            <button className="btn btn-favorite" onClick={() => onToggle(movie.id)}>Delete from favorites</button>
        </div>
    )
} 
export default FavoriteMovie;