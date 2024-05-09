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
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface BookCollectionDialogProps {
  open: boolean;
  onClose: () => void;
}

const BookCollectionDialog: React.FC<BookCollectionDialogProps> = ({
  open,
  onClose,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <DialogTitle>

      <Typography variant="body1" color="info.main" sx={{paddingLeft: 1}}>
          BookCollection Widget info
          </Typography>
      </DialogTitle>

      <DialogContent style={{ overflowX: "hidden", padding: 16 }}>
        
      <Typography component="h3" variant="h5">
      BookCollection Widget
      </Typography>

      <Typography variant="body1" gutterBottom={true}>

        The BookCollection widget is a React component for managing a user's book collection (add, delete, view).
        </Typography>

        <Typography component="h3" gutterBottom={true} variant="body2" color="warning.main">
        Tech Stack: React, Apollo Client (GraphQL), MobX, Material UI
        </Typography>

        <Typography variant="body1" gutterBottom={true} sx={{paddingLeft: 0}}>
        Key Features:
        </Typography>

        <Typography variant="body2" color={'primary.main'}>
        User authentication required for book management.
        </Typography>
        <Typography variant="body2" color={'primary.main'}>
        Fetches and displays user's book collection.
        </Typography>
        <Typography variant="body2" color={'primary.main'}>
        Offers functionality to add and delete books.
        </Typography>
        <Typography variant="body2" color={'primary.main'}>
        Usage: Import and use directly in JSX code (no props required).
        </Typography>




      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button variant="outlined" color="warning" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookCollectionDialog;
