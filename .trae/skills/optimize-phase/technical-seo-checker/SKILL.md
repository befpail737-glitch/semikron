---
name: "technical-seo-checker"
description: "Checks technical SEO factors including site speed, mobile-friendliness, crawlability, indexability, and Core Web Vitals. Invoke when user needs technical SEO analysis."
---

# Technical SEO Checker Skill

## Purpose

Analyze technical SEO factors that impact search engine crawling and indexing.

## Check Categories

### 1. Site Speed (0-100)
- Page load time
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)

### 2. Mobile-Friendliness (0-100)
- Responsive design
- Viewport configuration
- Touch target sizing
- Font readability
- Mobile usability

### 3. Crawlability (0-100)
- Robots.txt configuration
- XML sitemap
- Canonical tags
- Redirect chains
- 404 errors

### 4. Indexability (0-100)
- Meta robots tags
- Noindex pages
- Canonicalization
- Duplicate content

### 5. Security (0-100)
- HTTPS implementation
- SSL certificate
- Security headers

### 6. International SEO (0-100)
- Hreflang implementation
- Language tags
- Geographic targeting

## Core Web Vitals Thresholds

```
LCP: < 2.5s (Good), < 4s (Needs Improvement), > 4s (Poor)
FID: < 100ms (Good), < 300ms (Needs Improvement), > 300ms (Poor)
CLS: < 0.1 (Good), < 0.25 (Needs Improvement), > 0.25 (Poor)
```

## Output Format

```json
{
  "overall_score": "number",
  "core_web_vitals": {
    "lcp": {"value": "number", "status": "string"},
    "fid": {"value": "number", "status": "string"},
    "cls": {"value": "number", "status": "string"}
  },
  "categories": {
    "speed": {"score": "number", "issues": []},
    "mobile": {"score": "number", "issues": []},
    "crawlability": {"score": "number", "issues": []},
    "indexability": {"score": "number", "issues": []},
    "security": {"score": "number", "issues": []},
    "international": {"score": "number", "issues": []}
  },
  "critical_issues": ["string"],
  "recommendations": ["string"]
}
```
