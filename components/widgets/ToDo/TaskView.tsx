"use client";
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { makeAutoObservable } from 'mobx';
import { Button, Checkbox, Grid, TextField, Box, Paper, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

class Task {
  id: number;
  title: string;
  done: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.done = false;
    makeAutoObservable(this);

  }

  updateTitle(title: string) {
    this.title = title;
  }

  toggleDone() {
    this.done = !this.done;
  }
}

enum FilterType {
  All = 'ALL',
  Done = 'DONE',
  NotDone = 'NOT_DONE'
}

class TaskStore {
  tasks: Task[] = [];

  filterType: FilterType = FilterType.All;

  constructor() {
    makeAutoObservable(this);
    this.addTask("develop");
    this.addTask("review code");
  }
  setFilterType(filterType: FilterType) {
    this.filterType = filterType;
  }

  addTask(title: string) {
    const id = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push(new Task(id, title));
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}

const taskStore = new TaskStore();

const TaskView: React.FC = observer(() => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value.trim());
  };

  const handleCreateTask = () => {
    if (newTaskTitle !== '') {
      taskStore.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const handleTaskCompletionToggle = (id: number) => {
    taskStore.tasks.find(task => task.id === id)?.toggleDone();
  };

  const handleRemoveTask = (id: number) => {
    taskStore.deleteTask(id);
  };

  const handleOpenDialog = (task: Task) => {
    setCurrentTask(task);
    setOpen(true);
  };
  const handleCloseDialog = () => setOpen(false);

  const handleUpdateTask = () => {
    if (currentTask) {
      const task = taskStore.tasks.find(task => task.id === currentTask.id);
      task?.updateTitle(currentTask.title);
    }
    setOpen(false);
  };

  const handleSetFilterType = (filterType: FilterType) => {
    taskStore.setFilterType(filterType);
  };

  let tasksToShow: Task[] = [];
  switch (taskStore.filterType) {
    case FilterType.All:
      tasksToShow = taskStore.tasks;
      break;
    case FilterType.Done:
      tasksToShow = taskStore.tasks.filter(task => task.done);
      break;
    case FilterType.NotDone:
      tasksToShow = taskStore.tasks.filter(task => !task.done);
      break;
  }

  return (
    <Box paddingTop={0} justifyContent="space-around" textAlign="left">
        <Paper elevation={4}>
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Todo List</Typography>
        </Grid>

        <Box padding={1}>

          <Grid container spacing={1}>

            <Grid item xs={10} md={10}>
              <TextField
                fullWidth
                label="New Task"
                value={newTaskTitle}
                onChange={handleTaskTitleChange}
                size='small'
              />
            </Grid>

            <Grid item xs={2} md={2} container justifyContent="flex-end">
              <IconButton onClick={handleCreateTask}>
                <AddIcon color="success" />
              </IconButton>
            </Grid>
          </Grid>

          <List>
            {tasksToShow.map(task => (
              <ListItem key={task.id}>
                <Checkbox
                  color='success'
                  checked={task.done}
                  onChange={() => handleTaskCompletionToggle(task.id)}
                  sx={{ padding: '0', mr: '8px'}}
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
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button variant="text" fullWidth size="small" color="info" onClick={() => handleSetFilterType(FilterType.All)}>All</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="text" fullWidth size="small" color="info" onClick={() => handleSetFilterType(FilterType.NotDone)}>Some</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="text" fullWidth size="small" color="info" onClick={() => handleSetFilterType(FilterType.Done)}>Done</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="title"
            type="text"
            fullWidth
            color='warning'
            size='small'
            value={currentTask ? currentTask.title : ''}
            onChange={(event) => setCurrentTask(new Task(currentTask?.id || 0, event.target.value))} />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color='warning' onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="outlined" color='warning' onClick={handleUpdateTask}>Submit</Button>
        </DialogActions>
      </Dialog>
</Paper>
    </Box>


  );



});

export default TaskView;