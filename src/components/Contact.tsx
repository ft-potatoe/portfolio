"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const EMAIL = "humayrashajahan@gmail.com";
const PHONE = "+94 76 733 2238";
const LINKEDIN = "https://linkedin.com/in/humayrashajahan";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "website visitor"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight text-balance">
              Have a problem worth automating?
            </h2>
            <p className="mt-5 text-lg text-ink-dim">Let&rsquo;s build something useful.</p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="block text-base text-ink hover:text-blue-bright transition-colors underline-anim w-fit"
              >
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="block text-base text-ink hover:text-blue-bright transition-colors underline-anim w-fit"
              >
                {PHONE}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-ink hover:text-blue-bright transition-colors underline-anim w-fit"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref;
              }}
            >
              <div>
                <label htmlFor="name" className="block text-xs text-ink-faint mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border border-line-soft bg-bg-raised text-ink text-sm px-4 py-3 focus:border-blue-dim"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-ink-faint mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-line-soft bg-bg-raised text-ink text-sm px-4 py-3 focus:border-blue-dim"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-ink-faint mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-md border border-line-soft bg-bg-raised text-ink text-sm px-4 py-3 focus:border-blue-dim resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-md bg-blue hover:bg-blue-dim transition-colors text-white text-sm font-medium px-6 py-3"
              >
                Send message
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <p className="text-xs text-ink-faint pt-1">
                Opens your email client with this message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
