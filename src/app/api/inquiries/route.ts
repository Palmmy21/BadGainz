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

    const message =
      `🔔 <b>มีลูกค้าใหม่สนใจทำระบบ!</b>\n\n` +
      `👤 <b>ชื่อ:</b> ${name}\n` +
      `📞 <b>ติดต่อ:</b> ${contact}\n` +
      `🛠 <b>ประเภทงาน:</b> ${projectType || '-'}\n` +
      `💰 <b>งบประมาณ:</b> ${budget || '-'}\n` +
      `📝 <b>รายละเอียด:</b> ${details || '-'}`;

    // Run Firebase save and Telegram notify in PARALLEL — await both so Vercel doesn't kill early
    await Promise.allSettled([
      addDoc(collection(db, 'inquiries'), {
        name,
        contact,
        projectType,
        budget,
        details,
        createdAt: serverTimestamp(),
        status: 'new',
      }),
      sendTelegramNotification(message),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
