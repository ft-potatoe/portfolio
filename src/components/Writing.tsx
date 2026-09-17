import { Reveal } from "@/components/Reveal";

const ARTICLES = [
  {
    number: "01",
    title: "How I Turned a 75-Minute Manual Report Into a 10-Minute Automated Pipeline",
    teaser:
      "What I learned from turning a repetitive market-reporting workflow into an automated system.",
  },
  {
    number: "02",
    title: "Building a Market Copilot: Classic ML Meets a Local LLM",
    teaser:
      "Why combining traditional ML with a locally hosted LLM made sense under real hardware constraints.",
  },
  {
    number: "03",
    title: "What I Learned Running a 21-Week AI Training Programme for Non-Developers",
    teaser:
      "What changes when AI education is built around real operational problems instead of theory.",
  },
];

export function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Notes from building things
          </h2>
        </Reveal>

        <div className="divide-y divide-line-soft border-t border-line-soft">
          {ARTICLES.map((article, i) => (
            <Reveal
              key={article.number}
              delay={((i % 4) + 1) as 1 | 2 | 3}
              className="py-8 grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-baseline"
            >
              <span className="font-mono text-xs text-ink-faint">{article.number}</span>
              <div>
                <h3 className="font-display text-lg md:text-xl text-ink leading-snug max-w-xl">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed max-w-lg">
                  {article.teaser}
                </p>
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint border border-line-soft rounded-full px-3 py-1.5 whitespace-nowrap">
                Coming soon
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
