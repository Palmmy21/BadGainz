"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function FreeEbookForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      // Just use the email prefix as name since we don't have a name field
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: email.split("@")[0], email }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      router.push(`/free/download?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
      <label htmlFor="free-email" className="sr-only">อีเมล</label>
      <input
        id="free-email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="อีเมลของคุณ"
        className="field flex-1 min-w-0 px-4 py-3"
        required
      />
      <button type="submit" disabled={isLoading} className="btn btn-dark px-6 py-3 whitespace-nowrap">
        {isLoading ? "กำลังส่ง..." : "ส่ง E-book ให้ฉัน"}
        {!isLoading && <ArrowRight className="w-4 h-4" aria-hidden />}
      </button>
    </form>
  );
}
