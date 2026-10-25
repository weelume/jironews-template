# JiroNews 双语新闻媒体模板

React / Next.js / TypeScript / Framer Motion。默认中文，英文位于 /en；包含 52 个页面、104 条语言路由。

Node 24.16.0，pnpm 9.15.4。安装 `pnpm install --frozen-lockfile`，启动 `pnpm dev`，地址 http://127.0.0.1:43370，Ctrl+C 停止。检查 `pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。

源码入口 src/features/site-templates/catalog/jironews；品牌 config/brand.ts，内容 content.ts，主题 theme.css，公共交互 components/，页面 pages/。修改后运行对应检查。

表单只本地校验、不发送保存；媒体源未提供，不模拟播放。文章、团队、统计为演示。视觉动效与三端截图未验收前不能宣称完整复刻。素材与参考设计许可未全部核实，禁止据此宣称可商业再分发。完整规则见 .tpl/README.md。
