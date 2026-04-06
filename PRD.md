# Product Requirements Document (PRD)
## AI Medical Bill Explainer
**Version:** 1.0  
**Author:** [Your Name]  
**Last Updated:** April 2026  
**Status:** Draft

---

## 1. Problem Statement

Medical bills are among the most confusing documents an average American receives. Patients are regularly presented with line items filled with billing codes, insurance adjustments, and unexplained charges — with no guidance on what they mean, whether they are correct, or what action to take.

This confusion leads to:
- Unpaid bills due to distrust or misunderstanding
- Missed opportunities to dispute incorrect charges
- Increased financial anxiety for patients already dealing with health challenges
- Avoidable calls to billing departments that strain provider resources

There is no simple, accessible tool that helps everyday consumers understand their medical bills in plain English.

---

## 2. Product Vision

An AI-powered web app that empowers patients to understand their medical bills instantly — translating confusing codes and jargon into clear, actionable language — so they can make informed decisions with confidence.

---

## 3. Goals & Success Metrics

### Product Goals
- Reduce the time it takes a patient to understand their medical bill from hours to minutes
- Surface potential billing errors that users can act on
- Build trust through clear, honest, and empathetic communication

### Success Metrics (KPIs)

| Metric | Target (3 months post-launch) |
|---|---|
| Monthly Active Users (MAU) | 500+ |
| Bill explanation completion rate | > 85% |
| User satisfaction score (CSAT) | > 4.2 / 5 |
| Return visit rate | > 30% |
| Avg. session duration | 3–5 minutes |

### North Star Metric
**Bills explained per month** — reflects both acquisition and core value delivery.

---

## 4. Target Users

### Primary Persona: "Confused Clara"
- Age: 35–65
- Received a medical bill they don't understand
- Not financially sophisticated; intimidated by medical/insurance jargon
- Has access to a smartphone or laptop
- Goal: Understand what they owe and why

### Secondary Persona: "Advocate Alex"
- A caregiver or family member helping an elderly parent or dependent manage their healthcare bills
- Comfortable with technology
- Goal: Quickly parse bills on behalf of someone else

---

## 5. User Stories

### Must Have (MVP)
- As a user, I want to paste or type in my bill details so the app can explain them to me
- As a user, I want each line item explained in plain English so I know what I'm being charged for
- As a user, I want to be told if any charges look unusual so I can investigate further
- As a user, I want suggested questions I can ask my provider or insurance company

### Should Have (V2)
- As a user, I want to upload a photo or PDF of my bill so I don't have to type it out
- As a user, I want a summary of my total financial responsibility vs. what insurance covered
- As a user, I want to save and revisit a past bill explanation

### Could Have (V3)
- As a user, I want to compare my bill against average costs for the same procedure in my area
- As a user, I want to be connected to a patient advocate if my bill seems incorrect

---

## 6. Functional Requirements

### Core Features (MVP)
| Feature | Description | Priority |
|---|---|---|
| Text input | User pastes raw bill text or types details | P0 |
| AI explanation engine | Claude API processes input and returns plain-English breakdown | P0 |
| Line-item breakdown | Each charge explained individually | P0 |
| Error flag | Highlights charges that may warrant review | P0 |
| Suggested questions | Generates 3–5 questions the user can ask their provider | P1 |
| Disclaimer | Clear statement that this is not legal or financial advice | P0 |

### Non-Functional Requirements
- **Response time:** AI explanation returned in < 10 seconds
- **Uptime:** 99% availability
- **Privacy:** No bill data stored server-side; all processing is stateless
- **Accessibility:** WCAG 2.1 AA compliant
- **Mobile-friendly:** Fully responsive design

---

## 7. Out of Scope (MVP)
- Insurance claim filing or appeals
- Direct integration with hospital billing systems
- HIPAA compliance infrastructure (no PHI is stored)
- User accounts or authentication
- Multilingual support

---

## 8. Assumptions & Dependencies
- Users have access to their bill in text or digital format
- Claude API remains available and performant
- Users understand the tool is informational, not a substitute for professional advice

---

## 9. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| AI provides inaccurate explanation | Medium | High | Clear disclaimers; prompt engineering for conservative outputs |
| Users share sensitive PII | Medium | Medium | No data storage; prompt users to anonymize input |
| Low discoverability | High | High | SEO + GTM strategy (see GTM.md) |
| API cost overruns | Low | Medium | Rate limiting; usage monitoring |

---

## 10. Open Questions
- Should we allow PDF upload in MVP or defer to V2?
- What is the right balance between detail and simplicity in the explanation output?
- Do we need a legal review of the disclaimer language before launch?
