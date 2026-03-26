import { loadStripe } from '@stripe/stripe-js';

// Public key — safe to expose on the frontend
export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string
);

export type InvitationType = 'visit' | 'business' | 'family' | 'tourist' | 'police';

export interface PriceOption {
  type: InvitationType;
  label: string;
  amount: number; // EUR
}

export const COUNTRIES = [
  'Test', 'Lithuania', 'Estonia', 'Albania', 'Belarus', 'UK', 'Russia', 'Serbia', 
  'Kosovo', 'Cyprus', 'Spain', 'Sweden', 'Hungary', 'Luxembourg', 'Netherlands', 
  'Germany', 'Czech', 'Denmark', 'Finland', 'France', 'Iceland', 'Norway', 
  'Poland', 'Portugal', 'Ireland'
];

// ─── Price catalogue per country ───────────────────────────────────────────
export function getCountryPaymentOptions(countryKey: string): PriceOption[] {
  const map: Record<string, PriceOption[]> = {
    Test: [
      { type: 'visit',    label: 'Test Real Payment',    amount: 5 },
    ],
    Lithuania: [
      { type: 'visit',    label: 'Visit Invitation',    amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 450 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Estonia: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 550 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Albania: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 450 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Belarus: [
      { type: 'visit',    label: 'Visit Invitation',    amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 450 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    UK: [
      { type: 'visit',    label: 'Visit Invitation',    amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 500 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Russia: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 500 },
      { type: 'family',   label: 'Family Invitation',   amount: 450 },
    ],
    Serbia: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Kosovo: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Cyprus: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'business', label: 'Business Invitation', amount: 500 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Spain: [
      { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
      { type: 'police',   label: 'Police‑Approved Invitation', amount: 800 },
      { type: 'family',   label: 'Family Invitation',   amount: 300 },
    ],
    Sweden:      schengen500(),
    Hungary:     schengen500(),
    Luxembourg:  schengen500(),
    Netherlands: schengen500(),
    Germany:     schengen500(),
    Czech:       schengen500(),
    Denmark:     schengen550(),
    Finland:     schengen500(),
    France:      schengen550(),
    Iceland:     schengen500(),
    Norway:      schengen450(),
    Poland:      schengen500(),
    Portugal:    schengen550(),
    Ireland:     schengen500(),
  };

  return map[countryKey] ?? schengen500();
}

function schengen500(): PriceOption[] {
  return [
    { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
    { type: 'business', label: 'Business Invitation', amount: 500 },
    { type: 'family',   label: 'Family Invitation',   amount: 300 },
  ];
}
function schengen550(): PriceOption[] {
  return [
    { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
    { type: 'business', label: 'Business Invitation', amount: 550 },
    { type: 'family',   label: 'Family Invitation',   amount: 300 },
  ];
}
function schengen450(): PriceOption[] {
  return [
    { type: 'tourist',  label: 'Tourist Invitation',  amount: 350 },
    { type: 'business', label: 'Business Invitation', amount: 450 },
    { type: 'family',   label: 'Family Invitation',   amount: 300 },
  ];
}

// ─── Checkout redirect ──────────────────────────────────────────────────────
// Calls the Vercel serverless function → gets a Stripe Checkout URL → redirects
export async function startCheckout(
  country: string,
  option: PriceOption
): Promise<void> {
  // Works with:
  //   - `vercel dev`  (local)
  //   - Vercel deployment (production)
  const apiBase = import.meta.env.VITE_API_URL || '';
  
  const response = await fetch(`${apiBase}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      country,
      invitationType: option.label,
      amount: option.amount,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to create checkout session');
  }

  const { url } = await response.json();
  window.location.href = url;
}
