import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body; // Can optionally pass email

    // Validate the request if needed
    
      const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app';
      
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'promptpay'],
        customer_email: email || undefined,
        line_items: [
          {
            price_data: {
              currency: 'thb',
              product_data: {
                name: 'Class A: First Step in Journey',
                description: 'E-book พร้อมโบนัส 3 รายการ',
              },
              unit_amount: 25900, // 259.00 THB
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout`,
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
