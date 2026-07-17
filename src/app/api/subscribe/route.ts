import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { WelcomeEmail } from "@/emails/WelcomeEmail";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""), // Remove spaces if any
  },
});

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // 1. Save to Firebase
    try {
      await addDoc(collection(db, "subscribers"), {
        name,
        email,
        source: "free_ebook",
        createdAt: serverTimestamp(),
      });
    } catch (dbError) {
      console.error("Firebase Error:", dbError);
      // We continue even if DB fails, to at least try sending the email
    }

    // 2. Send Welcome Email via Nodemailer (Gmail)
    try {
      await transporter.sendMail({
        from: `"Palm from BADGAINZ" <${process.env.GMAIL_EMAIL}>`,
        to: email, 
        subject: "🎉 ยินดีต้อนรับ! นี่คือ E-Book ของคุณครับ",
        html: WelcomeEmail({ name }),
      });
    } catch (emailError) {
      console.error("Resend Error:", emailError);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Subscribed and email sent" });
  } catch (error) {
    console.error("Subscribe Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
