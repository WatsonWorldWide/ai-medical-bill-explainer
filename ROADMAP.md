# Product Roadmap
## AI Medical Bill Explainer
**Version:** 1.0  
**Author:** [Your Name]  
**Last Updated:** April 2026

---

## Roadmap Philosophy

We build in phases, shipping the smallest version that delivers real value, then iterating based on user evidence — not assumptions. Each phase has a clear goal, success criteria, and must meet those criteria before the next phase begins.

---

## Phase Overview

| Phase | Timeframe | Theme | Goal |
|---|---|---|---|
| MVP | Weeks 1–6 | Core value | Validate that users can understand their bills with our tool |
| V2 | Weeks 7–14 | Retention & depth | Increase return visits and expand input methods |
| V3 | Weeks 15–24 | Monetization & scale | Launch freemium model and grow to 2,500 MAU |

---

## MVP — "Does It Work?" (Weeks 1–6)

**Goal:** Ship a working, publicly accessible tool and validate core value.

**Success criteria:**
- 100+ bill explanations completed in first 30 days
- CSAT ≥ 4.0
- Explanation completion rate ≥ 85%

### Features
| Feature | Description | Status |
|---|---|---|
| Text input | User pastes bill text into a simple input field | 🔲 To build |
| AI explanation | Claude API returns plain-English breakdown of bill | 🔲 To build |
| Line-item breakdown | Each charge explained individually | 🔲 To build |
| Error flagging | Highlights potentially incorrect or unusual charges | 🔲 To build |
| Suggested questions | 3–5 questions the user can ask their provider | 🔲 To build |
| Disclaimer | Clear statement: informational only, not medical/legal advice | 🔲 To build |
| Basic analytics | Google Analytics + custom events (see METRICS.md) | 🔲 To build |
| Mobile-responsive UI | Works on phone and desktop | 🔲 To build |

### What we are NOT building in MVP
- User accounts or login
- PDF/image upload
- Data storage or history
- Monetization

---

## V2 — "Keep Them Coming Back" (Weeks 7–14)

**Goal:** Improve retention, expand input methods, and deepen the explanation quality.

**Success criteria:**
- Return visit rate ≥ 30%
- CSAT ≥ 4.3
- MAU reaches 500+

### Features
| Feature | Description | Rationale |
|---|---|---|
| PDF upload | User uploads a PDF of their bill | Reduces friction; most bills are PDFs |
| Image/photo upload | User photographs their paper bill | Serves less tech-savvy users |
| Explanation history | Save past explanations in local browser storage | Encourages return visits |
| Shareable explanations | Generate a shareable link to an explanation | Enables word-of-mouth referrals |
| Improved error detection | Enhanced prompt engineering for billing code anomaly detection | Improves accuracy |
| CSAT survey | 1-question in-app rating after each explanation | Data collection for V3 decisions |

---

## V3 — "Build a Business" (Weeks 15–24)

**Goal:** Launch freemium model, drive paid conversion, and grow sustainably.

**Success criteria:**
- 2,500 MAU
- 5% conversion to paid tier
- Monthly revenue covers API costs

### Features
| Feature | Description | Rationale |
|---|---|---|
| User accounts | Email signup and login | Required for freemium gating |
| Freemium paywall | 3 free explanations/month; unlimited for Plus subscribers | Monetization |
| Family plan | Up to 5 users under one account | Expand ARPU; serve Advocate Alex persona |
| Cost comparison | Show average procedure cost for user's region | High-value differentiator |
| Provider directory | Link to billing department contacts for major hospital systems | Closes the loop on user action |
| Multilingual support | Spanish as first additional language | Expands addressable market |

---

## Future Bets (Unscheduled)

These are ideas we believe in but will not commit to until V3 success is validated:

- **API for employer benefits platforms** — offer the tool as a white-labeled employee benefit
- **Insurance EOB explainer** — companion product for Explanation of Benefits documents
- **Dispute letter generator** — AI-generated letter to send to provider when an error is found
- **Partnership with patient advocacy organizations** — co-branded version for their members

---

## Roadmap Principles

1. **Evidence before features** — every V2+ feature must be justified by user feedback or data
2. **Privacy first** — no feature ships that compromises our stateless, no-storage commitment without deliberate architectural review
3. **Accuracy over speed** — we would rather return a slower, more accurate explanation than a fast, wrong one
4. **Monetize after value is proven** — freemium launches only after retention benchmarks are met
