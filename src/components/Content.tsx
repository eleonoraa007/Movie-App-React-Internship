import { useContext } from "react";
import { PropContext, PropContextProps } from "../context/PropContext";
import Results from "./search/Results";
import Window from "./shared/Window";
import MovieList from "./movies/MovieList";
import FavoriteList from "./favorites/FavoriteList";
import OpenModal from "./modal/OpenModal";
import ModalDetail from "./modal/ModalDetail";
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
                        <MovieList/>
                    </Window>

                    <Window text="Favorite movies">
                        <FavoriteList />
                    </Window>
                                        
                    <OpenModal>
                        <div className={`${mode}-mode`}>
                            <ModalDetail/>
                        </div>
                    </OpenModal>

                </>
            )}
        </>
    );
}
export default Content;