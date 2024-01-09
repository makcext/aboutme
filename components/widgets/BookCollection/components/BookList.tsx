import React from 'react';
import { List, ListItem, ListItemText, Typography, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Book } from '../BookTypes'; // Assuming Book type is in Book.ts file

interface BookListProps {
  dataU: any; // Replace with the actual type
  handleDeleteBook: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ dataU, handleDeleteBook }) => (
  <>
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
  </>
);

export default BookList;