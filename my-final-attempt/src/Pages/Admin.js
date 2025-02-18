import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

function Admin() {
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Hello, {user.name || 'Admin'}! You have admin privileges.
      </Typography>
      {/* You can add more admin functionalities here */}
    </Box>
  );
}

export default Admin;
