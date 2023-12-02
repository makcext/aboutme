import Cookies from 'js-cookie';
import { makeAutoObservable } from "mobx";

class UserStore {
  isLoggedIn = Cookies.get('jwt') ? true : false;

  constructor() {
    makeAutoObservable(this);
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
    Cookies.remove('jwt'); // Remove the JWT from cookies when logging out
  }
}

const userStore = new UserStore();

// Perform some operations on userStore here if needed

export default userStore;