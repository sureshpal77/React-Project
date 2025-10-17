import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const success = await login(data);
    if (success) {
      navigate("/profile");
    }
  };

  const labelBg = "bg-[#ecf0f1]";

  return (
    <div className="flex h-screen bg-[#f9f9f9]">
      <div className="w-[375px] bg-[#ecf0f1] p-5">
        <h2 className="text-2xl font-bold text-[#222] mb-2">
          Signin to your<br />PopX account
        </h2>
        <p className="text-gray-500 mb-6 text-base">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-sm font-semibold`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 focus:outline-none text-sm"
              placeholder="Enter email address"
            />
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="password"
              className={`absolute -top-2 left-3 ${labelBg} px-1 text-[#8A2BE2] text-sm font-semibold`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-md px-2.5 pt-3 pb-1.5 focus:outline-none text-sm"
              placeholder="Enter password"
            />
          </div>

          <button
            className="w-full hover:cursor-pointer bg-[#c0c4c6] text-white font-semibold py-2 rounded-md"
            type="submit"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
