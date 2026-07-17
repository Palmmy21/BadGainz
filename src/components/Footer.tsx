import Link from "next/link";
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10 mt-auto relative z-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-black tracking-widest text-white mb-2">
            BAD<span className="text-[var(--gold-primary)]">GAINZ</span>
          </Link>
          <p className="text-neutral-500 text-sm text-center md:text-left">
            เปลี่ยนไอเดียธุรกิจคุณ ให้เป็นเว็บไซต์ระดับมืออาชีพ
          </p>
        </div>

        {/* Contact / Social Links */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="text-neutral-400 font-bold text-sm">ช่องทางการติดต่อ</span>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Palmmy21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-white/10 hover:border-pink-500/30 transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://lin.ee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:bg-white/10 hover:border-green-500/30 transition-all"
            >
              <FaLine className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-20 mt-8 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-xs">
        <p>© {new Date().getFullYear()} BADGAINZ. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-neutral-400 transition-colors">เงื่อนไขการให้บริการ</Link>
          <Link href="/privacy" className="hover:text-neutral-400 transition-colors">นโยบายความเป็นส่วนตัว</Link>
        </div>
      </div>
    </footer>
  );
}
