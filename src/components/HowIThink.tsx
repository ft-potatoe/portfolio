import { Reveal } from "@/components/Reveal";

const STATEMENTS = [
  {
    title: "Automate before you scale.",
    body: "If something happens repeatedly, it should probably become a system.",
  },
  {
    title: "Build for the person using it.",
    body: "A technically impressive system is useless if the user cannot understand it.",
  },
  {
    title: "Constraints make interesting engineering.",
    body: "Market Copilot was designed to work locally on an Intel i3 without a GPU.",
  },
];

export function HowIThink() {
  return (
    <section className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            I like solving the boring problems.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {STATEMENTS.map((s, i) => (
            <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3} className="border-t border-line-soft pt-6">
              <h3 className="font-display text-xl md:text-2xl text-ink leading-snug">
                {s.title}
              </h3>
              <p className="mt-4 text-ink-dim text-sm leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
