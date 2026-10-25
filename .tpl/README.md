# JiroNews 模板使用说明

先阅读 template.json、project.json。环境为 Node 24.16.0、pnpm 9.15.4，无必需秘密配置；可选 PORT/HOSTNAME 见 contracts/env.schema.json。

安装 pnpm install --frozen-lockfile；启动 pnpm dev，默认 http://127.0.0.1:43370，Ctrl+C 停止。生产 pnpm build 后 pnpm start。类型 pnpm typecheck，lint pnpm lint，测试 pnpm test，协议 node .tpl/tools/check.mjs .。

52页、104双语路由；表单只本地校验，媒体没有实际源。架构、修改与验证分别见 docs/ARCHITECTURE.md、CUSTOMIZATION.md、VERIFICATION.md；许可见 LICENSE.md。交付前审阅差异，不包含依赖、缓存、日志或秘密。
