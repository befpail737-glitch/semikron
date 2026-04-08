---
name: "content-refresher"
description: "Analyzes content freshness and provides recommendations for updating outdated content. Invoke when user needs content refresh strategies and updated outlines."
---

# Content Refresher Skill

## Purpose

Identify outdated content and provide refresh strategies to maintain relevance and rankings.

## Analysis Criteria

### 1. Content Freshness
- Last update date
- Industry changes
- Product updates
- Statistical data
- External links

### 2. Relevance Check
- Current keyword trends
- User intent alignment
- Competitor content
- Search result changes

### 3. Engagement Metrics
- Bounce rate
- Time on page
- Social shares
- Comments/interactions

## Refresh Strategies

### Minor Update
- Update statistics
- Fix broken links
- Refresh images
- Add new information

### Major Refresh
- Rewrite sections
- Add new topics
- Restructure content
- Update examples

### Complete Overhaul
- New angle/topic
- Different format
- Updated research
- New visuals

## Output Format

```json
{
  "content_analysis": {
    "last_updated": "date",
    "freshness_score": "number",
    "outdated_elements": ["string"]
  },
  "refresh_recommendations": {
    "priority": "minor|major|overhaul",
    "sections_to_update": ["string"],
    "new_content_to_add": ["string"],
    "content_to_remove": ["string"]
  },
  "updated_outline": {
    "title": "string",
    "sections": ["string"],
    "key_points": ["string"]
  }
}
```
