
// taskcontroller.ts

import { Task, addTask, getTasks, toggleTaskCompletion, deleteTask, editTask } from './TaskModel';


export function createTask(title: string): Task {
  const task = addTask(title);
  return task;
}

export function getAllTasks(): Task[] {
  return getTasks();
}

export function updateTaskCompletion(id: number): void {
  toggleTaskCompletion(id);
}

export function removeTask(id: number): void {
  deleteTask(id);
} 

export function updateTask(id: number, newTitle: string): void {
  editTask(id, newTitle);
}