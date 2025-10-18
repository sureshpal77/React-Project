import React, { useContext, useState } from 'react';
import profileImg from '../assets/profileImg.png';
import {AuthContext} from '../../context/AuthContext.jsx'
const Profile = () => {
  const [userImage, setUserImage] = useState(null);
  const {authUser} = useContext(AuthContext);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
    <div className="h-screen bg-[#ecf0f1]">
      {/* Header */}
      <div className="flex text-left bg-[#f9f9f9] p-4">
        <h1 className="text-lg font-semibold text-gray-800">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="w-full  flex flex-row   m-5">
        {/* Profile Image Upload */}
        <label className="relative cursor-pointer items-center" title="Upload Image">
          <input
            onChange={handleImageChange}
            type="file"
            accept="image/*"
            className="hidden"
          />
          <img
            src={userImage || profileImg}
            alt="Profile"
            className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full object-cover border border-gray-300"
          />
          {/* Camera Icon */}
          <span className="absolute bottom-0 right-0 bg-[#643bc2] rounded-full p-1 border border-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h2l2-3h10l2 3h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
              />
              <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </label>

        {/* User Info */}
        <div className="flex flex-col justify-start ml-5">
          <h2 className="text-lg font-semibold text-gray-800 leading-tight">{authUser.fullName}</h2>
          <h3 className="text-sm text-gray-700 leading-tight">{authUser.email}</h3>
        </div>
        
      </div>
         <div className='px-5 py-3 '>
          <p className='text-sm'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing <br />
           Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut <br /> 
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          
        </div>
       <hr className="border-t border-dotted border-gray-400 mt-4 " />


    </div>
   
  </div>
    
  );
};

export default Profile;
