"use client"
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Grid, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ThemeContext from './ThemeContext'; // Import the ThemeContext
import StarRateIcon from '@mui/icons-material/StarRate';
import styled from '@mui/material/styles/styled';

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Use the useContext hook

  const RotatingStarIcon = styled(StarRateIcon)({
    fontSize: '2rem',
    animation: 'rotation 30s infinite linear',
    '@keyframes rotation': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  });




  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="error" aria-label="star">
            <RotatingStarIcon />         
              </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" aria-label="login">
              <AccountCircleIcon />
            </IconButton>
            {/* <IconButton color="inherit" aria-label="toggle theme" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;