# CONTRIBUTING — 协作与治理规范

本工程是**企业级多设计系统库**，多人协作。本文用一套**轻量治理规则**保证不同开发者之间**上下文一致**：改哪、按什么顺序改、什么进 git、怎么提交。改动前请先读本页。

---

## 0. 动手前先对齐上下文（最重要）

任何人开始工作前，按顺序读三样，建立统一认知：

1. **`AGENTS.md`**（工程根）— 跨所有设计系统的统一执行铁律（产品无关）。
2. **`README.md`** — 工程总览、目录导航、如何新增一套设计系统。
3. **`_planning/PROJECT_CONTEXT.md`** — 跨会话上下文台账（当前进度 / 关键决策 / 待办）。**不入库**，是本地/团队共享的"记忆"，避免重复踩坑。

> 若你的改动与台账记录冲突，以最新决策为准，并在完成后回写台账与本规范。

---

## 1. 单一事实源与目录职责

| 层 | 位置 | 职责 | 谁可改 |
|----|------|------|--------|
| 通用铁律 | `AGENTS.md` | 产品无关规则（取值/复用/消费顺序/产物落位/自查） | 影响所有系统，改动需谨慎评审 |
| 产品 token | `design-system/<产品>/tokens.json` | 该产品**唯一事实源**（颜色/字体/间距/圆角/组件/页型） | 产品负责人 |
| 产品规范 | `design-system/<产品>/Design.md` | 该产品唯一规范文档（品牌速览+速查+完整规范+落地细则） | 产品负责人 |
| 可运行实现 | `design-system/<产品>/ui.css`、`ui.js`、`css.json` | 与 token 对应的 class / 交互 / 结构化映射 | 产品负责人 |
| 组件/示例 | `components/`、`preview/`、`examples/` | 组件定义与成品参照 | 产品负责人 |
| 产物 | `prototypes/<产品>/`、`docs/<产品>/` | 交付原型 HTML / 文档（**不入库**） | 任意开发者 |
| 内部规划 | `_planning/` | 方案、上下文台账（**不入库**） | 任意开发者 |

**铁律**：值只从对应产品 `tokens.json` 取；颜色只用语义 token；间距/圆角/字号/尺寸只用既定档位；绝不自创值、自造组件、加规范外装饰。详见 `AGENTS.md`。

---

## 2. 改动顺序（保证一致性，避免各改各的）

改设计系统时按此顺序，改一处就把下游同步到位，不留断层：

1. **改 token** → `design-system/<产品>/tokens.json`（源头）。
2. **同步实现** → `css.json`（结构化映射）、`ui.css` / `ui.js`（CSS 变量与 class）。
3. **同步规范** → `Design.md`（数值/说明/速查表与 token 保持一致）。
4. **同步组件/示例** → 涉及的 `components/*.json`、`preview/`、`examples/`。
5. **自查** → 按 `AGENTS.md` + `Design.md` 的产出前自查清单核对（0 裸 HEX、间距合档、组件复用、图标引用等）。

> 命名与结构约定：产品目录 `design-system/<产品>/`，目录内文件**不带产品前缀**（`Design.md`/`ui.css`/`ui.js`）。新增系统流程见 `README.md`。

---

## 3. 什么进 git，什么不进

- **进 git**：`AGENTS.md`、`README.md`、`CONTRIBUTING.md`、`CHANGELOG.md`、`design-system/**` 全部源文件、`prototypes/.gitkeep` 与 `docs/.gitkeep`（仅骨架）。
- **不进 git**（`.gitignore` 已排除）：
  - `_planning/`（方案、上下文台账）。
  - `prototypes/` 与 `docs/` 下的**实际产物内容**（只保留 `.gitkeep` 骨架）。
  - `.DS_Store`。

---

## 4. 分支与提交

- **不直接提交 main**。用特性分支（如 `<姓名>-<主题>` 或 `feat/<主题>`），完成后开 PR 合入。
- **提交信息**用类型前缀，简明说明动机：
  - `feat:` 新增（如新增一套设计系统 / 新组件）
  - `refactor:` 结构调整（不改行为）
  - `fix:` 修正（token 值 / 引用 / 样式错误）
  - `docs:` 文档（Design.md / README / 本规范）
  - `chore:` 杂项（gitignore、目录骨架等）
- **每次有意义的改动都要更新 `CHANGELOG.md`**（见 §5）；影响后续协作的决策/结构变化，同时回写 `_planning/PROJECT_CONTEXT.md`。
- 优先按文件名 `git add` 具体文件，避免误提交无关内容。

---

## 5. CHANGELOG 维护

- 遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，未发布内容记在 `## [Unreleased]` 下的「新增/变更/修复/其它」小节。
- 发版时把 `[Unreleased]` 内容归档到带日期的版本号（[SemVer](https://semver.org/lang/zh-CN/)）下。
- 只记"对协作者有用"的变更，不写流水账。

---

## 6. 新增一套设计系统（速查）

1. `design-system/<新产品>/` 建目录。
2. 按信小递标准清单补齐：`Design.md`、`tokens.json`、`css.json`、`library-consumption.json`、`ui.css`、`ui.js`、`index.html`、`components/`、`preview/`、`examples/`、`assets/`（文件名不带产品前缀）。
3. 在 `README.md`「已接入的设计系统」表登记一行。
4. 通用铁律沿用根 `AGENTS.md`，产品专属细则写进该产品 `Design.md`。
5. 更新 `CHANGELOG.md` 与 `_planning/PROJECT_CONTEXT.md`。

> 拿不准就回到对应产品的 `tokens.json` 与 `Design.md`，不要猜。
