# 架构

React、Next.js App Router、TypeScript strict、Framer Motion。src/app 仅负责路由选择；src/features/site-templates/catalog/jironews 下 config/brand.ts 管品牌，content.ts 管双语内容，theme.css 管样式令牌，components 管公共 UI 和动画，pages 管页面组合，meta.ts 管页面注册。host.tsx 提供可选品牌注入。

无后端、数据库、支付或媒体流。搜索状态和表单结果仅保留于组件内存，不保存数据、不外发。
