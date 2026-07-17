import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, projectType, budget, details } = body;

    if (!name || !contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Firebase Firestore
    const docRef = await addDoc(collection(db, 'inquiries'), {
      name,
      contact,
      projectType,
      budget,
      details,
      createdAt: serverTimestamp(),
      status: 'new' // To track lead status
    });

    // 2. Send Email Notification via Resend (Optional but recommended)
    try {
      await resend.emails.send({
        from: "Badgainz Team <onboarding@resend.dev>", // TODO: Replace with your domain
        to: ["your-email@example.com"], // TODO: Replace with your actual receiving email
        subject: `[New Lead] สนใจทำเว็บ: ${name}`,
        html: `
          <h2>มีลูกค้าใหม่สนใจทำระบบครับ!</h2>
          <p><strong>ชื่อ:</strong> ${name}</p>
          <p><strong>ติดต่อ:</strong> ${contact}</p>
          <p><strong>ประเภทงาน:</strong> ${projectType}</p>
          <p><strong>งบประมาณ:</strong> ${budget}</p>
          <p><strong>รายละเอียด:</strong> ${details}</p>
          <hr/>
          <p>ล็อกอินเข้า Firebase เพื่อดูข้อมูลเพิ่มเติม หรือติดต่อลูกค้าทางไลน์ได้เลยครับ</p>
        `
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // We don't fail the request if just the email fails
    }

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });

  } catch (error) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
