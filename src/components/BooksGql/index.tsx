import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Paper, Typography } from '@mui/material';

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

function Books() {
	const { loading, error, data } = useQuery<{ getBooks: Book[] }>(GET_BOOKS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

  return (
    <Paper style={{ padding: '16px', margin: '16px' }}>
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