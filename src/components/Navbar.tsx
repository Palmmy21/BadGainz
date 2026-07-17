"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "แนะนำตัว", href: "/#about" },
    { name: "สินค้า", href: "/#products" },
    { name: "รับทำเว็บ (Services)", href: "/services" },
    { name: "รีวิว", href: "/#reviews" },
    { name: "บทความ (Blog)", href: "/blog" },
    { name: "ผลลัพธ์ (Proof)", href: "/proof" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      {/* Urgency Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-yellow-500 via-[var(--gold-primary)] to-yellow-500 text-black text-xs sm:text-sm font-black text-center py-2 px-4 shadow-[0_0_15px_rgba(212,175,55,0.4)] relative pr-10">
          <span className="animate-pulse inline-block mr-2 text-red-600">ด่วน!</span>
          โค้งสุดท้าย! โปรโมชัน Early Bird ลด 70% สิทธิ์ใกล้เต็มแล้ว (เหลือ 100 สิทธิ์สุดท้าย)
          <button 
            onClick={() => setShowBanner(false)} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60 hover:text-black transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <nav className={`transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[var(--gold-primary)] font-black tracking-widest text-xl uppercase z-50">
          BADGAINZ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-[var(--gold-primary)] font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/checkout"
            className="px-6 py-2 bg-[var(--gold-primary)] text-black font-bold rounded-sm hover:bg-[var(--gold-hover)] transition-colors"
          >
            เข้าคอร์ส / สั่งซื้อ
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-neutral-300 hover:text-[var(--gold-primary)] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/checkout"
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-3 bg-[var(--gold-primary)] text-black text-xl font-bold rounded-sm hover:bg-[var(--gold-hover)] transition-colors mt-4"
          >
            เข้าคอร์ส / สั่งซื้อ
          </Link>
        </div>
      </div>
    </nav>
  </header>
  );
}
