import { useContext } from "react";
import { PropContext, PropContextProps } from "../context/PropContext";
import Results from "./Results";
import Window from "./Window";
import ListMovie from "./ListMovie";
import FavoriteMovies from "./FavoriteMovies";
import OpenDetail from "./OpenDetail";
import MovieDetail from "./MovieDetail";
import { ColorModeContext } from "../App";

const Content = () => {
    const {mode} = useContext(ColorModeContext);
    const {query, filtered} = useContext(PropContext) as PropContextProps;
    return (
        <>
            {query && filtered.length > 0 ? (
                <Results />
            ) : ( 
                <>
                    <Window text="Popular movies">
                        <ListMovie/>
                    </Window>

                    <Window text="Favorite movies">
                        <FavoriteMovies />
                    </Window>
                                        
                    <OpenDetail>
                        <div className={`${mode}-mode`}>
                            <MovieDetail/>
                        </div>
                    </OpenDetail>

                </>
            )}
        </>
    );
}
export default Content;