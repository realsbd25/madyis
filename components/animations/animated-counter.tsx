"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-scroll";
import { useCountUp } from "@/hooks/use-counter";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { count, startCounting } = useCountUp(end, duration);

  useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView, startCounting]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
