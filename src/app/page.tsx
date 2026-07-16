import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SalesNotification from "@/components/SalesNotification";
import FadeIn from "@/components/FadeIn";
import LiveStripeDashboard from "@/components/LiveStripeDashboard";
import { Gift, BookOpen, CheckCircle, XCircle, Plus, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--background)]">
      <Navbar />
      <SalesNotification />

      {/* Decorative Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gold-primary)]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center pt-40 pb-20 px-6 sm:px-20 z-10">
        <FadeIn direction="up" delay={0.2} className="flex flex-col gap-12 items-center text-center max-w-4xl">
          <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-lg leading-tight">
            ไม่ใช่ว่าคุณขายไม่ได้ <br />
            แต่คุณแค่ยังไม่รู้ว่า<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-primary)] to-yellow-200">ตลาดต้องการอะไร</span>
          </h1>

          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
            ก็อปปี้ระบบ Automation ของเราไปใช้ แล้วปล่อยให้ระบบทำเงินแทนคุณ 24 ชม. — 
            เซ็ตอัพเสร็จภายใน 1 วัน เริ่มต้นได้ทันทีแม้ไม่มีสินค้า ไม่มีทุน และไม่ต้องมีพื้นฐานไอที
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
            <Link 
              href="/checkout"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 font-bold text-black bg-gradient-to-r from-[var(--gold-primary)] to-yellow-500 rounded-md overflow-hidden transition-transform hover:scale-105 active:scale-95 text-lg"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">เริ่มสร้างธุรกิจกับ BADGAINZ</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* LIVE STRIPE DASHBOARD */}
      <LiveStripeDashboard />

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 px-6 sm:px-20 relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <FadeIn direction="right" delay={0.1} className="relative aspect-[3/4] max-w-md mx-auto w-full group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[var(--gold-primary)]/20 blur-2xl group-hover:bg-[var(--gold-primary)]/30 transition-all duration-500 rounded-xl" />
            <div className="absolute inset-0 border-2 border-[var(--gold-primary)]/50 rounded-2xl -rotate-3 group-hover:-rotate-1 transition-all duration-300" />
            
            <div className="relative w-full h-full bg-[#111] rounded-xl overflow-hidden border border-white/10 group-hover:border-[var(--gold-primary)]/50 transition-colors duration-500">
              <Image 
                src="/profile.jpg" 
                alt="Palm Sakdidech" 
                fill 
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[var(--dark-accent)] border border-[var(--gold-primary)] p-4 rounded-lg shadow-2xl">
              <p className="text-xs text-neutral-400 font-mono">NAME: PALM SAKDIDECH</p>
              <p className="text-xs text-[var(--gold-primary)] font-mono">FOUNDER OF BADGAINZ</p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
              เปลี่ยน <span className="text-[var(--gold-primary)]">ไอเดีย</span> ให้เป็นรายได้
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed text-lg font-light">
              <p>
                ผมคือผู้สร้าง <a href="https://horcare-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-[var(--gold-primary)] underline-offset-4 hover:text-[var(--gold-primary)] transition-colors">HorCare</a> ระบบบริหารจัดการหอพักแบบ SaaS (Software as a Service) ที่มีผู้ใช้งานจริง ผมเริ่มต้นจากศูนย์และพิสูจน์แล้วว่าการสร้าง Digital Product และซอฟต์แวร์ สามารถสร้างรายได้แบบ Passive Income ได้อย่างยั่งยืน
              </p>
              <p>
                ในยุคที่ทุกอย่างขับเคลื่อนด้วยเทคโนโลยี การสร้างรายได้ไม่จำเป็นต้องเหนื่อยแบบเดิมๆ 
                เราสามารถใช้ Automation และระบบออนไลน์ทำงานแทนเราได้ 24 ชั่วโมง
              </p>
              <p>
                <strong className="text-[var(--gold-primary)] font-medium">Badgainz</strong> เกิดขึ้นมาเพื่อถ่ายทอดประสบการณ์จริง ไม่โมเม เพื่อสอนให้คุณสามารถเริ่มต้นสร้างธุรกิจออนไลน์ของตัวเองได้ 
                โดยไม่ต้องมีเงินทุนมหาศาล และไม่ต้องเฝ้าหน้าจอ
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FREE ACCESS / LEAD MAGNET SECTION */}
      <section className="py-20 px-6 sm:px-20 relative z-10">
        <FadeIn direction="up" className="max-w-5xl mx-auto bg-gradient-to-br from-[var(--gold-primary)]/20 to-black border border-[var(--gold-primary)]/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Background effect */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--gold-primary)]/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[var(--gold-primary)]/20 text-[var(--gold-primary)] font-bold text-sm rounded-full mb-6 border border-[var(--gold-primary)]/30">
              <Gift className="w-4 h-4" /> FREE ACCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              รับ Mini Course <br className="hidden sm:block"/> และ E-Book ฟรี!
            </h2>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              สำหรับผู้เริ่มต้นที่ยังไม่รู้จะจับต้นชนปลายอย่างไร เราแจกบทเรียนพื้นฐานและ E-Book ไกด์ไลน์การสร้างรายได้ออนไลน์ให้คุณไปศึกษาได้ฟรีๆ ทันที
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="กรอกอีเมลของคุณที่นี่..." 
                className="flex-1 bg-black/50 border border-white/20 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-[var(--gold-primary)] transition-colors"
                required
              />
              <button 
                type="button" 
                className="bg-[var(--gold-primary)] text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                ส่งข้อมูลให้ฉันเลย
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-3">* ข้อมูลจะถูกส่งตรงไปยังอีเมลของคุณโดยอัตโนมัติ</p>
          </div>
          
          <div className="w-full md:w-1/3 relative z-10 flex justify-center">
            {/* Mock E-book/Course Graphic */}
            <div className="w-48 h-64 bg-[#111] border-2 border-[var(--gold-primary)]/50 rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.2)] -rotate-6 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-4 text-center">
               <BookOpen className="w-10 h-10 text-[var(--gold-primary)] mb-4" />
               <h3 className="text-white font-bold text-sm mb-2">Digital Product<br/>Starter Kit</h3>
               <span className="text-[var(--gold-primary)] text-xs font-mono">100% FREE</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 px-6 sm:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--gold-primary)] uppercase mb-2">First Collection</h2>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 uppercase tracking-tight">Class A</h2>
            <p className="text-xl text-white font-medium mb-4">Online and Digital Business</p>
            <p className="text-neutral-400 max-w-2xl mx-auto">เริ่มต้นเส้นทางสู่รายได้ออนไลน์ด้วยคอลเลกชันที่ดีที่สุดของเรา ที่จะเปลี่ยนคุณให้เป็นนักธุรกิจ Digital ระดับ Class A</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {([
              { 
                title: "Class A: First Step in Journey", 
                desc: "E-book สอนหาเงินก้อนแรกจาก Digital Product (หา Pain Point > เช็ค Demand > สร้าง > ขาย)", 
                price: "299",
                oldPrice: "990"
              },
              { 
                title: "Class A: Content to Cash", 
                desc: "สอนทำคอนเทนต์ดึงดูดลูกค้า เทคนิคเปลี่ยนยอดไลค์ให้กลายเป็นยอดขายแบบไม่ต้องยิงแอด", 
                price: "699",
                oldPrice: "1,590",
                comingSoon: true
              },
              { 
                title: "Class A: The Closer System", 
                desc: "สอนทำระบบหลังบ้านอัตโนมัติ พร้อมแจก Prompt และสคริปต์ปิดการขายให้ลูกค้ายอมจ่ายทันที", 
                price: "1,190",
                oldPrice: "2,990",
                comingSoon: true
              },
            ] as {title: string, desc: string, price: string, oldPrice: string, comingSoon?: boolean, badge?: string}[]).map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1} className={`bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 group ${item.comingSoon ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:border-[var(--gold-primary)]/50 hover:-translate-y-2'}`}>
                <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                  {/* Abstract Background for Class A */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,var(--gold-primary),transparent_50%)]" />
                  <h3 className="text-4xl font-black text-white/20 uppercase tracking-widest z-0 absolute">Class A</h3>
                  <div className="text-white font-bold text-2xl z-10 drop-shadow-md">{item.title.split(': ')[1]}</div>
                </div>
                <div className="p-8 relative">
                  {item.badge && (
                    <div className="absolute -top-4 right-6 bg-[var(--gold-primary)] text-black text-xs font-black uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      {item.badge}
                    </div>
                  )}
                  <h3 className={`text-xl font-bold text-white mb-3 transition-colors ${!item.comingSoon && 'group-hover:text-[var(--gold-primary)]'}`}>{item.title}</h3>
                  <p className="text-neutral-400 text-sm mb-8 leading-relaxed h-12">{item.desc}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Price</p>
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-500 line-through text-sm">฿ {item.oldPrice}</span>
                        <span className="text-[var(--gold-primary)] font-black text-2xl">฿ {item.price}</span>
                      </div>
                    </div>
                    {item.comingSoon ? (
                      <span className="text-sm font-bold text-neutral-400 bg-neutral-800 px-6 py-3 rounded">
                        เร็วๆนี้
                      </span>
                    ) : (
                      <Link href="/checkout" className="text-sm font-bold text-black bg-white px-6 py-3 rounded hover:bg-[var(--gold-primary)] transition-colors">
                        สั่งซื้อ
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* BONUSES SECTION */}
      <section className="py-20 px-6 sm:px-20 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
              สมัครวันนี้ รับ <span className="text-[var(--gold-primary)]">3 โบนัสพิเศษ</span> ฟรี!
            </h2>
            <p className="text-neutral-400">ของแถมมีมูลค่าสูงกว่าตัวสินค้าหลัก เพื่อการันตีความสำเร็จของคุณ</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bonus 1 */}
            <FadeIn direction="up" delay={0.1} className="bg-[#111] p-6 rounded-2xl border border-dashed border-[var(--gold-primary)]/50">
              <div className="w-12 h-12 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4">
                <span className="font-black text-xl">1</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Done-for-You Sales Script</h3>
              <p className="text-neutral-400 text-sm mb-4">สคริปต์ปิดการขาย แค่ก๊อปวางก็เปลี่ยนลูกค้าทักเป็นโอนได้ทันที</p>
              <p className="text-[var(--gold-primary)] text-sm font-bold">มูลค่า 4,900.- (ฟรี)</p>
            </FadeIn>
            {/* Bonus 2 */}
            <FadeIn direction="up" delay={0.2} className="bg-[#111] p-6 rounded-2xl border border-dashed border-[var(--gold-primary)]/50">
              <div className="w-12 h-12 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4">
                <span className="font-black text-xl">2</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">100 Viral Hook Templates</h3>
              <p className="text-neutral-400 text-sm mb-4">รวมไอเดียพาดหัวหยุดนิ้ว ทำคอนเทนต์ได้ 100 วันไม่ต้องคิดเอง</p>
              <p className="text-[var(--gold-primary)] text-sm font-bold">มูลค่า 2,900.- (ฟรี)</p>
            </FadeIn>
            {/* Bonus 3 */}
            <FadeIn direction="up" delay={0.3} className="bg-[#111] p-6 rounded-2xl border border-dashed border-[var(--gold-primary)]/50">
              <div className="w-12 h-12 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4">
                <span className="font-black text-xl">3</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">1-on-1 Private Consult</h3>
              <p className="text-neutral-400 text-sm mb-4">ให้คำปรึกษาแบบตัวต่อตัว ช่วยวางแผนและแก้ปัญหาให้ธุรกิจของคุณโดยเฉพาะ</p>
              <p className="text-[var(--gold-primary)] text-sm font-bold">มูลค่า 15,000.- (ฟรี)</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-12 px-6 sm:px-20 relative z-10">
        <FadeIn direction="up" className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-yellow-900/40 border-2 border-[var(--gold-primary)] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold-primary)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
            รับประกันผลลัพธ์ <span className="text-[var(--gold-primary)]">100%</span>
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto relative z-10">
            "ถ้าคุณเรียนจบ ลงมือทำตาม Blueprint แล้ว<strong className="text-white">ยังไม่เห็นผลลัพธ์</strong>... เราจะไม่ทิ้งคุณไว้กลางทาง เราพร้อมให้คำปรึกษาและดูแลคุณไปตลอด <strong className="text-[var(--gold-primary)]">จนกว่าคุณจะหาเงินก้อนแรกได้สำเร็จ!</strong>"
          </p>
          <p className="mt-6 text-sm text-[var(--gold-primary)] font-bold relative z-10">
            ความเสี่ยงเดียวของคุณ คือการไม่ยอมเริ่มต้นวันนี้
          </p>
        </FadeIn>
      </section>
      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 px-6 sm:px-20 relative z-10 bg-black/40 border-t border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">เสียงตอบรับ</h2>
            <p className="text-[var(--gold-primary)]">จากผู้ที่ได้เรียนรู้และนำไปใช้งานจริง</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "คุณเอิร์ท", text: "ปกติทำเพจแต่ไม่รู้จะสร้างรายได้ยังไง E-book เล่มนี้ช่วยให้ผมจัดระเบียบความคิด และเริ่มขายสินค้าชิ้นแรกได้จริงครับ" },
              { name: "คุณนก", text: "ระบบที่สอนใช้งานได้จริง ตอนแรกลองทำเองแล้วงงมาก แต่พอทำตามคอร์สนี้ก็ช่วยประหยัดเวลาตอบแชทลูกค้าไปได้เยอะเลยค่ะ" },
              { name: "คุณสมชาย", text: "เนื้อหาค่อนข้างลงลึก ไม่ใช่น้ำๆ ชอบตรงสคริปต์ปิดการขาย เอาไปปรับใช้กับของที่ขายอยู่แล้ว ลูกค้าโอนไวขึ้นจริงครับ" },
            ].map((review, idx) => (
              <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl relative">
                <div className="text-4xl text-[var(--gold-primary)] opacity-50 absolute top-4 right-4">"</div>
                <p className="text-neutral-300 italic mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold text-[var(--gold-primary)]">
                    {review.name.substring(0, 1)}
                  </div>
                  <span className="text-white font-medium">{review.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.5} className="mt-12 text-center">
            <Link 
              href="/proof" 
              className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold hover:text-white transition-colors"
            >
              ดูผลลัพธ์เพิ่มเติมจากนักเรียนของเรา 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
      {/* WHO IS THIS FOR SECTION */}
      <section className="py-24 px-6 sm:px-20 relative z-10 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">คอร์สนี้ <span className="text-[var(--gold-primary)]">เหมาะกับใคร?</span></h2>
            <p className="text-neutral-400">เช็คให้ชัวร์ว่าคุณคือคนที่ใช่ ก่อนตัดสินใจเริ่มต้น</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right" className="bg-[#111] border border-white/5 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-white">คนที่ "ใช่"</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  พนักงานประจำที่อยากมีรายได้เสริมโดยไม่ต้องลาออก
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  คนที่อยากสร้างธุรกิจแต่ไม่อยากลงทุนสต๊อกสินค้า
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  คนที่ไม่อยากมานั่งตอบแชทลูกค้าทีละคน อยากใช้ Automation
                </li>
              </ul>
            </FadeIn>
            <FadeIn direction="left" className="bg-[#111] border border-white/5 p-8 rounded-2xl opacity-75">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">คนที่ "ไม่ใช่"</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  คนที่มองหาวิธีรวยทางลัดแบบข้ามคืน (Get rich quick)
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  คนที่ไม่พร้อมเรียนรู้สิ่งใหม่ๆ หรือไม่ยอมลงมือทำ
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  คนที่หวังพึ่งโชคชะตามากกว่าการสร้างระบบ
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUE STACK SECTION */}
      <section className="py-24 px-6 sm:px-20 relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border-2 border-[var(--gold-primary)]/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10">
              สรุปสิ่งที่คุณจะได้รับทั้งหมดใน <span className="text-[var(--gold-primary)]">วันนี้</span>
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-bold text-lg flex items-center gap-2"><Package className="w-5 h-5 text-[var(--gold-primary)]"/> Class A: First Step in Journey</span>
                <span className="text-neutral-400">มูลค่า 990.-</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[var(--gold-primary)] font-bold text-lg flex items-center gap-2"><Plus className="w-4 h-4"/> Done-for-You Sales Script</span>
                <span className="text-neutral-400">มูลค่า 4,900.-</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[var(--gold-primary)] font-bold text-lg flex items-center gap-2"><Plus className="w-4 h-4"/> 100 Viral Hook Templates</span>
                <span className="text-neutral-400">มูลค่า 2,900.-</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[var(--gold-primary)] font-bold text-lg flex items-center gap-2"><Plus className="w-4 h-4"/> 1-on-1 Private Consult</span>
                <span className="text-neutral-400">มูลค่า 15,000.-</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-neutral-400 mb-2">รวมมูลค่าทั้งหมด</p>
              <p className="text-3xl font-black text-red-500 line-through mb-4">23,790 บาท</p>
              <p className="text-xl text-white mb-2">แต่วันนี้คุณจ่ายเพียง</p>
              <p className="text-6xl font-black text-[var(--gold-primary)] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                299 บาท
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 sm:px-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">คำถามที่พบบ่อย (FAQ)</h2>
            <p className="text-neutral-400">เคลียร์ทุกข้อสงสัย ก่อนตัดสินใจ</p>
          </FadeIn>
          <div className="space-y-4">
            <FadeIn direction="up" delay={0.1}>
              <details className="bg-[#111] border border-white/10 rounded-xl p-6 group cursor-pointer marker:content-['']">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  ไม่มีพื้นฐานเลย เรียนได้ไหม?
                  <span className="text-[var(--gold-primary)] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-neutral-400 mt-4 leading-relaxed">
                  ได้แน่นอนครับ เนื้อหาออกแบบมาให้คนเริ่มต้นจาก 0 สามารถทำตามได้แบบ Step-by-step พร้อมภาพประกอบและการจับมือทำ
                </p>
              </details>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <details className="bg-[#111] border border-white/10 rounded-xl p-6 group cursor-pointer marker:content-['']">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  ต้องใช้เงินลงทุนเพิ่มไหม?
                  <span className="text-[var(--gold-primary)] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-neutral-400 mt-4 leading-relaxed">
                  แทบไม่ต้องใช้เลยครับ เราเน้นสอนให้ใช้เครื่องมือฟรีที่มีอยู่ในการสร้าง Digital Product และเริ่มทำการตลาดโดยไม่ต้องยิงแอด
                </p>
              </details>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <details className="bg-[#111] border border-white/10 rounded-xl p-6 group cursor-pointer marker:content-['']">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  เรียนที่ไหน มีหมดอายุไหม?
                  <span className="text-[var(--gold-primary)] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-neutral-400 mt-4 leading-relaxed">
                  เรียนออนไลน์ผ่านกลุ่มปิด หรือ E-book คุณสามารถกลับมาทบทวนได้ตลอดชีพ ไม่มีวันหมดอายุครับ
                </p>
              </details>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 sm:px-20 relative z-10 bg-gradient-to-t from-[var(--gold-primary)]/10 to-transparent">
        <FadeIn direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            ถึงเวลาเปลี่ยน <span className="text-[var(--gold-primary)]">ไอเดีย</span> ให้เป็น <span className="text-[var(--gold-primary)]">รายได้</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            คุณเลื่อนมาถึงตรงนี้ แสดงว่าคุณพร้อมแล้วที่จะเปลี่ยนชีวิตตัวเอง อย่าปล่อยให้ความลังเลหยุดคุณไว้
          </p>
          <Link 
            href="/checkout"
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-black bg-gradient-to-r from-[var(--gold-primary)] to-yellow-400 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            สั่งซื้อและรับโบนัสทั้งหมดทันที
          </Link>
          <p className="mt-6 text-sm text-neutral-500">
            ชำระเงินปลอดภัย 100% • รับประกันผลลัพธ์ • โบนัสครบชุด
          </p>
        </FadeIn>
      </section>
      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-white/10 bg-black text-neutral-600 text-sm z-10 relative">
        <p>© 2026 BADGAINZ. All rights reserved.</p>
      </footer>
    </div>
  );
}
