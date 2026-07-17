"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import { CheckCircle, ArrowRight, Code, Layout, Database, Send } from "lucide-react";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "", // LINE ID or Phone
    projectType: "landing_page",
    budget: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
        // Redirect to LINE OA after 2 seconds
        setTimeout(() => {
          window.location.href = "https://lin.ee/your-line-oa-link"; // TODO: Update with real LINE OA
        }, 2000);
      } else {
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--background)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 sm:px-20 z-10 flex flex-col items-center text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn direction="up">
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            เปลี่ยนไอเดียธุรกิจคุณ <br />
            ให้เป็น <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-primary)] to-yellow-200">เว็บไซต์ระดับมืออาชีพ</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            รับออกแบบและพัฒนา Web Application, SaaS, และ Landing Page 
            ที่เน้นสร้าง Conversion ให้คุณเปลี่ยนยอดคลิก เป็นยอดขายได้จริง
          </p>
        </FadeIn>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 sm:px-20 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">ผลงานที่ผ่านมา (Portfolio)</h2>
            <p className="text-neutral-400">ระบบจริงที่มีผู้ใช้งานจริง และทำรายได้จริง</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <FadeIn direction="up" delay={0.1} className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[var(--gold-primary)]/30 transition-all flex flex-col">
              <div className="aspect-video relative bg-neutral-900 overflow-hidden">
                <Image src="/horcare-preview.png" alt="HorCare SaaS" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">SaaS</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">Fullstack</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">HorCare (ระบบบริหารหอพัก)</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                  Web Application แบบ SaaS สำหรับเจ้าของหอพัก มีระบบ Login, Dashboard, สร้างบิล, รับชำระเงิน และระบบจัดการผู้เช่าแบบครบวงจร
                </p>
                <a href="https://horcare-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold hover:gap-3 transition-all mt-auto">
                  ดูผลงานจริง <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            {/* Project 2 */}
            <FadeIn direction="up" delay={0.2} className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[var(--gold-primary)]/30 transition-all flex flex-col">
              <div className="aspect-video relative bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900 flex items-center justify-center flex-col">
                   <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-primary)] to-yellow-200 uppercase tracking-widest drop-shadow-md">BADGAINZ</h1>
                   <p className="text-neutral-400 mt-2 text-[10px] tracking-widest">DIGITAL PLATFORM</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-bold rounded-full border border-[var(--gold-primary)]/20">Landing Page</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">E-Commerce</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Badgainz Platform</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                  หน้าเว็บขาย Digital Product ที่เน้น High-Conversion มีระบบตัดบัตรอัตโนมัติ (Stripe) และ Webhook เชื่อมต่อการส่งของอัตโนมัติ
                </p>
                <a href="/" className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold hover:gap-3 transition-all mt-auto">
                  ดูผลงานจริง <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            {/* Project 3 */}
            <FadeIn direction="up" delay={0.3} className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[var(--gold-primary)]/30 transition-all flex flex-col">
              <div className="aspect-video relative bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-black flex items-center justify-center flex-col border-b-2 border-red-600 group-hover:scale-105 transition-transform duration-700">
                   <h1 className="text-3xl font-black text-white uppercase tracking-widest drop-shadow-md">BLACK<span className="text-red-600">ACE</span></h1>
                   <p className="text-red-600 mt-2 text-[10px] tracking-widest font-bold">ZACK PUTTIPONG</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded-full border border-red-500/20">Personal Branding</span>
                  <span className="px-3 py-1 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-bold rounded-full border border-[var(--gold-primary)]/20">Landing Page</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">BlackAce (เว็บโปรไฟล์)</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                  หน้าเว็บโปรไฟล์สำหรับ Content Creator เน้นดีไซน์ดุดัน (Dark Theme) สไตล์ Black & Red พร้อมส่วนแนะนำคอร์สเรียนและผลงานที่ผ่านมา
                </p>
                <a href="https://blackace-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold hover:gap-3 transition-all mt-auto">
                  ดูผลงานจริง <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 sm:px-20 relative z-10" id="contact">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-white mb-3">สนใจให้เราดูแลระบบให้?</h2>
                <p className="text-neutral-400">กรอกข้อมูลเบื้องต้น เพื่อประเมินราคาและพูดคุยรายละเอียด</p>
              </div>

              {isSuccess ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">ส่งข้อมูลสำเร็จ!</h3>
                  <p className="text-neutral-400">ระบบกำลังพาท่านไปยัง LINE OA เพื่อพูดคุยรายละเอียดต่อ...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-300">ชื่อ - นามสกุล</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors"
                        placeholder="ชื่อของคุณ"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-300">LINE ID หรือ เบอร์โทรศัพท์</label>
                      <input 
                        required
                        type="text" 
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors"
                        placeholder="ข้อมูลสำหรับติดต่อกลับ"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-300">ประเภทงานที่ต้องการ</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors appearance-none"
                    >
                      <option value="landing_page">Landing Page (หน้าเว็บแนะนำสินค้า/บริการ)</option>
                      <option value="ecommerce">E-Commerce (ระบบตะกร้าสินค้า/ตัดบัตร)</option>
                      <option value="saas">Web Application / SaaS (ระบบมีล็อคอิน/ฐานข้อมูล)</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-300">งบประมาณ (คร่าวๆ)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors appearance-none"
                    >
                      <option value="">-- เลือกงบประมาณ --</option>
                      <option value="5k-15k">5,000 - 15,000 บาท</option>
                      <option value="15k-50k">15,000 - 50,000 บาท</option>
                      <option value="50k-100k">50,000 - 100,000 บาท</option>
                      <option value="100k+">100,000 บาท ขึ้นไป</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-300">รายละเอียดเพิ่มเติม</label>
                    <textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--gold-primary)]/50 transition-colors min-h-[120px]"
                      placeholder="เล่าไอเดีย หรือความต้องการของคุณให้เราฟังหน่อย..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[var(--gold-primary)] text-black font-black text-lg py-4 rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    {isSubmitting ? "กำลังส่งข้อมูล..." : <>ส่งข้อมูลเพื่อประเมินราคา <Send className="w-5 h-5" /></>}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
