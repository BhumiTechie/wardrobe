

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { UserProvider } from './context/ContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </UserProvider>
  </BrowserRouter>
);

