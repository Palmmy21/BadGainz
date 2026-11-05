import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gift, BookOpen, Home } from "lucide-react";
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";
import { Metadata } from "next";
import { BUSINESSES, WORKS } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Palm Sakdidech | ลิงก์ทั้งหมด",
  description: "ธุรกิจ ผลงาน สินค้า และช่องทางติดต่อของ Palm Sakdidech รวมไว้ในหน้าเดียว",
};

const LINE_URL = "https://line.me/ti/p/33-eCQHkas";

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/real.palmm/", icon: FaInstagram },
  { name: "LINE", href: LINE_URL, icon: FaLine },
  { name: "GitHub", href: "https://github.com/Palmmy21", icon: FaGithub },
];

const linkCard =
  "group flex items-center gap-3 p-2.5 pr-4 rounded-[18px] bg-[var(--surface)] border-[1.5px] border-[var(--ink)] transition-[background-color,box-shadow] duration-200 hover:bg-[var(--accent-soft)] hover:shadow-[var(--shadow-raised)]";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="display text-lg mt-7 mb-2.5">{children}</h2>;
}

function CoverLink({ href, cover, alt, title, meta }: { href: string; cover: string; alt: string; title: string; meta: string }) {
  const external = href.startsWith("http");
  const body = (
    <>
      <span className="relative w-24 aspect-[16/10] shrink-0 rounded-[10px] overflow-hidden border border-[var(--ink)] bg-[var(--surface-sunk)]">
        <Image src={cover} alt={alt} fill sizes="96px" className="object-cover object-top" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-[family-name:var(--font-display)] font-bold leading-tight">{title}</span>
        <span className="block text-sm text-[var(--ink-soft)] leading-snug mt-0.5">{meta}</span>
      </span>
      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCard}>
      {body}
    </a>
  ) : (
    <Link href={href} className={linkCard}>
      {body}
    </Link>
  );
}

function IconLink({ href, icon, title, meta, newTab }: { href: string; icon: React.ReactNode; title: string; meta: string; newTab?: boolean }) {
  const body = (
    <>
      <span aria-hidden className="w-12 h-12 shrink-0 grid place-items-center rounded-full bg-[var(--accent)] border-[1.5px] border-[var(--ink)]">
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-[family-name:var(--font-display)] font-bold leading-tight">{title}</span>
        <span className="block text-sm text-[var(--ink-soft)] leading-snug mt-0.5">{meta}</span>
      </span>
      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
    </>
  );

  return newTab ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCard}>
      {body}
    </a>
  ) : (
    <Link href={href} className={linkCard}>
      {body}
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <div className="profile-page relative min-h-screen !bg-[var(--accent)] overflow-hidden px-4 py-8 sm:py-12">
      <div aria-hidden className="screentone hero-tone absolute inset-0" />

      <main className="relative max-w-[30rem] mx-auto">
        <header className="flex flex-col items-center text-center">
          <div className="bubble bubble-in px-5 py-2.5">
            <p className="font-[family-name:var(--font-hand)] text-xl leading-snug">ไม่เชื่อเรื่องดวง เชื่อในสิ่งที่วัดค่าได้</p>
          </div>
          <div className="relative w-32 h-32 mt-4">
            <Image src="/avatar-ink.png" alt="Palm Sakdidech ในลายเส้นมังงะ" fill sizes="128px" loading="eager" className="object-contain" />
          </div>
          <h1 className="display text-[2rem] leading-tight mt-1">Palm Sakdidech</h1>
          <p className="mt-1 text-[15px] leading-relaxed text-pretty">
            ทำ HorCare กับ BotKit รับทำเว็บ และแชร์ประสบการณ์จากการทำของจริง
          </p>
          <ul className="mt-3 flex gap-2">
            {SOCIALS.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-11 h-11 grid place-items-center rounded-full bg-[var(--surface)] border-[1.5px] border-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors"
                >
                  <Icon className="w-5 h-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <Link href="/" className="btn btn-dark w-full px-6 py-4 text-base mt-6">
          <Home className="w-5 h-5" aria-hidden /> เข้าสู่เว็บหลัก BADGAINZ
        </Link>

        <Heading>ธุรกิจของผม</Heading>
        <div className="flex flex-col gap-2.5">
          {BUSINESSES.map((b) => (
            <CoverLink key={b.id} href={b.url} cover={b.cover} alt={b.coverAlt} title={b.name} meta={`${b.linkLabel} · ${b.linkMeta}`} />
          ))}
        </div>

        <Heading>ผลงาน</Heading>
        <div className="flex flex-col gap-2.5">
          {WORKS.map((w) => (
            <CoverLink key={w.id} href={w.url} cover={w.cover} alt={w.coverAlt} title={w.name} meta={w.meta} />
          ))}
        </div>

        <Heading>สินค้าและของฟรี</Heading>
        <div className="flex flex-col gap-2.5">
          <IconLink href="/checkout" icon={<BookOpen className="w-5 h-5" />} title="Class A: First Step in Journey" meta="E-book ฿259" />
          <IconLink href="/free" icon={<Gift className="w-5 h-5" />} title="Pain to Cash" meta="E-book ฟรี" />
        </div>

        <Heading>ทำงานด้วยกัน</Heading>
        <div className="flex flex-col gap-2.5">
          <IconLink href={LINE_URL} newTab icon={<FaLine className="w-5 h-5" />} title="คุยงานทาง LINE" meta="รับทำเว็บและระบบ ตอบภายใน 24 ชม." />
        </div>

        <p className="mt-8 text-center text-sm">© {new Date().getFullYear()} BADGAINZ</p>
      </main>
    </div>
  );
}
