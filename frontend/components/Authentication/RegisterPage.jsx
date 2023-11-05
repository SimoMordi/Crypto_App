
import './auth.css'
import React, { useState, useContext } from 'react';
import { useAuth } from '../../context/AuthContext';


const RegisterPage = () => {
  const {  user, setUser,
    isAuthenticated, setIsAuthenticated,
    login, logout, } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    // Call the register function from AuthContext
    await register(username, email, password);
    // Redirect to login page or show an error based on the registration result
  };

  return (
    <div className="auth-page register-page" >
      <form  className="auth-form" onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
