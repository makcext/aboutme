import React, { useState, useEffect, ChangeEvent } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import userStore from '../../store/userStore';
import { observer } from 'mobx-react';
import {
  Alert, Box, ListItem, Paper, TextField, List, Typography, IconButton,
  Grid, Button, Dialog, DialogTitle, DialogContent,
  DialogActions, ListItemText, ListItemSecondaryAction
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CREATE_BOOK, DELETE_BOOK, GET_BOOKS, GET_USER_BOOKS } from './GraphQLQueries';
import { BookInput, Book } from './BookTypes';
import BookCollectionDialog from '../BookCollection/components/BookCollectionDialog';

const AuthBooks = observer(() => {

  const jwt = Cookies.get('jwt');

  useEffect(() => {
    if (jwt) {
      userStore.logIn();
    } else {
      userStore.logOut();
    }
  }, [jwt]);

  useEffect(() => {
    if (!userStore.isLoggedIn) {
      setBookInput({
        author: '',
        title: '',
        year: undefined,
        userId: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.isLoggedIn]);

  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const [bookInput, setBookInput] = useState<BookInput>({
    author: '',
    title: '',
    year: undefined, // Changed from null to undefined
    userId: '',
  });

  const [addBook] = useMutation(CREATE_BOOK, {
    update(cache, { data: { createBook } }) {
      const existingBooks: any = cache.readQuery({ query: GET_USER_BOOKS, variables: { userId: userId } });
      cache.writeQuery({
        query: GET_USER_BOOKS,
        variables: { userId: userId },
        data: { getUserBooks: [...existingBooks.getUserBooks, createBook] },
      });
    },
  });


  const [deleteBook] = useMutation(DELETE_BOOK);

  const token = Cookies.get('jwt');
  let userId = '';
  let userLoggedIn = false;

  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      if (decodedToken) {
        userId = decodedToken.userId; // Extract userId from the decoded token
        userLoggedIn = true;
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const [jwtToken, setJwtToken] = useState(Cookies.get('jwt'));
  useEffect(() => {
    setJwtToken(Cookies.get('jwt'));
  }, [jwtToken]);


  const { loading: loadingU, error: errorU, data: dataU } = useQuery(GET_USER_BOOKS, {
    variables: { userId: userId },
    skip: !userLoggedIn, // Skip the query if the user is not logged in
  });
  if (loadingU) return <Typography>Loading...</Typography>;
  if (errorU) return <Typography>Please login & restart page</Typography>;

  const handleAddBook = () => {
    const id = userId; // Implement this function to extract userId from token
    addBook({
      variables: {
        bookInput: {
          author: bookInput.author,
          title: bookInput.title,
          year: bookInput.year ?? '',
          userId: id,
        },
      },
      refetchQueries: [{ query: GET_USER_BOOKS }],
    })
      .then(response => {
        console.log('Book added:', response.data.createBook);
        setBookInput({ author: '', title: '', year: null, userId: '' });
      })
      .catch(error => console.error('Error adding book:', error));
  };

  const handleDeleteBook = (id: string) => {
    deleteBook({
      variables: { id },
      refetchQueries: [{ query: GET_USER_BOOKS, variables: { userId: userId } }],
    })
      .then(response => {
        console.log('Book deleted:', response.data.deleteBook);
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsedValue = name === 'year' ? parseInt(value || '0', 10) : value;
    setBookInput({ ...bookInput, [name]: parsedValue });
  };

  // const handleDeleteBook = (id: any) => {
  //   deleteBook({
  //     variables: {
  //       id: id,
  //     },
  //     refetchQueries: [{ query: GET_USER_BOOKS, variables: { userId: userId } }],
  //   })
  //     .then(response => {
  //       console.log('Book deleted:', response.data.deleteBook);
  //     })
  //     .catch(error => console.error('Error deleting book:', error));
  // };

  // Add this function to handle the click event of the InfoOutlinedIcon
  const handleInfoIconClick = () => {
    setInfoDialogOpen(prevState => !prevState);
  };

  const fields = [
    { type: "text", placeholder: "Author", name: "author", value: bookInput.author },
    { type: "text", placeholder: "Title", name: "title", value: bookInput.title },
    { type: "number", placeholder: "Year", name: "year", value: bookInput.year ?? '' },
  ];




  return (

    <Box paddingTop={0} justifyContent="space-around" textAlign="left">
      {/* <Paper elevation={4}> */}
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Books collection</Typography>
          <InfoOutlinedIcon color='success' onClick={handleInfoIconClick} />

          <BookCollectionDialog open={infoDialogOpen} onClose={handleInfoIconClick} />


        </Grid>

        <Box padding={1}>
          <Grid container spacing={2} paddingBottom={2}>
            {fields.map(field => (
              <Grid item xs key={field.name}>
                <TextField
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={field.value}
                  onChange={handleInputChange}
                  size="small"
                />
              </Grid>
            ))}
            <Grid item>
              <IconButton onClick={handleAddBook}>
                <AddIcon color="success" />
              </IconButton>
            </Grid>
          </Grid>

          {userStore.isLoggedIn ? (
            <List>
              {dataU && dataU.getUserBooks.map((book: Book) => (
                <ListItem key={book._id}>
                  <ListItemText>
                    <Typography variant="subtitle2">
                      {book.title} by {book.author} ({book.year})
                    </Typography>
                  </ListItemText>

                  <ListItemSecondaryAction>
                    <IconButton onClick={() => handleDeleteBook(book._id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          ) : (

            <Alert severity="warning">please login to view list</Alert>

          )}


        </Box>
      </Paper>
    </Box>

  );
});

export default AuthBooks;
