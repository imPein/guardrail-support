# 护栏公开页面

此目录可直接部署为静态网站，用于 App Store Connect 的必填 URL：

- Support URL：站点根目录 `index.html`
- Privacy Policy URL：`privacy.html`
- 使用条款：`terms.html`，首发仍采用 Apple 标准 EULA
- 联系与反馈：`contact.html`，包含公开客服微信号、添加好友二维码和支持邮箱

公开开发者名称和支持邮箱已经填写为 `Pein Wang` 和 `wpein@qq.com`。Support URL 必须持续显示真实有效的联系方式。

联系页不得添加微信收款码、站外付款、远程 App 功能或第三方统计脚本。自愿支持只能通过 App 内 StoreKit 提供。

零成本托管建议：

1. 建立公开 GitHub 仓库，将本目录作为 GitHub Pages 发布源；或
2. 将本目录部署到 Cloudflare Pages。

部署完成后，逐页打开检查移动端排版、所有链接与 `mailto:` 地址，再把完整 `https://` URL 填入 App Store Connect。
