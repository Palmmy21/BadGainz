import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { BUSINESSES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "ธุรกิจของผม | Badgainz",
  description: "HorCare ระบบจัดการหอพัก และ BotKit OA บริการทำ LINE OA Chatbot สองธุรกิจที่ Palm Sakdidech ทำอยู่ตอนนี้",
};

export default function BusinessPage() {
  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        title="ธุรกิจของผม"
        subtitle="ตอนนี้ผมทำอยู่สองอย่าง ทั้งคู่จับงานที่คนต้องทำซ้ำทุกเดือนทุกวัน แล้วเอามาไว้ในระบบ จะดีหรือไม่ดีก็ดูจากคนที่ใช้จริง"
      />

      <main className="flex-1 wrap py-12 sm:py-16 flex flex-col gap-16 sm:gap-24">
        {BUSINESSES.map((b, i) => (
          <article key={b.id} id={b.id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-7 lg:gap-12 items-start">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={b.cta}
                className="relative block aspect-[16/10] rounded-[20px] overflow-hidden border-[1.5px] border-[var(--ink)] bg-[var(--surface-sunk)] shadow-[var(--shadow-raised)]"
              >
                <Image src={b.cover} alt={b.coverAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-top" />
              </a>
              <dl className="mt-4 grid grid-cols-3 bg-[var(--surface)] border border-[var(--line-strong)] rounded-[16px] divide-x divide-[var(--line-strong)]">
                {b.facts.map((f) => (
                  <div key={f.label} className="px-2 sm:px-3 py-2.5 text-center">
                    <dd className="display text-base sm:text-lg leading-tight">{f.value}</dd>
                    <dt className="text-[13px] leading-snug text-[var(--ink-soft)] mt-0.5">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className={i % 2 ? "lg:order-1" : ""}>
              <p className="text-[15px] text-[var(--ink-soft)]">{b.tagline}</p>
              <h2 className="display text-[clamp(2rem,4vw,2.75rem)] leading-tight">{b.name}</h2>
              <p className="mt-3 leading-relaxed">{b.summary}</p>
              <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{b.why}</p>

              <ul className="mt-5 flex flex-col gap-2">
                {b.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15px]">
                    <Check className="w-4 h-4 mt-1 shrink-0" strokeWidth={2.5} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={b.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 mt-6">
                {b.cta} <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </main>

      <section className="relative bg-[var(--ink)] text-[var(--on-ink)] py-14 sm:py-20 overflow-hidden">
        <div aria-hidden className="screentone absolute inset-x-0 top-0 h-48 [--tone:#ffffff] [--tone-opacity:0.1] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-hand)] text-[clamp(1.6rem,4vw,2.5rem)] leading-snug text-[var(--accent)]">
            ผมไม่เชื่อเรื่องดวง ผมเชื่อในสิ่งที่วัดค่าได้
          </p>
          <p className="mt-4 text-[var(--on-ink-soft)] leading-relaxed">
            มีคนใช้กี่ราย ระบบช่วยประหยัดเวลาได้จริงไหม ลูกค้ากลับมาหรือเปล่า ผมตัดสินใจจากคำถามพวกนี้ ถ้าคุณมีงานที่ต้องทำซ้ำแบบนี้ และอยากได้ระบบของตัวเอง คุยกันได้ครับ
          </p>
          <Link href="/services" className="btn btn-primary px-7 py-3.5 mt-7">
            ดูบริการรับทำเว็บและระบบ
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
