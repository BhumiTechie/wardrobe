const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const session = require('express-session');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET,  // Get secret from environment variable
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true for HTTPS in production
}));



connectDB();

// Routes
const productRoutes = require("./routes/ProductRoutes");
const authRoutes = require("./routes/AuthRoutes");
const cartRoutes = require("./routes/CartRoutes");
const checkRoutes = require('./routes/CheckoutRoutes');



app.use('/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use("/api/products", productRoutes); 
app.use('/api/checkout', checkRoutes)

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
