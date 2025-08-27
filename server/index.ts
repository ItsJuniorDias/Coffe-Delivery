import express from "express";
const app = express();
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.API_SECRET}`);

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body, "REQUEST");

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.bod.amount, // valor em centavos
      currency: "brl",
      payment_method_types: ["card"],
    });

    console.log(paymentIntent.client_secret, "PAYMENT INTENT");

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, "192.168.1.2", () =>
  console.log("Server rodando na porta 3000")
);
