import { Reveal } from "@/components/Reveal";

const PHASES = ["AI Fluency", "Vibe Coding", "Claude Code", "MCP", "Operational Adoption"];

export function UpskillingProgramme() {
  return (
    <section className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright">
              04 / Enablement
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">21 weeks</h2>
            <h3 className="mt-3 font-display text-xl text-ink">AI Upskilling Programme</h3>
            <p className="mt-5 text-ink-dim text-base leading-relaxed max-w-sm">
              Designed for a non-technical Operations team and anchored to real
              market-operation use cases — teaching people to work with AI, not just
              deploying it for them.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="overflow-x-auto pb-2">
              <div className="flex items-center gap-0 min-w-max md:min-w-0">
                {PHASES.map((phase, i) => (
                  <div key={phase} className="flex items-center">
                    <div className="rounded-xl border border-line-soft bg-bg-raised px-5 py-6 w-36 md:w-40 text-center hover:border-blue-dim transition-colors">
                      <span className="font-mono text-xs text-ink-faint block mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-ink font-medium leading-snug">
                        {phase}
                      </span>
                    </div>
                    {i < PHASES.length - 1 && (
                      <span className="text-ink-faint px-2 md:px-3 shrink-0" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-sm text-ink-faint max-w-md leading-relaxed">
              This demonstrates that I don&rsquo;t only build AI systems —{" "}
              <span className="text-ink-dim">I help people adopt them.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
