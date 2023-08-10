import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";


import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './layout/index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    //TODO: add custom colors
    warning: {
      main: '#ff9800',
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
});



function App() {

  const theme = useTheme();
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
    console.log("Current media query:", currentMediaQuery);
  }, [currentMediaQuery]);

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px' }}>
        <Layout />
      </div>       
    </ThemeProvider>
  );
}

export default App;