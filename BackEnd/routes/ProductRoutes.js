const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

// API route to fetch products by category
router.get("/api/products", async (req, res) => {
  const { category } = req.query; // Get category from query params

  try {
    // If category is provided, filter by category, otherwise fetch all products
    const products = category
      ? await Product.find({ category })
      : await Product.find();
    res.json(products); // Send the products as JSON response
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

module.exports = router;
