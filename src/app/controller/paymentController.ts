import express, { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51M6eOGCnxyBmnrrV4dMS9Lwy2OhxeWoNbk6NFO7b23s39uw42eYtZWUaiEYETg36uyWfbOyB1owcMEOhxGQ75Q9j00WauI42TZ",
  {}
);

// Define a route for creating a payment intent
const payment = async (req: Request, res: Response) => {
  try {
    const { amount, currency, quantity, productName } = req.body;

    // Calculate the total amount (price * quantity)
    const totalAmount = amount * quantity;

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: currency,
      description: `Payment for ${productName}`,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default payment;
