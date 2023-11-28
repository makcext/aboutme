import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import userStore from '../../store/userStore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const REGISTER_USER = gql`
  mutation Register($email: String!, $password: String!) {
    register(userInput: { email: $email, password: $password })
  }
`;

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(userInput: { email: $email, password: $password }) {
      token
    }
  }
`;



function saveTokenInCookie(token: string) {
  Cookies.set('jwt', token);
}

const isUserLoggedIn = () => {
  const token = Cookies.get('jwt');
  return !!token;
};

console.log(isUserLoggedIn());

const LoginForm = () => {

  useEffect(() => {
    Cookies.remove('jwt');
  }, []);
  // State for login form
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // State for registration form
  const [registerData, setRegisterData] = useState({ email: '', password: '' });

  const [registerUser] = useMutation(REGISTER_USER);
  const [loginUser] = useMutation(LOGIN_USER);

	const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ variables: registerData });
      saveTokenInCookie(data.register)
      console.log(data);
    } catch (error) {
      console.error(error);
    } console.log(registerData);

  };

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: loginData });
      console.log(data);
      if (data && data.login.token) {
        Cookies.set('jwt', data.login.token); // The token will expire after 7 days
        userStore.logIn(); // Update UserStore
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle input changes for login form
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle input changes for registration form
  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // JSX
  return (
    <Box paddingBottom={1} justifyContent="space-around" textAlign="left">
      {/* <Paper elevation={4}> */}
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between"></Grid>
    <Grid container spacing={2}>
      <Grid item xs>
        <Typography>Login</Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField size='small' name="email" value={loginData.email} onChange={handleLoginChange} placeholder="email" />
          <TextField size='small' name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" type="password" />
          <Button size='small' variant='outlined' color='warning' type="submit" >Login</Button>
        </form>
      </Grid>
      <Grid item xs>
      <Typography>Register</Typography>
        <form onSubmit={handleRegisterSubmit}>
          <TextField size='small' name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="email" />
          <TextField size='small' name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Password" type="password" />
          <Button size='small' variant='outlined' color='warning' type="submit">Register</Button>
        </form>
      </Grid>
    </Grid>
    
      </Paper>
      {/* </Paper> */}
    </Box>
  );
};

export default LoginForm;