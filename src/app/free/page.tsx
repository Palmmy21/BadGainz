"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Gift, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />

      <main className="under-nav relative flex-1 bg-[var(--accent)] overflow-hidden flex items-center">
        <div aria-hidden className="screentone hero-tone absolute inset-0" />

        <div className="wrap relative py-10 sm:py-14">
          <div className="frame max-w-5xl mx-auto p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 min-w-0 w-full">
              <span className="chip chip-accent mb-4">
                <Gift className="w-3.5 h-3.5" aria-hidden /> FREE ACCESS
              </span>
              <h1 className="display text-[clamp(2rem,5vw,3rem)] leading-[1.15] mb-3">
                รับ E-Book ฟรี!
              </h1>
              <p className="text-[var(--ink-soft)] text-lg mb-6 leading-relaxed">
                สำหรับผู้เริ่มต้นที่ยังไม่รู้จะจับต้นชนปลายอย่างไร เราแจก E-Book &ldquo;Pain to Cash&rdquo; ไกด์ไลน์การสร้างรายได้ออนไลน์ให้คุณไปอ่านได้ฟรีๆ ทันที
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="free-name" className="sr-only">ชื่อของคุณ</label>
                <input
                  id="free-name"
                  type="text"
                  autoComplete="name"
                  placeholder="ชื่อของคุณ..."
                  className="field w-full px-5 py-3.5"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <label htmlFor="free-email" className="sr-only">อีเมลของคุณ</label>
                <input
                  id="free-email"
                  type="email"
                  autoComplete="email"
                  placeholder="อีเมลของคุณ..."
                  className="field w-full px-5 py-3.5"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <button type="submit" disabled={isSubmitting} className="btn btn-dark w-full px-8 py-4 text-lg">
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" aria-hidden /> กำลังส่งข้อมูล...</>
                  ) : (
                    <>รับสิทธิ์ฟรี ทันที <ArrowRight className="w-5 h-5" aria-hidden /></>
                  )}
                </button>
              </form>
              <p className="text-sm text-[var(--ink-faint)] mt-3">* ลิงก์ดาวน์โหลดจะถูกส่งไปยังอีเมลของคุณด้วย</p>
            </div>

            <div className="relative w-52 md:w-64 shrink-0 aspect-[1414/2000] rotate-[4deg] rounded-[14px] overflow-hidden border-[1.5px] border-[var(--ink)] shadow-[var(--shadow-raised)]">
              <Image src="/ebook-cover-free.jpg" alt="Pain to Cash Free E-book" fill sizes="256px" className="object-cover" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
