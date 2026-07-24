# AGENTS.md — 信小递设计系统（skill 仓库）

**本仓库的设计系统规范是一个 skill。做信小递司机端界面/原型前，先加载它。**

- **单一事实源（skill）**：[`skills/xinxiaodi-design/SKILL.md`](skills/xinxiaodi-design/SKILL.md)
- 支持 skill 机制的工具：直接加载该 skill，按其 `SKILL.md` 执行。
- **不支持 skill 的工具**（只读 AGENTS.md）：把下面三样喂进上下文即可工作——
  1. `skills/xinxiaodi-design/SKILL.md`（执行铁律 + 消费顺序 + 两个行为闸门 + 场景匹配 + 强制校验 + 索引）
  2. `skills/xinxiaodi-design/references/tokens.json`（单一事实源：颜色/字体/间距/圆角/组件尺寸）
  3. `skills/xinxiaodi-design/references/Design.md`（信小递唯一规范文档）

## 一条铁律（详见 SKILL.md）

值只从 `references/tokens.json` 取；颜色只用语义 token；间距/圆角/字号/控件尺寸只用既定档位；**所有原型必须引用 `references/ui.css` 并复用其 class 构建组件**——绝不裸写像素、绝不自造色、绝不自造组件、绝不加规范外装饰。产物写入**用户当前工作目录**，不写进 skill 目录。产出后跑 `node skills/xinxiaodi-design/scripts/verify-prototype.mjs <原型HTML绝对路径>` 机械自检，0 ERROR 方可交付。

## 仓库其它文件

- `README.md` — 仓库总览、skill 用法、迭代流程、治理导航。
- `CONTRIBUTING.md` — 协作治理：单一事实源约定、改动顺序、入库边界、分支提交。
- `CHANGELOG.md` — 变更记录。
- `_planning/PROJECT_CONTEXT.md` — 跨会话上下文台账（不入库）。

> 拿不准就回到 `skills/xinxiaodi-design/references/tokens.json` 和 `references/Design.md`，不要猜。你的工作是执行这套规范，不是设计。
