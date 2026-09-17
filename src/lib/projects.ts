export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  metric: string;
  tech: string[];
  problem: string;
  existingWorkflow: string;
  solution: string;
  architecture: string[];
  outcome: string;
  learned: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "daily-market-report-generator",
    label: "01 / Automation",
    title: "Daily Market Report Generator",
    summary:
      "Automated a daily market reporting pipeline for QSE, reducing a 60–75 minute manual process to under 10 minutes with scheduled PDF delivery.",
    metric: "75 → <10 min",
    tech: ["Oracle XE", "Python", "Anthropic API", "PDF Generation", "Scheduling"],
    problem:
      "Daily market reports at the Qatar Stock Exchange were compiled manually — pulling figures from Oracle databases, formatting commentary, and assembling a PDF by hand every trading day.",
    existingWorkflow:
      "An analyst would query Oracle XE for the day's market data, manually interpret trends, write narrative commentary, and lay out a PDF report — a repetitive process taking 60–75 minutes per day.",
    solution:
      "Built a Python pipeline that pulls structured data directly from Oracle XE, uses the Anthropic API to generate narrative market commentary from the data, and automatically assembles and formats a PDF report.",
    architecture: [
      "Oracle XE — source of daily market data",
      "Python — orchestration and data processing",
      "Anthropic API — narrative commentary generation",
      "Report generation layer — structured PDF assembly",
      "Scheduled delivery to stakeholders",
    ],
    outcome:
      "Reduced report generation time from 60–75 minutes to under 10 minutes, with consistent formatting and scheduled delivery replacing manual assembly.",
    learned:
      "Working directly with a legacy Oracle environment taught me how to design automation that respects existing data infrastructure rather than replacing it — and how to integrate an LLM into a pipeline where output accuracy and tone matter to a financial audience.",
  },
  {
    slug: "market-copilot",
    label: "02 / Applied AI",
    title: "Market Copilot",
    summary:
      "A locally-run assistant combining classic ML retrieval with a local LLM to answer market questions — no GPU required.",
    metric: "Runs on Intel i3 · No GPU",
    tech: ["Random Forest", "XGBoost", "Ollama", "SQLite"],
    problem:
      "Operations staff needed quick answers to market questions without waiting on an analyst or relying on cloud infrastructure that wasn't available in the deployment environment.",
    existingWorkflow:
      "Questions about market data were routed to analysts manually, creating delays for simple, repeatable lookups and analysis.",
    solution:
      "Built a retrieval and scoring layer using Random Forest and XGBoost models over structured market data stored in SQLite, paired with a locally-hosted LLM (via Ollama) to generate natural-language answers grounded in the retrieved data.",
    architecture: [
      "User question — natural language input",
      "ML retrieval / scoring — Random Forest + XGBoost over SQLite",
      "Local LLM — Ollama, no external API calls",
      "Answer — grounded natural-language response",
    ],
    outcome:
      "Delivered a working assistant that runs entirely on modest hardware — an Intel i3 machine with no dedicated GPU — proving that useful AI tooling doesn't require cloud-scale infrastructure.",
    learned:
      "Designing under hard hardware constraints forced deliberate trade-offs between model size, latency and accuracy — practical engineering discipline that's easy to skip when GPUs are assumed.",
  },
  {
    slug: "self-service-report-builder",
    label: "03 / Internal Tools",
    title: "Self-Service Report Builder",
    summary:
      "An internal tool that lets non-technical staff generate reports on demand, without developer involvement.",
    metric: "Developer-dependent → self-service",
    tech: ["Python", "FastAPI", "React"],
    problem:
      "Every new report request required a developer to write custom queries and formatting logic, creating a bottleneck for operational teams.",
    existingWorkflow:
      "Report requests were logged, queued, and built one at a time by a developer — often taking days to turn around a simple data cut.",
    solution:
      "Built a self-service interface where users select a report type, date range and data fields, then generate the report directly — removing the developer from the loop for standard requests.",
    architecture: [
      "Select Report — choose report type",
      "Choose Date — define the reporting window",
      "Select Data — pick relevant fields",
      "Generate — pipeline assembles and returns the report",
    ],
    outcome:
      "Moved standard reporting from a developer-dependent request queue to a self-service flow operations staff can run themselves.",
    learned:
      "The hardest part wasn't the backend — it was designing an interface simple enough that non-technical users trusted it without training.",
  },
];
