import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

import { createContext, useMemo, useState } from "react";

import './index.css';
import { CssBaseline, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { Brightness4Rounded, Brightness7Rounded } from "@mui/icons-material";
import Content from "./components/Content";
import PropProvider from "./context/PropContext";

export const ColorModeContext = createContext({mode: "light", toggleColorMode: () => {}});

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), [mode],);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode],);


    return (
        <div className={`${mode}-mode`}>
            <PropProvider>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                            <NavBar>
                                <Search />
                                <div style={{position: "absolute", right: "20px"}}>
                                    <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit" edge="end">
                                        {theme.palette.mode === 'dark' ? <Brightness7Rounded /> : <Brightness4Rounded />}
                                    </IconButton>
                                </div>
                            </NavBar> 
                            <Main>
                                <Content/>
                            </Main>
                        </ThemeProvider>
                </ColorModeContext.Provider>
            </PropProvider>
        </div>
    )
}

                
export default App;