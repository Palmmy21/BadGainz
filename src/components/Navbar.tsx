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
    if (!mobileMenuOpen) return;

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "สินค้า", href: "/#products" },
    { name: "ธุรกิจ", href: "/business" },
    { name: "บริการ", href: "/services" },
    { name: "ผลงาน", href: "/#work" },
    { name: "โพสต์", href: "/blog" },
    { name: "ผลลัพธ์", href: "/proof" },
  ];

  return (
    <>
      <header className="sticky top-3 z-50 w-full shrink-0 px-3 mt-3 text-[var(--ink)]">
        <nav className="max-w-5xl mx-auto h-14 pl-2 pr-2 sm:pr-2.5 flex items-center justify-between gap-4 rounded-full bg-[var(--surface)] border-[1.5px] border-[var(--ink)] shadow-[var(--shadow-card)]">
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="BADGAINZ หน้าแรก">
            <span className="relative w-10 h-10 rounded-full overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--accent)]">
              <Image src="/avatar-yellow.png" alt="" fill sizes="40px" className="object-cover" loading="eager" />
            </span>
            <span className="font-[family-name:var(--font-display)] font-bold text-lg tracking-[0.04em]">BADGAINZ</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-full font-medium text-[15px] text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors"
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
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--surface)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden bg-[var(--accent)] text-[var(--ink)] overflow-y-auto transition-[clip-path] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none invisible"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-4 pt-24 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="px-5 py-4 rounded-[20px] bg-[var(--surface)] border-[1.5px] border-[var(--ink)] font-[family-name:var(--font-display)] font-semibold text-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" tabIndex={mobileMenuOpen ? 0 : -1} className="btn btn-outline py-3">
              <FaLine className="w-5 h-5 text-[var(--line-green)]" aria-hidden /> คุยงาน
            </a>
            <Link href="/checkout" onClick={() => setMobileMenuOpen(false)} tabIndex={mobileMenuOpen ? 0 : -1} className="btn btn-dark py-3">
              ซื้อ E-book
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
