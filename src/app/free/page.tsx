"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Gift, ArrowRight, Loader2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";

export default function FreeOptinPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire API in background — don't await, redirect immediately
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {});

    // Redirect instantly without waiting for API
    router.push("/free/download");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-6 sm:px-20 relative z-10">
        <FadeIn direction="up" className="max-w-5xl w-full mx-auto bg-gradient-to-br from-[var(--gold-primary)]/20 to-black border border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Background effect */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--gold-primary)]/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[var(--gold-primary)]/20 text-[var(--gold-primary)] font-bold text-sm rounded-full mb-6 border border-[var(--gold-primary)]/30">
              <Gift className="w-4 h-4" /> FREE ACCESS
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              รับ Mini Course <br className="hidden sm:block"/> และ E-Book ฟรี!
            </h1>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              สำหรับผู้เริ่มต้นที่ยังไม่รู้จะจับต้นชนปลายอย่างไร เราแจกบทเรียนพื้นฐานและ E-Book "Pain to Cash" ไกด์ไลน์การสร้างรายได้ออนไลน์ให้คุณไปศึกษาได้ฟรีๆ ทันที
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="ชื่อของคุณ..." 
                className="w-full bg-black/50 border border-white/20 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-[var(--gold-primary)] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="email" 
                placeholder="อีเมลของคุณ (สำหรับรับลิงก์และเนื้อหาเพิ่มเติม)..." 
                className="w-full bg-black/50 border border-white/20 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-[var(--gold-primary)] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--gold-primary)] text-black font-black text-lg px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> กำลังส่งข้อมูล...</>
                ) : (
                  <>รับสิทธิ์ฟรี ทันที <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4">* ข้อมูลและลิงก์สำหรับเข้าเรียนจะถูกส่งไปยังอีเมลของคุณ</p>
          </div>
          
          <div className="w-full md:w-1/3 relative z-10 flex justify-center">
            <div className="relative w-64 h-80 shadow-[0_0_50px_rgba(212,175,55,0.2)] -rotate-6 hover:rotate-0 transition-transform duration-500 rounded-xl overflow-hidden border-2 border-[var(--gold-primary)]/50">
               <Image 
                 src="/ebook-cover-free.jpg" 
                 alt="Pain to Cash Free E-book" 
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
