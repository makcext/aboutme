"use client";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Box,
  Paper,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DocumentationDialog from "./doc/DocumentationDialog";

class TaskEntity {
  taskId: number;
  taskTitle: string;
  taskStatus: boolean;

  constructor(taskId: number, taskTitle: string) {
    this.taskId = taskId;
    this.taskTitle = taskTitle;
    this.taskStatus = false;
    makeAutoObservable(this);
  }

  modifyTitle(taskTitle: string) {
    this.taskTitle = taskTitle;
  }

  switchStatus() {
    this.taskStatus = !this.taskStatus;
  }
}

enum TaskFilterType {
  AllTasks = "ALL",
  CompletedTasks = "DONE",
  IncompleteTasks = "NOT_DONE",
}

class TaskManagementStore {
  taskList: TaskEntity[] = [];

  taskFilter: TaskFilterType = TaskFilterType.AllTasks;

  constructor() {
    makeAutoObservable(this);
    this.addNewTask("develop");
    this.addNewTask("review code");
  }

  changeFilterType(filterType: TaskFilterType) {
    this.taskFilter = filterType;
  }

  addNewTask(title: string) {
    const id =
      this.taskList.length > 0
        ? this.taskList[this.taskList.length - 1].taskId + 1
        : 1;
    this.taskList.push(new TaskEntity(id, title));
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.taskId !== id);
  }
}

const taskManagementStore = new TaskManagementStore();

const TaskView: React.FC = observer(() => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<TaskEntity | null>(null);

  const handleNewTaskTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskTitle(event.target.value.trim());
  };

  const handleCreateNewTask = () => {
    if (newTaskTitle !== "") {
      taskManagementStore.addNewTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const handleTaskCompletionToggle = (taskId: number) => {
    taskManagementStore.taskList
      .find((task) => task.taskId === taskId)
      ?.switchStatus();
  };

  const handleRemoveTask = (taskId: number) => {
    taskManagementStore.removeTask(taskId);
  };

  const handleOpenDialog = (task: TaskEntity) => {
    setCurrentTask(task);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => setDialogOpen(false);

  const handleUpdateTask = () => {
    if (currentTask) {
      const task = taskManagementStore.taskList.find(
        (task) => task.taskId === currentTask.taskId
      );
      task?.modifyTitle(currentTask.taskTitle);
    }
    setDialogOpen(false);
  };

  const handleSetFilterType = (filterType: TaskFilterType) => {
    taskManagementStore.changeFilterType(filterType);
  };

  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const handleInfoIconClick = () => {
    setInfoDialogOpen((prevState) => !prevState);
  };

  let tasksToShow: TaskEntity[] = [];
  switch (taskManagementStore.taskFilter) {
    case TaskFilterType.AllTasks:
      tasksToShow = taskManagementStore.taskList;
      break;
    case TaskFilterType.CompletedTasks:
      tasksToShow = taskManagementStore.taskList.filter(
        (task) => task.taskStatus
      );
      break;
    case TaskFilterType.IncompleteTasks:
      tasksToShow = taskManagementStore.taskList.filter(
        (task) => !task.taskStatus
      );
      break;
  }

  return (
    <Box paddingTop={0} justifyContent="space-around" textAlign="left">
      <Paper elevation={4}>
        <Paper variant="outlined" sx={{ borderColor: "gray", padding: 1 }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h5">Todo List</Typography>
            <InfoOutlinedIcon color="success" onClick={handleInfoIconClick} />
            <DocumentationDialog
              open={infoDialogOpen}
              onClose={handleInfoIconClick}
            />
          </Grid>

          <Box padding={1}>
            <Grid container spacing={1}>
              <Grid item xs={10} md={10}>
                <TextField
                  fullWidth
                  label="New Task"
                  value={newTaskTitle}
                  onChange={handleNewTaskTitleChange}
                  size="small"
                />
              </Grid>

              <Grid item xs={2} md={2} container justifyContent="flex-end">
                <IconButton onClick={handleCreateNewTask}>
                  <AddIcon color="success" />
                </IconButton>
              </Grid>
            </Grid>

            <List>
              {tasksToShow.map((task) => (
                <ListItem key={task.taskId}>
                  <Checkbox
                    color="success"
                    checked={task.taskStatus}
                    onChange={() => handleTaskCompletionToggle(task.taskId)}
                    sx={{ padding: "0", mr: "8px" }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ variant: "subtitle2" }}
                    primary={task.taskTitle}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => handleOpenDialog(task)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleRemoveTask(task.taskId)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  variant="text"
                  fullWidth
                  size="small"
                  color="info"
                  onClick={() => handleSetFilterType(TaskFilterType.AllTasks)}
                >
                  All
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="text"
                  fullWidth
                  size="small"
                  color="info"
                  onClick={() =>
                    handleSetFilterType(TaskFilterType.IncompleteTasks)
                  }
                >
                  !Done
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="text"
                  fullWidth
                  size="small"
                  color="info"
                  onClick={() =>
                    handleSetFilterType(TaskFilterType.CompletedTasks)
                  }
                >
                  Done
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Edit task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="title"
              type="text"
              fullWidth
              color="warning"
              size="small"
              value={currentTask ? currentTask.taskTitle : ""}
              onChange={(event) =>
                setCurrentTask(
                  new TaskEntity(currentTask?.taskId || 0, event.target.value)
                )
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="warning"
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={handleUpdateTask}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
});

export default TaskView;
