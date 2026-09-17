import { Reveal } from "@/components/Reveal";

const TIMELINE = [
  {
    role: "Market Operations & Strategy",
    org: "Qatar Stock Exchange",
    period: "Current",
    badge: "AI / Automation",
    points: [
      "AI-powered market reporting automation",
      "Internal analytics tooling",
      "21-week AI upskilling programme",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "IFS",
    period: "June 2025 — May 2026",
    points: [
      "Enterprise ERP development",
      "Oracle EBR",
      "SQL",
      "AI adoption initiatives",
      "Client demonstrations",
      "User education",
      "Git / SDLC",
    ],
  },
  {
    role: "Research Assistant Intern",
    org: "Liulian Tech",
    period: "Feb 2024 — Mar 2025",
    points: [],
  },
  {
    role: "Founder",
    org: "InkTouched",
    period: "June 2021 — Present",
    points: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink">Experience</h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line-soft"
            aria-hidden="true"
          />
          <ul className="space-y-12">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.role + item.org} as="li" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative pl-10">
                  <span
                    className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-blue"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs text-ink-faint">{item.period}</span>
                    {item.badge && (
                      <span className="font-mono text-[0.65rem] tracking-wide uppercase text-blue-bright border border-blue-dim bg-blue/10 rounded-full px-2.5 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-ink">{item.role}</h3>
                  <p className="text-sm text-ink-faint mt-0.5">{item.org}</p>
                  {item.points.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-xs text-ink-dim border border-line-soft rounded-full px-3 py-1"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
