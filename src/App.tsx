import Main from "./components/Main";
import FavoriteMovies from "./components/FavoriteMovies";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import Window from "./components/Window";
import Results from "./components/Results";

import { ChangeEvent, createContext, useMemo, useState } from "react";

import './index.css';
import { CssBaseline, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { Brightness4Rounded, Brightness7Rounded } from "@mui/icons-material";
import useFetchMovies from "./hooks/useFetchMovies";
import PropProvider from "./context/PropContext";

const ColorModeContext = createContext({toggleColorMode: () => {}});

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [query, setQuery] = useState("");
    const {movies} = useFetchMovies();


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

                        <PropProvider>
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
                        </PropProvider>
                    </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

                
export default App;