"use client";

import { useEffect, useRef, useState } from "react";

type Tab = { id: string; label: string };

export default function TabStrip({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const [stroke, setStroke] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-spy: the section nearest the top of the viewport owns the tab
  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [tabs]);

  // Move the underline under the active tab and keep it scrolled into view on phones
  useEffect(() => {
    const el = active ? tabRefs.current[active] : null;
    if (!el) return;
    setStroke({ left: el.offsetLeft, width: el.offsetWidth });
    el.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <div className="sticky top-16 z-30 bg-[var(--surface)] border-b border-[var(--line)]">
      <nav
        aria-label="หมวดในโปรไฟล์"
        className="relative max-w-6xl mx-auto px-2 sm:px-4 flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            aria-current={active === tab.id ? "true" : undefined}
            className={`shrink-0 px-4 py-3.5 font-[family-name:var(--font-display)] text-[15px] font-medium transition-colors ${
              active === tab.id ? "text-[var(--ink)]" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            {tab.label}
          </a>
        ))}
        <span
          aria-hidden
          className="tab-underline absolute bottom-0 left-0"
          style={{ width: stroke.width - 24, transform: `translateX(${stroke.left + 12}px)` }}
        />
      </nav>
    </div>
  );
}
