"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaLine } from "react-icons/fa";

const LINE_URL = "https://line.me/ti/p/33-eCQHkas";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "สินค้า", href: "/#products" },
    { name: "บริการ", href: "/services" },
    { name: "ผลงาน", href: "/#work" },
    { name: "โพสต์", href: "/blog" },
    { name: "ผลลัพธ์", href: "/proof" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[var(--surface)]/95 backdrop-blur-sm text-[var(--ink)] border-b border-[var(--line)]">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="relative z-50 flex items-center gap-2.5 shrink-0" aria-label="BADGAINZ หน้าแรก">
            <span className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[var(--line)] bg-[var(--accent)]">
              <Image src="/avatar-yellow.png" alt="" fill sizes="40px" className="object-cover" priority />
            </span>
            <span className="font-[family-name:var(--font-display)] font-bold text-lg tracking-[0.04em]">BADGAINZ</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-[10px] font-medium text-[15px] text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--ground)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline px-4 py-2 text-sm">
              <FaLine className="w-4 h-4 text-[var(--line-green)]" aria-hidden /> คุยงาน
            </a>
            <Link href="/checkout" className="btn btn-primary px-4 py-2 text-sm">
              ซื้อ E-book
            </Link>
          </div>

          <button
            className="md:hidden relative z-50 w-10 h-10 grid place-items-center rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 top-16 z-40 md:hidden bg-[var(--ground)] text-[var(--ink)] transition-[clip-path] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-4 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="card px-5 py-4 font-[family-name:var(--font-display)] font-semibold text-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" tabIndex={mobileMenuOpen ? 0 : -1} className="btn btn-outline py-3">
              <FaLine className="w-5 h-5 text-[var(--line-green)]" aria-hidden /> คุยงาน
            </a>
            <Link href="/checkout" onClick={() => setMobileMenuOpen(false)} tabIndex={mobileMenuOpen ? 0 : -1} className="btn btn-primary py-3">
              ซื้อ E-book
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
