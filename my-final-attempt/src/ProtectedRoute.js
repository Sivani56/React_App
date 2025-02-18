import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// If user is not authenticated or not admin, redirect them
function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
