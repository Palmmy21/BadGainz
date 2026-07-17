"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && analytics) {
      // Basic page_view logging
      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_search: searchParams?.toString() || "",
      });
    }
  }, [pathname, searchParams]);

  return null;
}
