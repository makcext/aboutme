import Cookies from 'js-cookie';
import { makeAutoObservable } from "mobx";

class UserStore {
  isLoggedIn = Cookies.get('jwt') ? true : false;

  constructor() {
    makeAutoObservable(this);
  }

  logIn() {
    this.isLoggedIn = true;
    // Cookies.set('jwt', 'token'); // Save the JWT to cookies
  }

  logOut() {
    this.isLoggedIn = false;
    Cookies.remove('jwt'); // Remove the JWT from cookies when logging out
  }
}

const userStore = new UserStore();

// Perform some operations on userStore here if needed

export const isLoggedIn = () => {
  const token = Cookies.get('jwt');
  return !!token;

};

// export const login = async (email: string, password: string) => {
//   // Call the login mutation and save the returned token to cookies
//   // Return the token
//   userStore.isLoggedIn = Cookies.get('jwt') ? true : false;
// }


export const logout = () => {
  // Clear the user data from the store
  Cookies.remove('jwt');
  userStore.logOut();
  userStore.isLoggedIn = Cookies.get('jwt') ? true : false;
  // This will depend on how you're managing state in your store
};

export default userStore;


