"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { Check } from "lucide-react";

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
    <div className="min-h-screen bg-[var(--background)] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Class A: First Step <br/>
              <span className="text-[var(--gold-primary)]">in Journey</span>
            </h1>
            
            <div className="relative w-full max-w-sm aspect-[3/4] mb-8 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-white/10 mx-auto md:mx-0">
              <Image 
                src="/first-step-ebook.jpg" 
                alt="Class A E-Book Cover" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">สิ่งที่คุณจะได้รับ:</h3>
              <ul className="space-y-3">
                {[
                  "E-book สอนหาเงินก้อนแรกจาก Digital Product",
                  "Framework การหา Pain Point และเช็ค Demand",
                  "สูตรการปั้น Grand Slam Offer ให้คนยอมจ่ายแพง",
                  "สคริปต์ปิดการขาย (Bonus)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <Check className="w-5 h-5 text-[var(--gold-primary)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="flex justify-center md:justify-end">
            <div className="max-w-md w-full bg-[#111111] p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black text-white mb-6 text-center">สรุปคำสั่งซื้อ</h2>
              
              <div className="bg-black/50 p-6 rounded-xl border border-white/5 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-400">Class A: First Step in Journey</span>
                  <span className="text-white font-medium">฿ 99.00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-400">โบนัสทั้ง 3 รายการ</span>
                  <span className="text-green-400 font-medium">ฟรี</span>
                </div>
                <div className="border-t border-white/10 my-4"></div>
                <div className="flex justify-between items-center text-xl font-black text-[var(--gold-primary)]">
                  <span>รวมทั้งหมด</span>
                  <span>฿ 99.00</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout} 
                disabled={loading}
                className="w-full bg-[var(--gold-primary)] text-black font-black text-lg py-4 rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-50 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                {loading ? 'กำลังดำเนินการ...' : 'ชำระเงินผ่าน Stripe / PromptPay'}
              </button>
              
              <div className="mt-6 text-center">
                <Link href="/" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                  ← กลับไปหน้าแรก
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
