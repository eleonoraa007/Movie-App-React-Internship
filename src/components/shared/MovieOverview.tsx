import styled from "styled-components";
import MovieInfo from "../../interface/MovieInfo";
import TextCollapse from "./TextCollapse";

const TopStyle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 13px;
`;

const TitleRating = styled.div`
  margin-bottom: .25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingStyle = styled.p`
  font-size: 1rem;
`;

const SpanStyle = styled.span`
  font-size: 25px;
`;

const GenreStyle = styled.p`
  color: var(--text-primary-color);
  font-weight: 600;
  font-size: 14px;
  margin: 0.7rem 0rem;
`;

const MovieStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; 
`;

const MovieTextStyle = styled.p`
    font-size: 0.9rem;
`;

type OverviewProps = {
    movie: MovieInfo;
}

const MovieOverview = ({movie}: OverviewProps) => {
    return (
        <>
        <TopStyle>
        <TitleRating>
            <h1><SpanStyle>{movie.title} </SpanStyle><SpanStyle>({movie.releaseDate})</SpanStyle></h1>
            <RatingStyle>⭐{movie.rating}</RatingStyle>
        </TitleRating>
        <div>
            <GenreStyle>{movie.genre}</GenreStyle>
        </div>
    </TopStyle>
    <MovieStyle>
        <div>
            <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
        </div>

        <div>
            <MovieTextStyle>
                <TextCollapse 
                    collapsedNumOfWords={10}
                    >{movie.overview}</TextCollapse>
            </MovieTextStyle>
        </div>        
    </MovieStyle>
    </>
    );
}
export default MovieOverview;
