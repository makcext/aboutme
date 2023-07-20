import React from 'react';
import { Box, CardContent, Typography } from "@mui/material";
import QRsvg from "./components/qrsvg";
import Logo from "./components/logosvg";
import LoadSkeleton from "./components/container/index";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    //TODO: add custom colors
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

        <Typography variant="body1">
          scan <code>&amp;</code> save.
        </Typography>

        <Typography variant="body1">
          react <code>|</code> material-ui <code>|</code> mobx <code>|</code> graphql
        </Typography>
     
        <Box maxWidth="lg" sx={{ minWidth: 300 }}>
        <CardContent>
        <Typography paddingBottom={0} variant="h4"
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

        <CardContent>
          <LoadSkeleton />
        </CardContent>
        </Box>

        </div>
        <Typography paddingBottom={3} variant="subtitle2" textAlign={'right'} >0.0.1___</Typography>

      
    </div>
    
    </ThemeProvider>
  );
}

export default App;
