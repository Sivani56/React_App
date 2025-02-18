import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      // action.payload = { id, text, isBold, isItalic, isUnderlined }
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      // action.payload = task.id
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      // action.payload = { id, text, isBold, isItalic, isUnderlined }
      const { id, text, isBold, isItalic, isUnderlined } = action.payload;
      const existing = state.tasks.find((task) => task.id === id);
      if (existing) {
        existing.text = text;
        existing.isBold = isBold;
        existing.isItalic = isItalic;
        existing.isUnderlined = isUnderlined;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
