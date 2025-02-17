import React from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h2 className="text-2xl font-bold">Welcome to Wardrobe</h2>
      <p className="text-gray-500 text-center px-10">
        Discover the best fashion at your fingertips.
      </p>
      <button
        onClick={() => navigate("/signup")}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
};

export default Onboarding;
