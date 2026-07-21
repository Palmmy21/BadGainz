export const WelcomeEmail = ({ name, appUrl }: { name: string, appUrl?: string }) => {
  const url = appUrl || process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app';
  return `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ยินดีต้อนรับสู่ Badgainz</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc; color: #333; line-height: 1.6; margin: 0; padding: 0; }
        .container { max-w-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; margin-top: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: 900; color: #000; letter-spacing: 2px; }
        .accent { color: #d4af37; } /* Gold */
        h1 { font-size: 20px; color: #111; }
        p { font-size: 16px; color: #444; }
        .btn { display: inline-block; background-color: #d4af37; color: #000; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 4px; margin: 20px 0; }
        .footer { margin-top: 40px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">BAD<span class="accent">GAINZ</span></div>
        </div>
        
        <h1>ยินดีต้อนรับครับ คุณ ${name} 🎉</h1>
        
        <p>ผม Palm จาก BADGAINZ นะครับ ดีใจมากๆ ที่คุณตัดสินใจรับ E-Book "Pain to Cash" เล่มนี้ไป</p>
        <p>ใน E-Book เล่มนี้ ผมได้สรุปแก่นสำคัญของการเปลี่ยน "ปัญหา" ให้กลายเป็น "รายได้" ซึ่งเป็นจุดเริ่มต้นที่สำคัญที่สุดของการทำธุรกิจออนไลน์ในยุคนี้ครับ</p>
        
        <center>
          <a href="${url}/free/download" class="btn">
            👇 คลิกที่นี่เพื่อไปหน้าดาวน์โหลด E-Book 👇
          </a>
        </center>
        
        <p><strong>คำแนะนำก่อนอ่าน:</strong></p>
        <p>อย่าเพิ่งเชื่อทุกอย่างที่ผมเขียน แต่ให้ลองเอา Framework ในหนังสือไปปรับใช้กับไอเดียของคุณดูครับ ผมมั่นใจว่าคุณจะเห็นภาพชัดเจนขึ้นแน่นอน</p>
        
        <p>ถ้าอ่านจบแล้วมีคำถาม หรืออยากแชร์ไอเดีย สามารถ Reply อีเมลนี้กลับมาคุยกับผมได้เลยนะครับ ผมอ่านทุกข้อความครับ</p>
        
        <p>ลุย!<br>Palm</p>
        
        <div class="footer">
          คุณได้รับอีเมลนี้เนื่องจากคุณได้ลงทะเบียนรับ E-Book ฟรีจากเว็บไซต์ Badgainz<br>
          © 2026 BADGAINZ. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
