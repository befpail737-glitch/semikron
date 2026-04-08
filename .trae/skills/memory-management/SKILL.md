---
name: "memory-management"
description: "Manages project memory with HOT/WARM/COLD tiers for SEO and marketing projects. Invoke when user wants to initialize, update, or retrieve project memory, context, or cross-cutting information."
---

# Memory Management

## Purpose

管理项目级别的记忆结构，支持跨会话、跨技能的上下文保持。使用三层记忆架构（HOT/WARM/COLD）来优化信息检索效率。

## Memory Architecture

### HOT Cache (热缓存)
- **位置**: `.trae/memory/hot.json`
- **内容**: 当前会话最常用信息
- **更新频率**: 每次交互
- **保留时间**: 当前会话
- **内容示例**: 核心关键词、目标国家、差异化优势、当前任务

### WARM Storage (温存储)
- **位置**: `.trae/memory/warm.json`
- **内容**: 近期项目上下文
- **更新频率**: 每日/每周
- **保留时间**: 项目周期
- **内容示例**: Topic Clusters、优先级关键词、竞品分析摘要、GEO架构

### COLD Archive (冷归档)
- **位置**: `.trae/memory/cold.json`
- **内容**: 历史报告和完整数据
- **更新频率**: 里程碑时
- **保留时间**: 永久
- **内容示例**: 完整分析报告、历史决策记录、完整关键词列表

## Usage

### 初始化记忆
```
使用 memory-management 初始化项目记忆
项目名称：xxx
行业：xxx
核心关键词：xxx
...
```

### 更新记忆
```
使用 memory-management 更新 [hot/warm/cold]
添加/修改：xxx
```

### 检索记忆
```
使用 memory-management 检索 [关键词/主题]
```

## Data Structure

### HOT Schema
```json
{
  "project_name": "string",
  "industry": "string",
  "core_keywords": ["string"],
  "target_countries": ["string"],
  "business_advantages": ["string"],
  "current_task": "string",
  "last_updated": "ISO8601"
}
```

### WARM Schema
```json
{
  "topic_clusters": [
    {
      "name": "string",
      "priority_keywords": ["string"],
      "content_gaps": ["string"]
    }
  ],
  "competitor_insights": "string",
  "geo_architecture": "string",
  "last_updated": "ISO8601"
}
```

### COLD Schema
```json
{
  "full_reports": [
    {
      "title": "string",
      "date": "ISO8601",
      "summary": "string",
      "key_findings": ["string"]
    }
  ],
  "decision_log": ["string"],
  "complete_keyword_list": ["string"]
}
```
