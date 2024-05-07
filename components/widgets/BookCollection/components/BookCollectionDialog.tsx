import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { List, ListItem } from "@mui/material";
import { Fullscreen } from "@mui/icons-material";

interface BookCollectionDialogProps {
  open: boolean;
  onClose: () => void;
}

const BookCollectionDialog: React.FC<BookCollectionDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullScreen={true}>
      <DialogTitle>
        <Typography variant="h5">BookCollection Widget Doc</Typography>
      </DialogTitle>

      <DialogContent  style={{ overflowX: "hidden", padding: 16}}>
        <Typography variant="body2">
          The <code>BookCollection</code> widget is a React component that
          manages a collection of books for authenticated users. It uses Apollo
          Client for GraphQL queries and mutations, MobX for state management,
          and Material UI for the user interface.
        </Typography>

        <Typography variant="h6">File Location</Typography>
        <Typography variant="body2">
          The <code>BookCollection</code> widget is located in{" "}
          <code>components/widgets/BookCollection/BookCollection.tsx</code>.
        </Typography>

        <Typography variant="h6">Imports</Typography>
        <Typography variant="body2">
          The component imports several hooks from React, Apollo Client, and
          MobX. It also imports various UI components from Material UI and other
          components defined in the same project, such as{" "}
          <code>BookCollectionDialog</code> and <code>BookList</code>.
        </Typography>

        <Typography variant="h6">Environment Variables</Typography>
        <Typography variant="body2">
          The component checks if the application is running in a development
          environment and, if so, loads development and error messages from
          Apollo Client.
        </Typography>

        <Typography variant="h6">Component State</Typography>
        <Typography variant="body2">
          The component uses React's <code>useState</code> and{" "}
          <code>useEffect</code> hooks to manage its state. It keeps track of
          the JWT token, the current book input, and whether the info dialog is
          open.
        </Typography>

        <Typography variant="h6">GraphQL Queries and Mutations</Typography>
        <Typography variant="body2">
          The component uses the <code>useQuery</code> hook from Apollo Client
          to fetch the current user's books and the <code>useMutation</code>{" "}
          hook to add and delete books. It also updates the Apollo Client cache
          after adding a book.
        </Typography>

        <Typography variant="h6">Event Handlers</Typography>
        <List>
          <ListItem>
            <Typography variant="body2">
              <code>handleAddBook</code>: Adds a new book using the current book
              input.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              <code>handleDeleteBook</code>: Deletes a book.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              <code>handleInputChange</code>: Updates the book input when the
              user types in a text field.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              <code>handleInfoIconClick</code>: Opens and closes the info
              dialog.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h6">Render Method</Typography>
        <Typography variant="body1">
          The component renders a form for adding a new book and a list of the
          current user's books. If the user is not logged in, it displays a
          warning message instead of the book list.
        </Typography>

        <Typography variant="h6">Related Components</Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              <code>BookCollectionDialog</code>: A dialog that provides
              documentation for the <code>BookCollection</code> component.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <code>BookList</code>: A list that displays the current user's
              books.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h6">Usage</Typography>
        <Typography variant="body1">
          To use the <code>BookCollection</code> widget, import it from its file
          location and use it as a React component in your JSX code. The
          component does not accept any props.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding:2 }}>
        <Button variant="outlined" color="warning" onClick={onClose} >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookCollectionDialog;
