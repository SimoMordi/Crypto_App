import { createContext, useState, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext(null);

// Provide a hook for easy access to the AuthContext
export const useAuth = () => useContext(AuthContext);

// The provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Placeholder for login function
  const login = (username, password) => {
    // Here you would have your login logic
  };

  // Placeholder for logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // The value that will be given to the context
  const authContextValue = {
    user, setUser,
    isAuthenticated, setIsAuthenticated,
    login, logout,
  };

  return (<AuthContext.Provider value={authContextValue}> 
            {children} 
        </AuthContext.Provider>
        )
};
