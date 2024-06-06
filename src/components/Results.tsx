import { useContext } from "react";
import { PropContext, PropContextProps } from "../App";

const Results = () => {
    const {filtered} = useContext(PropContext) as PropContextProps;
    return (
      <div className="search-result">
        {filtered.map((movie: any) => (
            <>
              <div className="search-container" key={movie.id}>
                        <div className="top">
                            <div className="title-rating">
                                <h1 className="title"><span>{movie.title} </span><span>({movie.releaseDate})</span></h1>
                                <p>⭐{movie.rating}</p>
                            </div>
                            <div className="genre">
                                <p>{movie.genre}</p>
                            </div>
                        </div>
                        <div className="movie">
                            <div className="movie-img">
                                <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
                            </div>
                            <div className="movie-description">
                                <h3 className="about-movie">About the movie</h3>
                                <p className="movie-text">{movie.overview}</p>
                                <div className="credits">
                                    <div className="actors">
                                        <h3>Actors</h3>
                                        <div className="actor">
                                            {movie.actors?.map((data: any, index: any) => {
                                                return (
                                                    <div key={index}>
                                                        {data}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="directors">
                            <h3>Director</h3>
                            <div className="director">
                                {movie.director}
                            </div>
                        </div>
                        <div className="screenwriters">
                            <h3>Screenwriter</h3>
                            <div className="screenwriter">
                                {movie.screenwriters}
                            </div>
                        </div>
                                </div>
                            </div>        
                        </div>
                    </div>
            </>
          ))}
      </div>
    );
}
export default Results;