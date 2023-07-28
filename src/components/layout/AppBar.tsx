import React from "react";


import { AppBar, Button, IconButton, Toolbar, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../svg/logosvg';

function ApplBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <IconButton aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid>
            <Logo />
          </Grid>
          <Grid>
            <Button color="warning" sx={{ textTransform: 'none' }}>v 0.0.2</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ApplBar;