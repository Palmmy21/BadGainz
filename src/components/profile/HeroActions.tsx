"use client";

import Link from "next/link";
import { FaLine } from "react-icons/fa";
import { Gift } from "lucide-react";
import { useABTesting } from "@/hooks/useABTesting";

export default function HeroActions({ lineUrl }: { lineUrl: string }) {
  const { trackConversion } = useABTesting("hero_headline_v2");

  return (
    <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center gap-2.5 w-full">
      <Link
        href="/checkout"
        onClick={() => trackConversion("hero_cta_clicked", { target: "/checkout" })}
        className="btn btn-dark px-7 py-3.5 text-base"
      >
        ซื้อ E-book ฿259
      </Link>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("hero_cta_clicked", { target: "line" })}
        className="btn btn-outline px-6 py-3.5 text-base"
      >
        <FaLine className="w-5 h-5 text-[var(--line-green)]" aria-hidden /> จ้างทำเว็บ
      </a>
      <a
        href="#free"
        onClick={() => trackConversion("hero_cta_clicked", { target: "#free" })}
        className="btn btn-outline px-6 py-3.5 text-base"
      >
        <Gift className="w-5 h-5" aria-hidden /> รับ E-book ฟรี
      </a>
    </div>
  );
}
