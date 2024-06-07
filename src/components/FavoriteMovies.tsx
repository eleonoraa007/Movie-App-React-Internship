import { useContext } from "react";
import FavoriteMovie from "./FavoriteMovie";
import { PropContext, PropContextProps } from "../context/PropContext";

type FavoritesProps = {
    children?: string | JSX.Element|JSX.Element[];
}

const FavoriteMovies = ({children}: FavoritesProps) => {
    const {favorites} = useContext(PropContext) as PropContextProps;

    return (
        <ul className="list list-favorite">
            
            {favorites?.map((movie) => (
                    <FavoriteMovie movie={movie} key={movie.id}/>
            ))}
        </ul>
    )
    
}
export default FavoriteMovies;