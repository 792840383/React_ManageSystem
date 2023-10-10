import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
export const PrivateRoutes = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    currentUser 
      ? children 
      : <Navigate to="/login" />
  );
};
