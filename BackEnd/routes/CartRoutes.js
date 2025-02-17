const express = require("express");
const Cart = require("../models/Cart");
const mongoose = require("mongoose"); // ✅ Import mongoose for ObjectId validation
const router = express.Router();

// 🛒 Get Cart Items for a Specific User
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // ✅ Validate userId before querying the database
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
