"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const CONTEXT: Record<string, string> = {
  FastAPI: "Used for internal report automation APIs",
  Ollama: "Used for local LLM deployment in Market Copilot",
  "Anthropic API": "Used to generate narrative market commentary",
  "Oracle EBR": "Used in enterprise ERP development at IFS",
  "Prompt Engineering": "Applied across report generation and Market Copilot",
  "Multi-Agent Systems": "Explored in automation pipeline design",
};

const GROUPS: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  { title: "Frameworks", items: ["FastAPI", "Spring Boot", "NestJS", "React", "Vite", "Prisma"] },
  {
    title: "AI & Automation",
    items: [
      "Claude",
      "Anthropic API",
      "Ollama",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Report Automation",
    ],
  },
  { title: "Engineering", items: ["Oracle EBR", "GitHub", "Database Management", "ERP Systems"] },
  { title: "Product / Design", items: ["Figma", "Cursor", "v0"] },
];

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-3xl md:text-4xl text-ink">Stack</h2>
          <p
            className="text-sm text-ink-faint h-5 transition-opacity duration-200"
            aria-live="polite"
          >
            {active ? CONTEXT[active] ?? "" : ""}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-1 gap-y-2">
                {group.items.map((item, idx) => (
                  <span key={item} className="inline-flex items-center">
                    <button
                      className={`font-display text-lg md:text-xl transition-colors ${
                        active === item ? "text-blue-bright" : "text-ink hover:text-blue-bright"
                      }`}
                      onMouseEnter={() => setActive(item)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(item)}
                      onBlur={() => setActive(null)}
                    >
                      {item}
                    </button>
                    {idx < group.items.length - 1 && (
                      <span className="text-ink-faint mx-2" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
