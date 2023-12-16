import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material";

interface BookCollectionDialogProps {
	open: boolean;
	onClose: () => void;
}

const BookCollectionDialog: React.FC<BookCollectionDialogProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"Book collection info"}</DialogTitle>
			<DialogContent>
				<Typography variant='subtitle2'>
				This AuthBooks component is all about managing a collection of books for logged-in users.

It checks if you're logged in using a JWT token. If you are, it shows you a list of your books. You can add a new book to the list by filling in the author, title, and year fields and clicking the 'Add' button. You can also delete a book from the list by clicking the 'Delete' button next to it.

If you're not logged in, it shows a warning message and doesn't let you see or manage the book list.

There's also an 'Info' button that opens a dialog with more info about the book collection.				</Typography>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' color='warning' onClick={onClose} >
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default BookCollectionDialog;