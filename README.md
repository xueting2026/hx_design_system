# 信小递设计系统 Skill

海信物流**司机端微信小程序「信小递」**的机读设计系统，打包为一个自洽 **skill**，供 AI agent 消费产出**可交付开发的移动端 HTML 原型**。

品牌绿 `#00AAA6`，设计宽度 375px（内容宽 343px），字体 PingFang SC，简洁实用、操作效率优先。

## 顶层结构

```
hx_design_system/
├── AGENTS.md          # 薄指针 → skill（兼容只读 AGENTS.md 的工具）
├── README.md          # 本文件：仓库总览与导航
├── CONTRIBUTING.md    # 协作治理（单一事实源约定 / 改动顺序 / 入库边界 / 分支提交）
├── CHANGELOG.md       # 变更日志
└── skills/
    └── xinxiaodi-design/          # ★唯一资产（单一事实源）
        ├── SKILL.md               # skill 入口：执行铁律 + 消费顺序 + 两个行为闸门 + 场景匹配 + 强制校验 + 索引
        ├── references/            # 设计系统全部源文件
        │   ├── tokens.json        # 单一事实源（颜色/字体/间距/圆角/组件尺寸）
        │   ├── Design.md          # 唯一规范文档（品牌速览 + 速查表 + 完整规范 + Agent 落地细则）
        │   ├── css.json / library-consumption.json / scenario-map.json
        │   ├── ui.css / ui.js     # 可运行样式 class 与交互
        │   ├── components/*.json  # 13 个组件元数据（cssClasses 白名单 / usageScenarios）
        │   ├── preview/*.html     # 组件预览页
        │   ├── examples/*.html    # 页型成品底板（demo-home / demo-list / demo-pending-arrival / demo-interaction / login）
        │   └── assets/            # SVG 图标 + Logo
        └── scripts/verify-prototype.mjs   # 产出后机械自检（0 依赖 Node，默认 --ds references）
```

## 使用方式（AI agent）

1. **加载 skill**：支持 skill 机制的工具直接加载 `skills/xinxiaodi-design/`；不支持的工具按 `AGENTS.md` 把 `SKILL.md` + `references/tokens.json` + `references/Design.md` 喂进上下文。
2. **按序消费**：`references/tokens.json → Design.md → components/ → preview/ → examples/`。
3. **生成前必问两件事**：① demo 演示 or 交付开发；② 首页功能入口若有歧义先确认。
4. **产物落用户工作区**（不写进 skill 目录）；产出后跑自检脚本：
   ```bash
   node skills/xinxiaodi-design/scripts/verify-prototype.mjs <原型HTML绝对路径>
   ```
   有任一 ERROR 即返工。

## 如何迭代这套设计系统

单一事实源已收敛在 `skills/xinxiaodi-design/references/`，**不再有第二份副本**。改动按顺序（详见 `CONTRIBUTING.md`）：

1. 改 `references/tokens.json`（源头）。
2. 同步 `references/css.json`、`references/ui.css` / `ui.js`。
3. 同步 `references/Design.md`（数值/说明/速查表与 token 一致）。
4. 同步涉及的 `references/components/*.json`、`preview/`、`examples/`。
5. 自查：按 `SKILL.md` + `Design.md` 的产出前清单核对；必要时用 `scripts/verify-prototype.mjs` 对样例校验（0 裸 HEX、间距合档、组件复用、图标引用等）。
6. 更新 `CHANGELOG.md`，并回写 `_planning/PROJECT_CONTEXT.md` 台账。

> 内部规划 / 上下文台账放 `_planning/`（已在 `.gitignore` 排除，不作为最终产物）。
