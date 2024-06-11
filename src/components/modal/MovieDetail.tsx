import { useContext, useEffect } from "react";
import MovieInfo from "../../interface/MovieInfo";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ContainerStyle = styled.div`
  place-content: center;
  background-color: var(--background-color);
  color: var(--primary-color);
  padding: 2rem;
  margin: 0.5rem;
  box-shadow: 0 10px 20px 5px var(--box-shadow);
`;

const Top = styled.div`
  margin-bottom: 2rem;
`;

const TitleRating = styled.div`
  margin-bottom: .25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingStyle = styled.p`
  font-size: 1.15rem;
`;

const GenreStyle = styled.div`
  color: var(--text-primary-color);
  font-weight: 600;
  margin-top: 0.5rem;
`;

const MovieStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem; 
`;
const AboutMovieStyle = styled.h3`
  margin-bottom: 0.5rem;
`;

const MovieTextStyle = styled.p`
  font-size: 1rem;
`;
const CreditsStyle = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
`;

const Credit = styled.h3`
  margin-bottom: 0.5rem;
`;

const Role = styled.div`
  color: var(--text-primary-color);
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const MovieDetail = () => {
    const {movie, selectedId, onAddToFavorites, movies, onClose, favorites} = useContext(PropContext) as PropContextProps;
    
    const array = selectedId !== null && movies.map((movie) => movie.id).includes(selectedId);
    const filtered = movies.filter((movie) => movie.id === selectedId);

    const inFavorites = selectedId !== null && favorites.map((movie) => movie.id).includes(selectedId);

    const handleAdd = () => {
        if(selectedId === null) return;
        const newFavorite: MovieInfo = {
            id: selectedId, 
            poster: movie?.poster || "",
            title : movie?.title || "", 
            releaseDate: movie?.releaseDate || "",
            rating: movie?.rating || 0,
            overview: movie?.overview || "",
            genre: movie?.genre || "",
            actors: movie?.actors || [],
            director: movie?.director || "",
            screenwriters: movie?.screenwriters || "",
        };
        onAddToFavorites(newFavorite);
        onClose();
    };

    useEffect(() => {
      const callback = (e: KeyboardEvent) => {
        if(e.code === "Escape") {  
            onClose();
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    }, [onClose]);

    return (
        <>
            {array ? ( filtered.map((movie) => {
                return (
                
                    <ContainerStyle key={movie.id}>
                        <Top>
                            <TitleRating>
                                <h1><span>{movie.title} </span><span>({movie.releaseDate})</span></h1>
                                <p>⭐{movie.rating}</p>
                            </TitleRating>
                            <GenreStyle>
                                <RatingStyle>{movie.genre}</RatingStyle>
                            </GenreStyle>
                        </Top>
                        <MovieStyle>
                            <div>
                                <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
                            </div>
                            <div>
                                <AboutMovieStyle>About the movie</AboutMovieStyle>
                                <MovieTextStyle>{movie.overview}</MovieTextStyle>
                                <CreditsStyle>
                                    <div>
                                        <Credit>Actors</Credit>
                                        <Role>
                                            {movie.actors?.map((data, index) => {
                                                return (
                                                    <div key={index}>
                                                        {data}
                                                    </div>
                                                )
                                            })}
                                        </Role>
                                    </div>
                                    <div>
                                        <Credit>Director</Credit>
                                        <Role>
                                            {movie.director}
                                        </Role>
                                    </div>
                                    <div>
                                        <Credit>Screenwriter</Credit>
                                        <Role>
                                            {movie.screenwriters}
                                        </Role>
                                    </div>
                                            </CreditsStyle>
                                        </div>        
                                    </MovieStyle>
                                    {!inFavorites ?
                                    <button className="btn btn-movie" onClick={handleAdd}>Add movie to favorites</button>
                                    : <></>}
                                </ContainerStyle>
            )})) : (
                ""
            )}
        </>
    );
}
export default MovieDetail;