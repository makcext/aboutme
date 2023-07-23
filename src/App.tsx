import React from 'react';
import { Box, CardContent, Chip, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import QRsvg from './components/svg/qrsvg';
import Logo from './components/svg/logosvg';
import LoadSkeleton from './components/Skeleton/index';
import PaperMid from './components/paper/index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    //TODO: add custom colors
    warning: {
      main: '#ff9800',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<Logo  />

</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        

        <Box maxWidth="lg" sx={{ minWidth: 300 }}>
          <Container sx={{ textAlign: 'justify', minHeight: 250 }}>
            <Typography variant="subtitle1" fontSize={24} sx={{ textAlign: 'center' }}>
              const front-end developer
            </Typography>

            <Box display="flex" justifyContent="center">
              <Chip label="react | material | mobx | graphql" variant="outlined" color="warning" />
            </Box>

            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              scan <code>&amp;</code> go.
            </Typography>
            <QRsvg />

            <Typography variant="h5"
              sx={{
                background: 'linear-gradient(to bottom, #555, #999)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                overflow: 'hidden',
              }}
            >
              {/* <QRsvg /> */}
              

              It involves the implementation of designs and interactions that users see and interact with directly in
              their web browsers. Frontend developers use a combination of programming languages, frameworks, and tools
              to build dynamic, responsive, and visually appealing web applications.
            </Typography>

            <CardContent>
              <LoadSkeleton />
            </CardContent>
          </Container>
        </Box>


        
      </div>
      <div style={{ display: 'flex', gap: '16px', justifyContent:'center'}}>
      <PaperMid />
      <PaperMid />
      {/* <PaperMid /> */}

      </div>







      <Typography paddingBottom={3} variant="subtitle2" sx={{ textAlign: 'right' }}>
          0.0.1___
        </Typography>
    </ThemeProvider>
  );
}

export default App;