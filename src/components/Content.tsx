import { useContext } from "react";
import { PropContext, PropContextProps } from "../context/PropContext";
import Results from "./search/Results";
import Window from "./shared/Window";
import ListMovie from "./moviesList/ListMovie";
import FavoriteMovies from "./favorites/FavoriteMovies";
import OpenDetail from "./modal/OpenDetail";
import MovieDetail from "./modal/MovieDetail";
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