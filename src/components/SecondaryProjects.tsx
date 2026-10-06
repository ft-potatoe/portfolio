"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type Project = {
  name: string;
  tech: string;
  description: string;
  href?: string;
  highlights?: string[];
  diagram?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Ticket Management System",
    tech: "Java, Concurrency",
    description:
      "A multithreaded producer-consumer system in Java where producer and consumer threads share a bounded ticket pool without races or busy-waiting.",
    highlights: [
      "ReentrantLock with Condition objects (notFull / notEmpty) so threads block and wake precisely instead of polling",
      "Circular buffer as the bounded ticket pool, giving constant-time add and remove",
      "Strategy pattern to keep behaviour pluggable without touching the threading core",
    ],
    diagram: true,
  },
  {
    name: "MatchVerse",
    tech: "NestJS, Prisma, PostgreSQL",
    description:
      "A real-time sports matchmaking and venue booking platform, built as a group project with a NestJS and Prisma backend on PostgreSQL.",
    href: "https://github.com/ft-potatoe/SDGP_MatchVerse",
  },
  {
    name: "Plane Management System",
    tech: "Java, Database Systems",
    description: "A database-backed system for managing flight and booking records.",
  },
  {
    name: "Academic Progression Prediction Program",
    tech: "Python",
    description: "A program modelling and predicting academic progression outcomes.",
  },
  {
    name: "UN SDG Goal 14 Website",
    tech: "Web Development",
    description: "An awareness website built around UN Sustainable Development Goal 14.",
  },
];

function TicketArchitectureDiagram() {
  return (
    <figure className="mb-5 max-w-xl">
      <svg
        viewBox="0 0 560 190"
        role="img"
        aria-label="Producer threads add tickets to a circular buffer guarded by a ReentrantLock and Condition objects; consumer threads remove tickets from it. A strategy interface sits alongside."
        className="w-full h-auto text-ink-dim"
      >
        <defs>
          <marker
            id="tms-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0L10 5L0 10z" fill="currentColor" />
          </marker>
        </defs>

        {/* Producers */}
        <rect x="8" y="55" width="120" height="70" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        <text x="68" y="86" textAnchor="middle" fontSize="13" fill="currentColor">Producer</text>
        <text x="68" y="105" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6">threads</text>

        {/* Lock boundary */}
        <rect
          x="190"
          y="14"
          width="180"
          height="140"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeDasharray="5 4"
        />
        <text x="280" y="34" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.7">
          ReentrantLock
        </text>

        {/* Circular buffer */}
        <circle cx="280" cy="88" r="38" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        <circle cx="280" cy="88" r="16" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        <path d="M280 50V72M280 104V126M242 88H264M296 88H318" stroke="currentColor" strokeOpacity="0.4" />
        <text x="280" y="92" textAnchor="middle" fontSize="10" fill="currentColor">buffer</text>

        <text x="280" y="148" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.7">
          notFull · notEmpty
        </text>

        {/* Consumers */}
        <rect x="432" y="55" width="120" height="70" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        <text x="492" y="86" textAnchor="middle" fontSize="13" fill="currentColor">Consumer</text>
        <text x="492" y="105" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6">threads</text>

        {/* Arrows */}
        <path d="M128 90H188" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#tms-arrow)" />
        <path d="M372 90H430" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#tms-arrow)" />
        <text x="158" y="80" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.7">add</text>
        <text x="401" y="80" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.7">remove</text>

        {/* Strategy */}
        <rect x="190" y="166" width="180" height="22" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <text x="280" y="181" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.8">
          Strategy interface (pluggable behaviour)
        </text>
      </svg>
      <figcaption className="sr-only">Ticket Management System architecture</figcaption>
    </figure>
  );
}

export function SecondaryProjects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-ink">
            Other things I&rsquo;ve built
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <ul className="divide-y divide-line-soft border-t border-b border-line-soft">
            {PROJECTS.map((project, i) => {
              const isOpen = openIndex === i;
              return (
                <li key={project.name}>
                  <button
                    className="w-full text-left py-5 flex items-center justify-between gap-6 group"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base md:text-lg text-ink group-hover:text-blue-bright transition-colors">
                      {project.name}
                    </span>
                    <span className="font-mono text-xs text-ink-faint shrink-0 hidden sm:block">
                      {project.tech}
                    </span>
                    <span
                      className={`text-ink-faint transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-2 text-sm text-ink-dim leading-relaxed max-w-lg sm:hidden">
                        <span className="font-mono text-xs text-ink-faint block mb-1">
                          {project.tech}
                        </span>
                      </p>
                      <p className="pb-5 text-sm text-ink-dim leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                      {project.diagram && <TicketArchitectureDiagram />}
                      {project.highlights && (
                        <ul className="pb-5 space-y-2 max-w-lg list-disc pl-5 text-sm text-ink-dim leading-relaxed marker:text-ink-faint">
                          {project.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      )}
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? 0 : -1}
                          className="inline-block mb-5 font-mono text-xs text-blue-bright hover:underline"
                        >
                          View on GitHub &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
