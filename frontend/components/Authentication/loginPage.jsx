
import './auth.css'
import  { useState } from 'react';
import { useAuth } from '../../context/AuthContext';


const LoginPage = () => {
  const { user, setUser,
    isAuthenticated, setIsAuthenticated,
    login, logout,} = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    // Call the login function from AuthContext
    await login(username, password);
    // Redirect to homepage or show an error based on the login result
  };

  return (
    <div  className="auth-page login-page">
      <form  className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
