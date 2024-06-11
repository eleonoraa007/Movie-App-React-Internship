import { useContext } from "react";
import MovieInfo from "../../interface/MovieInfo";
import MovieOverview from "../shared/MovieOverview";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ContainerStyle = styled.div`
  place-content: center;
  background-color: var(--container-bg);
  padding: 1.3rem 1.7rem;
  margin: 0.5rem;
  box-shadow: 0 10px 20px 5px var(--box-shadow);
`;

type MovieProps = {
    movie: MovieInfo;
}

const Movie = ({movie}: MovieProps) => {
    const {onSelect} = useContext(PropContext) as PropContextProps;

    return ( 
        <ContainerStyle onClick={() => onSelect(movie.id)}>
            <MovieOverview movie={movie}/>
        </ContainerStyle>
                

    );
}
export default Movie;