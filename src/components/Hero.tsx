"use client";

const ORBIT_TERMS = ["Python", "FastAPI", "LLM", "Oracle", "Automation", "Reports"];

const PIPELINE = ["RAW DATA", "AI / LOGIC", "AUTOMATION", "HUMAN DECISION"];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Left column */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright mb-6">
              Computer Science × AI × Automation
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink text-balance">
              I build software that turns manual work into systems.
            </h1>

            <div className="mt-8">
              <p className="text-lg font-display text-ink">Humayra Shajahan</p>
              <p className="text-sm text-ink-faint mt-1">
                Computer Science Undergraduate — AI, Automation &amp; Software Engineering
              </p>
            </div>

            <p className="mt-6 text-base leading-relaxed text-ink-dim max-w-xl">
              Final-year Computer Science undergraduate at the University of Westminster,
              delivered through IIT, Sri Lanka. I build AI-powered tools, automation
              pipelines and software systems for real operational problems — from market
              reporting at a stock exchange to enterprise ERP environments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="underline-anim">Explore my work</span>
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-blue-bright"
              >
                <span className="underline-anim">Let&rsquo;s talk</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right column — systems visual */}
          <div className="relative">
            <div className="relative rounded-2xl border border-line bg-bg-raised px-6 py-10 md:p-10">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint mb-8">
                How the work flows
              </p>

              <div className="flex flex-col gap-0">
                {PIPELINE.map((step, i) => (
                  <div key={step} className="relative">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-ink-faint w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className={`flex-1 rounded-lg border px-4 py-3.5 transition-colors ${
                          i === 1
                            ? "border-blue-dim bg-blue/10"
                            : "border-line-soft bg-bg-raised-2"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs tracking-[0.12em] ${
                            i === 1 ? "text-blue-bright" : "text-ink-dim"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <div className="pl-10 py-1.5" aria-hidden="true">
                        <svg width="2" height="20" viewBox="0 0 2 20" className="text-line">
                          <line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="1 5"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {ORBIT_TERMS.map((term) => (
                  <span
                    key={term}
                    className="font-mono text-[0.65rem] tracking-wide uppercase text-ink-faint border border-line-soft rounded-full px-3 py-1.5 hover:border-blue-dim hover:text-blue-bright transition-colors"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
