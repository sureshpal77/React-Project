import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { fullName, phoneNumber, email, password, companyName, isAgency };
    const success = await register(data);
    if (success) {
      navigate("/profile");
    }
  };

  const labelBg = "bg-white";

  return (
    <div className="bg-white p-4 rounded-b-md shadow-md">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
        Create your<br />PopX account
      </h2>

      <form onSubmit={handleRegister}>
        <div className="relative mb-4">
          <label
            htmlFor="fullName"
            className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-xs font-semibold`}
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 text-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="phoneNumber"
            className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-xs font-semibold`}
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 text-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="email"
            className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-xs font-semibold`}
          >
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 text-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="password"
            className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-xs font-semibold`}
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 text-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="companyName"
            className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-xs font-semibold`}
          >
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 text-sm focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <p className="text-[#8A2BE2] text-xs font-semibold mb-1">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1 cursor-pointer text-sm">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={(e) => setIsAgency(e.target.value)}
                className="accent-[#8A2BE2] w-3 h-3"
              />
              Yes
            </label>
            <label className="flex items-center gap-1 cursor-pointer text-sm">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={isAgency === 'no'}
                onChange={(e) => setIsAgency(e.target.value)}
                className="accent-[#8A2BE2] w-3 h-3"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6c2fe5] text-white text-sm font-semibold py-2.5 mt-27 rounded-md hover:cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
