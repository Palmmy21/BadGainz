// One source for the businesses and client work shown across the site.
// Covers in public/covers are screenshots of the live sites; retake them when a site changes.
// Facts here are taken from each live site. Update them there first, then here.

export const BUSINESSES = [
  {
    id: "horcare",
    name: "HorCare",
    tagline: "ระบบจัดการหอพักและอพาร์ทเม้นท์",
    summary: "รวมงานหอพัก อพาร์ทเม้นท์ คอนโด และบ้านเช่าไว้ที่เดียว ตั้งแต่ผู้เช่า สัญญา ค่าน้ำค่าไฟ ไปจนถึงส่งบิลผ่าน LINE",
    why: "ค่าเช่าต้องเก็บทุกเดือน มิเตอร์ต้องจดทุกรอบ ถ้าทำมือก็ต้องเสียเวลาเท่าเดิมทุกเดือน HorCare เอางานที่ซ้ำแบบนี้มาไว้ในระบบเดียว",
    url: "https://horcare-landing.vercel.app/",
    cover: "/covers/horcare.webp",
    coverAlt: "หน้าเว็บ HorCare ระบบจัดการหอพักและอพาร์ทเม้นท์",
    linkLabel: "ระบบจัดการหอพัก",
    linkMeta: "ใช้งานจริง 100+ หอพัก",
    facts: [
      { value: "100+", label: "หอพักใช้งานจริง" },
      { value: "ฟรี", label: "สูงสุด 250 ห้อง" },
      { value: "฿399", label: "ต่อเดือน ไม่จำกัดห้อง" },
    ],
    features: [
      "ส่งบิลและแจ้งเตือนผ่าน LINE อัตโนมัติ",
      "QR PromptPay ในบิล และรับสลิป",
      "อ่านมิเตอร์จากรูปถ่ายด้วย AI",
      "งานแจ้งซ่อม สต็อก ทรัพย์สิน และค่าใช้จ่าย",
      "Dashboard รายได้และห้องว่าง",
      "ส่งออกรายงาน PDF / Excel",
    ],
    cta: "เปิดเว็บ HorCare",
  },
  {
    id: "botkit",
    name: "BotKit OA",
    tagline: "รับทำ LINE OA Chatbot ให้ร้านค้า",
    summary: "บอทที่ตอบราคา รับจองคิว รับออเดอร์ และเตือนลูกค้าให้เอง สำหรับร้านเสริมสวย ร้านอาหาร คลินิก และร้านค้าออนไลน์",
    why: "เจ้าของร้านส่วนใหญ่มือไม่ว่างตอนลูกค้าทักมา ร้านไหนตอบก่อนก็มักได้ลูกค้าไป BotKit ทำให้ร้านตอบได้ทันทีโดยไม่ต้องวางงานมาตอบแชท",
    url: "https://botkit-oa.vercel.app/",
    cover: "/covers/botkit.webp",
    coverAlt: "หน้าเว็บ BotKit OA รับทำ LINE OA Chatbot",
    linkLabel: "รับทำ LINE OA Chatbot",
    linkMeta: "เริ่มต้น ฿1,990 จ่ายครั้งเดียว",
    facts: [
      { value: "฿1,990", label: "เริ่มต้น จ่ายครั้งเดียว" },
      { value: "1–3 วัน", label: "ส่งงานแพ็ก Starter" },
      { value: "มัดจำ 50%", label: "ลองใช้จริงก่อนจ่ายเต็ม" },
    ],
    features: [
      "Rich Menu ออกแบบตามสีและโลโก้ร้าน",
      "ตอบคำถามซ้ำๆ อัตโนมัติ แม้ร้านปิด",
      "จองคิวและจองโต๊ะในแชท พร้อมเตือนก่อนถึงนัด",
      "รายชื่อลูกค้าอยู่ใน Google Sheets ของร้านเอง",
      "บัตรสะสมแต้มใน LINE",
      "ไม่บังคับรายเดือน ระบบเป็นของร้าน",
    ],
    cta: "เปิดเว็บ BotKit",
  },
];

export const WORKS = [
  {
    id: "blackace",
    name: "BlackAce",
    meta: "Personal Branding · Landing Page",
    desc: "เว็บโปรไฟล์ของ Zack Puttipong แอดมินของ HorCare และ Content Creator ทำคะแนน PageSpeed ได้ 99/100",
    url: "https://blackace-five.vercel.app/",
    cover: "/covers/blackace.webp",
    coverAlt: "หน้าเว็บ BlackAce ของ Zack Puttipong",
  },
  {
    id: "badgainz",
    name: "Badgainz",
    meta: "Landing Page · E-Commerce",
    desc: "เว็บที่คุณกำลังดูอยู่ ขาย Digital Product รับชำระผ่าน Stripe และส่ง E-book ทางอีเมลอัตโนมัติ",
    url: "/",
    cover: "/covers/badgainz.webp",
    coverAlt: "หน้าแรกของเว็บ Badgainz",
  },
];
