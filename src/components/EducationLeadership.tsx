import { Reveal } from "@/components/Reveal";

const MODULES = [
  { name: "Computer Science Fundamentals", score: "92.5%" },
  { name: "Software Development II", score: "92.5%" },
  { name: "Mathematics for Computing", score: "90%" },
  { name: "Database Systems", score: "87.5%" },
  { name: "Object-Oriented Programming", score: "81%" },
  { name: "Web Development", score: "79%" },
];

const LEADERSHIP = [
  "L5 Chief Batch Representative — IIT",
  "Vice Chairperson — IEEE EMBS Student Branch Chapter, IIT",
  "Hult Prize — On-Campus & Nationals Judges & Experts Lead",
  "Coderally Hackathon — Top 6",
  "Secretary — English Literary Union",
  "Senior Prefect",
  "Sports Captain",
];

export function EducationLeadership() {
  return (
    <section className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-6">
              Education
            </h2>
            <h3 className="font-display text-xl md:text-2xl text-ink">
              BSc Computer Science
            </h3>
            <p className="text-sm text-ink-faint mt-1">
              University of Westminster / IIT Sri Lanka
            </p>
            <p className="font-mono text-xs text-ink-faint mt-1">2023 — Present</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-dim bg-blue/10 px-4 py-2">
              <span className="font-mono text-xs text-blue-bright tracking-wide">
                &gt;80% First / Second Year Average
              </span>
            </div>

            <ul className="mt-8 space-y-2.5">
              {MODULES.map((m) => (
                <li key={m.name} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-ink-dim">{m.name}</span>
                  <span className="font-mono text-xs text-ink-faint tabular-nums shrink-0">
                    {m.score}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line-soft space-y-1.5 text-sm text-ink-dim">
              <p>Edexcel International Advanced Level — Mathematics, Physics, Business Studies</p>
              <p>G.C.E. Ordinary Level — 7 A&rsquo;s</p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-faint mb-6">
              Leadership
            </h2>
            <ul className="space-y-4">
              {LEADERSHIP.map((item) => (
                <li key={item} className="flex gap-4 text-sm text-ink-dim leading-relaxed">
                  <span className="text-blue-bright font-mono text-xs mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
