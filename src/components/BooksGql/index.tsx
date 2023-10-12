import React from 'react';
import { useQuery, gql } from '@apollo/client';

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
		<div>
			{data?.getBooks.map(({ _id, author, title, year }) => (
				<div key={_id}>
					<p>{author}</p>
					<p>{title}</p>
					<p>{year}</p>
				</div>
			))}
		</div>
	);
}

export default Books;