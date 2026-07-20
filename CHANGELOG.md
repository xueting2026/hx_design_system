# Changelog 更新日志

本工程所有重要变更记录于此。格式遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本 SemVer](https://semver.org/lang/zh-CN/)。

工程为**多设计系统库**：每套产品设计系统收敛在 `design-system/<产品>/`，各自 `tokens.json` 为该产品单一事实源；跨系统通用铁律见根 `AGENTS.md`。

## [Unreleased]

### 新增
- **多设计系统工程结构**：根 `AGENTS.md`（跨所有设计系统的统一执行铁律）+ `design-system/<产品>/`（各产品设计系统，按目录区分）。
- **产物专区**：`prototypes/<产品>/`（可交付开发的 HTML 原型）与 `docs/<产品>/`（文档产物），与设计系统源文件隔离；产物内容不入库，仅保留 `.gitkeep` 骨架。
- **治理框架**：`CONTRIBUTING.md`（协作规范：上下文对齐、改动顺序、入库边界、分支与提交）+ 本 `CHANGELOG.md`。
- **上下文机制**：`_planning/PROJECT_CONTEXT.md` 跨会话台账（不入库）。

### 变更
- **信小递去产品前缀**：目录 `xinxiaodi-design-system/` → `design-system/xinxiaodi/`；文件 `xinxiaodi-Design.md`/`xinxiaodi-ui.css`/`xinxiaodi-ui.js` → `Design.md`/`ui.css`/`ui.js`（产品身份由目录层级表达）。
- **AGENTS.md 拆分**：通用铁律上提到工程根；信小递专属样式（色值表、图标路径、按钮组、页型模板、自查项、常见错误）下沉到 `design-system/xinxiaodi/Design.md`。
- **README 升级**为多系统工程总览（顶层导航 + 已接入系统清单 + 新增系统指南）。

### 移除
- **合并 `SKILL.md` 进 `Design.md`**：二者高度重合且已非标准 skill 结构，删除 `SKILL.md`，其字体规格速查、组件尺寸速查两表并入 `Design.md`。`Design.md` 成为各产品唯一规范文档。

### 已接入设计系统
- **信小递司机端**（`design-system/xinxiaodi/`）：海信物流司机端微信小程序，品牌绿 `#00AAA6`，设计宽度 375px。

[Unreleased]: https://github.com/xueting2026/hx_design_system/commits/yangshuo-test
