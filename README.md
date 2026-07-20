# HX Design Systems

海信（HX）企业级**多设计系统工程**。每套产品设计系统机读优先、自洽收敛在 `design-system/<产品>/` 下，供 AI agent 消费产出界面。

**工程头等职责：产出可交付给开发的 HTML 原型。**

## 顶层结构

```
hx_design_system/
├── AGENTS.md          # 跨所有设计系统的统一执行铁律（AI 先读）
├── README.md          # 本文件：工程总览与导航
├── design-system/     # 各产品设计系统（按产品分子目录）
│   └── xinxiaodi/     # 信小递司机端
├── prototypes/        # 原型产物（可交付开发的 HTML），按 <产品>/<需求>/ 分组
└── docs/              # 文档产物（PRD 等），按 <产品>/ 分组
```

- **`AGENTS.md`** — 通用铁律：值只从 token 取、组件复用、消费顺序、demo/交付分支、产物落位、通用自查。任何产品无关规则都在这里。
- **`design-system/<产品>/`** — 单套设计系统的全部源文件（`Design.md` / `tokens.json` / `css.json` / `ui.css` / `ui.js` / `components/` / `preview/` / `examples/` / `assets/`）。`Design.md` 是该产品唯一的规范文档（品牌速览 + 速查表 + 完整规范 + 落地细则）。产品身份由目录层级表达，目录内文件名不带产品前缀。
- **`prototypes/`、`docs/`** — 交付产物专区，与设计系统源文件隔离，不写入 `design-system/`。

## 已接入的设计系统

| 产品 | 目录 | 简介 |
|------|------|------|
| 信小递司机端 | `design-system/xinxiaodi/` | 海信物流司机端微信小程序，品牌绿 `#00AAA6`，设计宽度 375px，简洁实用、操作效率优先 |

## 使用方式（AI agent）

1. 先读根 `AGENTS.md` 建立统一约束。
2. 按任务确定用哪套系统，进入 `design-system/<产品>/`，按 `tokens.json → Design.md → components/ → preview/ → examples/` 顺序消费。
3. 生成原型前先问「demo 演示 or 交付开发」，产物写入 `prototypes/<产品>/<需求>/`（文档写入 `docs/<产品>/`）。

## 如何新增一套设计系统

1. 在 `design-system/` 下新建 `<产品>/` 目录。
2. 按信小递的标准文件清单补齐：`Design.md`、`tokens.json`、`css.json`、`library-consumption.json`、`ui.css`、`ui.js`、`index.html`、`components/`、`preview/`、`examples/`、`assets/`。文件名一律不带产品前缀。
3. 在本 README「已接入的设计系统」表中登记一行。
4. 通用铁律沿用根 `AGENTS.md`，无需在产品目录内重复；产品专属细则写进该产品的 `Design.md`。

> 内部工程优化 / 规划类文档放在 `_planning/`（已在 `.gitignore` 中排除，不作为最终产物）。
