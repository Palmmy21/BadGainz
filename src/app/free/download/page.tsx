"use client";

import Link from "next/link";
import { Download, BookOpen, ChevronRight, CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function FreeDownloadPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-3xl w-full">
        <FadeIn direction="up" className="bg-[#111] border-2 border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-16 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden">
          {/* Abstract Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[var(--gold-primary)]/10 blur-[100px] pointer-events-none" />

          <CheckCircle className="w-20 h-20 text-[var(--gold-primary)] mx-auto mb-6" />
          
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
            ยินดีด้วย! คุณได้รับสิทธิ์ <br className="hidden sm:block"/> <span className="text-[var(--gold-primary)]">ดาวน์โหลดฟรี</span>
          </h1>
          <p className="text-lg text-neutral-300 mb-10">
            คุณสามารถดาวน์โหลด E-Book และรับชม Mini Course ของเราได้ที่ปุ่มด้านล่าง
          </p>

          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8 mb-10 text-left">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-[var(--gold-primary)] shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Pain to Cash: จับปัญหาให้เป็นเงิน (E-Book)</h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  คู่มือค้นหา Pain Point ที่คนยอมจ่าย ด้วย Framework, Prompt, และเครื่องมือต่างๆ สำหรับนักคิด นักสร้าง และนักธุรกิจยุคใหม่
                </p>
                <ul className="text-neutral-400 text-sm mb-6 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" /> ค้นหา Pain Point ที่แท้จริงของกลุ่มเป้าหมาย</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" /> Framework ช่วยคิดเป็นระบบ ไม่พลาดทุกมุม</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" /> Prompt ตัวช่วย AI ถามให้ถูก ตอบคุ้มค่า</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" /> เครื่องมือต่างๆ ที่ต้องใช้ ใช้ฟรี! หรือใช้คุ้มๆ</li>
                </ul>
                <button 
                  onClick={() => alert("กำลังพัฒนาระบบไฟล์ดาวน์โหลด... (เชื่อม Google Drive เร็วๆนี้)")}
                  className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-[var(--gold-primary)] transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  คลิกเพื่อดาวน์โหลด PDF
                </button>
              </div>
            </div>
          </div>

          {/* Upsell to Class A */}
          <div className="border border-[var(--gold-primary)]/20 bg-[var(--gold-primary)]/5 rounded-2xl p-6 text-left mb-8 relative overflow-hidden group hover:border-[var(--gold-primary)]/40 transition-colors">
            <div className="absolute top-0 right-0 bg-[var(--gold-primary)] text-black text-xs font-black px-3 py-1 rounded-bl-lg">
              แนะนำสำหรับคุณ
            </div>
            <h3 className="text-[var(--gold-primary)] font-bold text-lg mb-2 mt-4">ต้องการไปให้เร็วกว่าเดิมไหม?</h3>
            <p className="text-neutral-300 text-sm mb-4">
              ปลดล็อกเคล็ดลับแบบเจาะลึก 100% พร้อมรับสคริปต์ปิดการขาย และโบนัสพิเศษใน <strong>Class A: First Step in Journey</strong> ที่จะทำให้คุณทำเงินก้อนแรกได้จริงแบบไม่ต้องเดาทางเอง
            </p>
            <Link href="/#products" className="inline-flex items-center gap-1 text-[var(--gold-primary)] font-bold text-sm hover:underline">
              ดูรายละเอียด Class A <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex justify-center">
            <Link 
              href="/"
              className="text-neutral-500 text-sm hover:text-white transition-colors underline underline-offset-4"
            >
              กลับไปหน้าแรก
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
