import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Order Confirmed!</h2>
      <p className="text-lg text-gray-700 text-center">
        Your order has been successfully placed. Thank you for shopping with us.
      </p>
    </div>
  );
};

export default OrderConfirmation;
