
import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmed" element={<OrderConfirmation />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </AuthProvider>
  );
};

export default App;
