# 修改指南

品牌改 config/brand.ts；双语标题、文章和分类改 content.ts；颜色、字体、圆角与间距改 theme.css。不要逐页重复品牌常量。新增页面须在 meta.ts 和 template.json surfaces 同步登记。

3D 物理在 components/NewsCube.tsx，文字入场与打字在 Motion.tsx，轮播在 HomePage.tsx。公共导航和表单在 components/Layout.tsx。新增媒体源前需明确来源与授权，并实现真实播放器。修改后 pnpm typecheck、pnpm lint、pnpm test；涉及页面或依赖再 pnpm build。
