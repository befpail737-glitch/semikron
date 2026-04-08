---
name: "content-quality-auditor"
description: "Audits content using CORE-EEAT framework and CITE trust scoring. Invoke when user needs quality assessment of SEO content or competitive content analysis."
---

# Content Quality Auditor Skill

## Purpose

Evaluate content quality using industry-standard frameworks.

## CORE-EEAT Framework

### C - Coverage
- Topic completeness
- Subtopic inclusion
- FAQ coverage

### O - Originality
- Unique insights
- Original research
- Differentiation

### R - Relevance
- User intent match
- Keyword alignment
- Contextual appropriateness

### E - Engagement
- Readability
- Visual elements
- Interactive features

### E-E-A-T Components

#### Experience
- [ ] Industry experience demonstrated
- [ ] Case studies provided
- [ ] Real-world examples

#### Expertise
- [ ] Technical depth
- [ ] Educational content
- [ ] Thought leadership

#### Authoritativeness
- [ ] Backlink profile
- [ ] Brand mentions
- [ ] Industry recognition

#### Trustworthiness
- [ ] Transparent information
- [ ] Contact details
- [ ] Privacy policy
- [ ] Security signals

## CITE Trust Scoring

### Credibility (0-25)
- Author credentials
- Source citations
- Data accuracy

### Integrity (0-25)
- Honest claims
- Balanced perspective
- No manipulation

### Transparency (0-25)
- Clear ownership
- Disclosure practices
- Open processes

### Expertise (0-25)
- Subject knowledge
- Professional background
- Continuous learning

## Scoring Output

```json
{
  "core_scores": {
    "coverage": "number",
    "originality": "number",
    "relevance": "number",
    "engagement": "number"
  },
  "eeat_scores": {
    "experience": "number",
    "expertise": "number",
    "authoritativeness": "number",
    "trustworthiness": "number"
  },
  "cite_scores": {
    "credibility": "number",
    "integrity": "number",
    "transparency": "number",
    "expertise": "number"
  },
  "total_score": "number",
  "recommendations": ["string"]
}
```
