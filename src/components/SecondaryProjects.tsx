"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const PROJECTS = [
  {
    name: "MatchVerse",
    tech: "Full-stack web app",
    description: "A platform-style application exploring matching and discovery flows.",
  },
  {
    name: "Ticket Management System",
    tech: "Java, OOP",
    description: "A system for logging, tracking and resolving support tickets.",
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
                      <p className="pb-5 text-sm text-ink-dim leading-relaxed max-w-lg sm:hidden">
                        <span className="font-mono text-xs text-ink-faint block mb-1">
                          {project.tech}
                        </span>
                      </p>
                      <p className="pb-5 text-sm text-ink-dim leading-relaxed max-w-lg">
                        {project.description}
                      </p>
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
