// taskview.tsx
import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Task } from './TaskModel';
import { createTask, getAllTasks, updateTaskCompletion, removeTask, updateTask } from './TaskController';

const TaskView: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getAllTasks());
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
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

  const handleUpdateTask = () => {
    if (currentTask?.title.trim() !== '') {
      updateTask(currentTask?.id || 0, currentTask?.title || '');
      setTasks(getAllTasks());
      setCurrentTask(null);
      setOpen(false);
    }
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    removeTask(id); // Remove the task from the database
  };

  const handleOpenDialog = (task: Task) => {
    setCurrentTask(task);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
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
                  <IconButton onClick={() => handleOpenDialog(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveTask(task.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Please enter the updated task title.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            label="title"
            type="text"
            fullWidth
            color='warning'
            size='small'
            value={currentTask ? currentTask.title : ''}
            onChange={(event) => setCurrentTask({ ...currentTask, id: currentTask?.id || 0, completed: currentTask?.completed || false, title: event.target.value })}          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color='warning' onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="outlined" color='warning' onClick={handleUpdateTask}>Submit</Button>
        </DialogActions>
      </Dialog>

    </Box>


  );
};

export default TaskView;