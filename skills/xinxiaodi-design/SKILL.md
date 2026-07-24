---
name: xinxiaodi-design
description: "信小递司机端设计系统（海信物流司机端微信小程序）的机读优先原型技能。用于产出可交付开发的移动端 HTML 原型：设计宽度 375px、内容宽度 343px、品牌绿 #00AAA6、字体 PingFang SC。当用户要做信小递/司机端/物流司机端小程序的页面或原型，或提到待到库/待提货/待派送/待运抵/待签收/待办中心等列表页、运单卡片、金刚区功能入口、扫码接单、拖车业务、提柜/入园/落柜/过磅等操作页，或要求用信小递设计规范/token/组件库生成界面、写 demo 原型、交付开发 HTML 时使用。覆盖设计 token（三层：primitive/semantic/component）、颜色/字体/间距/圆角档位、组件（按钮/输入框/搜索框/选择器/标签/卡片/Tab/弹窗/导航/浮动按钮）、页型模板（登录/首页/功能选择/列表/操作/弹窗）、场景匹配路由与产出后机械自检。"
---

# 信小递司机端设计系统 Skill

海信物流**司机端微信小程序**「信小递」的机读设计系统。本 skill 的头等职责是——**产出可交付给开发的移动端 HTML 原型**。你的工作是**执行这套规范，不是自由发挥**。

- **平台**：微信小程序（移动端）。**设计宽度 375px**（iPhone X），**内容宽度 343px**（左右各 16px 边距）。
- **品牌色 `#00AAA6`**（primary-6 / brand）。**字体唯一 PingFang SC**，按钮文字统一 Regular(400)。
- 设计性格：简洁实用、卡片圆角、克制色彩、清晰层级、操作效率优先。

---

## 一条铁律

**值只从 `references/tokens.json` 取；颜色只用语义 token（`color-text-*`/`color-fill-*`/`brand`…）；间距 / 圆角 / 字号 / 控件尺寸只用既定档位——绝不裸写像素、绝不自造色、绝不自造组件、绝不加规范外装饰。**

## 🚨 组件复用铁律（最高优先级）

**所有原型必须引用 `references/ui.css`，并使用其中定义的 CSS class 构建组件。**

- `references/preview/` 与 `references/examples/` 里的组件是经过精心调教的标准实现。
- 生成页面时，**禁止用纯内联 style 重新实现任何已有组件**。
- 若某 UI 元素在 `ui.css` 中有对应 class，必须使用该 class。
- 仅对组件 JSON 中定义的「card 内部结构」等页面特定布局可用内联样式补充。
- **不确定用什么组件 → 必须询问用户，不允许自行发挥。**

违反此规则 = 交付失败，必须返工。

---

## 消费顺序（每次任务照做）

1. **取值** → `references/tokens.json`：单一事实源（颜色/字体/间距/圆角/组件尺寸）。直接引用，不改不近似。
2. **取规则** → `references/Design.md`：信小递唯一规范文档（品牌速览 + 速查表 + 完整规范 + 落地细则：颜色表、旧稿迁移对照、图标引用、按钮组、页型模板、自查项、常见错误）。**先读它。**
3. **看组件** → `references/components/*.json`（组件元数据 + `cssClasses` 白名单 + `usageScenarios`）与 `references/preview/*.html`（组件视觉与交互）。
4. **取素材** → `references/assets/`：SVG 图标、Logo，按命名规则 `{功能}_{颜色}_{尺寸}px.svg` 引用。
5. **看成品** → `references/examples/*.html`：页型模板示例（`demo-home` / `demo-list` / `demo-pending-arrival` 等）。

---

## 生成任何页面前必问（两个行为闸门）

### 闸门 1 · demo 演示 or 交付开发

在生成任何 demo / 页面之前，**必须先问用户**：

> “这个页面是做 demo 演示用，还是直接交付开发？”

