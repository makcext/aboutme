import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

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
  Cookies.set('jwt', token, { expires: 7 }); // The token will expire after 7 days
}

const LoginForm = () => {
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
      // how to call saveTokenInCookie(data.register)
      saveTokenInCookie(data.register)
      console.log(data);
    } catch (error) {
      console.error(error);
    } console.log(registerData);

  };

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
		console.log(loginData);
    try {
      const { data } = await loginUser({ variables: loginData });
      console.log(data);
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

  // // Handle form submission
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   // Add logic for form submission
  // };

  // JSX
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <TextField name="email" value={loginData.email} onChange={handleLoginChange} placeholder="email" />
          <TextField name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" type="password" />
          <Button type="submit" >Login</Button>
        </form>
      </Grid>
      <Grid item xs>
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <TextField name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="email" />
          <TextField name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Password" type="password" />
          <Button type="submit">Register</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginForm;