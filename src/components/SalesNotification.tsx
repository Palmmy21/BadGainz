"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const mockSales = [
  "คุณนก เพิ่งซื้อ E-book Digital Product Blueprint",
  "คุณสมชาย เพิ่งสมัครคอร์ส Automation 101",
  "คุณแพรว เพิ่งชำระเงินสำเร็จ!",
  "คุณเอิร์ท เพิ่งซื้อ E-book เริ่มต้นสร้างรายได้",
];

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show a notification every 15-30 seconds
    const scheduleNextNotification = () => {
      const delay = Math.floor(Math.random() * 15000) + 15000; // 15s to 30s
      
      setTimeout(() => {
        const randomSale = mockSales[Math.floor(Math.random() * mockSales.length)];
        setCurrentSale(randomSale);
        setIsVisible(true);

        // Hide after 5 seconds
        setTimeout(() => {
          setIsVisible(false);
          scheduleNextNotification();
        }, 5000);
      }, delay);
    };

    scheduleNextNotification();

    return () => {
      // cleanup would go here if needed, but for this mock we just let it run
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      {/* iOS Notification Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-[#635BFF] w-5 h-5 rounded-md flex items-center justify-center shadow-sm">
            <span className="text-white text-[12px] font-black tracking-tighter italic pr-0.5">S</span>
          </div>
          <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">STRIPE</span>
        </div>
        <span className="text-white/50 text-xs">now</span>
      </div>
      
      {/* iOS Notification Body */}
      <div>
        <p className="text-white font-bold text-sm">New Payment Received</p>
        <p className="text-white/80 text-sm mt-1 leading-snug line-clamp-2">
          {currentSale}
        </p>
      </div>
    </div>
  );
}
