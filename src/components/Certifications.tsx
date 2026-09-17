import { Reveal } from "@/components/Reveal";

const CERTS = [
  { name: "Claude 101", issuer: "Anthropic Academy" },
  { name: "Claude Code 101", issuer: "Anthropic Academy" },
  { name: "Advanced Design Patterns: Design Principles", issuer: "LinkedIn Learning" },
  { name: "Java: Advanced Concepts for High-Performance Development", issuer: "LinkedIn Learning" },
  { name: "Java Object-Oriented Programming", issuer: "LinkedIn Learning" },
  { name: "MySQL Development", issuer: "LinkedIn Learning" },
];

export function Certifications() {
  return (
    <section className="py-20 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-10">
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint">
            Certifications
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <ul className="divide-y divide-line-soft border-t border-b border-line-soft">
            {CERTS.map((cert) => (
              <li
                key={cert.name}
                className="py-4 flex flex-wrap items-baseline justify-between gap-2"
              >
                <span className="text-sm text-ink">{cert.name}</span>
                <span className="font-mono text-xs text-ink-faint">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
