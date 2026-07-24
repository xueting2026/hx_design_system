# Changelog 更新日志

本工程所有重要变更记录于此。格式遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本 SemVer](https://semver.org/lang/zh-CN/)。

工程为**多设计系统库**：每套产品设计系统收敛在 `design-system/<产品>/`，各自 `tokens.json` 为该产品单一事实源；跨系统通用铁律见根 `AGENTS.md`。

## [Unreleased]

### 新增
- **信小递自洽 Skill**（`skills/xinxiaodi-design/`，2026-07-24）：把信小递设计系统打包成可被 AI skill 机制加载的自洽包，零效果损失。
  - `SKILL.md`：合并根 `AGENTS.md` 通用铁律 + `Design.md`「Agent 消费速查」+ 两个行为闸门（生成前必问 demo/交付、首页功能入口歧义必问）+ 场景匹配三档 + 产出后强制校验 + `references/` 索引；frontmatter `description` 承载触发词；**产物落用户工作区，不写进 skill 目录**。
  - `references/`：`design-system/xinxiaodi/` 全量副本（`tokens.json`/`Design.md`/`css.json`/`library-consumption.json`/`scenario-map.json`/`ui.css`/`ui.js`/`components/`(13+index)/`preview/`/`examples/`/`assets/`(114 图标)）。
  - `scripts/verify-prototype.mjs`：搬入并改造——`--ds` 默认 `references`；**权威源校验改为位置无关**（`fs.realpathSync` 比对 skill 权威 `references/ui.css`，去掉硬编码 `design-system/xinxiaodi` 子串与旧目录名判定）。冒烟对 `examples/demo-list.html` 校验 0 ERROR、退出 0。
  - 校准 skill 内跨文件指针：`library-consumption.json`（`../../AGENTS.md`→`../SKILL.md`）、`scenario-map.json`（`authoritativeCssPath`→`references/ui.css`、`deprecatedTrees` 增源工程目录说明）、`Design.md`「产出后强制校验」权威源改指 `references/ui.css`、`index.html` 资源链接（AGENTS.md→SKILL.md）。
  - 精简 examples（2026-07-24）：从 skill 移出「预览画廊外壳」B 组（`examples/index.html`、`home.html`、`list.html`、`interaction.html`、`patterns.html`——iframe 手机框包装 + 画廊目录 + 页型蓝图，仅人工浏览用、agent 不消费），skill 内 `references/examples/` 只保留成品底板 A 组（`demo-home`/`demo-list`/`demo-pending-arrival`/`demo-interaction`/`login`）。B 组在源工程 `design-system/xinxiaodi/examples/` 保留（相同副本，未丢失）。同步修复残留入站链接：`index.html` 页型卡片（home/list→`demo-*`、功能选择/操作页→`Design.md`）、7 个 `preview/component-*.html` 侧边返回（`../examples/index.html`→`../index.html`）、`scenario-map.json` examplePages 移除 `patterns` 条目（原注即「仅导航参考，不作复用底板」）。冒烟：无残留破链、JSON 合法、verify 0 ERROR。
  - ⚠️ `references/` 与源 `design-system/xinxiaodi/` 为**双副本**，内容一致，改动需两边同步（后续可考虑同步脚本或单一源+生成）。
- **信小递 Design Token 细化到 v1.1.0（色彩对齐 Pangea + 三层 token 结构）**（`design-system/xinxiaodi/`，2026-07-22）：
  - **三层结构**：`tokens.json` 重构为 `primitive`（原始色板/刻度）→ `semantic`（按用途命名的别名）→ `component`（组件专属）三层，业务代码只消费 semantic/component。
  - **色彩扩展**：品牌 `primary` 与 `red/orange/green/arcoblue/purple` 及中性 `gray` 均补齐为 10 级色板（主色/常规态 = 第 6 级），命名与色值对齐 Pangea；新增语义层 `color-text-1..4` / `color-border-1..4` / `color-fill-1..5`、品牌交互态（`brand`/`-hover`/`-active`/`-bg`/`-bg-subtle`）与功能状态色 `success`/`warning`/`danger`/`info`（各带 `-bg`）。
  - **字体**：新增字号/字重/行高原始刻度；补 `button-medium` 与等宽数字样式 `number`（`.text-number`，Nunito Sans + tabular-nums）；按钮样式补齐文字色。
  - **间距**：基础刻度补齐 20/28/40/48；新增语义间距 `inset`/`stack`/`inline`/`gap-list`/`gap-section`/`page-margin`，消除「一数多用」歧义。
  - **圆角**：新增组件级 `radius-tag/control/card/icon-bg/dialog/pill/circle`；`pill` 由 58px 改为 999px（真胶囊，与高度无关）。
  - **按钮/输入/卡片宽度解耦**：去掉写死像素宽——大按钮/输入框/搜索框默认整行（`width:100%`，`.btn--lg` 去掉 `width:303px` + `padding:0 119px`，改 `padding:0 16px`），新增中按钮 `.btn--md`(36px)，卡片 `width:100%` + `max-width:343px`。
  - **示例明确化**：`index.html` 补充 10 级色板与语义层总览、按钮「风格 × 状态（默认/悬浮/按下/禁用）」状态矩阵、尺寸对照与场景说明；间距/圆角区同步更新。
  - **旧稿迁移对照**：`Design.md` 新增《旧 Figma 稿迁移对照（v1.0 → v1.1）》小节，按旧命名/旧色值反向查新 token，覆盖颜色（含 text 编号反转提示）+ 字体 + 间距 + 圆角 + 宽度模型，供拿旧 Figma 稿实现组件时对照。
  - **兼容性**：旧命名 `vi-1/2/3`、`text-1/2/3`、`border-1/2`、`bg-1/2`、`danger-1` 等保留为兼容别名（指向新值），存量原型无需改动；告警红 `#EE0A24→#F53F3F`、标签蓝 `#3491FA→#165DFF`、灰阶等会随之刷新为 Pangea 值（预期行为）。`tokens.json`/`css.json`/`Design.md`/`library-consumption.json` 与 `components/{button,input,card}.json` 同步更新；`verify-prototype.mjs` 校验 0 ERROR。
- **多设计系统工程结构**：根 `AGENTS.md`（跨所有设计系统的统一执行铁律）+ `design-system/<产品>/`（各产品设计系统，按目录区分）。
- **产物专区**：`prototypes/<产品>/`（可交付开发的 HTML 原型）与 `docs/<产品>/`（文档产物），与设计系统源文件隔离；产物内容不入库，仅保留 `.gitkeep` 骨架。
- **治理框架**：`CONTRIBUTING.md`（协作规范：上下文对齐、改动顺序、入库边界、分支与提交）+ 本 `CHANGELOG.md`。
- **上下文机制**：`_planning/PROJECT_CONTEXT.md` 跨会话台账（不入库）。
- **原型 · 信小递拖车业务**（`prototypes/xinxiaodi-trailer-business.html`，2026-07-20）：司机端移动原型（375px），引用 `design-system/xinxiaodi/ui.css`；含首页金刚区/功能球入口、运单卡片、底部弹出选择面板、照片上传与角标提醒。
  - （返工：按 `demo-home` 还原首页、卡片改官方 `.card__*`、底部面板改居中 `dialog`）
- **原型 · 订单发货巡检配置**（`prototypes/order-shipment-inspection-config.html`，2026-07-17）：MSC 管理端原型（Arco Design + Pangea 主题）；含物料组配置 Tab、拉取物料组、品牌/关键字筛选、风险等级规则（高/中/低）与巡检公式配置。
- **信小递组件补充**（`design-system/xinxiaodi/`，2026-07-20）：状态栏 + 标题栏 `demo-topbar` 分组规则（仅 demo 用、可整体隐藏，标题始终整栏居中、胶囊距右 6px、一级页无返回二级页有返回）；扫码接单入口绿（扫码接单）/橙（退出扫码）双态；浮动按钮「返回顶部」按 Figma 1:1 还原（180° 渐变 + 中性阴影 + 12px 文字 + back_top 图标）。
- **场景匹配评估机制**（`design-system/xinxiaodi/scenario-map.json`）：示例成品页 ↔ 覆盖场景 ↔ 组件 slug 映射，含高/低/零三档重合度路由（`overlapRules`）、首页入口歧义规则（`homeEntryRule`）、已知缺口台账（`knownGaps`）。
- **Design.md 三节规范**：新增《场景匹配评估流程（生成任何 HTML 前必做）》《首页功能入口的歧义确认（必问）》《产出后强制校验（机械自检，非声明）》。
- **组件场景化元数据**：`components/` 下 13 个组件 JSON 新增 `usageScenarios`/`states`/`cssClasses`/`exampleRefs`（每个组件及其状态标注调用场景，`cssClasses` 为对 `ui.css` 核实过的白名单）。
- **机械自检脚本** `scripts/verify-prototype.mjs`（零依赖 Node ESM）：校验权威 `ui.css` 路径、class 白名单（疑似自造 → WARN）、图标落在 `assets`、图标位使用 emoji/文本检测；有 ERROR 即 `exit 1`。

### 变更
- **信小递去产品前缀**：目录 `xinxiaodi-design-system/` → `design-system/xinxiaodi/`；文件 `xinxiaodi-Design.md`/`xinxiaodi-ui.css`/`xinxiaodi-ui.js` → `Design.md`/`ui.css`/`ui.js`（产品身份由目录层级表达）。
- **AGENTS.md 拆分**：通用铁律上提到工程根；信小递专属样式（色值表、图标路径、按钮组、页型模板、自查项、常见错误）下沉到 `design-system/xinxiaodi/Design.md`。
- **README 升级**为多系统工程总览（顶层导航 + 已接入系统清单 + 新增系统指南）。
- **信小递首页 index 目录化**（2026-07-20）：组件区由内联复制改为缩略图卡片目录（点击跳转各组件预览页，实现组件单一维护源）；「页型 Page Types」6 张卡片加上跳转链接；「资源链接」精简，移除与页型/组件目录重复及失效的入口。
- **卡片私有类回收（方案 A）**：`ui.css` 新增官方运单卡片三层结构原子类（`.card__location`/`.card__dispatch`/`.card__field`/`.card__toggle`/`.card__orders`/`.card__footer--between` 等）；`examples/`（`demo-list`/`demo-pending-arrival`/`demo-home`）移除页面私有 `.waybill-card` 等，改用官方 `.card` + `.card__*`；`card.json` 增补 `structureClasses` 与 `cssClasses`；Design.md 卡片段落改为「运单卡片 = `.card` 容器 + `.card__*` 原子类拼装」。
- **拖车业务原型返工**（外部原型 `Kiro-2/prototypes/xinxiaodi-trailer-business.*`）：卡片/搜索框/Tab/按钮/定位栏/复选框全部改用官方类；底部弹出面板改为官方居中 `dialog`；首页按 `examples/demo-home.html` 1:1 还原（渐变头部 + 扫码接单/待办中心快捷卡 + 真实 SVG 金刚区，并在金刚区新增「拖车业务」功能球 `tuoche.svg` + 合计角标 + 运单卡片待办任务）；权威样式路径指向 `design-system/xinxiaodi/ui.css`；校验结果 0 ERROR。

### 移除
- **合并 `SKILL.md` 进 `Design.md`**：二者高度重合且已非标准 skill 结构，删除 `SKILL.md`，其字体规格速查、组件尺寸速查两表并入 `Design.md`。`Design.md` 成为各产品唯一规范文档。

### 已接入设计系统
- **信小递司机端**（`design-system/xinxiaodi/`）：海信物流司机端微信小程序，品牌绿 `#00AAA6`，设计宽度 375px。

[Unreleased]: https://github.com/xueting2026/hx_design_system/commits/yangshuo-test
