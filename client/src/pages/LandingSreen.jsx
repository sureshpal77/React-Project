import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const LandingSreen = () => {

 
  const navigate = useNavigate();
  
 const handleRegister = (e)=>{
    e.preventDefault(); 
      navigate("/register");

    
  }

 const handleLogin = (e)=>{
    e.preventDefault(); 
    navigate("/login");

  }
  return  (
    <div className="flex flex-col justify-end text-left h-full pb-7 px-6 bg-[#f2f8fa]">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-sm mb-5 font-normal">
          popX is a task qualifier for interview. <br />
           It is like a starter for your career . 
        </p>

        
        <div className="flex flex-col gap-2">
          <button onClick={handleRegister}  className="bg-[#6c2fe5] text-white font-medium py-3 rounded-md hover:cursor-pointer">
            Create Account
          </button>
          <button onClick={handleLogin} className="bg-[#b4b0c0] text-[#231b3c] font-semibold py-3 rounded-md hover: cursor-pointer">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingSreen
