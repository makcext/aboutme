import React, { useState, ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

//mui imports
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Input } from "@mui/material";


interface BookInput {
  author: string;
  title: string;
  year: number | null | undefined; // Allow undefined
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
  });

  const [createBook] = useMutation(CREATE_BOOK);
  const [deleteBook] = useMutation(DELETE_BOOK);
  const { loading, error, data } = useQuery(GET_BOOKS);
  // const [bookData, setBookData] = useState({ getBooks: [] });

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  // 	const { name, value } = event.target;
  // 	const parsedValue = name === 'year' ? parseInt(value, 10) : value;
  // 	setBookInput({ ...bookInput, [name]: parsedValue });
  // };

  const handleAddBook = () => {
    createBook({
      variables: {
        bookInput: {
          author: bookInput.author,
          title: bookInput.title,
          year: bookInput.year ?? '',
        },
      },
      refetchQueries: [{ query: GET_BOOKS }],
    })
      .then(response => {
        console.log('Book added:', response.data.createBook);
        setBookInput({ author: '', title: '', year: null });
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.getBooks);

  return (
    <>
      <Box paddingTop={1} justifyContent="space-around" textAlign="left">
        <Paper elevation={4}>
          <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
            <ul>
              {data.getBooks.map((book: Book) => (
                <li key={book._id}>
                  {book.title} by {book.author} ({book.year})
                  <button onClick={() => handleDeleteBook(book._id)}>deleteBook</button>
                </li>
              ))}
            </ul>


            <TextField
              type="text"
              placeholder="Author"
              name="author"
              value={bookInput.author}
              onChange={handleInputChange}
              size="small"
            />
            <TextField
              type="text"
              placeholder="Title"
              name="title"
              value={bookInput.title}
              onChange={handleInputChange}
              size="small"
            />
            <TextField
              type="number"
              placeholder="Year"
              name="year"
              value={bookInput.year ?? ''} // Use an empty string if year is null
              onChange={handleInputChange}
              size="small"
            />
            <Button onClick={handleAddBook} size="small">Add Book</Button>

          </Paper>
        </Paper>
      </Box>
    </>
  );
};

export default AddBook;