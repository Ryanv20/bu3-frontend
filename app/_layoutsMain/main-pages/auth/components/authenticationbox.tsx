// components/authenticationbox.jsx
'use client'
import React from "react";


export default function AuthBox({ onSubmit, onGoogleLogin, onGuestLogin }) {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSubmit(formData); // pass data up
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] h-[500px] rounded-[30px] flex flex-col items-center justify-center bg-[rgba(0,0,0,0.78)] text-white p-8 space-y-6"
      >
        <div className="text-2xl font-semibold mb-6">Login</div>

        <div className="flex flex-col w-full space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="bg-[#3A4245] p-3 rounded-[8px] outline-none placeholder-gray-300 text-white"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-[#3A4245] p-3 rounded-[8px] outline-none placeholder-gray-300 text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-[8px]"
          >
            Login
          </button>

          <div className="h-[2px] bg-[#3A4245] my-4"></div>

          <button
            type="button"
            onClick={onGoogleLogin}
            className="flex items-center justify-center bg-[#3A4245] p-3 rounded-[8px] space-x-3"
          >
            <img src="/google-icon.svg" alt="Google icon" className="w-5 h-5" />
            <span>Login with Google</span>
          </button>

          <button
            type="button"
            onClick={onGuestLogin}
            className="flex items-center justify-center bg-[#3A4245] p-3 rounded-[8px] space-x-3"
          >
            <img src="/guest-icon.svg" alt="Guest icon" className="w-5 h-5" />
            <span>Generate guest user token</span>
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-300">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
