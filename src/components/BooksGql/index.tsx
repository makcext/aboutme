import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Paper, Typography, Button } from '@mui/material';

interface Book {
  _id: string;
  author: string;
  title: string;
  year: number;
}

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

const CREATE_BOOK = gql`
  mutation CreateBook($input: BookInput!) {
    createBook(input: $input) {
      author
      title
      year
    }
  }
`;


function Books() {
  const { loading, error, data } = useQuery<{ getBooks: Book[] }>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleCreateClick = () => {
    // Handle create button click event here
  };

  const handleUpdateClick = () => {
    // Handle update button click event here
  };

  const handleDeleteClick = () => {
    // Handle delete button click event here
  };

  return (
    <Paper style={{ padding: '16px', margin: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5">Books</Typography>
        <div>
          <Button variant="contained" style={{ marginRight: '8px' }} onClick={handleCreateClick}>Create</Button>
          <Button variant="contained" style={{ marginRight: '8px' }} onClick={handleUpdateClick}>Update</Button>
          <Button variant="contained" style={{ marginRight: '8px' }} onClick={handleDeleteClick}>Delete</Button>
        </div>
      </div>
      {data?.getBooks.map(({ _id, author, title, year }) => (
        <div key={_id} style={{ marginBottom: '16px' }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{author}</Typography>
          <Typography variant="subtitle2">{year}</Typography>
        </div>
      ))}
    </Paper>
  );
}

export default Books;