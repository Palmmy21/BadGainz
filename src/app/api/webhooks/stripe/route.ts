import { stripe } from "@/lib/stripe-server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

async function sendTelegramNotification(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });
}

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

      // 2. Send Telegram Notification
      const amount = session.amount_total ? session.amount_total / 100 : 0;
      await sendTelegramNotification(
        `🎉 <b>มียอดเงินเข้าใหม่!</b>\n\n` +
        `💰 <b>จำนวนเงิน:</b> ${amount} THB\n` +
        `👤 <b>ลูกค้า:</b> ${customerName}\n` +
        `📧 <b>Email:</b> ${customerEmail || "ไม่ระบุ"}\n` +
        `📦 <b>สินค้า:</b> ${session.metadata?.product || 'Class A'}`
      );

      // 3. Send email via Resend
      if (customerEmail) {
        await resend.emails.send({
          from: "Badgainz Team <onboarding@resend.dev>", // TODO: Change this to your verified domain later
          to: customerEmail,
          subject: "🎉 ขอบคุณที่สั่งซื้อ Class A! นี่คือลิงก์ดาวน์โหลดของคุณ",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h2 style="color: #D4AF37;">ยินดีต้อนรับสู่ Class A, ${customerName}!</h2>
              <p>เราดีใจมากที่คุณตัดสินใจเริ่มต้นสร้างรายได้ด้วย Digital Product ไปกับเรา</p>
              <p>คุณสามารถดาวน์โหลด E-Book และรับโบนัสพิเศษของคุณได้ที่ลิงก์ด้านล่างนี้:</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://drive.google.com/file/d/1aed2wvX58l2EpdYa5inzWEMqZYlZyF1z/view?usp=sharing" 
                   style="background-color: #D4AF37; color: #000; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  ดาวน์โหลด E-Book
                </a>
              </div>
              <p style="text-align: center; font-size: 14px; color: #666;">
                หรือ <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app'}/checkout/success">คลิกที่นี่</a> เพื่อกลับไปยังหน้ารับสินค้า
              </p>
              
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
