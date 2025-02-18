import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../slices/userSlice';
import { Box, TextField, Button, Typography } from '@mui/material';

function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: user.name || '',
    address: user.address || '',
    email: user.email || '',
    phone: user.phone || '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    alert('User data updated successfully!');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        border: '1px solid #ccc',
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">User Data Form</Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">Submit</Button>

      {/* Display the updated data */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Current Stored Data:</Typography>
        <Typography>Name: {user.name}</Typography>
        <Typography>Address: {user.address}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
      </Box>
    </Box>
  );
}

export default UserForm;
