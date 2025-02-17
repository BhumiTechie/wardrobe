import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-purple-800">
      <h1 className="text-white text-4xl font-bold">Wardrobe</h1>
    </div>
  );
};

export default SplashScreen;
