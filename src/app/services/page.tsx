"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  CheckCircle, ArrowRight, Send, ChevronDown,
  Palette, ShoppingCart, Cpu, Users, Building2, Star,
  Clock, MessageCircle, Zap, Shield, TrendingUp, Gauge
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const portfolioItems = [
  {
    id: 1,
    title: "HorCare (ระบบบริหารหอพัก)",
    category: "saas",
    tags: ["SaaS", "Fullstack", "Web App"],
    tagColors: ["blue", "green", "purple"],
    desc: "Web Application บริหารหอพักครบวงจร มีหอพักใช้งานจริงมากกว่า 100 แห่ง ช่วยเจ้าของหอพักลดเวลาเก็บค่าเช่าได้กว่า 80%",
    resultIcon: <TrendingUp className="w-3.5 h-3.5" />,
    result: "100+ หอพัก ใช้งานจริง",
    link: "https://horcare-landing.vercel.app/",
    bg: "from-blue-900/40 to-black",
    previewText: "HorCare",
    previewSub: "PROPERTY MANAGEMENT",
    previewColor: "#3b82f6",
    image: "/horcare-preview.png",
  },
  {
    id: 2,
    title: "BlackAce (Personal Branding)",
    category: "creator",
    tags: ["Personal Branding", "Landing Page"],
    tagColors: ["red", "gold"],
    desc: "หน้าเว็บโปรไฟล์สำหรับ Content Creator ทำคะแนนความเร็ว PageSpeed ได้ 99/100 ช่วยยกระดับความน่าเชื่อถือให้ Personal Brand แบบพรีเมียม",
    resultIcon: <Gauge className="w-3.5 h-3.5" />,
    result: "PageSpeed 99/100",
    link: "https://blackace-five.vercel.app/",
    bg: "from-neutral-900 to-black",
    previewText: "BLACK ACE",
    previewSub: "ZACK PUTTIPONG",
    previewColor: "#ef4444",
  },
  {
    id: 3,
    title: "Badgainz Platform",
    category: "sme",
    tags: ["Landing Page", "E-Commerce", "Digital Product"],
    tagColors: ["gold", "purple", "blue"],
    desc: "หน้าเว็บขาย Digital Product ที่ออกแบบตามหลักจิตวิทยา สร้างยอดขายอัตโนมัติ (Passive Income) ได้ตลอด 24 ชม. โดยไม่ต้องใช้แอดมิน",
    resultIcon: <Zap className="w-3.5 h-3.5" />,
    result: "Passive Income อัตโนมัติ",
    link: "/",
    bg: "from-yellow-900/30 to-black",
    previewText: "BADGAINZ",
    previewSub: "DIGITAL PLATFORM",
    previewColor: "#d4af37",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    label: "Landing Page / เว็บธุรกิจ",
    price: "1,990 – 3,990",
    duration: "3–7 วัน",
    icon: <Palette className="w-6 h-6" />,
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
    textColor: "text-blue-400",
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
    color: "from-[var(--gold-primary)]/20 to-yellow-900/10",
    border: "border-[var(--gold-primary)]/50",
    textColor: "text-[var(--gold-primary)]",
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
    color: "from-purple-500/20 to-purple-900/10",
    border: "border-purple-500/30",
    textColor: "text-purple-400",
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

// ─── TAG COLOR MAP ────────────────────────────────────────────────────────────

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  gold: "bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] border-[var(--gold-primary)]/20",
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "creator" | "sme" | "saas">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--background)]">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-24 px-6 sm:px-20 z-10 flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--gold-primary)]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <FadeIn direction="up" className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] font-bold text-sm rounded-full mb-8 border border-[var(--gold-primary)]/30">
            <Star className="w-4 h-4 fill-current" />
            Web Development by BADGAINZ
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
            เปลี่ยนไอเดียของคุณ<br />
            ให้เป็น{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-primary)] to-yellow-200">
              ระบบที่ทำเงิน
            </span>
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            รับออกแบบและพัฒนาเว็บไซต์ Landing Page, E-Commerce และ Web Application
            สำหรับ Creator, SME และ Startup ที่อยากได้ระบบที่{" "}
            <strong className="text-white">ดูดี ใช้งานง่าย และสร้างผลลัพธ์จริง</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 font-bold text-black bg-gradient-to-r from-[var(--gold-primary)] to-yellow-500 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">ปรึกษาฟรี ไม่มีข้อผูกมัด</span>
              <ArrowRight className="w-5 h-5 relative" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 font-bold text-white border border-white/10 hover:border-[var(--gold-primary)]/50 rounded-xl transition-all hover:bg-white/5 text-lg"
            >
              ดูแนวทางราคา
            </a>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn direction="up" delay={0.3} className="relative z-10 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl w-full">
          {[
            { value: "100+", label: "ผู้ใช้งานจริง (HorCare)" },
            { value: "99/100", label: "PageSpeed Score" },
            { value: "3+", label: "ระบบที่ Deploy แล้ว" },
            { value: "0 แอดมิน", label: "ระบบทำงานอัตโนมัติ" },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[var(--gold-primary)]/30 transition-colors">
              <div className="text-2xl font-black text-[var(--gold-primary)] mb-1">{s.value}</div>
              <div className="text-xs text-neutral-400 leading-snug">{s.label}</div>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* ── WHO IS THIS FOR ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-20 relative z-10 bg-black/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">เหมาะสำหรับใคร?</h2>
            <p className="text-neutral-400">เราเชี่ยวชาญงาน 3 กลุ่มลูกค้าหลักนี้</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientCategories.map((cat, i) => (
              <FadeIn key={cat.id} direction="up" delay={i * 0.1} className="h-full">
                <div className="h-full bg-[#111] border border-white/10 rounded-2xl p-7 hover:border-[var(--gold-primary)]/30 transition-all group flex flex-col">
                  <div className="w-12 h-12 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-all shrink-0">
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{cat.label}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">{cat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">ผลงานที่ผ่านมา</h2>
            <p className="text-neutral-400">ระบบจริง ใช้งานจริง มีผลลัพธ์จริง</p>
          </FadeIn>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "ทั้งหมด" },
              { id: "creator", label: "Creator / Personal Brand" },
              { id: "sme", label: "SME / E-Commerce" },
              { id: "saas", label: "SaaS / Web App" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeFilter === tab.id
                    ? "bg-[var(--gold-primary)] text-black border-[var(--gold-primary)] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, i) => (
              <FadeIn key={project.id} direction="up" delay={i * 0.1}
                className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[var(--gold-primary)]/40 transition-all flex flex-col hover:-translate-y-1">
                {/* Preview */}
                <div className="aspect-video relative bg-neutral-900 overflow-hidden">
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                      <h3 className="text-3xl font-black tracking-widest drop-shadow-md" style={{ color: project.previewColor }}>
                        {project.previewText}
                      </h3>
                      <p className="text-xs tracking-widest mt-2 text-neutral-500">{project.previewSub}</p>
                    </div>
                  )}
                  {/* Result badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--gold-primary)]">
                      {project.resultIcon}
                      {project.result}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${tagColorMap[project.tagColors[j]] || tagColorMap.gold}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--gold-primary)] transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-6">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold text-sm hover:gap-3 transition-all mt-auto">
                    ดูผลงานจริง <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-20 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">ขั้นตอนการทำงาน</h2>
            <p className="text-neutral-400">ตรงไปตรงมา โปร่งใส ไม่ซับซ้อน</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <MessageCircle className="w-6 h-6" />, title: "ปรึกษาฟรี", desc: "คุยเพื่อเข้าใจ requirement และแนะแนวทางที่เหมาะสม" },
              { step: "02", icon: <Zap className="w-6 h-6" />, title: "วาง Scope + ราคา", desc: "ประเมินราคาและเวลาที่แน่นอน ก่อนเริ่มงาน" },
              { step: "03", icon: <Cpu className="w-6 h-6" />, title: "พัฒนา + Update", desc: "ส่ง progress ทุกสัปดาห์ ให้ Approve ทีละขั้น" },
              { step: "04", icon: <Shield className="w-6 h-6" />, title: "ส่งงาน + Support", desc: "ส่งมอบพร้อม support หลังงานตามที่ตกลง" },
            ].map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[var(--gold-primary)]/30 transition-all text-center group">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold-primary)] text-black text-xs font-black px-3 py-0.5 rounded-full">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-xl flex items-center justify-center mx-auto mb-4 mt-3 group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-all">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING GUIDE ──────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 sm:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 text-neutral-300 text-sm rounded-full mb-6 border border-white/10">
              <Clock className="w-4 h-4" /> แนวทางราคา — ราคาจริงขึ้นอยู่กับ scope งาน
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">แนวทางราคา (Pricing Guide)</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              ราคาโปร่งใสตั้งแต่ต้น เพื่อให้คุณวางแผนงบได้ทันที — ไม่มีค่าใช้จ่ายซ่อนเร้น
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingTiers.map((tier, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className={`relative bg-gradient-to-b ${tier.color} border ${tier.border} rounded-3xl p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${tier.featured ? "shadow-[0_0_40px_rgba(212,175,55,0.15)]" : ""}`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold-primary)] text-black text-xs font-black px-4 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                      <Zap className="w-3 h-3" /> ที่นิยมสุด
                    </div>
                  )}
                  <div className={`w-12 h-12 ${tier.featured ? "bg-[var(--gold-primary)] text-black" : "bg-white/10 text-white"} rounded-xl flex items-center justify-center mb-5`}>
                    {tier.icon}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${tier.textColor} mb-1`}>{tier.name}</div>
                  <h3 className="text-white font-bold text-lg mb-4">{tier.label}</h3>

                  <div className="mb-1">
                    <span className="text-3xl font-black text-white">฿{tier.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
                    <Clock className="w-3.5 h-3.5" /> {tier.duration}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <CheckCircle className={`w-4 h-4 ${tier.textColor} shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white/5 rounded-xl p-3 mb-6 border border-white/5">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Users className="w-3.5 h-3.5" />
                      <span>เหมาะสำหรับ: {tier.forWho}</span>
                    </div>
                  </div>

                  <a href="#contact"
                    className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all ${
                      tier.featured
                        ? "bg-[var(--gold-primary)] text-black hover:bg-yellow-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}>
                    ปรึกษาราคาจริง →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-center text-sm text-neutral-500 mt-8">
              * ราคาด้านบนเป็นประมาณการเริ่มต้น ราคาจริงจะประเมินหลังจากคุยรายละเอียด scope งาน
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-20 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">คำถามที่พบบ่อย</h2>
            <p className="text-neutral-400">ตอบก่อนเลย เพื่อประหยัดเวลาของคุณ</p>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div
                  className={`bg-[#111] border rounded-2xl overflow-hidden transition-all cursor-pointer ${
                    openFaq === i ? "border-[var(--gold-primary)]/40" : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center px-6 py-5">
                    <h3 className={`font-bold text-base pr-4 ${openFaq === i ? "text-[var(--gold-primary)]" : "text-white"}`}>
                      {faq.q}
                    </h3>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-[var(--gold-primary)]" : ""}`} />
                  </div>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 sm:px-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-sm font-bold rounded-full mb-5 border border-[var(--gold-primary)]/30">
                  ปรึกษาฟรี — ไม่มีข้อผูกมัด
                </div>
                <h2 className="text-3xl font-black text-white mb-3">สนใจให้เราดูแลให้?</h2>
                <p className="text-neutral-400">กรอกข้อมูลเบื้องต้น เราจะติดต่อกลับภายใน 24 ชม.</p>
              </div>

              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">รับข้อมูลแล้ว!</h3>
                  <p className="text-neutral-400">เราจะติดต่อกลับภายใน 24 ชั่วโมงครับ 🙏</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-neutral-300">ชื่อ - นามสกุล</label>
                      <input
                        required type="text" name="name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors text-sm"
                        placeholder="ชื่อของคุณ"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-neutral-300">LINE ID หรือ เบอร์โทรศัพท์</label>
                      <input
                        required type="text" name="contact" value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors text-sm"
                        placeholder="สำหรับติดต่อกลับ"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-neutral-300">ประเภทงานที่ต้องการ</label>
                    <select
                      name="projectType" value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors appearance-none text-sm"
                    >
                      <option value="landing_page">Landing Page (หน้าเว็บแนะนำสินค้า/บริการ)</option>
                      <option value="personal_brand">Personal Branding / Portfolio</option>
                      <option value="ecommerce">E-Commerce (ระบบตะกร้า/ชำระเงิน)</option>
                      <option value="saas">Web Application / SaaS (ระบบ Login/ฐานข้อมูล)</option>
                      <option value="other">อื่นๆ / ยังไม่แน่ใจ</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-neutral-300">งบประมาณ (คร่าวๆ)</label>
                    <select
                      name="budget" value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors appearance-none text-sm"
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
                    <label className="text-sm font-bold text-neutral-300">รายละเอียดเพิ่มเติม</label>
                    <textarea
                      name="details" value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors min-h-[120px] text-sm resize-none"
                      placeholder="เล่าไอเดีย หรือความต้องการของคุณให้เราฟังหน่อย..."
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-[var(--gold-primary)] text-black font-black text-base py-4 rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    {isSubmitting ? "กำลังส่งข้อมูล..." : <><Send className="w-4 h-4" /> ส่งข้อมูลเพื่อปรึกษาฟรี</>}
                  </button>

                  <p className="text-center text-xs text-neutral-500">
                    ตอบกลับภายใน 24 ชม. • ไม่มีค่าปรึกษา • ไม่มีข้อผูกมัด
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
