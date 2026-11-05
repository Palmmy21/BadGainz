"use client";

import { useABTesting } from "@/hooks/useABTesting";

export default function HeroBubble() {
  const { variant } = useABTesting("hero_headline_v2");

  return (
    <div className="bubble bubble-in px-6 py-4 sm:px-8 sm:py-5">
      {/* Held transparent until the variant is known, so B visitors don't see A flash first */}
      <p
        className={`font-[family-name:var(--font-hand)] text-[clamp(1.35rem,3vw,2rem)] leading-snug text-[var(--ink)] text-balance text-center transition-opacity duration-200 ${
          variant ? "opacity-100" : "opacity-0"
        }`}
      >
        {variant === "B"
          ? "ผมไม่เชื่อเรื่องดวง ผมเชื่อในสิ่งที่วัดค่าได้"
          : "ผมไม่ใช่คนเก่ง แค่ไม่เชื่อเรื่องดวง"}
      </p>
    </div>
  );
}
