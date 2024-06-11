import { useContext } from "react";
import MovieInfo from "../../interface/MovieInfo";
import MovieOverview from "../shared/MovieOverview";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ContainerStyle = styled.div`
    place-content: center;
    background-color: var(--container-bg);
    padding: 1.5rem 1.7rem;
    margin: 0.5rem;
    box-shadow: 0 10px 20px 5px var(--box-shadow);
`;

type FavoriteProps = {
    movie: MovieInfo;
} 

const FavoriteMovie = ({movie}: FavoriteProps) => {
    const {onToggle} = useContext(PropContext) as PropContextProps;

    return (
        <ContainerStyle>
            <MovieOverview movie={movie} />
            <button className="btn btn-favorite" onClick={() => onToggle(movie.id)}>Delete from favorites</button>
        </ContainerStyle>
    )
} 
export default FavoriteMovie;