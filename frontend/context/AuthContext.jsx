import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a context for authentication
const AuthContext = createContext();
// Provide a hook for easy access to the AuthContext
export const useAuth = () => useContext(AuthContext);
// Helper function to retrieve token from localStorage
const getToken = () => localStorage.getItem('token');

// The provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyTokenAndFetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Adding token in the Authorization header
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          
          // Replace '/api/user' with the actual route that validates the token and returns user data
          const response = await axios.get('/api/user', config);
          
          if (response.data) {
            setUser(response.data);
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          // If token verification fails, you might want to remove the token
          localStorage.removeItem('token');
          setUser(null);
          setIsAuthenticated(false);
          // Optionally redirect to login or show an error message
        }
      }
    };
  
    verifyTokenAndFetchUser();
  }, []);


  useEffect(() => {
    // Check for token to keep user logged in
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { userName: username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log(localStorage);
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error, possibly update state to show error message to the user
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const register = async (username, email, password) => {
    try {
      const response = await axios.post('/api/register', { userName: username, email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        // Redirect to login or home page
      }
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, possibly update state to show error message to the user
    }
  };
  
  // The value that will be given to the context
  const authContextValue = {
    user, setUser,token, setToken,
    isAuthenticated,setIsAuthenticated,
    login, logout, register,
  };

  return <AuthContext.Provider value={authContextValue}>
                {children}
          </AuthContext.Provider>;
};

export default AuthProvider;
