# 护栏公开页面

此目录可直接部署为静态网站，用于 App Store Connect 的必填 URL：

- Support URL：站点根目录 `index.html`
- Privacy Policy URL：`privacy.html`
- 使用条款：`terms.html`，首发仍采用 Apple 标准 EULA

公开开发者名称和支持邮箱已经填写为 `Pein Wang` 和 `wpein@qq.com`。Support URL 必须持续显示真实有效的联系方式。

零成本托管建议：

1. 建立公开 GitHub 仓库，将本目录作为 GitHub Pages 发布源；或
2. 将本目录部署到 Cloudflare Pages。

部署完成后，逐页打开检查移动端排版、所有链接与 `mailto:` 地址，再把完整 `https://` URL 填入 App Store Connect。
