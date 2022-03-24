import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Switch as ThemeSwitch,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
    isDarkMode: boolean;
    isDrawerOpen: boolean;
}

const AppBarComponent: React.FC<Props> = ({
    handleDrawerToggle,
    onThemeChange,
    isDarkMode,
    isDrawerOpen,
}): JSX.Element => {
    return (
        <div>
            <AppBar position="static" variant="elevation">
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
						edge="start"
						sx={{mr: 2, ...(isDrawerOpen && {display: "none"})}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" component="div" sx={{flexGrow: 1}}>
                        My Trading App
					</Typography>
					{isDarkMode ? <DarkModeIcon /> : null}
                    <ThemeSwitch
                        size="small"
                        onChange={onThemeChange}
                        color="default"
                    />
                    {!isDarkMode ? <LightModeIcon /> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;
