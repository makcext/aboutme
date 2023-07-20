import React from 'react';
import { Alert, Box, Button, CardContent, Chip, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import QRsvg from './components/qrsvg';
import Logo from './components/logosvg';
import LoadSkeleton from './components/container/index';

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

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        <Logo />

        <Box maxWidth="lg" sx={{ minWidth: 300 }}>
          <Container sx={{ textAlign: 'justify', minHeight: 250 }}>
            <Typography variant="subtitle1" fontSize={24} sx={{ textAlign: 'center' }}>
              makcext front-end developer
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
              <QRsvg />
              

              It involves the implementation of designs and interactions that users see and interact with directly in
              their web browsers. Frontend developers use a combination of programming languages, frameworks, and tools
              to build dynamic, responsive, and visually appealing web applications.
            </Typography>

            <CardContent>
              <LoadSkeleton />
            </CardContent>
          </Container>
        </Box>

        <Typography paddingBottom={3} variant="subtitle2" sx={{ textAlign: 'right' }}>
          0.0.1___
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;