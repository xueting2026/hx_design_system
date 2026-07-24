# CONTRIBUTING — 协作与治理规范

本仓库是**信小递设计系统 skill**。设计系统的全部源文件收敛在 `skills/xinxiaodi-design/`（**单一事实源，不再有第二份副本**）。本文用一套轻量治理规则保证多人协作时上下文一致：改哪、按什么顺序改、什么进 git、怎么提交。改动前请先读本页。

---

## 0. 动手前先对齐上下文（最重要）

任何人开始工作前，按顺序读三样：

1. **`skills/xinxiaodi-design/SKILL.md`** — skill 入口与执行铁律（消费顺序 / 两个行为闸门 / 场景匹配 / 产出后强制校验）。
2. **`README.md`** — 仓库总览、导航、迭代流程。
3. **`_planning/PROJECT_CONTEXT.md`** — 跨会话上下文台账（当前进度 / 关键决策 / 待办）。**不入库**，是本地/团队共享的"记忆"，避免重复踩坑。

> 若你的改动与台账记录冲突，以最新决策为准，并在完成后回写台账与本规范。

---

## 1. 单一事实源与目录职责

| 层 | 位置 | 职责 |
|----|------|------|
| skill 入口 | `skills/xinxiaodi-design/SKILL.md` | 执行铁律、消费顺序、行为闸门、场景匹配、强制校验、索引 |
| 设计 token | `skills/xinxiaodi-design/references/tokens.json` | **唯一事实源**（颜色/字体/间距/圆角/组件/页型） |
| 规范文档 | `skills/xinxiaodi-design/references/Design.md` | 唯一规范文档（品牌速览+速查+完整规范+落地细则） |
| 可运行实现 | `references/ui.css`、`ui.js`、`css.json` | 与 token 对应的 class / 交互 / 结构化映射 |
| 组件/示例 | `references/components/`、`preview/`、`examples/` | 组件定义、组件预览、页型成品底板 |
| 场景路由 | `references/scenario-map.json` | 页型 ↔ 成品页 ↔ 组件的机读映射与三档重合度规则 |
| 自检脚本 | `skills/xinxiaodi-design/scripts/verify-prototype.mjs` | 产出后机械自检（0 依赖 Node） |
| 上下文台账 | `_planning/PROJECT_CONTEXT.md` | 跨会话记忆（**不入库**） |

**铁律**：值只从 `references/tokens.json` 取；颜色只用语义 token；间距/圆角/字号/尺寸只用既定档位；所有原型必须引用 `references/ui.css` 并复用其 class；绝不自创值、自造组件、加规范外装饰。详见 `SKILL.md`。

**产物落位**：原型 HTML / 文档产物写入**用户当前工作目录**，**绝不写进 `skills/xinxiaodi-design/`**（skill 是只读知识包）。

---

## 2. 改动顺序（保证一致性，避免各改各的）

改设计系统时按此顺序，改一处就把下游同步到位，不留断层：

1. **改 token** → `references/tokens.json`（源头）。
2. **同步实现** → `references/css.json`（结构化映射）、`references/ui.css` / `ui.js`（CSS 变量与 class）。
3. **同步规范** → `references/Design.md`（数值/说明/速查表与 token 保持一致）。
4. **同步组件/示例/路由** → 涉及的 `references/components/*.json`、`preview/`、`examples/`、`scenario-map.json`。
5. **自查** → 按 `SKILL.md` + `Design.md` 的产出前清单核对；用 `scripts/verify-prototype.mjs` 对相关样例校验（0 裸 HEX、间距合档、组件复用、图标引用等），确保 0 ERROR。

> 若给 SKILL.md 增删章节，注意保持它"薄"：大内容放 `references/` 按需加载，SKILL.md 只留铁律、闸门、消费顺序、索引。

---

## 3. 什么进 git，什么不进

- **进 git**：`AGENTS.md`、`README.md`、`CONTRIBUTING.md`、`CHANGELOG.md`、`skills/**` 全部源文件。
- **不进 git**（`.gitignore` 已排除）：
  - `_planning/`（方案、上下文台账）。
  - `.DS_Store`。

> 产物（原型 HTML / 文档）落在用户工作区，本仓库不承载产物目录。

---

## 4. 分支与提交

- **不直接提交 main**。用特性分支（如 `<姓名>-<主题>` 或 `feat/<主题>`），完成后开 PR 合入。
- **提交信息**用类型前缀：`feat:` 新增、`refactor:` 结构调整、`fix:` 修正、`docs:` 文档、`chore:` 杂项。
- **每次有意义的改动都要更新 `CHANGELOG.md`**（见 §5）；影响后续协作的决策/结构变化，同时回写 `_planning/PROJECT_CONTEXT.md`。
- 优先按文件名 `git add` 具体文件，避免误提交无关内容。

---

## 5. CHANGELOG 维护

- 遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，未发布内容记在 `## [Unreleased]` 下的「新增/变更/修复/其它」小节。
- 发版时把 `[Unreleased]` 内容归档到带日期的版本号（[SemVer](https://semver.org/lang/zh-CN/)）下。
- 只记"对协作者有用"的变更，不写流水账。

> 拿不准就回到 `references/tokens.json` 与 `references/Design.md`，不要猜。
