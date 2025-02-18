import React from 'react';
import Counter from '../components/Counter';
import UserForm from '../components/Userform';
import TodoList from '../components/Todolist';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome to the React App
      </Typography>
      <Counter />
      <UserForm />
      <TodoList />
    </Box>
  );
}

export default Home;
