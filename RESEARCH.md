# User Research
## AI Medical Bill Explainer
**Version:** 1.0  
**Author:** [Your Name]  
**Last Updated:** April 2026

---

## 1. Research Goals

- Validate that medical bill confusion is a widespread, felt pain point
- Understand the emotional journey of receiving and processing a medical bill
- Identify what information users most need to feel confident
- Surface concerns about privacy, accuracy, and trust in an AI tool

---

## 2. Research Methods

For MVP, research was conducted via:
- **Desk research:** Reddit threads (r/personalfinance, r/HealthInsurance), consumer surveys, published studies
- **Informal interviews:** 8 conversations with friends/colleagues who had received confusing medical bills in the past year
- **Competitive analysis:** Review of existing tools (Google, hospital billing portals, patient advocacy sites)

*Note: Formal usability testing planned for V2 using UserTesting.com*

---

## 3. Key Findings

### Finding 1: Confusion is universal, not demographic
Medical bill confusion affects people across income levels, education levels, and ages. Even financially literate users reported feeling lost when faced with EOBs and itemized bills.

> "I have an MBA and I still couldn't figure out what I actually owed vs. what insurance covered." — Interview participant

### Finding 2: The emotional toll is significant
Users described feelings of **anxiety, frustration, and helplessness** when receiving medical bills. Many admitted to delaying opening or addressing bills due to stress.

### Finding 3: Google is the current fallback — and it's inadequate
Most users resort to Googling individual billing codes. This is slow, decontextualized, and often returns clinical or technical results rather than patient-friendly explanations.

### Finding 4: Privacy is the #1 concern with an AI tool
When told about the concept, the most common question was: *"Where does my data go?"* Users were comfortable using the tool only after being told nothing is stored.

### Finding 5: Trust requires clear disclaimers
Users wanted reassurance that the tool is informational and not a replacement for professional advice. Clear, prominent disclaimers increased willingness to use the product.

---

## 4. User Personas

### Persona 1: Confused Clara
**Age:** 52 | **Occupation:** Elementary school teacher | **Location:** Suburban Texas

**Background:** Clara recently had knee surgery. Three weeks later, she received a 4-page itemized bill with 30 line items and a separate EOB from her insurance company. She has no idea what she actually owes.

**Goals:**
- Understand the difference between what insurance paid and what she owes
- Know if any charges look wrong
- Feel confident before calling the billing department

**Frustrations:**
- Hospital's billing hotline has a 45-minute wait time
- Googling codes gives clinical, confusing results
- Worried she's being overcharged but doesn't know how to tell

**Quote:** *"I just want someone to explain this to me like I'm a normal person."*

---

### Persona 2: Advocate Alex
**Age:** 38 | **Occupation:** Marketing manager | **Location:** Chicago, IL

**Background:** Alex is managing his 74-year-old mother's healthcare after her hip replacement. She receives bills she can't understand and calls Alex in a panic. Alex wants to help but doesn't have time to call billing departments.

**Goals:**
- Quickly understand his mother's bills remotely
- Build a record of explanations to share with her
- Identify any bills that need to be disputed

**Frustrations:**
- Can't act on bills without understanding them
- No good digital tools exist for this
- Time-poor; needs answers in under 5 minutes

---

## 5. Competitive Analysis

| Tool | Strengths | Weaknesses |
|---|---|---|
| Google Search | Free, fast, widely known | Decontextualized; returns clinical results |
| Hospital billing portals | Official source | No explanation of charges; hard to navigate |
| Patient Advocate Foundation | Expert human help | Slow; not scalable; not self-serve |
| ChatGPT (generic) | Capable of explanation | No specific UX; users don't know how to prompt it |
| **Our product** | Purpose-built, instant, private, actionable | New; trust must be earned |

---

## 6. Jobs To Be Done

| When... | I want to... | So I can... |
|---|---|---|
| I receive a confusing medical bill | Understand every line item | Know what I'm actually being charged for |
| I suspect an error on my bill | Get confirmation something looks wrong | Dispute it with confidence |
| I need to call my billing department | Know what questions to ask | Not feel helpless on the call |
| I'm helping a family member | Quickly parse their bill remotely | Give them clear guidance |

---

## 7. Next Steps for Research

- [ ] Conduct 5 moderated usability tests on the MVP prototype
- [ ] Run a CSAT survey after each bill explanation (in-app, 1 question)
- [ ] Set up session recording (Hotjar) to observe drop-off points
- [ ] Interview 3 users who did NOT complete a bill explanation to understand why
