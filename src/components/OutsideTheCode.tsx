import { Reveal } from "@/components/Reveal";

const FREELANCE = [
  { category: "Jewellery" },
  { category: "Fitness" },
  { category: "Automotive" },
];

const INKTOUCHED_ITEMS = [
  "Personalised gifts",
  "Custom décor",
  "Farm décor collaboration",
  "Qatar + Sri Lanka exhibitions",
];

export function OutsideTheCode() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--warm-bg)", color: "var(--warm-ink)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-xl mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-balance" style={{ color: "var(--warm-ink)" }}>
            Outside the code
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#5c574a" }}>
            I also design things for people, not just systems.
          </p>
        </Reveal>

        {/* Freelance */}
        <Reveal delay={1} className="mb-20">
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-8" style={{ color: "var(--warm-accent)" }}>
            Freelance Web Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {FREELANCE.map((site) => (
              <div
                key={site.category}
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "var(--warm-line)", background: "#ffffff" }}
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #ece6d8 0px, #ece6d8 12px, #e3ddcf 12px, #e3ddcf 24px)",
                  }}
                >
                  <span
                    className="font-mono text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                    style={{ background: "#ffffff", color: "var(--warm-accent)" }}
                  >
                    {site.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-base" style={{ color: "var(--warm-ink)" }}>
                    Client Name
                  </p>
                  <p
                    className="mt-1 text-sm underline decoration-dotted underline-offset-4"
                    style={{ color: "#8a8474" }}
                  >
                    Live site →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* InkTouched */}
        <Reveal delay={2}>
          <div
            className="rounded-2xl p-8 md:p-12 grid md:grid-cols-[1fr_1.2fr] gap-10"
            style={{ background: "#ffffff", border: "1px solid var(--warm-line)" }}
          >
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--warm-accent)" }}>
                Founder · 2021 — Present
              </p>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: "var(--warm-ink)" }}>
                InkTouched
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {INKTOUCHED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed rounded-lg px-4 py-3"
                  style={{ background: "var(--warm-bg)", color: "#4a4638" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