- **demo 演示** → 使用固定宽度 375px 手机框，保持现有 CSS 不变。demo 里凡 `position:fixed` 的浮层（弹窗蒙层 `.dialog-overlay`、浮动按钮 `.fab`）要在 `#app` 作用域改成 `position:absolute`，收敛到 375px 手机框内，不溢出到浏览器视口。
- **交付开发** → 改响应式：宽度 `100% + max-width:750px`（px×2=rpx），内容区 `calc(100% - 32px)`，其余高度 / 间距保持 px。

### 闸门 2 · 首页功能入口歧义必问

当需求**没说清**一个新功能在首页如何接入时，**必须先停下来问**，二选一：① 在首页金刚区**新增功能球**（新增模块）？② 在**现有某个功能球里改**（复用入口）？

两种情况**首页都直接引用 `references/examples/demo-home.html`，绝不整块重画首页**（不得把金刚区改成 emoji、不得自造九宫格、不得去掉渐变头部）。

---

## 场景匹配评估流程（生成任何 HTML 前必做）

依据机读文件 `references/scenario-map.json`，**逐屏**判断页型与重合度，并把评估结论**在对话里向用户汇报**——**不要写进 HTML**（产品经理看到的原型要保持干净，无过程注释）。

| 档位 | 判据 | 路由 |
|------|------|------|
| **高重合** | 命中某 examplePage 页型，核心区块覆盖 ≥ 70% | 以该 example 为底板**复制微调** |
| **低重合** | 无现成成品页，但所需区块都能在 components 找到 | 用 components 组件 + `ui.css` class **逐块拼装** |
| **零重合** | 页型无成品页，核心区块在 components 也无对应 | **停止生成**，输出《缺口报告》，询问用户 (A) 补齐后再做 / (B) 同意自由发挥（标记为非规范）。未得答复不得擅自发挥。 |

- **高重合微调允许范围**：替换数据/文案/图标；隐藏或删除当前场景用不到的子元素；增减列表项；复用组件已有状态类。**禁止**改组件 DOM 骨架、重写组件样式、加规范外装饰。
- **低重合**：每一区块都要能追溯到某个组件 slug；禁止自造组件、禁止引用 examples 里未回收的页面私有 class。

汇报格式示例：
> 场景匹配评估：
> - 首页 → 高重合（demo-home，复制微调；隐藏公告条）
> - 提柜列表 → 高重合（demo-list，复制微调）
> - 提柜操作页 → 低重合（用 card + input + button + selector 拼装）
> - XX 特殊页 → 零重合 → 见《缺口报告》，请选择 A/B

---

## 产物落位

- **原型 HTML / 文档产物一律写入用户当前工作目录**（由用户指定或就近放置），**绝不写入本 skill 目录**（`skills/xinxiaodi-design/` 只放设计系统源文件，是只读知识包）。
- 原型引用设计系统资源时，用相对/绝对路径回指本 skill 的 `references/ui.css` 与 `references/assets/…`（以校验脚本核对通过为准）。

---

## 产出后强制校验（机械自检，非声明）

原型产出后，必须逐条**实际核对**（不是口头声明"已复用"）。任一未过即为交付失败，必须返工：

1. **权威源**：原型引用的样式必须指向本 skill 的 `references/ui.css`。
2. **class 白名单**：抽取原型里所有 `class="..."`，逐个在 `ui.css` 与组件 JSON 的 `cssClasses` 里查；查不到 = 疑似自造，必须改用组件类，或在零重合流程里显式报备。
3. **图标**：所有 `<img src>` 必须落在 `references/assets/` 下，不使用自创内联 SVG 图标。
4. **不留过程注释**：HTML 里不写场景评估 / 路由决策等过程性注释；只在对话中向用户汇报。

**用自检脚本执行**（零依赖 Node，位于本 skill 内）：

```bash
node skills/xinxiaodi-design/scripts/verify-prototype.mjs <原型HTML的绝对路径>
```

脚本默认 `--ds references`（本 skill 内的设计系统目录）。有任一 ERROR → 退出码 1，必须返工；WARN 需人工确认。

---

## 产出前自查清单（硬规则，出现即失败）

