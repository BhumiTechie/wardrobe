import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import { useCart } from "../context/CartContext"; // Assuming you have CartContext for cart state management

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Check if the user is logged in
  const { cart, clearCart } = useCart(); // Access cart from context
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total price of all items in the cart
    const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(cartTotal);
  }, [cart]);

  if (!user) {
    // If user is not logged in, redirect to the login page
    navigate("/login");
    return null; // Don't render the cart if user is not logged in
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. Add some products!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">Total: ${total}</h3>
            <button
              onClick={clearCart} // Assuming clearCart is a function to clear the cart
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/checkout")} // Navigate to checkout page
              className="bg-green-600 text-white py-2 px-4 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
