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
// import { useMutation } from '@apollo/client';
// import { register, login } from './authService';
import { useRegister, useLogin } from './authService';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

    // State for the login and password
    const [userLogin, setUserLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

  //logir register hooks
  const { register } = useRegister();
  const { login } = useLogin();

  //TO-DO: make this global for every component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const buttonSize = isMobile ? 'small' : 'medium';

  const handleRegister = async () => {
    // Call the register function with the email and password
    const data = await register('email@example.com', 'password');
    console.log(data);
  };

  const handleLogin = async () => {
    // Call the login function with the email and password
    const data = await login(userLogin, password);
    console.log(data);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <Button variant="text" color="success" onClick={handleClickOpen} style={{ cursor: "pointer" }}>
        - Join -
      </Button>
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
        <DialogActions 
        >
          <Button size={buttonSize} color="success" variant='outlined' onClick={handleClose}>Register</Button>
          <Button size={buttonSize} variant='outlined' onClick={handleLogin}>ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}