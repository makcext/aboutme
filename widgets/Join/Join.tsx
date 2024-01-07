"use client";
// Import React and MobX
import React from 'react';
import { observer } from 'mobx-react';

// Import store and services
import userStore from '../../components/Store/userStore';
import { logout } from '../../components/Store/userStore';
import { useRegister, useLogin } from './authService';

// Import Material UI components
import {TransitionProps} from '@mui/material/transitions';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Box, Divider, Typography, 
  useMediaQuery, TextField, Grid, useTheme
} from '@mui/material';


// // Define Transition component
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Define JoinDialogSlide component
const JoinDialogSlide = observer(() => {
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const buttonSize = isMobile ? 'small' : 'medium';
  const [userLogin, setUserLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useLogin();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async () => {
    const response = await login(userLogin, password);
    if (response.status === 'ok') {
      userStore.logIn();
    }
    handleClose();
  };

  const handleLogout = () => logout();

  return (
    <>
      {userStore.isLoggedIn ? (
        <Button variant="text" size="small" color="warning" onClick={handleLogout}>Logout</Button>
      ) : (
        <Button variant="text" color="success" onClick={handleClickOpen}>Join</Button>
      )}

      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogTitle>Join</DialogTitle>
        <DialogContent>
          <Box paddingBottom={2}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  placeholder='login'
                  size='small'
                  color='warning'
                  value={userLogin}
                  onChange={(e) => setUserLogin(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  placeholder='password'
                  size='small'
                  color='warning'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Typography variant="subtitle2" padding={1}>USE [admin : admin] OR [demo : demo]</Typography>
        </DialogContent>
        <DialogActions>
          <Button disabled size='small' color="success" variant='outlined' onClick={handleLogin}>Register</Button>
          <Button size='small' color="success" variant='outlined' onClick={handleLogin}>ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default JoinDialogSlide;