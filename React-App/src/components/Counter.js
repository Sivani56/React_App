import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, toggleBackground } from '../slices/counterSlice';
import { Box, Button, Typography } from '@mui/material';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const backgroundToggled = useSelector((state) => state.counter.backgroundToggled);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());
  const handleToggleBackground = () => dispatch(toggleBackground());

  return (
    <Box
      sx={{
        padding: 2,
        textAlign: 'center',
        backgroundColor: backgroundToggled ? '#f0f4c3' : 'transparent',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: 2,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        Counter
      </Typography>
      <Typography
        variant="h3"
        color="primary"
        sx={{
          marginBottom: 2,
          wordWrap: 'break-word',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        {count}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginBottom: 1 }}>
        <Button variant="contained" onClick={handleIncrement}>Increment</Button>
        <Button variant="contained" onClick={handleDecrement}>Decrement</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>
      </Box>
      <Button variant="outlined" onClick={handleToggleBackground}>
        Toggle Background
      </Button>
    </Box>
  );
}

export default Counter;
