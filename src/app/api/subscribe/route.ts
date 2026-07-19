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

    // 1. Save to Firebase (fast — do not block on failure)
    try {
      await addDoc(collection(db, "subscribers"), {
        name,
        email,
        source: "free_ebook",
        createdAt: serverTimestamp(),
      });
    } catch (dbError) {
      console.error("Firebase Error:", dbError);
      // Continue even if DB fails
    }

    // 2. Send Welcome Email in background — do NOT await, so user is redirected instantly
    transporter.sendMail({
      from: `"Palm from BADGAINZ" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: "🎉 ยินดีต้อนรับ! นี่คือ E-Book ของคุณครับ",
      html: WelcomeEmail({ name }),
    }).catch((emailError) => {
      console.error("Email send error (background):", emailError);
    });

    // Return success immediately — don't wait for email
    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch (error) {
    console.error("Subscribe Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
