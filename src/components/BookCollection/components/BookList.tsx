import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Book } from '../BookTypes';
import userStore from '../../../store/userStore';
import { useBooks } from '../hooks/useBooks';
import { useJwt } from '../hooks/useJwt';
import { observer } from 'mobx-react';



interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
}

export const BookList: React.FC<BookListProps> = observer(({ books, onDelete }) => {
  console.log(books);
  const userBooks = userStore.books;
  const userId = useJwt();

  const { loading, error, data, createBook, deleteBook } = useBooks(userId);
  console.log("from BookList",data);

  console.log(userBooks);
  return (
    <List>
      {books.map((book: Book) => (
        <ListItem key={book._id}>
          <ListItemText>
            <Typography variant="subtitle2">
              {book.title} by {book.author} ({book.year})
            </Typography>
          </ListItemText>

          <ListItemSecondaryAction>
            <IconButton onClick={() => onDelete(book._id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
});