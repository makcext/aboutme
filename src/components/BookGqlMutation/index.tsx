//index.tsx
import React, { useState, ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

//mui imports
import { Box, ListItem } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { List } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import LoginForm from '../authForm/index';


interface BookInput {
  author: string;
  title: string;
  year: number | null | undefined; // Allow undefined
  userId: string;
}

interface Book {
  // id: string;
  _id: any;
  author: string;
  title: string;
  year: number | null;
}

const CREATE_BOOK = gql`
	mutation CreateBook($bookInput: BookInput!) {
		createBook(bookInput: $bookInput)
	}
`;

const DELETE_BOOK = gql`
mutation Mutation($id: ID!) {
  deleteBook(ID: $id)
}
`;

const GET_BOOKS = gql`
  query GetBooks {
  getBooks(limit: 10) {
    _id
    author
    title
    year
  }
  }
`;

const AddBook = () => {
  
  const [bookInput, setBookInput] = useState<BookInput>({
    author: '',
    title: '',
    year: undefined, // Changed from null to undefined
    userId: '',
  });

  const [createBook] = useMutation(CREATE_BOOK);

  
  const [deleteBook] = useMutation(DELETE_BOOK);
  const { loading, error, data } = useQuery(GET_BOOKS);

  const handleAddBook = () => {
    const userId = '6558cd6d7071bf798487fce0'; // Implement this function to extract userId from token
  
    createBook({
      variables: {
        bookInput: {
          author: bookInput.author,
          title: bookInput.title,
          year: bookInput.year ?? '',
          userId: userId,
        },
      },
      refetchQueries: [{ query: GET_BOOKS }],
    })
    .then(response => {
      console.log('Book added:', response.data.createBook);
      setBookInput({ author: '', title: '', year: null, userId: '' });
    })
    .catch(error => console.error('Error adding book:', error));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsedValue = name === 'year' ? parseInt(value || '0', 10) : value;
    setBookInput({ ...bookInput, [name]: parsedValue });
  };

  const handleDeleteBook = (id: any) => {
    deleteBook({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    })
      .then(response => {
        console.log('Book deleted:', response.data.deleteBook);
      })
      .catch(error => console.error('Error deleting book:', error));
  };


  // Add this state variable at the top of your component
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Add this function to handle the click event of the InfoOutlinedIcon
  const handleInfoIconClick = () => {
    setInfoDialogOpen(prevState => !prevState);
  };




  console.log(data.getBooks);



  return (

    <Box paddingTop={0} justifyContent="space-around" textAlign="left">
      {/* <Paper elevation={4}> */}
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Book graphQL mongo db</Typography>
          <InfoOutlinedIcon color='success' onClick={handleInfoIconClick} />

          <Dialog
          open={infoDialogOpen}
          onClose={handleInfoIconClick}
        >
          <DialogTitle>{"Book graphQL mongo db"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant='subtitle2'>
                The Book graphQL mongo db React component is a CRUD interface for interacting with a GraphQL book database. It allows users to add new books, view existing books, and delete books. The component uses Apollo Client's useMutation and useQuery hooks to interact with the server, and it uses Material UI for its UI components.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' color='warning' onClick={handleInfoIconClick} >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <LoginForm />

        </Grid>
        <Box padding={1}>
          <Grid container spacing={2} >
            <Grid item xs>
              <TextField
                type="text"
                placeholder="Author"
                name="author"
                value={bookInput.author}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
            <Grid item xs>
              <TextField
                type="text"
                placeholder="Title"
                name="title"
                value={bookInput.title}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
            <Grid item xs>
              <TextField
                type="number"
                placeholder="Year"
                name="year"
                value={bookInput.year ?? ''}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
            <Grid item>
              <IconButton onClick={handleAddBook}>
                <AddIcon color="success" />
              </IconButton>
            </Grid>
          </Grid>



          <List>
            {data.getBooks.map((book: Book) => (
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




        </Box>
      </Paper>
      {/* </Paper> */}
    </Box>

  );
};

export default AddBook;