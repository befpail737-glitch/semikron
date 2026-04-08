---
name: "keyword-research"
description: "Discovers 30+ long-tail keywords across 6 categories for SEO/GEO projects. Invoke when user needs comprehensive keyword research with classification, priority scoring, and landing page mapping."
---

# Keyword Research Skill

## Purpose

Systematically discover and classify long-tail keywords for global distributor SEO campaigns.

## 6-Category Classification System

### 1. 地域型 (Geographic)
Format: `[keyword] + [country]`
Examples: semikron distributor USA, semikron distributor Germany

### 2. 混合地域型 (Hybrid Geographic)
Format: `[product] + [keyword] + [country]`
Examples: semikron IGBT distributor USA

### 3. 产品/应用型 (Product/Application)
Format: `[product] + [keyword]`
Examples: semikron IGBT distributor, semikron power module supplier

### 4. 授权/信任型 (Authorization/Trust)
Format: `[trust signal] + [keyword]`
Examples: authorized semikron distributor, semikron certified distributor

### 5. 交易/服务型 (Transactional/Service)
Format: `[action] + [keyword]`
Examples: buy semikron products, semikron wholesale distributor

### 6. 问题/痛点型 (Problem/Pain Point)
Format: `[question/problem] + [keyword]`
Examples: where to buy semikron, semikron distributor near me

## Output Schema

```json
{
  "keywords": [
    {
      "keyword": "string",
      "category": "geographic|hybrid|product|trust|transactional|pain",
      "priority": "high|medium|low",
      "search_intent": "informational|navigational|transactional",
      "target_countries": ["string"],
      "landing_page": "string",
      "hreflang": "string"
    }
  ]
}
```

## Research Methodology

1. **Core Keyword Expansion**: Start with seed keywords
2. **Geographic Modifiers**: Add country/city variations
3. **Product Combinations**: Cross-reference with product lines
4. **Intent Mapping**: Classify by search intent
5. **Priority Scoring**: Based on competition and relevance
