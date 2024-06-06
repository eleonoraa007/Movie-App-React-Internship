import Main from "./components/Main";
import FavoriteMovies from "./components/FavoriteMovies";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import Window from "./components/Window";
import Results from "./components/Results";
import MovieInfo from "./interface/MovieInfo";

import useStorage from "./hooks/useStorage";
import useFetchMovies from "./hooks/useFetchMovies";

import { ChangeEvent, createContext, useMemo, useState } from "react";

import './index.css';
import { CssBaseline, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { Brightness4Rounded, Brightness7Rounded } from "@mui/icons-material";

const ColorModeContext = createContext({toggleColorMode: () => {}});
// const PropContext = createContext(null);

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const {movies} = useFetchMovies();

    const selectedMovie = movies.find((movie) => movie.id === selectedId) || null;

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.actors.find((actor) => actor.toLowerCase().includes(query.toLowerCase())) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.releaseDate.includes(query)
    );

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), [],);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode],);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const handleAddToFavorites = (movie: MovieInfo) => {
        setFavorites((favorites) => [...favorites, movie]);
    }

    const handleDeleteFromFavorites = (id: any) => {
        setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
    }

    const handleToggleSelectMovie = (id: any) => {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    return (
        <div className={`${mode}-mode`}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                        <NavBar>
                            <Search value={query} onQueryChange={handleSearch}/>
                            <div style={{position: "absolute", right: "20px"}}>
                                <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit" edge="end">
                                    {theme.palette.mode === 'dark' ? <Brightness7Rounded /> : <Brightness4Rounded />}
                                </IconButton>
                            </div>
                        </NavBar> 

                        {/* 2. */}
                        {/* <PropContext.Provider value={{
                            onSelect: handleToggleSelectMovie,
                            onToggle: handleDeleteFromFavorites
                        }}> */}
                        <Main selectedId={selectedId}>
                            <>
                                {query && filteredMovies.length > 0 ? (
                                    <Results filtered={filteredMovies} />
                                ) : (
                                    <>
                                        <Window text="Popular movies">
                                            <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                                        </Window>

                                        <Window text="Favorite movies">
                                            <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites} >Favorite movies</FavoriteMovies>  
                                        </Window>
                                        <OpenDetail onClose={handleCloseMovie} selectedId={selectedId}>
                                            <div className={`${mode}-mode`}>
                                                <MovieDetail onClose={handleCloseMovie} movieList={movies} movie={selectedMovie} selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                                            </div>
                                        </OpenDetail>

                                    </>
                                )}
                            </>
                        </Main>
                        {/* </PropContext.Provider> */}
                    </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

                
export default App;