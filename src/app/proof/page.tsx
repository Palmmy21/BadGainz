import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import { Star, TrendingUp, Quote } from "lucide-react";

export const metadata = {
  title: "ผลลัพธ์นักเรียน | Badgainz",
  description: "ผลลัพธ์และความสำเร็จจากนักเรียนที่สร้างรายได้ผ่าน Digital Products",
};

const TESTIMONIALS = [
  {
    name: "คุณเอิร์ท",
    role: "นักศึกษามหาวิทยาลัย",
    result: "รายได้ก้อนแรก ฿ 15,000",
    content: "เริ่มจากศูนย์ ไม่มีทุนเลย ใช้ความรู้จาก Class A ลองหา Pain Point และทำ E-book เล่มแรก ดีใจมากที่ตอนนั่งเรียนอยู่ก็มีแจ้งเตือนยอดโอนเข้าครับ",
    tags: ["E-Book", "No Capital"]
  },
  {
    name: "คุณนก",
    role: "พนักงานประจำ",
    result: "ประหยัดเวลาวันละ 3 ชม.",
    content: "ทำเพจเป็นอาชีพเสริมแต่ไม่มีเวลาตอบแชทลูกค้า พอเซ็ตระบบ Automation ตามที่สอน ตอนนี้เลิกงานมาก็แพ็คของส่งอย่างเดียว ไม่ต้องมานั่งเฝ้าจอแล้วค่ะ",
    tags: ["Automation", "Side Hustle"]
  },
  {
    name: "คุณสมชาย",
    role: "ขายสินค้าออนไลน์",
    result: "ยอดโอนไวขึ้น 30%",
    content: "เอาสคริปต์ปิดการขายไปปรับใช้กับแอดมินเพจ ลูกค้าถามน้อยลงและตัดสินใจโอนเร็วขึ้น ช่วยลดปัญหาลูกค้าทักมาแล้วเงียบหายได้ดีมากครับ",
    tags: ["Business Owner", "Closer Script"]
  },
  {
    name: "คุณแพรว",
    role: "ฟรีแลนซ์",
    result: "ขาย Template ได้ 50 ออเดอร์",
    content: "ตอนแรกคิดว่างานที่เราทำมันธรรมดาไป แต่พอเอามาปรับเป็น Digital Product ตาม Blueprint ตอนนี้มีรายได้เข้ามาเรื่อยๆ กลายเป็นค่าขนมรายเดือนเลยค่ะ",
    tags: ["Beginner Friendly", "Digital Product"]
  }
];

export default function ProofPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gold-primary)]/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-40 pb-20 relative z-10">
        <div className="text-center mb-20">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight uppercase">
              ผลลัพธ์ที่จับต้องได้ <br/>
              <span className="text-[var(--gold-primary)]">ของจริง ไม่ขายฝัน</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              นี่คือเสียงตอบรับและผลลัพธ์จากลูกศิษย์และลูกค้าของ Badgainz ที่นำความรู้และระบบไปลงมือทำจริง จนสามารถสร้างรายได้แบบอัตโนมัติได้สำเร็จ
            </p>
          </FadeIn>
        </div>

        {/* Featured Result */}
        <FadeIn direction="up" delay={0.2} className="mb-24">
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
             <div className="absolute top-0 left-0 w-2 h-full bg-[var(--gold-primary)]" />
             <div className="w-full md:w-1/2 aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center relative group">
                <span className="text-neutral-600 font-mono">Video Interview Placeholder</span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                   <div className="w-16 h-16 bg-[var(--gold-primary)] rounded-full flex items-center justify-center pl-1">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                   </div>
                </div>
             </div>
             <div className="w-full md:w-1/2">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[var(--gold-primary)] fill-[var(--gold-primary)]" />)}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">"จากยอดวิวน้อย สู่รายได้เสริมที่มั่นคง"</h3>
                <p className="text-neutral-400 mb-6 text-lg leading-relaxed italic">
                  "เทคนิค Content to Cash สอนให้ผมเลิกโฟกัสแค่ยอดไลค์ แต่ให้โฟกัสที่การแก้ปัญหาให้กลุ่มเป้าหมายจริงๆ พอใช้คู่กับระบบ Automation ตอนนี้ผมมีเวลาทำคอนเทนต์มากขึ้น และมีรายได้จาก E-book เข้ามาซัพพอร์ตทุกสัปดาห์ครับ"
                </p>
                <div>
                  <p className="text-white font-bold">คุณบาส</p>
                  <p className="text-[var(--gold-primary)] text-sm">Content Creator</p>
                </div>
             </div>
          </div>
        </FadeIn>

        {/* Grid Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <FadeIn key={idx} direction="up" delay={0.1 * idx}>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[var(--gold-primary)]/50 transition-colors h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center text-xl font-bold text-[var(--gold-primary)]">
                    {testimonial.name.substring(0, 1)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-6 flex items-center gap-2 text-green-400 font-bold bg-green-500/10 w-fit px-3 py-1 rounded-full text-sm">
                  <TrendingUp className="w-4 h-4" /> 
                  {testimonial.result}
                </div>
                
                <p className="text-neutral-300 leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {testimonial.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-[var(--gold-primary)] border border-[var(--gold-primary)]/30 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </main>
    </div>
  );
}
