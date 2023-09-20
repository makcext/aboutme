// taskmodel.ts

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let nextId = 1;
const tasks: Task[] = [];

addTask("Buy groceries"); // Pre-rendered as not completed


export function addTask(title: string): Task {
  const task: Task = {
    id: nextId++,
    title,
    completed: false,
  };
  tasks.push(task);
  return task;
}


export function getTasks(): Task[] {
  return tasks;
}

export function deleteTask(id: number): void {
  const newTasks = tasks.filter(task => task.id !== id);
  tasks.splice(0, tasks.length, ...newTasks);
}

export function toggleTaskCompletion(id: number): void {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}




//with storage

// taskmodel.ts

// export interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// let nextId = 1;
// let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

// // addTask("Buy groceries"); // Pre-rendered as not completed

// export function addTask(title: string): Task {
//   const task: Task = {
//     id: nextId++,
//     title,
//     completed: false,
//   };
//   tasks.push(task);
//   saveTasks();
//   return task;
// }

// export function getTasks(): Task[] {
//   return tasks;
// }

// export function deleteTask(id: number): void {
//   const newTasks = tasks.filter(task => task.id !== id);
//   tasks.splice(0, tasks.length, ...newTasks);
//   saveTasks();
// }

// export function toggleTaskCompletion(id: number): void {
//   const task = tasks.find(task => task.id === id);
//   if (task) {
//     task.completed = !task.completed;
//     saveTasks();
//   }
// }

// function saveTasks(): void {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }



