import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    backgroundToggled: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    toggleBackground: (state) => {
      state.backgroundToggled = !state.backgroundToggled;
    },
  },
});

export const { increment, decrement, reset, toggleBackground } = counterSlice.actions;
export default counterSlice.reducer;
