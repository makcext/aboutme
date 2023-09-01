// taskmodel.ts

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let nextId = 1;
const tasks: Task[] = [];

addTask("Buy groceries"); // Pre-rendered as not completed
addTask("Walk the dog"); // Pre-rendered as not completed
addTask("Do laundry"); 



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

