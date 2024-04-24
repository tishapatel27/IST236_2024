import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskItems: [], // Array to store tasks
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Adding a task to the list
      const { title, dueDate, description } = action.payload;
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random id
        title,
        dueDate,
        description,
        status: 'pending', // Add status property with default value
      };
      state.taskItems.push(newTask);
    },
    removeTask: (state, action) => {
      // Remove a task from the list
      const taskId = action.payload;
      state.taskItems = state.taskItems.filter(task => task.id !== taskId);
    },
    editTask: (state, action) => {
      // Edit task details
      const { id, title, dueDate, description } = action.payload;
      const existingTask = state.taskItems.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.dueDate = dueDate;
        existingTask.description = description;
      }
    },
    markTaskAsFinished: (state, action) => {
      // Mark a task as finished
      const taskId = action.payload;
      const taskToMark = state.taskItems.find(task => task.id === taskId);
      if (taskToMark) {
        taskToMark.status = 'finished';
      }
    },
    clearTasks: state => {
      // Clear all tasks
      state.taskItems = [];
    },
  },
});

export const { addTask, removeTask, editTask, markTaskAsFinished, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
