import MovieInfo from "../interface/MovieInfo";
import TextCollapse from "./TextCollapse";

type OverviewProps = {
    movie: MovieInfo;
}

const MovieOverview = ({movie}: OverviewProps) => {
    return (
        <>
        <div className="top-overview">
        <div className="title-rating-overview">
            <h1 className="title-overview"><span>{movie.title} </span><span>({movie.releaseDate})</span></h1>
            <p>⭐{movie.rating}</p>
        </div>
        <div className="genre-overview">
            <p>{movie.genre}</p>
        </div>
    </div>
    <div className="movie-overview">
        <div className="movie-img-overview">
            <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
        </div>

        <div className="movie-description-overview">
            <p className="movie-text-overview">
                <TextCollapse 
                    collapsedNumOfWords={10}
                    >{movie.overview}</TextCollapse>
            </p>
        </div>        
    </div>
    </>
    );
}
export default MovieOverview;
