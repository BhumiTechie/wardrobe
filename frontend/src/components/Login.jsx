// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access login function from AuthContext
  const navigate = useNavigate(); // For navigation after login

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (can be extended for real use cases)
    if (email && password) {
      const userData = {
        email,
        // For simplicity, we'll use the email as the user ID
      };

      // Call the login function from context
      login(userData);

      // Redirect user to the products page after successful login
      navigate("/products");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
      <h1 className="text-3xl font-bold text-purple-700 text-center">Wardrobe</h1>
      <h2 className="text-xl font-semibold text-gray-800 text-center">Log In</h2>
      <p className="text-sm text-gray-500 text-center mb-4">Welcome back! Please login to your account.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded-lg p-2 mb-3 outline-none"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded-lg p-2 mb-3 outline-none"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          LOG IN
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-500 cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  </div>
);
};

export default Login;
