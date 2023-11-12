// taskview.tsx

import React, { useState } from 'react';
import { createTask, getAllTasks, updateTaskCompletion, removeTask, updateTask } from './TaskController';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


import { Task } from './TaskModel';

const TaskView: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getAllTasks());
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [editTaskTitle, setEditTaskTitle] = useState('');

  const handleClickOpen = (task: Task) => {
    setEditTaskId(task.id);
    setEditTaskTitle(task.title);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTaskTitle(event.target.value);
  };
  
  const handleUpdateTask = () => {
    if (editTaskId !== null) {
      updateTask(editTaskId, editTaskTitle);
      setTasks(getAllTasks());
      setOpen(false);
    }
  };

  const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const handleEditTask = (id: number) => {
    setEditTaskId(id);
  };

  const handleCreateTask = () => {
    if (newTaskTitle.trim() !== '') {
      createTask(newTaskTitle);
      setTasks(getAllTasks());
      setNewTaskTitle('');
    }
  };

  const handleTaskCompletionToggle = (id: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateTaskCompletion(id); // Update the completion status in the database
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    removeTask(id); // Remove the task from the database
  };


  return (
    <Box paddingBottom={0} justifyContent="space-around" >
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h4" >Todo List</Typography>

        <Box padding={1}>


          <Grid container spacing={2}  >
            <Grid item xs={8}>
              <TextField
                label="New Task"
                value={newTaskTitle}
                onChange={handleTaskTitleChange}
                size='small'
              />

            </Grid>
            <Grid item xs={4} >
              <Button variant="outlined" color='warning' onClick={handleCreateTask} >
                Add Task
              </Button>
            </Grid>
          </Grid>

          <List>
            {tasks.map(task => (
              <ListItem key={task.id}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleTaskCompletionToggle(task.id)}
                />
                <ListItemText
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                  primary={task.title}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleClickOpen(task)}>
                    <EditIcon color="warning" />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveTask(task.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the new title for the task.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Task Title"
              type="text"
              fullWidth
              value={editTaskTitle}
              onChange={handleEditTaskTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdateTask}>Submit</Button>
          </DialogActions>
        </Dialog>

        </Box>
      </Paper>

    </Box>


  );
};

export default TaskView;
