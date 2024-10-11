import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Initialize the isAuthenticated state by checking localStorage on initial load
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    // If both token and username exist in localStorage, set isAuthenticated to true
    return token && username ? true : false;
  });

  // Sync the isAuthenticated state with localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setIsAuthenticated(true);
    } else {
      // If the token or username is missing, clear everything to ensure clean state
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setIsAuthenticated(false);
    }
  }, []);

  // Login function: store data in localStorage and set isAuthenticated to true
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.id);
    console.log(data)
    if (data.username) {
      localStorage.setItem("username", data.username);
      setIsAuthenticated(true);
    }
  };

  // Logout function: clear localStorage and set isAuthenticated to false
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
