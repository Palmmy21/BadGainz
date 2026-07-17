"use client";

import { useState, useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

export type Variant = "A" | "B";

export function useABTesting(experimentName: string) {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    // Check if user already has a variant for this experiment
    const storageKey = `ab_test_${experimentName}`;
    const storedVariant = localStorage.getItem(storageKey) as Variant;

    if (storedVariant && (storedVariant === "A" || storedVariant === "B")) {
      setVariant(storedVariant);
    } else {
      // Randomly assign 50/50
      const newVariant = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem(storageKey, newVariant);
      setVariant(newVariant);
      
      // Log the assignment to analytics if needed
      if (analytics) {
        logEvent(analytics, "ab_test_assigned", {
          experiment_name: experimentName,
          variant: newVariant
        });
      }
    }
  }, [experimentName]);

  const trackConversion = (eventName: string, additionalParams?: Record<string, any>) => {
    if (analytics && variant) {
      logEvent(analytics, eventName, {
        experiment_name: experimentName,
        variant,
        ...additionalParams,
      });
    }
  };

  return { variant, trackConversion };
}
