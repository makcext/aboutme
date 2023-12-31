import Cookies from 'js-cookie';
import { makeAutoObservable } from "mobx";

interface Book {
  _id: string;
  title: string;
  author: string;
  year: number;
  // Add other properties if needed
}

class UserStore {
  isLoggedIn = Cookies.get('jwt') ? true : false;
  books: Book[] = [];

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

  changeIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
  
  //////books
  addBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(id: string) {
    this.books = this.books.filter(book => book._id !== id);
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


export const login = () => {
  // Call the login mutation and save the returned token to cookies
  // Return the token
  UserStore.prototype.logIn();
  userStore.isLoggedIn = Cookies.get('jwt') ? true : false;
  console.log('userStore.isLoggedIn', userStore.isLoggedIn);
}



export const logout = () => {
  // Clear the user data from the store
  Cookies.remove('jwt');
  UserStore.prototype.logOut();
  userStore.isLoggedIn = Cookies.get('jwt') ? true : false;
  // This will depend on how you're managing state in your store
};








export default userStore;




