import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material";

interface BookCollectionDialogProps {
	open: boolean;
	onClose: () => void;
}

const BookCollectionDialog: React.FC<BookCollectionDialogProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"Book graphQL mongo db"}</DialogTitle>
			<DialogContent>
				<Typography variant='subtitle2'>
					The Book graphQL mongo db React component is a CRUD interface for interacting with a GraphQL book database. It allows users to add new books, view existing books, and delete books. The component uses Apollo Client's useMutation and useQuery hooks to interact with the server, and it uses Material UI for its UI components.
				</Typography>
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