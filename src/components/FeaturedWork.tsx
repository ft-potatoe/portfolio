"use client";

import { useState, KeyboardEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { CASE_STUDIES } from "@/lib/projects";
import { ReportGenerator } from "@/components/ReportGeneratorDemo";

const PIPELINE_01 = ["Oracle XE", "Python", "Anthropic API", "Report Generation", "PDF", "Stakeholders"];

function onCardKeyDown(e: KeyboardEvent<HTMLDivElement>, onOpen: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onOpen();
  }
}

export function FeaturedWork() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openStudy = CASE_STUDIES.find((s) => s.slug === openSlug) ?? null;

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            Selected systems I&rsquo;ve built
          </h2>
          <p className="mt-4 text-ink-dim text-base leading-relaxed">
            Real projects built around operational problems, automation and applied AI.
          </p>
        </Reveal>

        {/* Project 01 */}
        <Reveal
          as="article"
          className="group relative rounded-2xl border border-line-soft hover:border-blue-dim bg-bg-raised transition-all duration-300 hover:-translate-y-1 cursor-pointer mb-8"
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="Open case study: Daily Market Report Generator"
            className="w-full text-left p-6 md:p-10 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14"
            onClick={() => setOpenSlug("daily-market-report-generator")}
            onKeyDown={(e) => onCardKeyDown(e, () => setOpenSlug("daily-market-report-generator"))}
          >
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright">
                01 / Automation
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink leading-tight">
                Daily Market Report Generator
              </h3>
              <p className="mt-4 text-ink-dim text-base leading-relaxed max-w-md">
                Automated a daily market reporting pipeline for QSE, reducing a 60–75
                minute manual process to under 10 minutes with scheduled PDF delivery.
              </p>
              <p className="mt-8 font-display text-3xl md:text-4xl text-blue-bright tabular-nums">
                75 → &lt;10 min
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Oracle XE", "Python", "Anthropic API"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] tracking-wide uppercase text-ink-faint border border-line-soft rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-ink group-hover:text-blue-bright transition-colors">
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>

            <div className="flex flex-col gap-0 justify-center">
              {PIPELINE_01.map((step, i) => (
                <div key={step}>
                  <div
                    className={`rounded-lg border px-4 py-3 font-mono text-xs tracking-wide transition-all duration-300 ${
                      "border-line-soft text-ink-dim group-hover:border-blue-dim group-hover:text-blue-bright"
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {step}
                  </div>
                  {i < PIPELINE_01.length - 1 && (
                    <div className="pl-4 py-1 text-ink-faint" aria-hidden="true">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Project 02 — Market Copilot */}
        <Reveal
          as="article"
          className="relative rounded-2xl border border-line-soft hover:border-blue-dim bg-bg-raised-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer mb-8"
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="Open case study: Market Copilot"
            className="group w-full text-left p-6 md:p-10"
            onClick={() => setOpenSlug("market-copilot")}
            onKeyDown={(e) => onCardKeyDown(e, () => setOpenSlug("market-copilot"))}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="max-w-md">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright">
                  02 / Applied AI
                </span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink leading-tight">
                  Market Copilot
                </h3>
                <p className="mt-4 text-ink-dim text-base leading-relaxed">
                  A retrieval and local-LLM assistant that answers market questions
                  without cloud infrastructure.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-dim bg-blue/10 px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-bright" />
                  <span className="font-mono text-xs text-blue-bright tracking-wide">
                    Runs locally — Intel i3 / No GPU
                  </span>
                </div>
                <span className="mt-8 flex items-center gap-2 text-sm text-ink group-hover:text-blue-bright transition-colors">
                  View case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>

              <div className="flex-1 max-w-sm w-full">
                <div className="rounded-xl border border-line-soft bg-bg p-5">
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint mb-4">
                    Query flow
                  </p>
                  <FlowStep label="User question" />
                  <Arrow />
                  <FlowStep label="ML retrieval / scoring" />
                  <Arrow />
                  <FlowStep label="Local LLM" active />
                  <Arrow />
                  <FlowStep label="Answer" />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Random Forest", "XGBoost", "Ollama", "SQLite"].map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.6rem] tracking-wide uppercase text-ink-faint border border-line-soft rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project 03 — Self-Service Report Builder */}
        <Reveal
          as="article"
          className="relative rounded-2xl border border-line-soft hover:border-blue-dim bg-bg-raised transition-all duration-300"
        >
          <div className="group w-full text-left p-6 md:p-10 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright">
                03 / Internal Tools
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink leading-tight">
                Self-Service Report Builder
              </h3>
              <p className="mt-4 text-ink-dim text-base leading-relaxed max-w-sm">
                From developer-dependent reporting to self-service analytics.
              </p>
              <button
                className="mt-8 flex items-center gap-2 text-sm text-ink hover:text-blue-bright transition-colors"
                onClick={() => setOpenSlug("self-service-report-builder")}
              >
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            <ReportGenerator />
          </div>
        </Reveal>
      </div>

      {openStudy && (
        <CaseStudyModal study={openStudy} onClose={() => setOpenSlug(null)} />
      )}
    </section>
  );
}

function FlowStep({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-3.5 py-2.5 font-mono text-xs tracking-wide ${
        active ? "border-blue-dim bg-blue/10 text-blue-bright" : "border-line-soft text-ink-dim"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-center text-ink-faint py-1 text-xs" aria-hidden="true">
      ↓
    </div>
  );
}
