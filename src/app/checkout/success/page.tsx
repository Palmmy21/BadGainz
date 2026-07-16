"use client";

import Link from "next/link";
import { CheckCircle, Download, BookOpen, MessageCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-3xl w-full">
        <FadeIn direction="up" className="bg-[#111] border-2 border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-16 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden">
          {/* Abstract Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[var(--gold-primary)]/10 blur-[100px] pointer-events-none" />

          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ยินดีต้อนรับสู่ <span className="text-[var(--gold-primary)]">Class A</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-12">
            การชำระเงินสำเร็จแล้ว! เตรียมพบกับการเปลี่ยนแปลงครั้งใหญ่ในชีวิตคุณ
          </p>

          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-10 mb-12 text-left">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Download className="text-[var(--gold-primary)]" />
              สิ่งที่คุณจะได้รับทันที
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-[var(--gold-primary)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">Class A: First Step in Journey (E-Book)</h3>
                  <p className="text-neutral-400 text-sm">คู่มือเริ่มต้นหาเงินจาก Digital Product สเต็ปบายสเต็ป</p>
                </div>
              </div>
              <div className="border-t border-white/10 my-4" />
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-[var(--gold-primary)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">โบนัสลับ 3 รายการ</h3>
                  <p className="text-neutral-400 text-sm">Sales Script, Hook Templates และ Private Consult</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("กำลังพัฒนาระบบดาวน์โหลด... (เชื่อมกับ Cloud Storage เร็วๆนี้)")}
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold-primary)] text-black font-black text-lg px-8 py-4 rounded-xl hover:bg-yellow-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <Download className="w-5 h-5" />
              ดาวน์โหลด E-Book & โบนัส
            </button>
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#222] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#333] transition-colors border border-white/10"
            >
              กลับไปหน้าแรก
            </Link>
          </div>
          
          <p className="text-neutral-500 text-sm mt-8">
            * เราได้ส่งลิงก์ดาวน์โหลดสำรองไปที่อีเมลของคุณแล้ว (อาจอยู่ในกล่อง Spam หรือ Promotions)
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
