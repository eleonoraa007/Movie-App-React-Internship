import { useContext } from "react";
import Favorite from "./Favorite";
import { PropContext, PropContextProps } from "../../context/PropContext";

const FavoriteList = () => {
    const {favorites} = useContext(PropContext) as PropContextProps;

    return (
        <ul className="list list-favorite">
            
            {favorites?.map((movie) => (
                    <Favorite movie={movie} key={movie.id}/>
            ))}
        </ul>
    )
    
}
export default FavoriteList;