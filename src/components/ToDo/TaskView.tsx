// taskview.tsx

import React, { useState } from 'react';
import { createTask, getAllTasks, updateTaskCompletion } from './TaskController';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


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
    // debugger; 
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
    updateTaskCompletion(id); // Update the completion status in the database
  };

  return (
    <>
        <Box paddingBottom={2} justifyContent="space-around" textAlign="left">
      <Paper elevation={4}>
        <Paper variant="outlined" sx={{ borderColor: 'gray' }}>
      <h1>Todo List</h1>
      <>
      <Grid container spacing={1}>
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
      </>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Checkbox color='warning'
              checked={task.completed}
              onChange={() => handleTaskCompletionToggle(task.id)}
            />
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
      </Paper>
      </Paper>
    
      </Box>







    </>
  );
};

export default TaskView;
