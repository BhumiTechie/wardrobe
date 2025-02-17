import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the Fake Store API
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);  // Set products in the state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Shop the Latest Fashion</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="mt-2 font-semibold text-sm">{product.title.slice(0, 20)}...</h3>
              <p className="text-gray-500">${product.price}</p>
            </Link>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
