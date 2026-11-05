"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import {
  CheckCircle, ArrowRight, Send, Plus,
  Palette, ShoppingCart, Cpu, Users, Building2,
  Clock, MessageCircle, Zap, Shield, TrendingUp, Gauge
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const portfolioItems = [
  {
    id: 1,
    title: "HorCare (ระบบบริหารหอพัก)",
    category: "saas",
    tags: ["SaaS", "Fullstack", "Web App"],
    desc: "Web Application บริหารหอพักครบวงจร มีหอพักใช้งานจริงมากกว่า 100 แห่ง ช่วยเจ้าของหอพักลดเวลาเก็บค่าเช่าได้กว่า 80%",
    resultIcon: <TrendingUp className="w-3.5 h-3.5" />,
    result: "100+ หอพัก ใช้งานจริง",
    link: "https://horcare-landing.vercel.app/",
    image: "/covers/horcare.webp",
  },
  {
    id: 4,
    title: "BotKit OA (LINE OA Chatbot)",
    category: "sme",
    tags: ["LINE OA", "Chatbot", "ธุรกิจของผม"],
    desc: "บอทที่ตอบราคา รับจองคิว รับออเดอร์ และเตือนลูกค้าให้เอง สำหรับร้านเสริมสวย ร้านอาหาร คลินิก และร้านค้าออนไลน์",
    resultIcon: <Zap className="w-3.5 h-3.5" />,
    result: "เริ่มต้น ฿1,990",
    link: "https://botkit-oa.vercel.app/",
    image: "/covers/botkit.webp",
  },
  {
    id: 2,
    title: "BlackAce (Personal Branding)",
    category: "creator",
    tags: ["Personal Branding", "Landing Page"],
    desc: "หน้าเว็บโปรไฟล์สำหรับ Content Creator ทำคะแนนความเร็ว PageSpeed ได้ 99/100 ช่วยยกระดับความน่าเชื่อถือให้ Personal Brand แบบพรีเมียม",
    resultIcon: <Gauge className="w-3.5 h-3.5" />,
    result: "PageSpeed 99/100",
    link: "https://blackace-five.vercel.app/",
    image: "/covers/blackace.webp",
  },
  {
    id: 3,
    title: "Badgainz Platform",
    category: "sme",
    tags: ["Landing Page", "E-Commerce", "Digital Product"],
    desc: "หน้าเว็บขาย Digital Product ที่ออกแบบตามหลักจิตวิทยา สร้างยอดขายอัตโนมัติ (Passive Income) ได้ตลอด 24 ชม. โดยไม่ต้องใช้แอดมิน",
    resultIcon: <Zap className="w-3.5 h-3.5" />,
    result: "Passive Income อัตโนมัติ",
    link: "/",
    image: "/covers/badgainz.webp",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    label: "Landing Page / เว็บธุรกิจ",
    price: "1,990 – 3,990",
    duration: "3–7 วัน",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "ออกแบบ 1–3 หน้า",
      "Responsive ทุกขนาดจอ",
      "SEO พื้นฐาน",
      "Contact Form",
      "ส่งภายใน 7 วัน",
    ],
    forWho: "Creator / Freelancer / ธุรกิจเริ่มต้น",
  },
  {
    name: "Business",
    label: "เว็บธุรกิจ / E-Commerce",
    price: "4,990 – 9,990",
    duration: "2–4 สัปดาห์",
    icon: <ShoppingCart className="w-6 h-6" />,
    featured: true,
    features: [
      "ออกแบบ Custom หลายหน้า",
      "ระบบตะกร้าสินค้า / ชำระเงิน",
      "Admin Dashboard",
      "SEO ครบชุด + Blog",
      "3 เดือน support ฟรี",
    ],
    forWho: "SME / ร้านค้าออนไลน์ / แบรนด์",
  },
  {
    name: "Custom System",
    label: "Web App / ระบบ Custom",
    price: "9,990 – 29,990",
    duration: "1–3 เดือน",
    icon: <Cpu className="w-6 h-6" />,
    features: [
      "ระบบ Login / Auth",
      "Database + API",
      "Payment Gateway",
      "Real-time Features",
      "6 เดือน maintenance",
    ],
    forWho: "Startup / ธุรกิจที่ต้องการ Custom System",
  },
];

