import React from "react";


import { AppBar, Button, IconButton, Toolbar, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../components/svg/logosvg';


const appBarItems = [
  { id: 1, component: <MenuIcon />, },
  { id: 2, component: <div><Logo /></div> },
  { id: 3, component: <Button color="warning" sx={{ textTransform: 'none' }}>v 0.0.3(b)</Button> },
];


function ApplBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={0} justifyContent="space-between" alignItems="center">
          {appBarItems.map(item => (
            <Grid item key={item.id}>
              {item.id === 1 ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {item.component}
                </IconButton>
              ) : (
                item.component
              )}
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ApplBar;