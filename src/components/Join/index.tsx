import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import { register, login } from './authService';
import { useRegister, useLogin } from './authService';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie';
import { observer } from 'mobx-react';

import userStore, { isLoggedIn } from '../../store/userStore';
import { logout } from '../../store/userStore';
import { login } from '../../store/userStore';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AlertDialogSlide = observer(() => {
  const [open, setOpen] = React.useState(false);

  //TO-DO: make this global for every component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const buttonSize = isMobile ? 'small' : 'medium';

  // State for the login and password
  const [userLogin, setUserLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { login } = useLogin();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleLogin = async () => {
    const response = await login(userLogin, password);
    if (response.status === 'ok') { // replace this with your actual condition for successful login
      userStore.logIn(); // update the isLoggedIn state in userStore
    }
    handleClose();
  };

  const handleLogout = () => {
    logout();
  };

console.log('userStore.isLoggedIn', userStore.isLoggedIn);
  return (
    <>

      {userStore.isLoggedIn ? (
        <Button variant="text" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button variant="text" color="success" onClick={handleClickOpen}>
          - Join -
        </Button>
      )}


      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
      >
        <DialogTitle>{"Join"}</DialogTitle>
        <DialogContent>

          <TextField
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />

          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <Divider />

          <Typography variant="subtitle2" padding={1}>USE [admin : admin] OR [demo : demo] </Typography>
        </DialogContent>
        <DialogActions>
          <Button size={buttonSize} color="success" variant='outlined' onClick={handleLogin}>Register</Button>
          <Button size={buttonSize} variant='outlined' onClick={handleLogin}>ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );

});

export default AlertDialogSlide;