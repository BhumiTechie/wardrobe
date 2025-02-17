import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  const handlePlaceOrder = () => {
    fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart, totalPrice }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => navigate("/order-confirmed"))
      .catch((err) => console.error("Error placing order:", err));
  };

  return (
    <div className="checkout-container p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Checkout</h2>
      <div className="order-summary mb-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.title}</p>
            <p>${item.price} x {item.quantity}</p>
          </div>
        ))}
        <h4 className="font-semibold text-lg mt-4">Total: ${totalPrice}</h4>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-purple-700 transition-colors"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
