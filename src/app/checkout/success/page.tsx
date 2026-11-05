import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Download, MessageCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="profile-page relative min-h-screen !bg-[var(--accent)] overflow-hidden flex items-center justify-center px-4 py-10 sm:py-14">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />

      <main className="relative max-w-3xl w-full frame p-6 sm:p-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" strokeWidth={1.75} aria-hidden />

        <h1 className="display text-[clamp(2rem,5vw,3rem)] leading-tight mb-2">ยินดีต้อนรับสู่ Class A</h1>
        <p className="text-lg text-[var(--ink-soft)] mb-8">การชำระเงินสำเร็จแล้ว! เตรียมพบกับการเปลี่ยนแปลงครั้งใหญ่ในชีวิตคุณ</p>

        <div className="rounded-[20px] border border-[var(--line-strong)] p-5 sm:p-7 mb-7 text-left">
          <h2 className="display text-xl mb-5 flex items-center gap-2.5">
            <Download className="w-5 h-5" aria-hidden />
            สิ่งที่คุณจะได้รับทันที
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="shrink-0 w-32 aspect-[1414/2000] relative rounded-[10px] overflow-hidden border-[1.5px] border-[var(--ink)]">
              <Image src="/first-step-ebook.jpg" alt="Class A: First Step in Journey" fill sizes="128px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-1.5 text-center sm:text-left">Class A: First Step in Journey (E-Book)</h3>
              <p className="text-[var(--ink-soft)] text-[15px] mb-3 text-center sm:text-left leading-relaxed">คู่มือเริ่มต้นหาเงินจาก Digital Product สเต็ปบายสเต็ป ที่จะช่วยให้คุณจับ Pain Point และแปลงมันเป็นรายได้จริง</p>
              <p className="chip chip-accent mx-auto sm:mx-0 flex w-fit">
                <CheckCircle className="w-3.5 h-3.5" aria-hidden /> ปลดล็อกการเข้าถึงแล้ว
              </p>
            </div>
          </div>
          <div className="border-t border-[var(--line)] mt-5 pt-5 flex items-start gap-3">
            <MessageCircle className="w-5 h-5 shrink-0 mt-1" aria-hidden />
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg">โบนัสลับ 3 รายการ</h3>
              <p className="text-[var(--ink-soft)] text-[15px]">Sales Script, Hook Templates และ Private Consult</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://drive.google.com/file/d/1aed2wvX58l2EpdYa5inzWEMqZYlZyF1z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-7 py-3.5 text-lg"
          >
            <Download className="w-5 h-5" aria-hidden />
            ดาวน์โหลด E-Book &amp; โบนัส
          </a>
          <Link href="/" className="btn btn-outline px-7 py-3.5 text-lg">
            กลับไปหน้าแรก
          </Link>
        </div>

        <p className="text-[var(--ink-faint)] text-sm mt-6">
          * เราได้ส่งลิงก์ดาวน์โหลดสำรองไปที่อีเมลของคุณแล้ว (อาจอยู่ในกล่อง Spam หรือ Promotions)
        </p>
      </main>
    </div>
  );
}
