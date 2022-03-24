import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppBarComponent from "./components/Appbar/AppBarComponent";
import SideBar from "./components/sideBar/SideBar";
import Menu from "./components/Menu/Menu";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routes";
import { useNavigate } from "react-router-dom";
import { Blotter, Dashboard, Tradeticket } from "./features";

export const App: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
    const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);

    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
        typography: {
            fontSize: 14,
        },
    });

    const handleDrawerToggle = React.useCallback(() => {
        setSideBarToggle(!sideBarToggle);
    }, [sideBarToggle]);

    const onThemeChange = React.useCallback(() => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
    }, [themeMode]);

    const menuClickHandler = React.useCallback(
        (link) => {
            navigate(link);
            setSideBarToggle(!sideBarToggle);
        },
        [navigate, sideBarToggle]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarComponent
                onThemeChange={onThemeChange}
                handleDrawerToggle={handleDrawerToggle}
                isDarkMode={themeMode === "dark"}
                isDrawerOpen={sideBarToggle}
            />
            <SideBar
                isOpen={sideBarToggle}
                handleDrawerToggle={handleDrawerToggle}
                children={
                    <Menu links={ROUTES} menuClickHandler={menuClickHandler} />
                }
            />
            <Routes>
                <Route path={MAIN} element={<><Dashboard /></>} />
                <Route path={BLOTTER} element={<><Blotter /></>} />
                <Route path={TRADETICKET} element={<><Tradeticket /></>} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
