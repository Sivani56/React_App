import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './slices/userSlice';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Final Attempt App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {user.isAuthenticated && user.isAdmin && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}
          {!user.isAuthenticated ? (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
