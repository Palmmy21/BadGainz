import { stripe } from "@/lib/stripe-server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'คุณลูกค้า';
    
    try {
      // 1. Save order to Firebase
      await addDoc(collection(db, "orders"), {
        sessionId: session.id,
        customerId: session.customer || null,
        customerEmail: customerEmail || null,
        customerName: customerName,
        amountTotal: session.amount_total,
        currency: session.currency,
        paymentStatus: session.payment_status,
        product: session.metadata?.product || 'unknown',
        createdAt: serverTimestamp(),
      });
      console.log("Order saved to Firebase successfully:", session.id);

      // 2. Send email via Resend
      if (customerEmail) {
        await resend.emails.send({
          from: "Badgainz Team <onboarding@resend.dev>", // TODO: Change this to your verified domain later
          to: customerEmail,
          subject: "🎉 ขอบคุณที่สั่งซื้อ Class A! นี่คือลิงก์เข้าเรียนของคุณ",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h2 style="color: #D4AF37;">ยินดีต้อนรับสู่ Class A, ${customerName}!</h2>
              <p>เราดีใจมากที่คุณตัดสินใจเริ่มต้นสร้างรายได้ด้วย Digital Product ไปกับเรา</p>
              <p>คุณสามารถดาวน์โหลด E-Book และรับโบนัสพิเศษของคุณได้ที่ลิงก์ด้านล่างนี้:</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.com'}/checkout/success" 
                   style="background-color: #D4AF37; color: #000; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  ดาวน์โหลด E-Book และโบนัส
                </a>
              </div>
              
              <p>หากมีข้อสงสัยเพิ่มเติม สามารถตอบกลับอีเมลฉบับนี้ได้เลยครับ</p>
              <p>ด้วยความเคารพ,<br>ทีมงาน Badgainz</p>
            </div>
          `,
        });
        console.log("Welcome email sent to:", customerEmail);
      }
    } catch (err) {
      console.error("Error saving order or sending email:", err);
    }
  }

  return new NextResponse(null, { status: 200 });
}
