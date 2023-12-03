// authService.ts
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import userStore from '../../store/userStore'; 

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

export const useRegister = () => {
  const [registerUser, { data, error }] = useMutation(REGISTER_USER);

  const register = async (email: string, password: string) => {
    try {
      const response = await registerUser({ variables: { email, password } });
      Cookies.set('jwt', response.data.register);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  return { register, data, error };
};

export const useLogin = () => {
  const [loginUser, { data, error }] = useMutation(LOGIN_USER);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser({ variables: { email, password } });
      if (response.data && response.data.login.token) {
        Cookies.set('jwt', response.data.login.token);
        console.log(response.data);
        userStore.logIn(); // update the isLoggedIn state in userStore
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { login, data, error };
};