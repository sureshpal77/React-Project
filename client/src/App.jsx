import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import LandingSreen from "./pages/LandingSreen.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";
import {Toaster} from 'react-hot-toast'


function App() {
   const {authUser} = useContext(AuthContext);

  return (
   
    
      <div className="app-container">
        <div className="mobile-view">
          <Toaster />

          <Routes>
            <Route path="/" element={<LandingSreen />} />
            <Route path="/profile" element={authUser? <Profile />: <Navigate to="/" />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} /> 

          </Routes>
        </div>
      </div>
    
  );
}

export default App;
