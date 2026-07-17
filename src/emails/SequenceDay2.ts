export const SequenceDay2 = ({ name }: { name: string }) => {
  return `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🔴 สิทธิ์ใกล้เต็มแล้ว! โอกาสสุดท้ายของราคา 99 บาท</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc; color: #333; line-height: 1.6; margin: 0; padding: 0; }
        .container { max-w-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; margin-top: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: 900; color: #000; letter-spacing: 2px; }
        .accent { color: #d4af37; }
        h1 { font-size: 20px; color: #d93025; }
        p { font-size: 16px; color: #444; }
        .btn { display: inline-block; background-color: #000; border: 2px solid #d4af37; color: #d4af37; font-weight: bold; text-decoration: none; padding: 14px 24px; border-radius: 4px; margin: 20px 0; width: 100%; box-sizing: border-box; text-align: center; }
        .footer { margin-top: 40px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">BAD<span class="accent">GAINZ</span></div>
        </div>
        
        <h1>เตือนครั้งสุดท้ายครับคุณ ${name} 🚨</h1>
        
        <p>ผมเห็นว่าคุณ ${name} สนใจเรียนรู้วิธีปั้น Digital Product ให้ได้เงินก้อนแรก แต่ยังไม่ได้ตัดสินใจเข้าร่วมคลาส <strong>Class A: First Step in Journey</strong></p>
        
        <p>ผมอยากแจ้งให้ทราบว่า <strong>สิทธิ์ราคาพิเศษ 99 บาท (จากปกติ 590 บาท) ใกล้จะเต็มแล้วนะครับ</strong></p>
        <p>ถ้าโควต้าครบ 100 ท่านแรกเมื่อไหร่ ระบบจะปรับเป็นราคาเต็มทันทีแบบไม่มีข้อยกเว้นครับ</p>
        
        <p>คุณสามารถเลือกได้ครับว่า จะเสียเวลาคลำทางเองเป็นเดือนๆ หรือจะยอมลงทุนเงินแค่ 99 บาท แลกกับสูตรลับที่ผ่านการพิสูจน์มาแล้วว่าทำเงินได้จริงใน 7 วัน</p>
        
        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app'}/checkout" class="btn">
          ✅ คว้าสิทธิ์ราคา 99 บาท ทันที!
        </a>
        
        <p>ผมรอแสดงความยินดีกับยอดขายก้อนแรกของคุณอยู่นะครับ</p>
        
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
