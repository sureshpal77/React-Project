import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const backEndUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backEndUrl;
axios.defaults.withCredentials = true;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); 


  const register = async (credentials) => {
    try {
      const { data } = await axios.post("/api/auth/register", credentials);

      if (data.success) {
        setAuthUser(data.user);
        toast.success("Registration successful!");
        return true; 
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);

      if (data.success) {
        setAuthUser(data.user);
        toast.success("Login successful!");
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    }
  };

  const values = {
    authUser,
    register,
    login,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
