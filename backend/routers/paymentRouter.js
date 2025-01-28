const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
require('dotenv').config();


// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Payment route to create an order
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body; // Extract amount from request body

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    // Create a new Razorpay order
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (e.g., ₹500.00 = 50000 paise)
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    // Respond with the created order ID
    return res.status(200).json({
      order_id: order.id,
    });
  } catch (err) {
    console.error("Error creating order:", err.message);

    // Respond with error details
    return res.status(500).json({
      message: "Failed to create order",
      error: err.message,
    });
  }
});

export default router;
