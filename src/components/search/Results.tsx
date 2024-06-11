import { useContext } from "react";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

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

const SearchContainer = styled.div`
  place-content: center;
  background-color: var(--container-bg);
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 10px 20px 5px var(--box-shadow);
`;

const Results = () => {
    const {filtered} = useContext(PropContext) as PropContextProps;
    return (
      <div className="search-result">
        {filtered.map((movie: any) => (
            <>
              <SearchContainer key={movie.id}>
                        <Top>
                            <TitleRating>
                                <h1><span>{movie.title} </span><span>({movie.releaseDate})</span></h1>
                                <RatingStyle>⭐{movie.rating}</RatingStyle>
                            </TitleRating>
                            <GenreStyle>
                                <p>{movie.genre}</p>
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
                                            {movie.actors?.map((data: any, index: any) => {
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
                    </SearchContainer>
            </>
          ))}
      </div>
    );
}
export default Results;