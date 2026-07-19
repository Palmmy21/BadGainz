import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { WelcomeEmail } from "@/emails/WelcomeEmail";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""),
  },
});

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
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Run all 3 tasks in PARALLEL — client already redirected, so server latency doesn't matter
    await Promise.allSettled([
      // 1. Save to Firebase
      addDoc(collection(db, "subscribers"), {
        name,
        email,
        source: "free_ebook",
        createdAt: serverTimestamp(),
      }),

      // 2. Send Welcome Email
      transporter.sendMail({
        from: `"Palm from BADGAINZ" <${process.env.GMAIL_EMAIL}>`,
        to: email,
        subject: "🎉 ยินดีต้อนรับ! นี่คือ E-Book ของคุณครับ",
        html: WelcomeEmail({ name }),
      }),

      // 3. Notify Telegram
      sendTelegramNotification(
        `📚 <b>มีคนรับ E-Book ใหม่!</b>\n\n` +
        `👤 <b>ชื่อ:</b> ${name}\n` +
        `📧 <b>Email:</b> ${email}`
      ),
    ]);

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch (error) {
    console.error("Subscribe Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
