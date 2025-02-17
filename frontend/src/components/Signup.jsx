import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      // Signup request backend ko bhejein
      const res = await axios.post("http://localhost:5000/auth/signup", formData);
  
      // Response ko check karein
      console.log("Signup response:", res.data);
  
      if (res.data.token && res.data.user) {
        // Token aur user data ko localStorage mein save karo
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
  
        console.log("Navigating to /products");
        navigate("/products");  // Products page pe redirect kar do
      } else {
        alert("Signup failed! Missing token or user data.");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error);
      alert("Signup failed! " + (error.response?.data?.message || "Server error"));
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-purple-700 text-center">Wardrobe</h1>
        <h2 className="text-xl font-semibold text-gray-800 text-center">Create an Account</h2>
        <p className="text-sm text-gray-500 text-center mb-4">Sign up to get started!</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border rounded-lg p-2 mb-3 outline-none"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile number"
            className="w-full border rounded-lg p-2 mb-3 outline-none"
            onChange={handleChange}
            value={formData.mobile}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-2 mb-3 outline-none"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-2 mb-3 outline-none"
            onChange={handleChange}
            value={formData.password}
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            SIGN UP
          </button>
        </form>

        

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
