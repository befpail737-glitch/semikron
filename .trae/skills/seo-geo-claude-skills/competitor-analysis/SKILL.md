---
name: "competitor-analysis"
description: "Deep competitor analysis including title structures, trust signals, localization, and E-E-A-T scoring. Invoke when user needs to understand competitive positioning and differentiation opportunities."
---

# Competitor Analysis Skill

## Purpose

Comprehensive analysis of top 10 competitors to identify gaps and opportunities.

## Analysis Framework

### 1. Title Structure Analysis
- H1 tag patterns
- Title tag formulas
- Meta description strategies

### 2. Trust Signals
- Authorization badges
- Certification displays
- Customer reviews
- Security indicators

### 3. Localization Assessment
- Language implementation
- Currency handling
- Local contact information
- Regional content

### 4. E-E-A-T Scoring
- **Experience**: Industry tenure, case studies
- **Expertise**: Technical content, whitepapers
- **Authoritativeness**: Backlinks, brand mentions
- **Trustworthiness**: Reviews, certifications, transparency

## Competitor Categories

### Tier 1: Global Distributors
- Mouser Electronics
- Digi-Key
- Arrow Electronics
- Avnet

### Tier 2: Regional Distributors
- Rutronik (Europe)
- Future Electronics
- TTI Inc

### Tier 3: Local Distributors
- Country-specific distributors

## Output Schema

```json
{
  "competitors": [
    {
      "name": "string",
      "tier": "global|regional|local",
      "title_structure": "string",
      "trust_signals": ["string"],
      "localization_score": "number",
      "eeat_score": "number",
      "strengths": ["string"],
      "weaknesses": ["string"]
    }
  ]
}
```
