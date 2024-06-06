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

export interface PropContextProps {
    filtered: MovieInfo[];
    movies: MovieInfo[];
    onSelect: (id: any) => void;
    favorites: MovieInfo[];
    onToggle: (id: any) => void;
    onClose: () => void;
    selectedId: number | null;
    movie: MovieInfo | null;
    onAddToFavorites: (movie: MovieInfo) => void;
}

const ColorModeContext = createContext({toggleColorMode: () => {}});
export const PropContext = createContext<PropContextProps | undefined>(undefined);

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

                        <PropContext.Provider value={{
                            filtered: filteredMovies,
                            movies,
                            onSelect: handleToggleSelectMovie,
                            favorites,
                            onToggle: handleDeleteFromFavorites,
                            onClose: handleCloseMovie,
                            selectedId,
                            movie: selectedMovie,
                            onAddToFavorites: handleAddToFavorites
                        }}>
                        <Main>
                            <>
                                {query && filteredMovies.length > 0 ? (
                                    <Results />
                                ) : (
                                    <>
                                        <Window text="Popular movies">
                                            <ListMovie/>
                                        </Window>

                                        <Window text="Favorite movies">
                                            <FavoriteMovies>Favorite movies</FavoriteMovies>  
                                        </Window>
                                        <OpenDetail>
                                            <div className={`${mode}-mode`}>
                                                <MovieDetail/>
                                            </div>
                                        </OpenDetail>

                                    </>
                                )}
                            </>
                        </Main>
                        </PropContext.Provider>
                    </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

                
export default App;