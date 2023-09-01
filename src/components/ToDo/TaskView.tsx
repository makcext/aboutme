// taskview.tsx

import React, { useState } from 'react';
import { createTask, getAllTasks, updateTaskCompletion, removeTask } from './TaskController';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
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

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    removeTask(id); // Remove the task from the database
  };


  return (
    <>
      <Box paddingBottom={2} justifyContent="space-around" textAlign="left">
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>

        <Typography variant="h3" >Todo List</Typography>
        
        <Grid  container spacing={1} style={{ paddingTop: '8px' }}>
          <Grid item xs={6}>
          <TextField
            label="New Task"
            value={newTaskTitle}
            onChange={handleTaskTitleChange}
            size = 'small'
          />
          </Grid>
          <Grid item xs={6}>
          <Button variant="outlined" color='warning' onClick={handleCreateTask}>
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
      <IconButton onClick={() => handleRemoveTask(task.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))}
  </List>
        </Paper>
    
      </Box>

    </>
  );
};

export default TaskView;
