import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body; // Can optionally pass email

    // Validate the request if needed
    
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'promptpay'],
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'thb',
            product_data: {
              name: 'Badgainz: The First 10K + All Bonuses',
              description: 'Class A Course with 3 Crazy Bonuses',
            },
            unit_amount: 29900, // 299.00 THB
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      metadata: {
        product: 'first_10k_bundle'
      }
    });

    if (!session.url) {
      throw new Error('Failed to create stripe session');
    }

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
