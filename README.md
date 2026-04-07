# 🏥 AI Medical Bill Explainer

> A free, AI-powered web app that translates confusing medical bills into plain English — instantly and privately.

---

## The Problem

Medical bills are notoriously confusing. Billing codes, insurance adjustments, and unexplained line items leave patients frustrated, anxious, and unsure what they actually owe. Googling individual codes is slow and decontextualized. Calling billing departments means 45-minute hold times.

There had to be a better way.

---

## What This App Does

You paste your medical bill text. The app explains it — every line item, in plain English — in under 60 seconds.

It also:
- 🚩 Flags charges that look unusual or potentially incorrect
- ❓ Suggests specific questions you can ask your provider or insurer
- 🔒 Stores **nothing** — your bill data is never saved anywhere

---

## Live Demo

> [https://ai-medical-bill-explainer.vercel.app/]

---

## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | React (scaffolded with Bolt.new / Cursor) |
| AI Engine | Claude API (Anthropic) |
| Hosting | Vercel |
| Analytics | Google Analytics |

---

## Project Structure

```
/ai-medical-bill-explainer
├── README.md          ← You are here
├── PRD.md             ← Product Requirements Document
├── GTM.md             ← Go-To-Market Strategy
├── RESEARCH.md        ← User Research & Personas
├── METRICS.md         ← Success Metrics & Instrumentation Plan
├── ROADMAP.md         ← MVP → V2 → V3 Phased Roadmap
├── .env.example       ← Environment variable template
└── /src               ← Application source code
```

---

## PM Documentation

This project includes full product documentation to demonstrate end-to-end product thinking:

- [**PRD**](./PRD.md) — Problem statement, user stories, requirements, and risks
- [**GTM Strategy**](./GTM.md) — Positioning, pricing, launch plan, and channel strategy
- [**User Research**](./RESEARCH.md) — Personas, findings, competitive analysis, and JTBD
- [**Metrics**](./METRICS.md) — North Star metric, metric tree, instrumentation plan
- [**Roadmap**](./ROADMAP.md) — Phased feature plan with success criteria

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/YOURUSERNAME/ai-medical-bill-explainer.git
cd ai-medical-bill-explainer

# Install dependencies
npm install

# Add your API key
cp .env.example .env
# Edit .env and add your Anthropic API key

# Start the app
npm run dev
```

---

## Privacy

This app is **stateless by design.** No bill text, no personal data, and no usage history is stored anywhere. Every session is ephemeral. Your information goes to the AI and back — nothing else.

---

## Disclaimer

This tool is for informational purposes only. It is not a substitute for advice from a qualified medical billing professional, patient advocate, or attorney. If you believe your bill contains errors, consult a qualified professional.

---

## About

Built by [Your Name] — a product manager with 6+ years in Fintech/Healthcare — as a portfolio project to demonstrate end-to-end product thinking, AI fluency, and shipping capability.

[LinkedIn](https://linkedin.com/in/yourprofile) | [Portfolio](https://yoursite.com)
