// taskview.tsx

import React, { useState } from 'react';
import { createTask, getAllTasks, updateTaskCompletion } from './TaskController';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    <div>
      <h1>Todo List</h1>
      <div>
        <TextField
          label="New Task"
          value={newTaskTitle}
          onChange={handleTaskTitleChange}
        />
        <Button variant="contained" onClick={handleCreateTask}>
          Add Task
        </Button>
      </div>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleTaskCompletionToggle(task.id)}
            />
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskView;
