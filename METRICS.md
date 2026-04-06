# Metrics & Instrumentation Plan
## AI Medical Bill Explainer
**Version:** 1.0  
**Author:** [Your Name]  
**Last Updated:** April 2026

---

## 1. North Star Metric

**Bills successfully explained per month**

This metric captures both acquisition (users finding the product) and core value delivery (completing an explanation). It is the single best indicator of whether the product is working.

---

## 2. Metric Tree

```
North Star: Bills explained per month
│
├── Input Metrics (levers we control)
│   ├── Unique visitors (traffic)
│   ├── Explanation start rate (% of visitors who submit a bill)
│   └── Explanation completion rate (% of starts that succeed)
│
└── Output Metrics (outcomes we measure)
    ├── CSAT score (quality of experience)
    ├── Return visit rate (retention signal)
    └── Sharing/referral rate (organic growth signal)
```

---

## 3. Metric Definitions

| Metric | Definition | Target (Month 3) | Tool |
|---|---|---|---|
| Monthly Active Users (MAU) | Unique users who complete ≥1 explanation per month | 500 | Google Analytics |
| Explanation start rate | % of visitors who submit bill text | > 60% | Custom event |
| Explanation completion rate | % of submissions that return a result | > 90% | Custom event |
| CSAT score | Average rating from in-app 1–5 survey | > 4.2 | In-app survey |
| Return visit rate | % of users who return within 30 days | > 30% | GA Cohort report |
| Avg. session duration | Time from first input to exit | 3–5 min | Google Analytics |
| API error rate | % of submissions that fail due to API issues | < 2% | Console logs |
| P95 response time | 95th percentile AI response time | < 10 seconds | Performance monitor |

---

## 4. Counter Metrics

*These exist to ensure we don't optimize North Star at the expense of quality or safety.*

| Counter Metric | Why It Matters | Threshold |
|---|---|---|
| Complaint rate | Tracks harmful or misleading outputs | < 0.5% of explanations |
| Disclaimer skip rate | Ensures users see safety messaging | Monitor only |
| Avg. explanation length | Too short = low quality; too long = overwhelming | 200–600 words |

---

## 5. Instrumentation Plan

### Events to Track (Google Analytics / Custom)

| Event Name | Trigger | Properties |
|---|---|---|
| `page_view` | User visits the app | Page URL, referrer |
| `bill_input_started` | User begins typing in the input field | Input method (text) |
| `bill_submitted` | User clicks "Explain my bill" | Character count (no content) |
| `explanation_received` | AI response rendered on screen | Response time (ms) |
| `explanation_error` | API call fails | Error type |
| `csat_submitted` | User submits satisfaction rating | Rating (1–5) |
| `question_copied` | User copies a suggested provider question | Question index |
| `share_clicked` | User clicks share button (V2) | Channel |

### Privacy Rules
- **Never log bill content** — only metadata (character count, response time)
- **No PII collection** in MVP — no accounts, no email capture
- **Anonymized session IDs** only

---

## 6. Dashboards

### Daily Dashboard (Operational)
- Total explanations today vs. yesterday
- API error rate
- P95 response time
- Any anomalies in completion rate

### Weekly Dashboard (Product)
- MAU trend
- Explanation start rate and completion rate
- CSAT score
- Top traffic sources (channel attribution)

### Monthly Dashboard (Strategic)
- North Star trend (bills explained MoM)
- Return visit rate
- User feedback themes
- Cost per explanation (API cost / total explanations)

---

## 7. Experimentation Framework (V2)

Once we have sufficient traffic (>1,000 MAU), we will run A/B tests on:
- Input prompt copy ("Paste your bill" vs. "Tell us about your bill")
- Explanation format (bullet list vs. conversational paragraphs)
- CSAT survey placement (post-explanation vs. on exit)

**Minimum detectable effect:** 10% improvement in explanation completion rate  
**Required sample size per variant:** ~500 users  
**Testing tool:** PostHog (free tier)
