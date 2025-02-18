import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todo: todoReducer,
  },
  
});
