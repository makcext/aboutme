"use client"
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Grid, IconButton, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ThemeContext from '../../ThemeContext'; // Import the ThemeContext
import StarRateIcon from '@mui/icons-material/StarRate';
import styled from '@mui/material/styles/styled';
import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// import DrawerMenu from './DrawerMenu';

const NAV_ITEMS = [
  { name: 'Home', route: '/' },
  { name: 'Projects', route: '/1/Projects' },
  { name: 'Services', route: '/1/Services' },
  { name: 'Contact', route: '/1/Contact' },
  { name: 'About', route: '/1/AboutUs' },
];





const NavBar = () => {
  const theme = useTheme(); // Add this line
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Use the useContext hook
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the Drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  const RotatingStarIcon = styled(StarRateIcon)({
    fontSize: '2rem',
    animation: 'rotation 30s infinite linear',
    '@keyframes rotation': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  });

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ padding: '20px' }} // Add padding here
    >
      <List>
        {NAV_ITEMS.map((item, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: '0 1 0' }}
            {...(true ? { timeout: 1000 } : {})}
            key={`${item.name}-${index}`} // Add key prop here
          >
            <ListItem button style={{ justifyContent: 'center' }}>
              <Link color='primary' href={item.route} style={{ textDecoration: 'none' }}>
                <ListItemText primary={
                  <Typography variant='body1' color={''} align='center'>
                    {item.name}
                  </Typography>
                } />
              </Link>
            </ListItem>
          </Grow>
        ))}
      </List>
    </div>
  );




  return (
    <>
    			<Box paddingBottom={8} sx={{ display: 'flex' }} maxWidth={'lg'}>

      <CssBaseline />
<AppBar position="static" color="inherit" style={{ backgroundColor: theme.palette.navbar.default }}>
       <Container maxWidth="lg" sx={{ pb: 0 }} >
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>

                <Drawer 
                  elevation={2} 
                  anchor="left" 
                  open={drawerOpen} 
                  onClose={toggleDrawer(false)}
                  PaperProps={{ style: { width: '55vw' } }} // Set the width here
                >
                  <Box p={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton color="error" aria-label="star">
                      <RotatingStarIcon />
                    </IconButton>
                  </Box>

                  {list()}
                </Drawer>



              </Grid>
              <Grid item>
                <IconButton color="error" aria-label="star">
                  <RotatingStarIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" aria-label="toggle theme" onClick={toggleDarkMode}>
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
      {/* <nav>
          <DrawerMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} list={list} />
  
        </nav> */}
    </>
  );
};

export default NavBar;