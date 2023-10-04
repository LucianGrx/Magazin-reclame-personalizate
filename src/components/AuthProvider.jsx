import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
      fetchUsername(token);
    };
  }, []);

  const fetchUsername = async (token) => {
    try {
      const response = await axios.get(
        `${apiUrl}/users/me`, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsername(response.data.username);
      setUserId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  const login = () => {
    setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login, username, userId }}>
      {children}
    </AuthContext.Provider>
  );
};