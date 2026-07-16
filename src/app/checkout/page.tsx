import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-[#111111] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">ชำระเงิน</h2>
        
        <div className="bg-black/50 p-6 rounded-xl border border-white/5 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-neutral-400">สินค้า</span>
            <span className="text-white font-medium">Digital Product Blueprint</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold text-[var(--gold-primary)]">
            <span>รวมทั้งหมด</span>
            <span>฿ 990.00</span>
          </div>
        </div>

        <button className="w-full bg-[var(--gold-primary)] text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors">
          ชำระเงินผ่าน Stripe / PromptPay
        </button>
        
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
            กลับไปหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
