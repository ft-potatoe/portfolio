"use client";

import { useReveal } from "@/lib/useReveal";
import { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
