import { Reveal } from "@/components/Reveal";

const FOCUS_AREAS = [
  "Building AI-powered internal tools",
  "Automating repetitive operational workflows",
  "Connecting LLMs with real business data",
  "Designing tools for non-technical users",
  "Explaining technical systems to business teams",
];

const FLOW = [
  "60–75 min manual reporting",
  "Python + FastAPI + LLM + Oracle",
  "<10 min automated report",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright mb-6">
              What I actually do
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-ink text-balance">
              I work where software, AI and operations meet.
            </h2>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <ul className="space-y-4">
                {FOCUS_AREAS.map((item) => (
                  <li key={item} className="flex gap-4 text-ink-dim text-base leading-relaxed">
                    <span className="text-blue-bright font-mono text-xs mt-1.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2} className="mt-12 rounded-xl border border-line bg-bg-raised p-6">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint mb-5">
                Problem → System → Outcome
              </p>
              <div className="flex flex-col gap-3">
                {FLOW.map((step, i) => (
                  <div key={step}>
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-mono ${
                        i === 1
                          ? "border border-blue-dim bg-blue/10 text-blue-bright"
                          : "border border-line-soft text-ink-dim"
                      }`}
                    >
                      {step}
                    </div>
                    {i < FLOW.length - 1 && (
                      <div className="text-center text-ink-faint py-1.5" aria-hidden="true">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
