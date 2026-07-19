import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

async function sendTelegramNotification(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  });
}

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
      status: 'new',
    });

    // 2. Send Telegram Notification (background — don't block response)
    const message =
      `🔔 <b>มีลูกค้าใหม่สนใจทำระบบ!</b>\n\n` +
      `👤 <b>ชื่อ:</b> ${name}\n` +
      `📞 <b>ติดต่อ:</b> ${contact}\n` +
      `🛠 <b>ประเภทงาน:</b> ${projectType || '-'}\n` +
      `💰 <b>งบประมาณ:</b> ${budget || '-'}\n` +
      `📝 <b>รายละเอียด:</b> ${details || '-'}`;

    sendTelegramNotification(message).catch((err) => {
      console.error('Telegram notify error:', err);
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });

  } catch (error) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
