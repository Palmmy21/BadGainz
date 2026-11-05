export const SequenceDay2 = ({ name }: { name: string }) => {
  return `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Class A: ประสบการณ์ที่ผมอยากแชร์ให้คุณ</title>
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
        
        <h1>สวัสดีอีกครั้งครับคุณ ${name}</h1>
        
        <p>ผมเห็นว่าคุณ ${name} สนใจเรื่องการปั้น Digital Product ให้ได้เงินก้อนแรก ถ้ายังไม่แน่ใจว่าจะเริ่มตรงไหน <strong>Class A: First Step in Journey</strong> อาจช่วยได้ครับ</p>

        <p>ในเล่มคือสิ่งที่ผมลองทำมาจริง ตั้งแต่หา Pain Point เช็ค Demand สร้าง จนถึงขาย พร้อมโบนัสอีก 3 รายการ</p>

        <p>ราคา 259 บาท ไม่ต้องรีบ พร้อมเมื่อไหร่ค่อยกดเข้ามาดูครับ</p>

        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://badgainz.vercel.app'}/checkout" class="btn">
          ดูรายละเอียด Class A
        </a>

        <p>ขอบคุณที่ติดตามกันครับ</p>
        
        <p>ด้วยความเคารพ,<br>Palm, <strong>BADGAINZ</strong></p>
        
        <div class="footer">
          คุณได้รับอีเมลนี้เนื่องจากคุณได้ลงทะเบียนรับข้อมูลจากเว็บไซต์ Badgainz<br>
          © 2026 BADGAINZ. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
