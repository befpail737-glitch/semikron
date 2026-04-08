---
name: "internal-linking-optimizer"
description: "Analyzes and optimizes internal linking structure for better crawlability, authority distribution, and user navigation. Invoke when user needs internal link strategy recommendations."
---

# Internal Linking Optimizer Skill

## Purpose

Optimize internal linking structure for SEO and user experience.

## Analysis Factors

### 1. Link Distribution
- Orphan pages identification
- Click depth analysis
- Authority distribution
- Hub and spoke structure

### 2. Anchor Text Optimization
- Keyword-rich anchors
- Natural variation
- Contextual relevance
- Avoid over-optimization

### 3. Navigation Structure
- Main menu links
- Footer links
- Breadcrumb navigation
- Related content links

### 4. Content Links
- Contextual links
- Related articles
- Product recommendations
- Category links

## Best Practices

```
- Keep important pages within 3 clicks from homepage
- Use descriptive anchor text
- Maintain contextual relevance
- Avoid excessive links per page
- Create content silos for topics
- Link to new content from existing pages
```

## Output Format

```json
{
  "current_structure": {
    "total_pages": "number",
    "orphan_pages": ["string"],
    "deep_pages": ["string"],
    "link_distribution": "object"
  },
  "recommendations": {
    "high_priority": ["string"],
    "medium_priority": ["string"],
    "low_priority": ["string"]
  },
  "anchor_text_suggestions": {
    "page_url": "suggested_anchor"
  },
  "navigation_improvements": ["string"]
}
```
