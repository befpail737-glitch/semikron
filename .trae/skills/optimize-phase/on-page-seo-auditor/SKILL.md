---
name: "on-page-seo-auditor"
description: "Audits on-page SEO elements including titles, meta descriptions, headings, content structure, and schema markup. Invoke when user needs comprehensive on-page SEO analysis with scoring and recommendations."
---

# On-Page SEO Auditor Skill

## Purpose

Comprehensive audit of on-page SEO elements with scoring and actionable recommendations.

## Audit Categories

### 1. Title Tag Analysis (0-100)
- Length (50-60 characters optimal)
- Keyword placement
- Brand inclusion
- Uniqueness
- Action-oriented language

### 2. Meta Description (0-100)
- Length (150-160 characters optimal)
- Keyword inclusion
- Call-to-action
- Value proposition
- Click-through optimization

### 3. Heading Structure (0-100)
- H1 uniqueness and optimization
- H2-H6 hierarchy
- Keyword distribution
- Content organization

### 4. Content Quality (0-100)
- Word count
- Keyword density
- Readability
- Engagement factors
- Freshness

### 5. Schema Markup (0-100)
- Organization schema
- LocalBusiness schema
- Product schema
- Breadcrumb schema
- Validation

### 6. Image Optimization (0-100)
- Alt text
- File names
- Compression
- Dimensions

### 7. URL Structure (0-100)
- Length
- Keywords
- Readability
- Canonical tags

## Scoring System

```
90-100: Excellent
80-89: Good
70-79: Fair
60-69: Needs Improvement
<60: Poor
```

## Output Format

```json
{
  "overall_score": "number",
  "categories": {
    "title_tag": {"score": "number", "issues": [], "recommendations": []},
    "meta_description": {"score": "number", "issues": [], "recommendations": []},
    "headings": {"score": "number", "issues": [], "recommendations": []},
    "content": {"score": "number", "issues": [], "recommendations": []},
    "schema": {"score": "number", "issues": [], "recommendations": []},
    "images": {"score": "number", "issues": [], "recommendations": []},
    "url": {"score": "number", "issues": [], "recommendations": []}
  },
  "priority_fixes": ["string"],
  "geo_optimizations": ["string"]
}
```