- [ ] **引用了 `references/ui.css`** — 未引用即失败。
- [ ] **组件用 CSS class 实现** — 不允许纯内联样式重写已有组件。
- [ ] **未自创组件** — 复用 `ui.css` 已定义的 class；不确定就问用户。
- [ ] **图标引用素材文件** — 使用 `references/assets/` 下的 SVG，不自创内联 SVG；缺图标时告知用户。
- [ ] **颜色来自 token** — 全部来自调色板 / 语义 token / CSS 变量，无裸 HEX。
- [ ] **间距全部是 4 的倍数**（4/8/12/16/20/24/28/32/40/48）。
- [ ] **圆角只用既定档位**（tag 2 / control 4 / dialog 8 / card 10 / icon-bg 12 / circle 50% / pill 999），同一视图不混用。
- [ ] **大按钮/输入框/搜索框默认整行**（width:100%），不写死像素宽（不再用 303px/119px）。
- [ ] **按钮文字 Regular(400)**，不用 Medium/Semibold。
- [ ] **标签颜色承载业务含义**：蓝 #165DFF=运单/提货、橙 #FF7D00=2C/收货、紫 #722ED1=电商补货，不可随意替换。
- [ ] **禁用态**：只降文字 opacity 40%，不改背景色。
- [ ] **placeholder 用 color-text-4**（#C9CDD4），不用 color-text-3。
- [ ] **卡片内嵌区用 color-fill-2**（#F2F3F5），不用白色；color-fill-3（#E5E6EB）仅用于预改约底部。
- [ ] **交付模式已响应式** / demo 模式 fixed 浮层已收敛到 375px 手机框。
- [ ] **产物放对目录** — 落用户工作区，不落本 skill 目录。

> 更细的产品专属自查项（图标尺寸档、按钮组规范、常见错误对照）见 `references/Design.md`「Agent 消费速查」章节。

---

## 页型速查（详见 references/Design.md「页面类型与使用场景」）

| 页型 | 何时用 | 参考成品 |
|------|--------|----------|
| 登录页 Auth | 身份认证 | `examples/login.html` |
| 首页 Home | 概览全局 / 功能入口 | `examples/demo-home.html` |
| 功能选择页 Hub | 子功能 ≥ 3 个 | — |
| 列表页 List（最核心） | 浏览/筛选/批量操作同类任务 | `examples/demo-list.html`、`examples/demo-pending-arrival.html` |
| 操作页 Action/Form | 针对某对象录入并提交 | — |
| 弹窗/面板 Dialog | 操作 ≤ 2 步、轻量 | `examples/demo-interaction.html` |

**列表页组成**（从上到下）：状态栏(44) → 标题栏(44) → 定位组件(48,可选) → 扫码接单(48,可选) → 搜索框(36) → Tab(30,可选) → 运单卡片列表(间距12) → 浮动按钮(可选)。运单卡片 = `.card` 容器 + `.card__*` 原子类拼装。

---

## 索引（references/，按需加载，勿一次性全读）

| 文件 | 用途 |
|------|------|
| `references/tokens.json` | **单一事实源**：三层 token（primitive/semantic/component）全量色板+刻度 |
| `references/Design.md` | 信小递唯一规范文档（完整规范 + Agent 消费速查 + 迁移对照 + 常见错误） |
| `references/css.json` / `references/library-consumption.json` | 结构化映射 / 库消费说明 |
| `references/ui.css` / `references/ui.js` | 可运行样式 class 与交互 |
| `references/components/*.json` | 13 个组件元数据（`cssClasses` 白名单 / `usageScenarios` / `states`）+ `index.json` |
| `references/scenario-map.json` | 场景匹配路由（页型 ↔ 成品页 ↔ 组件，高/低/零重合规则、首页入口规则、已知缺口） |
| `references/preview/*.html` | 组件预览页 |
| `references/examples/*.html` | 页型成品示例 |
| `references/assets/` | 114 个 SVG 图标 + Logo |
| `scripts/verify-prototype.mjs` | 产出后机械自检（0 依赖 Node） |

**拿不准就回到 `references/tokens.json` 和 `references/Design.md`，不要猜。你的工作是执行这套规范，不是设计。**
