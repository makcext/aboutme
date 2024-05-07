"use client";
import React, { useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import ThemeContext from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const theme = createTheme({

    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode ? { background: { default: '#1a101b' } } : {}),
    },




    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: 8,
    // palette: {
    //   mode: darkMode ? 'dark' : 'light',
    // },
  });

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [currentMediaQuery, setCurrentMediaQuery] = useState(() => {
    if (isSmScreen) {
      return "sm";
    } else if (isMdScreen) {
      return "md";
    } else if (isLgScreen) {
      return "lg";
    } else {
      return "";
    }
  });

  useEffect(() => {
    // console.log("Current media query:", currentMediaQuery);
  }, [currentMediaQuery]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (isSmScreen) {
      setCurrentMediaQuery("sm");
    } else if (isMdScreen) {
      setCurrentMediaQuery("md");
    } else if (isLgScreen) {
      setCurrentMediaQuery("lg");
    }
  }, [isSmScreen, isMdScreen, isLgScreen]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, currentMediaQuery }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;