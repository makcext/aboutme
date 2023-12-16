import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
  mutation CreateBook($bookInput: BookInput!) {
    createBook(bookInput: $bookInput)
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($id: ID!) {
    deleteBook(ID: $id)
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    getBooks(limit: 10) {
      _id
      author
      title
      year
    }
  }
`;

export const GET_USER_BOOKS = gql`
  query GetUserBooks($userId: ID!) {
    getUserBooks(userId: $userId) {
      _id
      author
      title
      year
    }
  }
`;
