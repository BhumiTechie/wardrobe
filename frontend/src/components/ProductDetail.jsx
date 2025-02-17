import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Access user from AuthContext
  const { addToCart } = useCart(); // Assuming useCart is for managing cart state
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      // If user is not logged in, alert them or redirect to login
      alert("Please log in to add products to your cart.");
      navigate("/login"); // Redirect to login page
    } else {
      // If user is logged in, proceed to add product to cart
      addToCart(product);
      navigate("/cart"); // Navigate to the cart page
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain"
      />
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
