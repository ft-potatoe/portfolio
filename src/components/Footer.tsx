export function Footer() {
  return (
    <footer className="border-t border-line-soft py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-display text-lg text-ink">Humayra Shajahan</p>
          <p className="text-sm text-ink-faint mt-1">Computer Science × AI × Automation</p>
          <p className="text-sm text-ink-faint">Colombo, Sri Lanka</p>
        </div>

        <div className="flex flex-col md:items-end gap-3">
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/humayrashajahan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-dim hover:text-blue-bright transition-colors underline-anim"
            >
              LinkedIn
            </a>
            <a
              href="mailto:humayrashajahan@gmail.com"
              className="text-ink-dim hover:text-blue-bright transition-colors underline-anim"
            >
              Email
            </a>
            <a
              href="https://github.com/ft-potatoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-dim hover:text-blue-bright transition-colors underline-anim"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Humayra Shajahan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
