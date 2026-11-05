"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { Check } from "lucide-react";

const INCLUDED = [
  "E-book เล่าเส้นทางหาเงินก้อนแรกจาก Digital Product",
  "Framework การหา Pain Point และเช็ค Demand",
  "สูตรการปั้น Grand Slam Offer ให้คนยอมจ่ายแพง",
  "สคริปต์ปิดการขาย (Bonus)",
];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: '', // Could collect email from a form here if needed
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert(error);
        setLoading(false);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      setLoading(false);
    }
  };

  return (
    <div className="profile-page relative min-h-screen !bg-[var(--accent)] overflow-hidden flex items-center px-4 py-6 sm:py-8">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />

      <div className="relative w-full max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-6 sm:mb-8" aria-label="BADGAINZ หน้าแรก">
          <span className="relative w-10 h-10 rounded-full overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--surface)]">
            <Image src="/avatar-yellow.png" alt="" fill sizes="40px" className="object-cover" loading="eager" />
          </span>
          <span className="font-[family-name:var(--font-display)] font-bold text-lg tracking-[0.04em]">BADGAINZ</span>
        </Link>

        <main className="frame p-5 sm:p-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 md:gap-10">
          {/* Left Side: Product Details */}
          <div className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)] md:grid-cols-[110px_minmax(0,1fr)] lg:grid-cols-[170px_minmax(0,1fr)] gap-4 sm:gap-5 items-start">
            <div className="relative w-full aspect-[1414/2000] sm:row-span-2 rounded-[12px] overflow-hidden border-[1.5px] border-[var(--ink)]">
              <Image src="/first-step-ebook.jpg" alt="Class A E-Book Cover" fill sizes="170px" className="object-cover" loading="eager" />
            </div>
            <h1 className="display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight self-center sm:self-start">Class A: First Step in Journey</h1>
            <div className="col-span-2 sm:col-span-1 sm:col-start-2 sm:-mt-2">
              <h2 className="font-[family-name:var(--font-display)] font-semibold mb-2">สิ่งที่คุณจะได้รับ:</h2>
              <ul className="space-y-2.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    <Check className="w-4 h-4 text-[var(--ink)] shrink-0 mt-1" strokeWidth={2.5} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="rounded-[20px] bg-[var(--surface-sunk)] border border-[var(--line)] p-5 sm:p-6 self-start">
            <h2 className="display text-2xl mb-5">สรุปคำสั่งซื้อ</h2>

            <dl className="text-[15px] space-y-3 mb-6">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--ink-soft)]">Class A: First Step in Journey</dt>
                <dd className="font-medium tabular-nums whitespace-nowrap">฿ 259.00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--ink-soft)]">โบนัสทั้ง 3 รายการ</dt>
                <dd className="font-medium">ฟรี</dd>
              </div>
              <div className="flex justify-between items-end gap-4 pt-3 border-t border-[var(--line-strong)]">
                <dt className="font-[family-name:var(--font-display)] font-semibold">รวมทั้งหมด</dt>
                <dd className="display text-3xl tabular-nums leading-none whitespace-nowrap">฿ 259.00</dd>
              </div>
            </dl>

            <button onClick={handleCheckout} disabled={loading} className="btn btn-primary w-full px-5 py-4 text-base sm:text-lg">
              {loading ? 'กำลังดำเนินการ...' : 'ชำระเงินผ่าน Stripe / PromptPay'}
            </button>

            <div className="mt-4 text-center">
              <Link href="/" className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
                ← กลับไปหน้าแรก
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