const clientCategories = [
  {
    id: "creator",
    label: "Creator / Freelancer",
    icon: <Palette className="w-5 h-5" />,
    desc: "Content Creator, Influencer, Photographer, Consultant ที่ต้องการ Personal Branding แบบพรีเมียม",
  },
  {
    id: "sme",
    label: "ธุรกิจ SME",
    icon: <Building2 className="w-5 h-5" />,
    desc: "ร้านค้า, แบรนด์, บริษัทขนาดเล็ก-กลาง ที่ต้องการเว็บขายของหรือแสดงบริการ",
  },
  {
    id: "saas",
    label: "Startup / SaaS",
    icon: <Cpu className="w-5 h-5" />,
    desc: "ทีมหรือเจ้าของไอเดียที่อยากสร้าง Web Application หรือระบบ Software ให้ลูกค้าใช้",
  },
];

const faqs = [
  {
    q: "ไม่มีไอเดียชัดเจน ให้เราช่วยวางแผนได้ไหม?",
    a: "ได้ครับ! เราช่วย consult ตั้งแต่ต้น ทั้งโครงสร้างเว็บ, ออกแบบ Flow ผู้ใช้, และเลือก feature ที่เหมาะกับงบของคุณ ไม่มีค่าใช้จ่ายในการปรึกษาเบื้องต้น",
  },
  {
    q: "ราคาที่เห็นคือราคาจริงไหม?",
    a: "เป็นราคาประมาณการ (Estimate) ครับ ราคาจริงขึ้นอยู่กับ scope งาน feature ที่ต้องการ และ timeline ที่กำหนด เราจะประเมินราคาที่แน่นอนหลังจากคุยรายละเอียดกัน",
  },
  {
    q: "ทำงานด้วยกันยังไง? ต้องนัดเจอตัวไหม?",
    a: "ทำงานออนไลน์ 100% ครับ ผ่าน LINE / Chat เป็นหลัก มี update ทุกสัปดาห์ และ preview ให้ approve ก่อนส่งงาน ไม่ต้องเดินทาง",
  },
  {
    q: "หลังส่งงานแล้วมี after-sale support ไหม?",
    a: "มีครับ ทุก package มี support ฟรีหลังส่งงาน ตั้งแต่ 1–6 เดือน ขึ้นอยู่กับ package ครอบคลุม bug fix และการแก้ไขเล็กน้อย",
  },
  {
    q: "จ่ายเงินยังไง? แบ่งจ่ายได้ไหม?",
    a: "แบ่งจ่ายได้ครับ โดยทั่วไปจะเป็น 50% เริ่มงาน / 50% ส่งงาน สำหรับโปรเจกต์ใหญ่สามารถแบ่ง 3 งวดได้ตามตกลง",
  },
  {
    q: "ใช้ Fastwork ได้ไหม?",
    a: "ได้ครับ! เรามีโปรไฟล์บน Fastwork สำหรับคนที่ต้องการ escrow และรีวิวที่น่าเชื่อถือ หรือจะติดต่อตรงผ่านฟอร์มด้านล่างก็ได้เลย",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "creator" | "sme" | "saas">("all");
  const [formData, setFormData] = useState({
    name: "", contact: "", projectType: "landing_page", budget: "", details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredPortfolio = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeFilter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSuccess(true);
      else alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } catch {
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="profile-page min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <PageHero
        title={<>เปลี่ยนไอเดียของคุณ<br />ให้เป็นระบบที่ทำเงิน</>}
        subtitle={
          <>
            รับออกแบบและพัฒนาเว็บไซต์ Landing Page, E-Commerce และ Web Application
            สำหรับ Creator, SME และ Startup ที่อยากได้ระบบที่{" "}
            <strong className="font-semibold">ดูดี ใช้งานง่าย และสร้างผลลัพธ์จริง</strong>
          </>
        }
      >
        <div className="mt-7 grid grid-cols-1 sm:flex sm:justify-center gap-2.5">
          <a href="#contact" className="btn btn-dark px-7 py-3.5 text-base">
            ปรึกษาฟรี ไม่มีข้อผูกมัด <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
          <a href="#pricing" className="btn btn-outline px-7 py-3.5 text-base">
            ดูแนวทางราคา
          </a>
        </div>

        {/* Stats */}
        <dl className="mt-9 grid grid-cols-2 sm:grid-cols-4 bg-[var(--surface)] border-[1.5px] border-[var(--ink)] rounded-[20px] overflow-hidden">
          {[
            { value: "100+", label: "หอพักใช้งานจริง (HorCare)" },
            { value: "99/100", label: "PageSpeed Score" },
            { value: "3+", label: "ระบบที่ Deploy แล้ว" },
            { value: "0 แอดมิน", label: "ระบบทำงานอัตโนมัติ" },
          ].map((s) => (
            <div key={s.label} className="px-3 py-3">
              <dd className="display text-xl leading-tight">{s.value}</dd>
              <dt className="text-[13px] text-[var(--ink-soft)] leading-snug mt-0.5">{s.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <main className="flex-1 w-full flex flex-col">
        {/* ── WHO IS THIS FOR ──────────────────────────────────────────────── */}
        <section className="wrap pt-14 sm:pt-20">
          <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">เหมาะสำหรับใคร?</h2>
          <p className="text-[var(--ink-soft)] mt-1.5 mb-6">เราเชี่ยวชาญงาน 3 กลุ่มลูกค้าหลักนี้</p>
          <ul className="card grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
            {clientCategories.map((cat) => (
              <li key={cat.id} className="p-5 sm:p-6">
                <h3 className="display text-lg flex items-center gap-2.5 mb-1.5">
                  <span aria-hidden className="w-9 h-9 grid place-items-center rounded-full bg-[var(--accent)] border-[1.5px] border-[var(--ink)] shrink-0">
                    {cat.icon}
                  </span>
                  {cat.label}
                </h3>
                <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed">{cat.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── PORTFOLIO ────────────────────────────────────────────────────── */}
        <section className="wrap py-14 sm:py-20">
          <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">ผลงานที่ผ่านมา</h2>
          <p className="text-[var(--ink-soft)] mt-1.5 mb-5">ระบบจริง ใช้งานจริง มีผลลัพธ์จริง</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: "all", label: "ทั้งหมด" },
              { id: "creator", label: "Creator / Personal Brand" },
              { id: "sme", label: "SME / E-Commerce" },
              { id: "saas", label: "SaaS / Web App" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                aria-pressed={activeFilter === tab.id}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border-[1.5px] ${
                  activeFilter === tab.id
                    ? "bg-[var(--ink)] text-[var(--surface)] border-[var(--ink)]"
                    : "bg-[var(--surface)] text-[var(--ink-soft)] border-[var(--line-strong)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredPortfolio.map((project) => (
              <article key={project.id} className="card card-link overflow-hidden flex flex-col">
                {/* Preview */}
                <div className="aspect-video relative bg-[var(--surface-sunk)] border-b border-[var(--line)]">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="chip chip-accent self-start mb-3">
                    {project.resultIcon}
                    {project.result}
                  </p>
                  <h3 className="display text-lg leading-snug">{project.title}</h3>
                  <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed mt-1.5 mb-4 flex-1">{project.desc}</p>
                  <ul className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <li key={tag} className="chip">{tag}</li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-semibold text-sm underline underline-offset-4 decoration-[var(--accent)] decoration-2">
                    ดูผลงานจริง <ArrowRight className="w-4 h-4" aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PROCESS: a real sequence, so the numbers stay ────────────────── */}
        <section className="relative bg-[var(--ink)] text-[var(--on-ink)] py-14 sm:py-20 overflow-hidden">
          <div aria-hidden className="screentone absolute inset-x-0 top-0 h-48 [--tone:#ffffff] [--tone-opacity:0.1] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
          <div className="wrap relative">
            <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">ขั้นตอนการทำงาน</h2>
            <p className="text-[var(--on-ink-soft)] mt-1.5 mb-8">ตรงไปตรงมา โปร่งใส ไม่ซับซ้อน</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
              {[
                { step: "01", icon: <MessageCircle className="w-5 h-5" aria-hidden />, title: "ปรึกษาฟรี", desc: "คุยเพื่อเข้าใจ requirement และแนะแนวทางที่เหมาะสม" },
                { step: "02", icon: <Zap className="w-5 h-5" aria-hidden />, title: "วาง Scope + ราคา", desc: "ประเมินราคาและเวลาที่แน่นอน ก่อนเริ่มงาน" },
                { step: "03", icon: <Cpu className="w-5 h-5" aria-hidden />, title: "พัฒนา + Update", desc: "ส่ง progress ทุกสัปดาห์ ให้ Approve ทีละขั้น" },
                { step: "04", icon: <Shield className="w-5 h-5" aria-hidden />, title: "ส่งงาน + Support", desc: "ส่งมอบพร้อม support หลังงานตามที่ตกลง" },
              ].map((step) => (
                <li key={step.step} className="border-t border-[var(--on-ink-line)] pt-4">
                  <p className="flex items-center justify-between text-[var(--accent)]">
                    <span className="font-[family-name:var(--font-hand)] text-3xl leading-none">{step.step}</span>
                    {step.icon}
                  </p>
                  <h3 className="display text-lg mt-3 mb-1">{step.title}</h3>
                  <p className="text-[var(--on-ink-soft)] text-[15px] leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── PRICING GUIDE ────────────────────────────────────────────────── */}
        <section id="pricing" className="wrap scroll-mt-20 py-14 sm:py-20">
          <p className="chip mb-4">
            <Clock className="w-3.5 h-3.5" aria-hidden /> แนวทางราคา — ราคาจริงขึ้นอยู่กับ scope งาน
          </p>
          <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">แนวทางราคา (Pricing Guide)</h2>
          <p className="text-[var(--ink-soft)] mt-1.5 max-w-xl">
            ราคาโปร่งใสตั้งแต่ต้น เพื่อให้คุณวางแผนงบได้ทันที — ไม่มีค่าใช้จ่ายซ่อนเร้น
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-7 md:items-stretch">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`card p-6 flex flex-col ${tier.featured ? "!bg-[var(--accent-soft)] !border-[var(--ink)] border-[1.5px]" : ""}`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span aria-hidden className="w-11 h-11 grid place-items-center rounded-full bg-[var(--accent)] border-[1.5px] border-[var(--ink)]">
                    {tier.icon}
                  </span>
                  {tier.featured && (
                    <span className="chip chip-accent">
                      <Zap className="w-3 h-3" aria-hidden /> แนะนำ
                    </span>
                  )}
                </div>
                <p className="display text-xl">{tier.name}</p>
                <h3 className="text-[15px] text-[var(--ink-soft)] mb-3">{tier.label}</h3>

                <p className="display text-[1.75rem] tabular-nums leading-tight">฿{tier.price}</p>
                <p className="flex items-center gap-1.5 text-sm text-[var(--ink-soft)] mt-1 mb-5">
                  <Clock className="w-3.5 h-3.5" aria-hidden /> {tier.duration}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[15px]">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-1" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="flex items-start gap-2 text-sm text-[var(--ink-soft)] mb-5">
                  <Users className="w-3.5 h-3.5 shrink-0 mt-1" aria-hidden />
                  <span>เหมาะสำหรับ: {tier.forWho}</span>
                </p>

                <a href="#contact" className={`btn w-full px-5 py-3 ${tier.featured ? "btn-dark" : "btn-outline"}`}>
                  ปรึกษาราคาจริง →
                </a>
              </article>
            ))}
          </div>

          <p className="text-sm text-[var(--ink-faint)] mt-5">
            * ราคาด้านบนเป็นประมาณการเริ่มต้น ราคาจริงจะประเมินหลังจากคุยรายละเอียด scope งาน
          </p>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="wrap pb-14 sm:pb-20">
          <h2 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">คำถามที่พบบ่อย</h2>
          <p className="text-[var(--ink-soft)] mt-1.5 mb-6">ตอบก่อนเลย เพื่อประหยัดเวลาของคุณ</p>
          <div className="card divide-y divide-[var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4 px-5 py-4 font-[family-name:var(--font-display)] font-semibold text-base sm:text-[17px]">
                  {faq.q}
                  <Plus className="w-5 h-5 shrink-0 text-[var(--ink-soft)] transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="px-5 pb-5 -mt-1 text-[15px] text-[var(--ink-soft)] leading-relaxed max-w-[65ch]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-16 relative bg-[var(--accent)] py-14 sm:py-20 overflow-hidden">
          <div aria-hidden className="screentone hero-tone absolute inset-0" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div className="frame p-6 sm:p-10">
              <div className="text-center mb-7">
                <p className="chip chip-accent mb-3">ปรึกษาฟรี — ไม่มีข้อผูกมัด</p>
                <h2 className="display text-[clamp(1.75rem,3.4vw,2.25rem)] leading-tight">สนใจให้เราดูแลให้?</h2>
                <p className="text-[var(--ink-soft)] mt-1.5">กรอกข้อมูลเบื้องต้น เราจะติดต่อกลับภายใน 24 ชม.</p>
              </div>

              {isSuccess ? (
                <div className="text-center py-8" role="status">
                  <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" strokeWidth={1.75} aria-hidden />
                  <h3 className="display text-2xl mb-1">รับข้อมูลแล้ว!</h3>
                  <p className="text-[var(--ink-soft)]">เราจะติดต่อกลับภายใน 24 ชั่วโมงครับ 🙏</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-name" className="text-sm font-semibold">ชื่อ - นามสกุล</label>
                      <input
                        id="inquiry-name" required type="text" name="name" autoComplete="name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="field w-full px-4 py-3"
                        placeholder="ชื่อของคุณ"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="inquiry-contact" className="text-sm font-semibold">LINE ID หรือ เบอร์โทรศัพท์</label>
                      <input
                        id="inquiry-contact" required type="text" name="contact" value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="field w-full px-4 py-3"
                        placeholder="สำหรับติดต่อกลับ"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-type" className="text-sm font-semibold">ประเภทงานที่ต้องการ</label>
                    <select
                      id="inquiry-type" name="projectType" value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="field w-full px-4 py-3"
                    >
                      <option value="landing_page">Landing Page (หน้าเว็บแนะนำสินค้า/บริการ)</option>
                      <option value="personal_brand">Personal Branding / Portfolio</option>
                      <option value="ecommerce">E-Commerce (ระบบตะกร้า/ชำระเงิน)</option>
                      <option value="saas">Web Application / SaaS (ระบบ Login/ฐานข้อมูล)</option>
                      <option value="other">อื่นๆ / ยังไม่แน่ใจ</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-budget" className="text-sm font-semibold">งบประมาณ (คร่าวๆ)</label>
                    <select
                      id="inquiry-budget" name="budget" value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="field w-full px-4 py-3"
                    >
                      <option value="">-- เลือกงบประมาณ --</option>
                      <option value="under-2k">ต่ำกว่า 2,000 บาท</option>
                      <option value="2k-5k">2,000 – 5,000 บาท</option>
                      <option value="5k-10k">5,000 – 10,000 บาท</option>
                      <option value="10k-30k">10,000 – 30,000 บาท</option>
                      <option value="30k-50k">30,000 – 50,000 บาท</option>
                      <option value="50k+">50,000 บาท ขึ้นไป</option>
                      <option value="unknown">ยังไม่แน่ใจ / ขอ Estimate</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-details" className="text-sm font-semibold">รายละเอียดเพิ่มเติม</label>
                    <textarea
                      id="inquiry-details" name="details" value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="field !rounded-[20px] w-full px-4 py-3 min-h-[120px] resize-none"
                      placeholder="เล่าไอเดีย หรือความต้องการของคุณให้เราฟังหน่อย..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-dark w-full px-6 py-4 text-base">
                    {isSubmitting ? "กำลังส่งข้อมูล..." : <><Send className="w-4 h-4" aria-hidden /> ส่งข้อมูลเพื่อปรึกษาฟรี</>}
                  </button>

                  <p className="text-center text-sm text-[var(--ink-faint)]">
                    ตอบกลับภายใน 24 ชม. • ไม่มีค่าปรึกษา • ไม่มีข้อผูกมัด
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
