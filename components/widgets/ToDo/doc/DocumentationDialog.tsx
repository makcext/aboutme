

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material";

interface DocumentationDialogProps {
	open: boolean;
	onClose: () => void;
}

const DocumentationDialog: React.FC<DocumentationDialogProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"ToDo documentation"}</DialogTitle>
			<DialogContent>
				<Typography variant='subtitle2'>









                TaskView.tsx
This file contains a React component TaskView that provides a user interface for managing tasks. It uses MobX for state management and Material-UI for the user interface components.
</Typography>
<Typography variant='subtitle2'>
Classes
TaskEntity
This class represents a task with the following properties:

taskId: a unique identifier for the task.
taskTitle: the title of the task.
taskStatus: a boolean indicating whether the task is completed.
It also includes methods to modify the task title and switch the task status.

TaskManagementStore
This class manages a list of tasks and provides methods to add and remove tasks. It also manages the current filter type for displaying tasks.
</Typography>
<Typography variant='subtitle2'>
Enum
TaskFilterType
This enum defines the possible filter types for displaying tasks: AllTasks, CompletedTasks, and IncompleteTasks.
</Typography>
<Typography variant='subtitle2'>
Component
TaskView
This is a functional React component that provides the user interface for managing tasks. It uses the TaskManagementStore for state management and Material-UI components for the user interface.

It includes the following features:

A text field for entering new tasks.
A button for adding new tasks.
A list of tasks, each with a checkbox for marking the task as completed, an edit button for modifying the task title, and a delete button for removing the task.
A dialog for editing the task title.
Buttons for filtering the displayed tasks by status.
</Typography>   

<Typography variant='subtitle2'>
Usage
Import the TaskView component and include it in your React application:
</Typography>

<Typography variant='subtitle2'>
  <pre>
    {`
import TaskView from './TaskView';

function App() {
  return (
    <div className="App">
      <TaskView />
    </div>
  );
}

export default App;
    `}
  </pre>
</Typography>


<Typography variant='subtitle2'>
This component does not accept any props. The state is managed internally using MobX.


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

export default DocumentationDialog;