---
name: "serp-analysis"
description: "Analyzes Search Engine Results Pages for featured snippets, PAA, local packs, and competition patterns. Invoke when user needs to understand SERP features and competitive landscape."
---

# SERP Analysis Skill

## Purpose

Analyze search engine results pages to identify opportunities and competitive patterns.

## Analysis Dimensions

### 1. Featured Snippets
- Definition boxes
- List snippets
- Table snippets
- Paragraph snippets

### 2. People Also Ask (PAA)
- Question extraction
- Answer patterns
- Expansion opportunities

### 3. Local Pack
- Map results
- Business listings
- Review signals

### 4. Knowledge Panel
- Brand presence
- Entity information

### 5. Shopping Results
- Product listings
- Price comparisons

## Country-Specific Insights

Each target country analyzed for:
- Local search engine preferences
- Language-specific SERP features
- Regional competitor presence
- Cultural search patterns

## Output Schema

```json
{
  "serp_features": {
    "featured_snippets": ["string"],
    "paa_questions": ["string"],
    "local_pack": boolean,
    "knowledge_panel": boolean,
    "shopping_results": boolean
  },
  "country_insights": {
    "country": "string",
    "local_features": ["string"],
    "competitor_presence": ["string"]
  }
}
```
