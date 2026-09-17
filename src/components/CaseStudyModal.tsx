"use client";

import { useEffect, useRef } from "react";
import type { CaseStudy } from "@/lib/projects";

export function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg animate-[fadeIn_300ms_ease]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      ref={dialogRef}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
      <div className="h-full overflow-y-auto">
        <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-line-soft">
          <div className="mx-auto max-w-4xl px-6 md:px-10 h-16 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-bright">
              {study.label}
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              className="text-sm text-ink-dim hover:text-ink flex items-center gap-2"
              aria-label="Close case study"
            >
              Close
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 md:px-10 py-14 md:py-20">
          <h2
            id="case-study-title"
            className="font-display text-3xl md:text-5xl text-ink leading-tight text-balance"
          >
            {study.title}
          </h2>
          <p className="mt-4 font-display text-xl md:text-2xl text-blue-bright">
            {study.metric}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.65rem] tracking-wide uppercase text-ink-faint border border-line-soft rounded-full px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-14 space-y-12">
            <Block title="Problem" body={study.problem} />
            <Block title="Existing Workflow" body={study.existingWorkflow} />
            <Block title="Solution" body={study.solution} />

            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-5">
                Architecture
              </h3>
              <ol className="space-y-3">
                {study.architecture.map((step, i) => (
                  <li key={step} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-blue-bright mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink-dim text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Block title="Outcome" body={study.outcome} />
            <Block title="What I Learned" body={study.learned} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-3">
        {title}
      </h3>
      <p className="text-ink-dim text-base leading-relaxed max-w-2xl">{body}</p>
    </div>
  );
}
