export const SequenceDay1 = ({ name }: { name: string }) => {
  return `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ทำไมคู่แข่งถึงขายของแพงกว่าคุณได้ 10 เท่า?</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc; color: #333; line-height: 1.6; margin: 0; padding: 0; }
        .container { max-w-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; margin-top: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: 900; color: #000; letter-spacing: 2px; }
        .accent { color: #d4af37; } /* Gold */
        h1 { font-size: 20px; color: #111; }
        p { font-size: 16px; color: #444; }
        .btn { display: inline-block; background-color: #d4af37; color: #000; font-weight: bold; text-decoration: none; padding: 14px 24px; border-radius: 4px; margin: 20px 0; width: 100%; box-sizing: border-box; text-align: center; }
        .footer { margin-top: 40px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">BAD<span class="accent">GAINZ</span></div>
        </div>
        
        <h1>สวัสดีครับคุณ ${name} 👋</h1>
        
        <p>เมื่อวานคุณคงได้อ่าน E-book 'First Step in Journey' จบไปแล้ว และคงเห็นภาพแล้วว่าการหาไอเดียทำ Digital Product นั้นไม่ใช่เรื่องยากเลย</p>
        
        <p>แต่ปัญหาที่หลายคนติดคือ... <strong>"ทำไมเราถึงขายสู้คู่แข่งไม่ได้ ทั้งๆ ที่ของเหมือนกัน?"</strong></p>
        
        <p>ความลับคือ... คู่แข่งของคุณเขาไม่ได้ขาย "ของ" ครับ แต่เขาขาย <strong>"ความหวังและผลลัพธ์"</strong></p>
        <p>ถ้าคุณสามารถเปลี่ยนแพ็กเกจสินค้าของคุณให้เป็น Grand Slam Offer ได้ ลูกค้าจะยอมจ่ายให้คุณแพงกว่าคู่แข่ง 10 เท่าโดยไม่ลังเลเลยครับ</p>
        
        <p>ในคลาส <strong>Class A: First Step in Journey</strong> ผมจะสอนวิธีปั้นข้อเสนอที่ลูกค้าดูโง่ถ้าปฏิเสธ พร้อมเจาะลึกจิตวิทยาการตั้งราคาแบบละเอียดยิบ</p>
        
        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app'}/checkout" class="btn">
          ดูรายละเอียดคลาสเรียน (ราคาพิเศษ)
        </a>
        
        <p>ลุยเลยครับ อย่าปล่อยให้คู่แข่งแย่งลูกค้าของคุณไป!</p>
        
        <p>ด้วยความเคารพ,<br>Zack, <strong>BADGAINZ</strong></p>
        
        <div class="footer">
          คุณได้รับอีเมลนี้เนื่องจากคุณได้ลงทะเบียนรับข้อมูลจากเว็บไซต์ Badgainz<br>
          © 2026 BADGAINZ. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
