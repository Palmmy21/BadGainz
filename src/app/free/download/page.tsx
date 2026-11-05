import Link from "next/link";
import Image from "next/image";
import { Download, ChevronRight, CheckCircle } from "lucide-react";

const BENEFITS = [
  "ค้นหา Pain Point ที่แท้จริงของกลุ่มเป้าหมาย",
  "Framework ช่วยคิดเป็นระบบ ไม่พลาดทุกมุม",
  "Prompt ตัวช่วย AI ถามให้ถูก ตอบคุ้มค่า",
  "เครื่องมือต่างๆ ที่ต้องใช้ ใช้ฟรี! หรือใช้คุ้มๆ",
];

export default function FreeDownloadPage() {
  return (
    <div className="profile-page relative min-h-screen !bg-[var(--accent)] overflow-hidden flex items-center justify-center px-4 py-10 sm:py-14">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />

      <main className="relative max-w-3xl w-full frame p-6 sm:p-10 text-center">
        <CheckCircle className="w-14 h-14 mx-auto mb-4" strokeWidth={1.75} aria-hidden />

        <h1 className="display text-[clamp(1.9rem,5vw,2.75rem)] leading-tight mb-3">
          ยินดีด้วย! คุณได้รับสิทธิ์ <br className="hidden sm:block" /> ดาวน์โหลดฟรี
        </h1>
        <p className="text-lg text-[var(--ink-soft)] mb-8">
          คุณสามารถดาวน์โหลด E-Book ของเราได้ที่ปุ่มด้านล่าง
        </p>

        <div className="rounded-[20px] border border-[var(--line-strong)] p-5 sm:p-7 mb-5 text-left flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-40 shrink-0 aspect-[1414/2000] rounded-[12px] overflow-hidden border-[1.5px] border-[var(--ink)]">
            <Image src="/ebook-cover-free.jpg" alt="Pain to Cash Free E-book" fill sizes="160px" className="object-cover" />
          </div>
          <div className="flex-1 w-full">
            <h2 className="display text-xl leading-snug mb-2 text-center sm:text-left">Pain to Cash: จับปัญหาให้เป็นเงิน (E-Book)</h2>
            <p className="text-[var(--ink-soft)] text-[15px] mb-4 leading-relaxed">
              คู่มือค้นหา Pain Point ที่คนยอมจ่าย ด้วย Framework, Prompt, และเครื่องมือต่างๆ สำหรับนักคิด นักสร้าง และนักธุรกิจยุคใหม่
            </p>
            <ul className="text-[15px] mb-5 space-y-2">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-1" aria-hidden /> {item}
                </li>
              ))}
            </ul>
            <a href="/Pain-to-Cash.pdf" download="Pain-to-Cash-Ebook.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 w-full sm:w-auto">
              <Download className="w-4 h-4" aria-hidden />
              คลิกเพื่อดาวน์โหลด PDF
            </a>
          </div>
        </div>

        {/* Upsell to Class A */}
        <div className="rounded-[20px] bg-[var(--accent-soft)] border-[1.5px] border-[var(--ink)] p-5 sm:p-6 text-left mb-6">
          <span className="chip chip-accent mb-2">แนะนำสำหรับคุณ</span>
          <h2 className="display text-lg mb-1.5">ต้องการไปให้เร็วกว่าเดิมไหม?</h2>
          <p className="text-[15px] leading-relaxed mb-3">
            ปลดล็อกเคล็ดลับแบบเจาะลึก 100% พร้อมรับสคริปต์ปิดการขาย และโบนัสพิเศษใน <strong>Class A: First Step in Journey</strong> ที่จะทำให้คุณทำเงินก้อนแรกได้จริงแบบไม่ต้องเดาทางเอง
          </p>
          <Link href="/#products" className="inline-flex items-center gap-1 font-[family-name:var(--font-display)] font-semibold text-[15px] underline underline-offset-4">
            ดูรายละเอียด Class A <ChevronRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>

        <Link href="/" className="text-[var(--ink-soft)] text-sm hover:text-[var(--ink)] transition-colors underline underline-offset-4">
          กลับไปหน้าแรก
        </Link>
      </main>
    </div>
  );
}
