# Google Analytics 4 & Search Console 设置指南

## 概述
为 semikron distributor 项目设置完整的网站分析工具，跟踪流量、转化和搜索表现。

---

## 📊 Google Analytics 4 (GA4) 设置

### 步骤 1: 创建 GA4 属性

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 使用公司 Google 账户登录
3. 点击 "管理" (左下角齿轮图标)
4. 在 "账户" 列选择 "创建账户"
5. 填写账户信息:
   - **账户名称**: LiTong Group
   - **属性名称**: semikron.elec-distributor.com
   - **时区**: Hong Kong Time (GMT+08:00)
   - **货币**: USD

### 步骤 2: 设置数据流

1. 选择 "网站" 作为平台
2. 输入网站 URL: `https://semikron.elec-distributor.com/`
3. 输入流名称: "Main Website"
4. 启用 "增强型衡量"
   - 页面浏览
   - 滚动
   - 出站点击
   - 站内搜索
   - 视频互动
   - 文件下载

### 步骤 3: 安装跟踪代码

#### 方式 A: 直接添加代码到网站

将以下代码添加到所有页面的 `<head>` 标签内:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### 方式 B: 通过 Google Tag Manager (推荐)

1. 创建 [Google Tag Manager](https://tagmanager.google.com/) 账户
2. 创建新容器: "semikron-distributor"
3. 安装 GTM 代码到网站
4. 在 GTM 中添加 GA4 配置标签

### 步骤 4: 设置事件跟踪

#### 自定义事件列表

| 事件名称 | 触发条件 | 参数 |
|---------|---------|------|
| `generate_lead` | 提交询盘表单 | form_id, form_location |
| `contact_click` | 点击电话/邮箱链接 | contact_type |
| `file_download` | 下载PDF文件 | file_name, file_extension |
| `outbound_click` | 点击外部链接 | outbound_url |
| `country_selection` | 选择国家页面 | country_code |
| `product_view` | 查看产品页面 | product_category |

#### 事件代码示例

```javascript
// 询盘表单提交事件
gtag('event', 'generate_lead', {
  'form_id': 'contact_form',
  'form_location': 'contact_page',
  'country': 'germany'
});

// 电话点击事件
gtag('event', 'contact_click', {
  'contact_type': 'phone',
  'country': 'usa'
});

// PDF下载事件
gtag('event', 'file_download', {
  'file_name': 'semikron-selection-guide-2026',
  'file_extension': 'pdf'
});
```

### 步骤 5: 设置转化目标

在 GA4 中标记为 "转化" 的事件:

1. `generate_lead` - 询盘提交 (主要转化)
2. `contact_click` - 联系点击 (次要转化)
3. `file_download` - 文件下载 (次要转化)

### 步骤 6: 创建自定义报告

#### 报告 1: 按国家划分的有机流量
- 维度: 国家/地区, 着陆页
- 指标: 用户数, 新用户数, 会话数, 转化率

#### 报告 2: 着陆页表现
- 维度: 页面路径, 页面标题
- 指标: 浏览量, 用户数, 平均互动时长, 跳出率

#### 报告 3: 转化路径分析
- 漏斗步骤: 首页 → 产品页 → 联系页 → 表单提交
- 分析流失率

---

## 🔍 Google Search Console (GSC) 设置

### 步骤 1: 验证网站所有权

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 点击 "添加资源"
3. 选择 "网域" 类型
4. 输入: `semikron.elec-distributor.com`
5. 选择验证方式:

#### 推荐: DNS 验证
1. 登录域名管理后台
2. 添加 TXT 记录:
   ```
   google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. 点击验证

#### 备选: HTML 文件验证
1. 下载验证文件
2. 上传到网站根目录
3. 点击验证

### 步骤 2: 提交 XML Sitemap

1. 在 GSC 左侧菜单点击 "Sitemap"
2. 添加新的 Sitemap:
   ```
   https://semikron.elec-distributor.com/sitemap.xml
   ```
3. 点击 "提交"
4. 等待 Google 处理 (通常 1-7 天)

### 步骤 3: 设置国际定位

1. 点击 "传统工具和报告" → "国际定位"
2. 确认 hreflang 标签正确实施
3. 检查 "国家/地区" 标签设置

### 步骤 4: 配置用户和权限

添加团队成员:
- **所有者**: 公司主账户
- **完整**: SEO 团队成员
- **限制**: 内容团队 (仅查看)

### 步骤 5: 设置邮件通知

启用以下通知:
- [ ] 索引问题
- [ ] 移动设备可用性问题
- [ ] 页面体验问题
- [ ] 安全问题
- [ ] 手动操作

---

## 🔗 GA4 与 GSC 关联

### 步骤 1: 在 GA4 中关联 GSC

1. 打开 GA4 属性
2. 点击 "管理" → "产品关联" → "Search Console 关联"
3. 选择已验证的 GSC 资源
4. 选择数据流
5. 确认关联

### 步骤 2: 在 GSC 中查看 GA4 数据

1. 打开 GSC
2. 点击左侧 "关联"
3. 确认 GA4 属性已关联

---

## 📈 关键监控指标

### GA4 核心指标

| 指标 | 目标值 | 监控频率 |
|------|--------|---------|
| 有机用户数 | +50% (6个月) | 每日 |
| 有机会话数 | +50% (6个月) | 每日 |
| 跳出率 | < 50% | 每周 |
| 平均互动时长 | > 2分钟 | 每周 |
| 转化率 | > 3% | 每周 |

### GSC 核心指标

| 指标 | 目标值 | 监控频率 |
|------|--------|---------|
| 总展示次数 | +100% (6个月) | 每日 |
| 总点击次数 | +100% (6个月) | 每日 |
| 平均点击率 | > 3% | 每周 |
| 平均排名 | 提升 5位 | 每周 |
| 索引页面数 | 100% | 每日 |

---

## 🚨 警报设置

### GA4 警报

1. **流量下降警报**
   - 条件: 有机流量比上周同日下降 > 20%
   - 通知: 邮件

2. **转化率下降警报**
   - 条件: 转化率比上周下降 > 30%
   - 通知: 邮件

### GSC 警报

1. **索引问题警报**
   - 条件: 索引错误 > 5页
   - 通知: 邮件

2. **Core Web Vitals 失败**
   - 条件: 任何页面未通过
   - 通知: 邮件

---

## 📋 设置检查清单

### GA4 检查清单

- [ ] GA4 属性已创建
- [ ] 数据流已配置
- [ ] 跟踪代码已安装
- [ ] 增强型衡量已启用
- [ ] 自定义事件已设置
- [ ] 转化目标已标记
- [ ] 自定义报告已创建
- [ ] 团队成员已添加

### GSC 检查清单

- [ ] 网站已验证
- [ ] Sitemap 已提交
- [ ] 国际定位已配置
- [ ] 用户权限已设置
- [ ] 邮件通知已启用
- [ ] 与 GA4 已关联

---

## 🎯 设置完成后的下一步

1. **等待数据积累** - GA4 需要 24-48 小时，GSC 需要 3-7 天
2. **验证数据准确性** - 检查实时报告确认跟踪正常
3. **设置定期报告** - 创建每周/每月自动报告
4. **开始监控** - 每日检查关键指标

---

*创建时间: 2026-04-08*  
*更新周期: 持续*
