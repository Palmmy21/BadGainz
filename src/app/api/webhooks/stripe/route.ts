import { stripe } from "@/lib/stripe-server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  // Handle the event (e.g. successful payment -> send product)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    // TODO: Fulfill the order, send email or LINE message with the digital product link
    console.log("Payment successful for session:", session.id);
  }

  return new NextResponse(null, { status: 200 });
}
