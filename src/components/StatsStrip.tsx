import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "75 min → <10 min", label: "Manual reporting time" },
  { value: "21 weeks", label: "AI upskilling programme" },
  { value: "1 year", label: "Enterprise software engineering" },
  { value: "5 phases", label: "AI adoption programme" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-line-soft">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="py-8 px-5 md:px-8 first:pl-0 md:first:pl-0"
            >
              <p className="font-display text-xl md:text-2xl text-ink tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-ink-faint leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
