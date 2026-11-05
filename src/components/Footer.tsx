import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/real.palmm/", icon: FaInstagram },
  { name: "LINE", href: "https://line.me/ti/p/33-eCQHkas", icon: FaLine },
  { name: "GitHub", href: "https://github.com/Palmmy21", icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--ink)] text-[var(--on-ink)] mt-auto relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="BADGAINZ หน้าแรก">
          <span className="relative w-12 h-12 rounded-full overflow-hidden bg-[var(--accent)]">
            <Image src="/avatar-yellow.png" alt="" fill sizes="48px" className="object-cover" />
          </span>
          <span>
            <span className="block font-[family-name:var(--font-display)] font-bold text-xl tracking-[0.04em] leading-tight">BADGAINZ</span>
            <span className="block text-sm text-[var(--on-ink-soft)]">สินค้าดิจิทัล รับทำเว็บ โดย Palm Sakdidech</span>
          </span>
        </Link>

        <ul className="flex items-center gap-2">
          {SOCIALS.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-11 h-11 grid place-items-center rounded-full border border-[var(--on-ink-line)] hover:bg-[var(--accent)] hover:text-[var(--ink)] hover:border-[var(--accent)] transition-colors"
              >
                <Icon className="w-5 h-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[var(--on-ink-line)]">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-center sm:text-left text-sm text-[var(--on-ink-soft)]">
          © {new Date().getFullYear()} BADGAINZ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
