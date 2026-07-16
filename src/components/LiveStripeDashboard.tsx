"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, DollarSign } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface Payment {
  id: string;
  name: string;
  amount: string;
  time: string;
  product: string;
}

const FIRST_NAMES = ["เอิร์ท", "นก", "สมชาย", "แพรว", "กิ๊ก", "บาส", "พลอย", "ต้น", "เมย์", "อาร์ม"];
const PRODUCTS = [
  { name: "Class A: The First 100K", price: "990" },
  { name: "Class A: Content to Cash", price: "1,590" },
  { name: "Class A: The Closer System", price: "2,990" },
];

export default function LiveStripeDashboard() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    // Initial data
    const initialPayments = Array.from({ length: 4 }).map((_, i) => createRandomPayment(i));
    setPayments(initialPayments);

    // Add new payment randomly every 1.5 - 4 seconds
    const interval = setInterval(() => {
      setPayments((prev) => {
        const newPayment = createRandomPayment(Date.now());
        return [newPayment, ...prev].slice(0, 15);
      });
    }, Math.random() * 2500 + 1500);

    return () => clearInterval(interval);
  }, []);

  function createRandomPayment(id: string | number): Payment {
    const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    const date = new Date();
    const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    
    return {
      id: id.toString(),
      name: `คุณ${name}`,
      amount: product.price,
      product: product.name,
      time: time,
    };
  }

  return (
    <section className="py-24 px-6 sm:px-20 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <FadeIn direction="right" className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-500/10 text-green-400 font-bold text-sm rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> AUTOMATION IN ACTION
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            ยอดขายเข้า <span className="text-[var(--gold-primary)]">ตลอด 24 ชั่วโมง</span> <br />แบบไม่ต้องเฝ้าจอ
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            นี่คือสิ่งที่จะเกิดขึ้นเมื่อคุณติดตั้งระบบหลังบ้านเสร็จสมบูรณ์ ลูกค้าสามารถโอนเงินและรับสินค้าได้ทันที 
            ไม่ว่าคุณจะนอนหลับ ไปเที่ยว หรือทำอะไรอยู่ก็ตาม ระบบ Automation ของเราจะทำหน้าที่ "ปิดการขาย" แทนคุณ
          </p>
          <Link 
            href="/checkout"
            className="inline-block px-8 py-4 font-bold text-black bg-[var(--gold-primary)] rounded-md hover:bg-yellow-500 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)] text-lg"
          >
            สร้างระบบแบบนี้ให้ธุรกิจคุณ
          </Link>
        </FadeIn>

        {/* Dashboard Container */}
        <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2 max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden h-[500px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
            <h3 className="text-white font-bold flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[var(--gold-primary)]" />
              Live Stripe Dashboard
            </h3>
            <span className="text-xs text-neutral-500 font-mono">Auto-updating...</span>
          </div>

          {/* List */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence>
              {payments.map((payment) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl mb-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  {/* iOS Notification Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#635BFF] w-5 h-5 rounded-md flex items-center justify-center shadow-sm">
                        <span className="text-white text-[12px] font-black tracking-tighter italic pr-0.5">S</span>
                      </div>
                      <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">STRIPE</span>
                    </div>
                    <span className="text-white/50 text-xs">{payment.time}</span>
                  </div>
                  
                  {/* iOS Notification Body */}
                  <div>
                    <p className="text-white font-bold text-sm">Payment of ฿{payment.amount} THB</p>
                    <p className="text-white/80 text-sm mt-1 leading-snug line-clamp-2">
                      {payment.name} has successfully purchased {payment.product}.
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        </FadeIn>

      </div>
    </section>
  );
}
