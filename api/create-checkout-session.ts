import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia' as any,
});

// Price map in cents (EUR)
const PRICE_MAP: Record<number, number> = {
  300: 30000,
  350: 35000,
  450: 45000,
  500: 50000,
  550: 55000,
  800: 80000,
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers (needed when Vite dev server calls this)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { country, invitationType, amount } = req.body;

  if (!country || !invitationType || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const amountNum = Number(amount);
  const amountInCents = PRICE_MAP[amountNum];

  if (!amountInCents) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  const origin = req.headers.origin || 'http://localhost:8081';

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
  } catch (err: any) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
