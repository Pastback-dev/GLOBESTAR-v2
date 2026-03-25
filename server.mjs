import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia',
});

const app = express();
app.use(cors());
app.use(express.json());

const PRICE_MAP = {
  300: 30000,
  350: 35000,
  450: 45000,
  500: 50000,
  550: 55000,
  800: 80000,
};

app.post('/api/create-checkout-session', async (req, res) => {
  const { country, invitationType, amount } = req.body;

  if (!country || !invitationType || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const amountNum = Number(amount);
  const amountInCents = PRICE_MAP[amountNum];

  if (!amountInCents) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  const origin = req.headers.origin || 'http://localhost:5173';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: amountInCents,
            product_data: {
              name: `${country} — ${invitationType} Invitation Letter`,
              description: `Visa invitation letter service for ${country}. Delivered within 3 business days.`,
            },
          },
        },
      ],
      metadata: {
        country,
        invitationType,
        amount: String(amount),
      },
      success_url: `${origin}/payment-success?country=${encodeURIComponent(country)}&type=${encodeURIComponent(invitationType)}&amount=${amount}`,
      cancel_url: `${origin}/details-and-costs`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = 4242;
app.listen(PORT, () => {
  console.log(`Local Stripe API Server listening on port ${PORT}`);
});
