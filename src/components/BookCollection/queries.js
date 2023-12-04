// Ваш GraphQL-запрос (например, в файле queries.js)
import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
  mutation CreateBook($bookInput: BookInput!) {
    createBook(bookInput: $bookInput)
  }
`;