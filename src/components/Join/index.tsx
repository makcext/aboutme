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

import userStore, { isLoggedIn} from '../../store/userStore';
import { logout } from '../../store/userStore';

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

    // State for the login and password
    const [userLogin, setUserLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

  const [isRegistering, setIsRegistering] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn());
  const [buttonText, setButtonText] = React.useState(isLoggedIn() ? 'Logout' : 'Join');
  //logir register hooks
  const { register } = useRegister();
  const { login } = useLogin();

  //TO-DO: make this global for every component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const buttonSize = isMobile ? 'small' : 'medium';

  const handleRegister = async () => {
    if (isRegistering) {
      // Call the register function with the user's inputted login and password
      const data = await register(userLogin, password);
      console.log(data);
      handleClose();
      setIsRegistering(false);
    }
  };


  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);






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

  const handleLogout = () => {
    // Remove the user's token from storage
    // Cookies.remove('jwt');\
    logout();
    // Update state to reflect that user is no longer logged in
    // This will depend on how you're managing state in your app
  };


  const handleLoginLogout = () => {
    if (isLoggedIn()) {
      handleLogout();
      setButtonText(isLoggedIn() ?  'Join' : 'Logout');
      console.log(buttonText);
    } else {
      handleClickOpen();
    }
  };

  return (
    <>


{userStore.isLoggedIn ? (
  <Button variant="text" color="secondary" onClick={handleLogout} style={{ cursor: "pointer" }}>
    - Logout -
  </Button>
) : (
  <Button variant="text" color="success" onClick={handleClickOpen} style={{ cursor: "pointer" }}>
    - Join -
  </Button>
)}

{/* <Button variant="text" color="secondary" onClick={handleLoginLogout} style={{ cursor: "pointer" }}>
          {buttonText}
        </Button> */}




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
        <Button size={buttonSize} color="success" variant='outlined' onClick={() => setIsRegistering(true)}>Register</Button>
        <Button size={buttonSize} variant='outlined' onClick={isRegistering ? handleRegister : handleLogin}>ok</Button>
      </DialogActions>
      </Dialog>
    </>
  );
    
    });

      export default AlertDialogSlide;