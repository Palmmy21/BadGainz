import { NextResponse } from "next/server";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SequenceDay1 } from "@/emails/SequenceDay1";
import { SequenceDay2 } from "@/emails/SequenceDay2";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""), // Remove spaces if any
  },
});

export async function GET(req: Request) {
  // 1. Authenticate the cron job
  // In Vercel, cron jobs have a specific authorization header. We can skip for local testing if needed,
  // but it's good practice to secure it.
  const authHeader = req.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // Note: for testing purposes, we'll allow bypassing if a specific query param is present
    const { searchParams } = new URL(req.url);
    if (searchParams.get('test') !== 'true') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    const subscribersRef = collection(db, "subscribers");
    const snapshot = await getDocs(subscribersRef);

    const now = new Date();
    let emailsSent = 0;

    for (const document of snapshot.docs) {
      const data = document.data();
      
      // Skip if they already finished the sequence
      if (data.sequenceFinished) continue;
      
      // Skip if no createdAt timestamp
      if (!data.createdAt) continue;

      const createdAtDate = data.createdAt.toDate();
      const diffHours = (now.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60);

      const email = data.email;
      const name = data.name;

      // Rule 1: Send Day 1 Email (Between 24 and 48 hours, or if testing)
      if (diffHours >= 24 && !data.sentDay1) {
        try {
          await transporter.sendMail({
            from: `"Zack from BADGAINZ" <${process.env.GMAIL_EMAIL}>`,
            to: email, 
            subject: "ทำไมคู่แข่งถึงขายของแพงกว่าคุณได้ 10 เท่า?",
            html: SequenceDay1({ name }),
          });

          await updateDoc(doc(db, "subscribers", document.id), {
            sentDay1: true,
            sentDay1At: new Date()
          });
          emailsSent++;
          console.log(`Sent Day 1 to ${email}`);
        } catch (err) {
          console.error(`Failed to send Day 1 to ${email}`, err);
        }
      }

      // Rule 2: Send Day 2 Email (Between 48 and 72 hours)
      else if (diffHours >= 48 && data.sentDay1 && !data.sentDay2) {
        try {
          await transporter.sendMail({
            from: `"Zack from BADGAINZ" <${process.env.GMAIL_EMAIL}>`,
            to: email, 
            subject: "🔴 สิทธิ์ใกล้เต็มแล้ว! โอกาสสุดท้ายของราคา 99 บาท",
            html: SequenceDay2({ name }),
          });

          await updateDoc(doc(db, "subscribers", document.id), {
            sentDay2: true,
            sentDay2At: new Date(),
            sequenceFinished: true
          });
          emailsSent++;
          console.log(`Sent Day 2 to ${email}`);
        } catch (err) {
          console.error(`Failed to send Day 2 to ${email}`, err);
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Cron job completed. Emails sent: ${emailsSent}` 
    });

  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
