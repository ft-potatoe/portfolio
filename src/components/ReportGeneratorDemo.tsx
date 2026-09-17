"use client";

import { useState } from "react";

const REPORT_TYPES = ["Daily Market Summary", "Weekly Trend Report", "Sector Breakdown"];

export function ReportGenerator() {
  const [reportType, setReportType] = useState(REPORT_TYPES[0]);
  const [date, setDate] = useState("Today");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (loading) return;
    setLoading(true);
    setGenerated(false);
    window.setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 900);
  };

  return (
    <div
      className="rounded-xl border border-line-soft bg-bg p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-faint mb-4">
        Report builder — demo
      </p>

      <label className="block mb-3">
        <span className="text-xs text-ink-faint mb-1.5 block">Select Report</span>
        <select
          value={reportType}
          onChange={(e) => {
            setReportType(e.target.value);
            setGenerated(false);
          }}
          className="w-full rounded-md border border-line-soft bg-bg-raised text-ink text-sm px-3 py-2.5 focus:border-blue-dim"
        >
          {REPORT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-xs text-ink-faint mb-1.5 block">Choose Date</span>
        <select
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setGenerated(false);
          }}
          className="w-full rounded-md border border-line-soft bg-bg-raised text-ink text-sm px-3 py-2.5 focus:border-blue-dim"
        >
          {["Today", "This Week", "This Month"].map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </label>

      <button
        onClick={handleGenerate}
        className="w-full rounded-md bg-blue hover:bg-blue-dim transition-colors text-white text-sm font-medium py-2.5 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Generating…" : "Generate"}
      </button>

      <div
        className={`mt-4 rounded-md border px-3.5 py-2.5 text-sm font-mono flex items-center gap-2 transition-all duration-300 ${
          generated
            ? "border-blue-dim bg-blue/10 text-blue-bright opacity-100"
            : "border-line-soft text-ink-faint opacity-60"
        }`}
      >
        {generated ? (
          <>
            <span>✓</span> Report generated
          </>
        ) : (
          <span>Awaiting generation</span>
        )}
      </div>
    </div>
  );
}
