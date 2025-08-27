const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51S0Q1uEh4zjPHEagQf41FXdHsbo1fFhpcZhQtsBsZ1GiV0utn2KDnZvEcRAThnCPDjwq3PPycKggM0xkDJcKdYnJ00EspSpiR3"
);

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body, "REQUEST");

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // valor em centavos
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
