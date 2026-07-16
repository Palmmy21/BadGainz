"use client";

import Link from "next/link";
import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-[#111111] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">สรุปคำสั่งซื้อ</h2>
        
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
          <div className="flex justify-between items-center text-xl font-bold text-[var(--gold-primary)]">
            <span>รวมทั้งหมด</span>
            <span>฿ 99.00</span>
          </div>
        </div>

        <button 
          onClick={handleCheckout} 
          disabled={loading}
          className="w-full bg-[var(--gold-primary)] text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-50"
        >
          {loading ? 'กำลังดำเนินการ...' : 'ชำระเงินผ่าน Stripe / PromptPay'}
        </button>
        
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
            กลับไปหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
