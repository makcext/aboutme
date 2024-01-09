// hooks/useBooks.ts
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_BOOK, DELETE_BOOK, GET_USER_BOOKS } from '../GraphQLQueries';

export const useBooks = (userId: string) => {
  const { loading, error, data } = useQuery(GET_USER_BOOKS, {
    variables: { userId },
    skip: !userId,
  });

  const [createBook] = useMutation(CREATE_BOOK);
  const [deleteBook] = useMutation(DELETE_BOOK);

  return { loading, error, data, createBook, deleteBook };
};