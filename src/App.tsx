import React from 'react';
import "./App.css";
import { Box, CardContent, Typography } from "@mui/material";
import QRsvg from "./components/qrsvg";
import LoadSkeleton from "./components/container/index";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" style={{ padding: '8px', height: '10vmin', pointerEvents: 'none', animation: 'App-logo-spin infinite 50s linear' }}>
      <rect x="0" y="0" width="100" height="100" fill="transparent"  />
      <text x="50" y="60" fontSize="50" fill="#fff" textAnchor="middle">dev</text>
    </svg>
  );
}


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    //TODO: add custom colors

    // primary: {
    //   main: '#FEDBD0',
    // },
    // secondary: {
    //   main: 'rgba(255, 255, 255, 0.7)',
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />

       <div>
        <div style={{ display: 'flex',   justifyContent: 'center' }}>        
          <Logo />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>      

        <Typography variant="subtitle1" fontSize={24} component="div" gutterBottom>
          makcext front-end developer
        </Typography>

        <p>
          scan <code>&</code> save.
        </p>

        <p>
          react <code>|</code> material-ui <code>|</code> mobx <code>|</code> graphql
        </p>
  


     
        <Box maxWidth="lg" sx={{ minWidth: 300 }}>
        <CardContent>
        <Typography paddingBottom={2} variant="h4"
          sx={{
            background: 'linear-gradient(to bottom, #555, #999)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            overflow: 'hidden',
            // textOverflow: 'ellipsis',
            // display: '-webkit-box',
            // WebkitLineClamp: 5,
            // WebkitBoxOrient: 'vertical',
            position: 'relative',
            textAlign: 'justify',
          }}
        >    

        <QRsvg />
        {/* import svg qr-code */}

          It involves the implementation of designs and interactions that users see and interact with directly in their web browsers. 
          Frontend developers use a combination of programming languages, frameworks, and tools to build dynamic, responsive, and visually appealing web applications.
        </Typography>

      
        </CardContent>

        <LoadSkeleton />
          {/* <a href="https://t.me/makcext" target="_blank" rel="noopener noreferrer">
            connect
          </a> */}

        </Box>



        <Box maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between' }}>


        </Box>
        </div>
        <Typography paddingBottom={3} variant="subtitle2" textAlign={'right'} >0.0.1___</Typography>

      
    </div>
    
    </ThemeProvider>
  );
}

export default App;
