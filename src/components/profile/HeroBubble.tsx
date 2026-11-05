"use client";

import { useABTesting } from "@/hooks/useABTesting";

export default function HeroBubble() {
  const { variant } = useABTesting("hero_headline_v1");

  return (
    <div className="bubble px-5 py-3.5 sm:px-6 sm:py-4">
      <p className="font-[family-name:var(--font-hand)] text-[clamp(1.2rem,2.2vw,1.6rem)] leading-snug text-[var(--ink)] text-balance">
        {variant === "B"
          ? "สร้างระบบทำเงินอัตโนมัติ 24 ชม. ด้วย Digital Product"
          : "ไม่ใช่ว่าคุณขายไม่ได้ แต่คุณแค่ยังไม่รู้ว่าตลาดต้องการอะไร"}
      </p>
    </div>
  );
}
