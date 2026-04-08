# Google Search Console (GSC) 设置指南

## 验证方法

### 方法 1: DNS 验证 (推荐)

1. 登录域名管理后台 (如 GoDaddy, Namecheap, Cloudflare)
2. 添加以下 TXT 记录:

```
Type: TXT
Name: @
Value: google-site-verification=YOUR_VERIFICATION_CODE
TTL: 3600
```

3. 在 GSC 中点击验证

### 方法 2: HTML 文件验证

1. 下载 GSC 提供的 HTML 验证文件
2. 上传到网站根目录: `https://semikron.elec-distributor.com/`
3. 文件路径示例: `/google1234567890abcdef.html`

---

## Sitemap 提交

提交以下 Sitemap URL:

```
https://semikron.elec-distributor.com/sitemap.xml
```

---

## 国际定位设置

1. 在 GSC 中进入: 传统工具和报告 → 国际定位
2. 确认 hreflang 标签正确实施
3. 检查国家/地区标签

---

## 邮件通知设置

启用以下通知:
- [x] 索引问题
- [x] 移动设备可用性问题
- [x] 页面体验问题
- [x] 安全问题
- [x] 手动操作

---

## 用户权限设置

添加团队成员:
- **所有者**: [主账户邮箱]
- **完整权限**: [SEO团队邮箱]
- **限制权限**: [内容团队邮箱]

---

## 关联 GA4

1. 在 GSC 左侧菜单点击 "关联"
2. 选择已创建的 GA4 属性
3. 确认关联

---

## 验证清单

- [ ] 网站所有权已验证
- [ ] Sitemap 已提交
- [ ] 国际定位已配置
- [ ] 用户权限已设置
- [ ] 邮件通知已启用
- [ ] 与 GA4 已关联
