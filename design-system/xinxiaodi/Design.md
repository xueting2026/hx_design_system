---
version: 1.1
name: 信小递司机端
description: 信小递司机端微信小程序设计系统，基于 Figma 设计稿整理，色彩体系对齐 Pangea Design，Token 分 primitive/semantic/component 三层，设计宽度 375px（iPhone X）。
colors:
  # === 色彩体系对齐 Pangea：色板 1→10 由浅到深，主色/常规态 = 6 级 ===
  # 品牌色 Primary（青绿）
  primary-1: "#E8FFFB"   # 浅色/白色悬浮
  primary-2: "#ADEEE4"   # 文字禁用
  primary-3: "#79DDD1"   # 一般禁用
  primary-4: "#4ACCC1"   # 特殊场景
  primary-5: "#22BBB3"   # 悬浮 (brand-hover)
  primary-6: "#00AAA6"   # 常规主色 (brand)
  primary-7: "#009093"   # 点击 (brand-active)
  primary-8: "#00757B"
  primary-9: "#005C64"
  primary-10: "#00444D"
  # 中性灰 Gray（文字/线条/填充来源）
  gray-1: "#F7F8FA"
  gray-2: "#F2F3F5"
  gray-3: "#E5E6EB"
  gray-4: "#C9CDD4"
  gray-5: "#A9AEB8"
  gray-6: "#86909C"
  gray-7: "#6B7785"
  gray-8: "#4E5969"
  gray-9: "#272E3B"
  gray-10: "#1D2129"
  # 语义文字 Text（对齐 Pangea color-text-1..4）
  color-text-1: "#1D2129"  # 主文字/标题（旧 text-3）
  color-text-2: "#4E5969"  # 次强调正文
  color-text-3: "#86909C"  # 辅助/次要信息（旧 text-2 近似）
  color-text-4: "#C9CDD4"  # 占位符/置灰（旧 text-1 近似）
  # 语义线条 Border（对齐 Pangea color-border-1..4）
  color-border-1: "#F2F3F5"  # 浅
  color-border-2: "#E5E6EB"  # 一般（旧 border-1）
  color-border-3: "#C9CDD4"  # 深（旧 border-2 近似）
  color-border-4: "#86909C"  # 重/按钮描边
  # 语义填充 Fill（对齐 Pangea color-fill-1..5）
  color-fill-white: "#FFFFFF"  # 卡片/输入框表面
  color-fill-1: "#F7F8FA"      # 浅/禁用底
  color-fill-2: "#F2F3F5"      # 页面背景/卡片内嵌区（旧 bg-1）
  color-fill-3: "#E5E6EB"      # 预改约底部等特定区域（旧 bg-2）
  color-fill-4: "#C9CDD4"      # 清除按钮底
  color-fill-5: "#4E5969"      # 强调/图标
  # 功能状态色 Functional（default=6 级，bg=1 级）
  success: "#00B42A"     # 成功；success-bg #E8FFEA
  warning: "#FF7D00"     # 警告；warning-bg #FFF7E8
  danger: "#F53F3F"      # 危险/错误/必传（旧 danger-1 #EE0A24）；danger-bg #FFECE8
  info: "#165DFF"        # 信息
  # 业务标签色 Subcolor（承载语义，不可替换）
  blue: "#165DFF"        # 蓝色标签（提货点/运单状态）
  orange: "#FF7D00"      # 橙色标签（2C/收货点）、约定时间
  purple: "#722ED1"      # 紫色标签（电商补货）
  # 旧命名保留为兼容别名（指向新值）：vi-1→primary-1, vi-2→primary-6, vi-3→primary-7,
  # text-3→color-text-1, text-2→color-text-3, text-1→color-text-4,
  # border-1→color-border-2, bg-1→color-fill-2, bg-2→color-fill-3, danger-1→danger
  # 中性色 Neutral
  gray-4: "#C9CDD4"     # 清除按钮背景、禁用文字
  gray-5: "#C8C9CC"     # checkbox/radio 未选中边框
typography:
  page-title:
    fontFamily: PingFang SC
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22px
  card-title:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  body-emphasis:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  body:
    fontFamily: PingFang SC
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
  secondary:
    fontFamily: PingFang SC
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: PingFang SC
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
  button-large:
    fontFamily: PingFang SC
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    color: "{colors.color-text-1}(深底反白时为白)"
  button-medium:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-small:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  tag:
    fontFamily: PingFang SC
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
  number:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    fontVariantNumeric: tabular-nums   # 等宽数字：运单号/重量/时间竖排对齐
spacing:
  # 基础刻度（4px 栅格，补齐 20/28/40/48）
  base: 4px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  7: 28px
  8: 32px
  10: 40px
  12: 48px
  # 语义间距（每个用途对应唯一刻度，消除歧义）
  inset: { xs: 8px, sm: 12px, md: 16px, lg: 24px }   # 组件内边距
  stack: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 24px }  # 纵向堆叠
  inline: { xs: 4px, sm: 8px, md: 12px }             # 横向并排
  gap-list: 12px       # 卡片列表间距（唯一用途）
  gap-section: 24px    # 页面区块之间
  page-margin: 16px    # 页面左右边距（唯一用途）
rounded:
  # 基础刻度
  xs: 2px          # 标签 (radius-tag)
  sm: 4px          # 按钮、输入框、Tab、搜索框 (radius-control)
  md: 10px         # 卡片 (radius-card)
  lg: 12px         # 图标背景 (radius-icon-bg)
  dialog: 8px      # 弹窗 (radius-dialog)
  pill: 999px      # 真胶囊，与高度无关（旧值 58px 已废弃）
  full: 50%        # 头像、浮窗按钮 (radius-circle)
components:
  button-primary-large:
    backgroundColor: "{colors.primary-6}"
    textColor: "{colors.color-fill-white}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    height: 40px
    widthMode: block   # 默认整行 width:100%（旧 width:303px + padding:0 119px 已废弃）
    paddingX: 16px
  button-primary-large-hover:
    backgroundColor: "{colors.vi-3}"
    textColor: "{colors.white}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    height: 40px
  button-primary-large-disabled:
    backgroundColor: "{colors.vi-2}"
    textColor: "#FFFFFF opacity 40%"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    height: 40px
  button-light-large:
    backgroundColor: "rgba(0,170,166,0.1)"
    textColor: "{colors.vi-2}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    height: 40px
  button-clear-large:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.text-3}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    height: 40px
  button-primary-small:
    backgroundColor: "{colors.vi-2}"
    textColor: "{colors.white}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
    height: 32px
  button-light-small:
    backgroundColor: "{colors.vi-1}"
    textColor: "{colors.vi-2}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
    height: 32px
  button-text-small:
    backgroundColor: transparent
    textColor: "{colors.vi-2}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
    height: 32px
  input-register:
    backgroundColor: "{colors.color-fill-white}"
    textColor: "{colors.color-text-1}"
    placeholderColor: "{colors.color-text-4}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: 48px
    widthMode: block   # width:100%（旧 width:303px 已废弃）
    borderColor: "{colors.color-border-2}"
  searchbox:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-3}"
    placeholderColor: "{colors.text-1}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: "0 8px 0 4px"
    height: 36px
  card:
    backgroundColor: "{colors.color-fill-white}"
    rounded: "{rounded.md}"
    shadow: "0px 4px 12px rgba(0,0,0,0.05)"
    padding: "12px 16px"
    widthMode: block       # width:100% + max-width:343px（旧 width:343px 已废弃）
    maxWidth: 343px
  tag-status:
    borderWidth: 1px
    rounded: "{rounded.xs}"
    typography: "{typography.tag}"
    height: 20px
    padding: "0 4px"
  checkbox:
    size: 16px
    rounded: 2px
    borderColor: "{colors.gray-5}"
    checkedColor: "{colors.vi-2}"
    disabledBg: "{colors.bg-2}"
  radio:
    size: 16px
    rounded: 50%
    borderColor: "{colors.border-2}"
    borderWidth: 1.5px
    checkedColor: "{colors.vi-2}"
  tab:
    height: 28px
    rounded: 4px
    gap: 8px
    activeBackground: "{colors.vi-2}"
    activeTextColor: "{colors.white}"
    inactiveBackground: transparent
    inactiveTextColor: "{colors.text-2}"
  floating-button:
    size: 60px
    rounded: 50%
    background: "linear-gradient(135deg, #00AAA6, #009B97)"
    shadow: "0px 4px 12px rgba(0,170,166,0.3)"
  floating-button-small:
    size: 40px
    rounded: 50%
    background: "linear-gradient(135deg, #00AAA6, #009B97)"
---

# 信小递司机端

## 概述

信小递是海信集团物流司机端微信小程序的设计系统。视觉风格以品牌绿 `#00AAA6` 为核心，搭配中性灰阶构建信息层次，服务于提货、派送、签收等物流场景。设计宽度 375px（iPhone X），字体统一使用 PingFang SC。整体风格简洁实用：卡片圆角、克制的色彩、清晰的信息层级，优先保证操作效率与可读性。

## 颜色

色彩体系对齐 Pangea Design：每个色系都是 **1→10 由浅到深的 10 级色板**，主色/常规态固定在第 6 级。Token 分三层，业务代码只用 semantic / 组件层，不直接写 primitive 或 hex。

**色板（primitive，第 1 层）**

- **品牌色 primary-1…10**：`primary-6 #00AAA6` 是品牌主色，`primary-5` 悬浮、`primary-7` 点击、`primary-1` 浅底。
- **中性灰 gray-1…10**、**危险 red**、**警告 orange**、**成功 green**、**信息 arcoblue（含蓝色标签）**、**紫色 purple** 各 10 级。

**语义层（semantic，第 2 层，按用途命名）**

- **文字** `color-text-1…4`：`1 #1D2129` 主文字 → `2 #4E5969` 次强调 → `3 #86909C` 辅助/次要 → `4 #C9CDD4` 占位/置灰。
- **线条** `color-border-1…4`：`1 #F2F3F5` 浅 → `2 #E5E6EB` 一般（分割线/输入框边框）→ `3 #C9CDD4` 深 → `4 #86909C` 重/描边。
- **填充** `color-fill-white/1…5`：白面 → `fill-2 #F2F3F5` 页面背景/卡片内嵌区 → `fill-3 #E5E6EB` 预改约底部等特定区域。
- **品牌交互** `brand`(默认) / `brand-hover` / `brand-active` / `brand-bg`(浅底) / `brand-bg-subtle`(半透明底)。
- **功能状态** `success #00B42A` / `warning #FF7D00` / `danger #F53F3F` / `info #165DFF`，各带 `-bg` 浅底。`danger` 用于错误文字与必传提醒。
- **业务标签** `blue #165DFF`（提货点/运单状态）、`orange #FF7D00`（2C/收货点/约定时间）、`purple #722ED1`（电商补货）——颜色承载业务含义，不可替换。

> 旧命名（`vi-1/2/3`、`text-1/2/3`、`border-1/2`、`bg-1/2`、`danger-1`）仍作为**兼容别名**保留，指向上述新值。新代码请优先使用语义命名，不要硬编码 hex。

## 排版

PingFang SC 为唯一字体家族。上文 `typography` token 携带 `fontFamily`、`fontSize`、`fontWeight` 与 `lineHeight`：

- `page-title`（16px/Medium）用于页面标题与导航栏标题。
- `card-title`（14px/Semibold）用于卡片标题行。
- `body-emphasis`（14px/Medium）用于正文中需要强调的信息。
- `body`（12px/Medium）用于一般正文内容。
- `secondary`（12px/Regular）用于辅助说明，搭配 `text-2` 色值。
- `caption`（10px/Regular）用于次要信息、时间、标签文字。
- `button-large`（16px/Regular）用于大按钮文字，`button-medium`（14px/Regular）用于中按钮，`button-small`（14px/Regular）用于小按钮与搜索框内文字。按钮文字统一 Regular(400)，深底时反白。
- `tag`（10px/Regular）用于标签组件。
- `number`（Nunito Sans / tabular-nums）用于运单号、重量、时间等数字，等宽让竖排数字对齐。对应工具类 `.text-number`。

`body` 与 `secondary` 覆盖大多数文字场景。字号来自原始刻度（10/12/13/14/16/18/20/24），字重仅 Regular(400)/Medium(500)/Semibold(600) 三档，不要在这些 token 之外自行设定字号或字重。

## 布局

间距遵循 4px 基础刻度，完整档位：4、8、12、16、20、24、28、32、40、48px（全部 4 的倍数）。为消除"一个数管多个用途"的歧义，间距分两层使用：

- **基础刻度**给出可用的像素值；
- **语义间距**把用途固定到唯一刻度：`inset`（组件内边距：xs 8 / sm 12 / md 16 / lg 24）、`stack`（纵向堆叠：4/8/12/16/24）、`inline`（横向并排：4/8/12）、`gap-list`=12（卡片列表间距，唯一用途）、`gap-section`=24（区块之间）、`page-margin`=16（页面左右边距，唯一用途）。

卡片内边距 12px（竖）/16px（横），页面左右边距 16px，卡片列表间距 12px。内容区域限定在 343px 宽度（375px 减去左右各 16px 边距）。

页面结构自上而下：
```
├── 状态栏 (44px, 系统)
├── 导航栏 (44px, 白色/渐变)
├── 内容区域
│   ├── 头部区域 (渐变背景)
│   ├── 功能卡片 (白色卡片, 圆角10px)
│   ├── 列表区域
│   │   ├── 筛选/搜索栏
│   │   ├── Tab切换
│   │   └── 卡片列表 (间距12px)
│   └── 空状态
└── 浮动按钮 (固定定位, 右下角)
```

### 状态栏 & 标题栏规则

状态栏和标题栏合为一组（`.demo-topbar` 容器），**仅用于 demo / 原型预览**还原真机顶部效果。开发时系统（小程序 / App）会自带顶部，无需实现——可通过 `.demo-topbar { display:none }` 或加 `.demo-topbar--hidden` 一次性隐藏，也可直接删除整个容器。

- **状态栏**：demo 中始终存在。配色跟随页面——白底页用 `dark`，渐变头部页用 `light`。
- **标题栏**：是否显示由当前页面决定，显示时由三部分组成：
  - **返回按钮**：仅二级及以下页面有，点击返回上一级；一级页面（首页、登录页）无返回按钮。
  - **标题**：始终存在，按当前页面命名（如「首页」「待到库」）；登录页标题为「信小递」。**标题始终相对整栏（375px）水平居中，不管左右两侧按钮功能增减都保持居中**（绝对定位居中实现）。
  - **胶囊按钮**：小程序平台始终提供，固定在右侧，距右 6px，宽度自适应（87×32）。

### Demo 手机框：固定定位浮层收敛（375px）

原型 demo 里页面被约束在 375px 手机框（`#app { width:375px; margin:0 auto; position:relative; overflow:hidden }`），但设计系统中用 `position:fixed` 的浮层（弹窗蒙层 `.dialog-overlay`、浮动按钮 `.fab`）是相对**视口**定位的，在宽屏浏览器里会溢出到手机框之外（蒙层铺满整屏、浮动按钮贴在浏览器右下角）。

规则：demo/原型里，凡 `position:fixed` 的浮层都要收敛到手机框内——在 `#app`（已是 `position:relative`）作用域下把它们改成 `position:absolute`，让其定位相对手机框而非视口：

```css
#app .dialog-overlay { position: absolute; }
#app .fab { position: absolute; }
```

自定义浮层（吐司、照片查看器等）同理，直接用 `position:absolute; inset:0`（相对 `#app`），不要用 `fixed`。此规则仅针对 demo 预览；交付到小程序/App 时顶部与浮层由系统或真实容器承载，无需此覆盖。

## 形状

圆角保持克制，并提供组件级语义 token：`radius-tag 2px`（标签）、`radius-control 4px`（按钮/输入框/Tab/搜索框）、`radius-card 10px`（卡片）、`radius-icon-bg 12px`（图标背景）、`radius-dialog 8px`（弹窗）、`radius-circle 50%`（头像/浮窗按钮）、`radius-pill 999px`（展开/收起等胶囊，真胶囊、与高度无关——旧值 58px 已废弃）。一个视图内保持统一的圆角家族，不混用。

## 层级与深度

层级通过背景色区分：`bg-1` 灰底页面 → `white` 卡片表面 → `bg-1` 卡片内嵌内容区。阴影仅用于卡片容器（`0px 4px 12px rgba(0,0,0,0.05)`）和浮窗弹出层（`0 4px 16px rgba(0,0,0,0.12)`）。浮动按钮使用品牌色阴影（`0px 4px 12px rgba(0,170,166,0.3)`）。

## 组件

上文 `components` token 给出各元素的即用值：

- **大按钮（button-primary-large）**：实心品牌色填充，白色文字，高 40px，**默认整行（width:100%，`.btn--lg`）**，用于页面级主操作（登录、提交）。旧的 `width:303px` + `padding:0 119px` 硬编码已废弃，改为左右内边距 16px + 文字居中，宽度随内容区自适应。hover 切换为 `brand-active`，禁用态文字降 40% 透明度。
- **中按钮（button-medium，`.btn--md`）**：高 36px，内容自适应宽度（`width:auto`，左右内边距 12px），介于页面级大按钮与卡片内小按钮之间；需要整行时加 `.btn--block`。
- **浅色大按钮（button-light-large）**：`rgba(0,170,166,0.1)` 半透明填充，`vi-2` 文字，用于次要操作。
- **清除大按钮（button-clear-large）**：`bg-2` 填充，`text-3` 文字，用于取消/重置。
- **小按钮（button-primary-small）**：32px 高，`vi-2` 填充，用于卡片内操作（扫码到库、分单、审核）。
- **浅色小按钮（button-light-small）**：`vi-1` 填充，`vi-2` 文字。
- **文字小按钮（button-text-small）**：透明填充，`vi-2` 文字，无底色，用于低强调操作（更多）。
- **输入框（input-register）**：白色填充，`border-1` 边框，48px 高，用于注册/登录页。
- **搜索框（searchbox）**：白色填充，36px 高，含搜索图标 + 输入区 + 查询按钮（28px 高，`vi-2` 背景）。可附加筛选下拉（12px `vi-2` 文字 + 分割线）或排序/筛选图标按钮（36×36px）。
- **卡片（card）**：白色填充，10px 圆角，343px 宽，低阴影。**运单卡片 = `.card` 容器 + `.card__*` 原子类拼装**（值全部取自 tokens，定义见 `ui.css` 第 8 节，勿在示例/原型里写私有卡片类）。按三层结构拼装：
  - 列表容器：`.card-list`（提供 12px 卡片间距）
  - 提货/收货信息（地点头）：`.card__location` / `.card__location-row` / `.card__addr` / `.card__warehouse` / `.card__cargo`
  - 全宽分割线：`.card__divider.card__divider--full`
  - 运单信息（调度单分组）：`.card__dispatch` / `.card__dispatch-row` / `.card__dispatch-plate` / `.card__dispatch-time`
  - 展开/收起：`.card__toggle` / `.card__toggle-pill`（展开态 `.card__toggle-pill--open`）
  - 订单信息（展开区）：`.card__orders`（`.card__orders--visible` 显隐）/ `.card__order` / `.card__order-top` / `.card__order-sap` / `.card__order-body` / `.card__field`（`.card__field-label` + `.card__field-value`）/ `.card__product` / `.card__order-footer` / `.card__order-contact` / `.card__order-appoint`
  - 底部按钮区：`.card__footer.card__footer--between` / `.card__stats` / `.card__actions`
- **标签（tag-status）**：1px 边框，2px 圆角，20px 高。颜色按业务含义：蓝色（运单状态）、橙色（2C）、紫色（电商补货）。
- **多选框（checkbox）**：16px 方形，2px 圆角。未选中 `gray-5` 边框，选中 `vi-2` 填充+白色勾，禁用 `bg-2` 填充。半选态 `vi-2` 填充+白色横线。
- **单选框（radio）**：16px 圆形，1.5px `border-2` 边框。选中 `vi-2` 填充+白色勾。
- **Tab 切换**：28px 高，4px 圆角，选中态 `vi-2` 背景白色文字，未选中透明背景 `text-2` 文字。
- **浮动按钮**：60px 圆形，品牌绿渐变，品牌色阴影。小号 40px。

按钮禁用态统一处理：填充色不变，文字/图标降低为 40% 透明度。

## 按钮组规范

卡片底部按钮区域遵循以下规则：

- 有「x单x件」统计文字时：右侧操作按钮≤3个，超出则在最前显示「更多」文字按钮。
- 无统计文字时：右侧操作按钮≤5个，超出则显示「更多」文字按钮。
- 「更多」点击弹出浮窗（白色，8px 圆角，`0 4px 16px rgba(0,0,0,0.12)` 阴影）。
- 按钮间距 8px，统一使用 `button-primary-small` 样式。

## 图标

图标按尺寸分层，SVG 矢量格式，支持多色变体：

- **48×48px 金刚区图标**：用于首页功能入口网格。含渐变背景+阴影+内容图形。司机端 12 个（待到库、待提货、待打卡、待派送、待运抵、待签收、回单上传、送货交接、历史记录、服务反馈、拖车业务、异常提报），管理端 4 个（订单管理、签收管理、运单管理、调度单管理）。
- **24×24px 通用图标**：search、close、position、phonecall、navigation、tiaoma、pic、password_hide/show 等。颜色变体 gray/green。
- **20×20px 工具图标**：sort、screen、time、new、zuzhi。白色版本用于深色背景（搜索栏图标通过 CSS filter 着色为 `vi-2`）。
- **16×16px 辅助图标**：position、tiaoma、search、close、phonecall、copy、people、list 等。颜色变体 green/gray/white/black。
- **12×12px select 箭头**：方向 down/up/left/right × 样式 line/surface × 颜色 green/gray/black/white。

图标命名规则：`{功能}_{颜色}_{尺寸}px.svg`，方向箭头附加方向前缀。

## 分割线

0.5px 分割线，颜色 `border-1`，支持四种对齐方式：

- **Full Width**：满宽无缩进。
- **Center**：两端各缩进 16px。
- **Left**：左侧缩进 16px。
- **带展开收起**：中间显示文字（10px `text-2`）+ 方向箭头。

## 导航组件

- **定位栏**：48px 高，左侧绿色 pin 图标 + 地址文字 + 右侧筛选按钮。6 种变体（地址行数 × 选中状态）。
- **扫码接单入口**：48px 高，渐变背景 `#F4FFFD→#FFF`，圆形 icon + 操作文字 + 右箭头。
- **展开收起**：62×26px，pill 形状（bg `bg-1`，border `border-1`，圆角 58px），文字 + 箭头图标。

## 列表页构成规范

各业务列表页的组件构成，所有组件均引用组件库中的标准组件：

| 页面 | 组件构成（从上到下） |
|------|---------------------|
| 待到库 | 状态栏+标题栏 → 定位组件 → 扫码接单入口 → 搜索框（有筛选） → 运单卡片 |
| 待提货 | 状态栏+标题栏 → 定位组件 → Tab 切换（待提货/待发运） → 运单卡片 |
| 在途打卡 | 状态栏+标题栏 → 定位组件 → Tab 切换（全部/已超时/已到达未发出） → 运单卡片 |
| 待派送 | 状态栏+标题栏 → 定位组件 → 运单卡片 |
| 待运抵 | 状态栏+标题栏 → 定位组件 → 搜索框（有筛选） → 运单卡片 |
| 待签收 | 状态栏+标题栏 → 定位组件 → 搜索框（有筛选） → 运单卡片 |
| 待办中心 | 状态栏+标题栏 → 扫码接单 → 搜索框（有筛选） → Tab 切换 → 运单卡片 |

**组件引用说明：**
- **状态栏+标题栏** → 系统状态栏 (44px) + 导航栏 (44px, 返回箭头 + 标题 + 小程序胶囊)
- **定位组件** → 定位栏 (48px, bg `bg-1`, 绿色 pin + 地址 + 筛选按钮)
- **扫码接单入口** → 扫码接单组件 (48px, 渐变背景, 圆形 icon + 操作文字 + 右箭头)
- **搜索框（有筛选）** → searchbox 组件 (36px) + 筛选下拉
- **Tab 切换** → tab 组件 (28px 高, 圆角 4px, gap 8px)
- **运单卡片** → card 组件（详见组件 token）

## Logo

- **信小递司机端 Logo（254×130px）**：紧凑版，含图标+文字。渐变色 `#57E8DF→#00AAA6` + 点缀色 `#FF5F00`。适用于启动页、登录页。
- **信小递司机端 Logo 横版（800×200px）**：完整横版，适用于品牌展示、文档头部。

## 页面类型与使用场景

信小递司机端按业务流程，页面分为以下六种 Canonical Layout（标准页型）。每种页型有明确的组件构成与适用场景，选型时先判断"用户在这一步要完成什么任务"。

### 登录页（Auth）

**场景**：用户首次使用或登录态过期时进入。

**结构**：居中布局，品牌 Logo + 输入区（手机号、验证码/密码）+ 主操作按钮。

**组件**：Logo（254×130px）、input-register（48px）、button-primary-large（40px）。

**判据**：需要身份认证时使用。不承载任何业务信息。

### 首页（Home / Dashboard）

**场景**：司机登录后的主入口，概览当前待办任务，快速进入各业务模块。

**结构**：
- 头部渐变区域（品牌氛围 + 用户信息）
- 消息提醒条（有待处理任务时显示，如"有3个柜子已完成装柜，请点击查看"）
- 扫码接单入口（48px，渐变背景，圆形 icon + 文字 + 右箭头）
- 金刚区（48×48px 图标网格，司机端 12 个功能入口 + 管理端 4 个）
- 待办任务快捷区（角标汇总各业务待办数量）
- 浮动按钮（扫码/待办中心，右下角固定定位）

**判据**：用户需要"一眼看到全局状态"并"快速跳转到具体任务"时使用。信小递仅有一个首页。

### 功能选择页（Function Hub）

**场景**：某业务模块下有多个子功能时，作为二级入口集合。例如拖车业务包含提柜、入园、落柜、提重柜、离园、过磅、返重柜、改约、异常提报 9 个子功能。

**结构**：
- 标题栏（返回箭头 + 标题 + 小程序胶囊）
- 当前位置（定位组件）
- 功能球网格（48×48px 图标 + 文字 + 角标）

**判据**：子功能≥3个且各自独立时使用。若子功能≤2个，直接放在首页金刚区或用 Tab 切换。

### 列表页（List）

**场景**：展示同类任务的集合，支持筛选、搜索、批量操作。是信小递最核心的页型——待到库、待提货、在途打卡、待派送、待运抵、待签收、待办中心、提柜列表、入园列表、落柜列表、提重柜列表、离园列表、过磅列表、返重柜列表、改约列表均属于此类。

**结构**（从上到下）：
- 状态栏 + 标题栏
- 定位组件（可选，有地理筛选需求时显示）
- 扫码接单入口（可选，仅待到库/待办中心使用）
- 搜索框（36px，可附加筛选下拉/排序/筛选图标）
- Tab 切换（可选，同类任务有多种状态分组时使用）
- 运单卡片列表（card 组件，间距 12px，支持展开/收起）
- 浮动按钮（可选）

**判据**：用户需要"浏览多条同类数据并选择/操作其中某条"时使用。列表页的数据通常按三层结构组织：地点分组 → 调度单分组 → 运单明细。

**卡片展开规则**：收起态显示摘要信息，展开态显示完整运单详情（订单号、地址、货品、预改约）。

### 操作页（Action / Form）

**场景**：对某条/某批运单执行具体操作，需要用户录入信息并提交。例如提柜操作页（录入柜号 + 上传照片 + 提交）、返重柜操作页、异常提报录入页、变更柜号页。

**结构**：
- 标题栏（返回箭头 + 标题）
- 当前位置（可选）
- 数据展示区（只读，展示选中的运单信息）
- 录入区（输入框、选择器、图片上传区域）
- 底部固定操作栏（提交按钮，button-primary-large）

**判据**：用户需要"针对特定对象录入信息并确认提交"时使用。操作页通常由列表页点击某个操作按钮跳入，提交后返回列表页并刷新数据。

**校验规则**：必填项校验失败时使用 toast 提示（`danger-1` 文字），输入框下方可显示红色错误文字。

### 弹窗/面板（Dialog / Panel）

**场景**：轻量级操作，不需要独立页面。例如过磅登记（输入重量）、入园改约（选择日期时间段）、单号查询（输入运单号/柜号）、更多操作菜单。

**结构**：
- 底部弹出面板（圆角顶部，白色背景）
- 标题 + 内容区 + 操作按钮（取消/确定）

**判据**：操作步骤≤2步、无需展示大量数据时使用面板。若操作复杂或需要展示列表，应使用独立操作页。

---

### 页型选型决策树

```
用户要做什么？
├── 认证身份 → 登录页
├── 概览全局 / 选择入口 → 首页
├── 在多个子功能中选择 → 功能选择页
├── 浏览/筛选/批量操作同类任务 → 列表页
├── 针对某条任务录入信息并提交
│   ├── 操作复杂（多字段/上传照片） → 操作页
│   └── 操作简单（1-2个字段） → 弹窗/面板
└── 查看单条详情（物流轨迹） → 详情页（扩展）
```

---

## 卡片与功能模块对应关系

| 卡片类型 | 使用页型 | 所属功能模块 | 说明 |
|---------|---------|------------|------|
| 运单卡片 | 列表页 | 待到库、待提货、待发运、待打卡、待派送、待运抵、待签收 | 各模块字段差异见配置表 |
| 物流信息卡片 | 列表页 | 订单管理 | 管理端使用 |
| 签收管理卡片 | 操作页 | 待签收 | 含图片上传和拒收原因选择 |

**司机端首页功能模块**（对应金刚区图标）：
待到库、待提货、待发运、待打卡、待派送、待运抵、待签收、回单上传、送货交接、历史记录、服务反馈、拖车业务、异常提报、订单管理

金刚区图标路径：`assets/shortcuts/icon/home/driver/`（司机端）和 `assets/shortcuts/icon/home/oa/`（管理端）

## 该做与不该做

- 用 token 名称引用颜色，不要硬编码 hex 值。
- 用文字色梯度为信息排序：`text-3` 用于主文字，`text-2` 用于辅助，`text-1` 仅用于 placeholder。
- 将品牌色 `vi-2` 保留给主要操作与选中态，不要用于装饰性填充。
- 禁用态统一使用 40% 透明度降低文字/图标，不改变背景色。
- 卡片内嵌内容使用 `bg-1` 底色，不要用 `white`，否则无法区分层级。
- 保持 4px 间距基础刻度，不使用奇数或非 4 倍数的间距值。
- 一个视图内保持统一的圆角家族，不混用不同圆角值。
- 标签颜色承载业务含义（蓝=运单状态，橙=2C/收货点），不要随意替换。
- 不要在按钮内使用 Medium 或 Semibold 字重，按钮统一使用 Regular。
- 不要将 `bg-2` 用作通用背景，它仅用于预改约底部等特定区域。
- 搜索框 placeholder 使用 `color-text-4`（#C9CDD4，旧 text-1），不要使用更深的 `color-text-3`。
- 浮动按钮仅放置在右下角固定定位，不要用于页面内嵌。

---

## Agent 消费速查（落地补充）

> 本节为原 `AGENTS.md` 中**信小递专属**的落地细则下沉而来。跨系统的通用铁律见工程根目录 `AGENTS.md`；本节只讲信小递自己的具体值。

### 品牌与基准

- **平台**：微信小程序（移动端）。**设计宽度 375px**（iPhone X），**内容宽度 343px**（左右各 16px 边距）。
- **品牌色 `#00AAA6`**（vi-2）。**字体唯一 PingFang SC**，按钮文字统一 Regular(400)。
- 设计性格：简洁实用、卡片圆角、克制色彩、清晰层级、操作效率优先。

### 颜色使用规则

| 用途 | Token（新命名） | 值 | 旧别名 |
|------|-------|------|------|
| 深色按钮背景 | brand / primary-6 | #00AAA6 | vi-2 |
| 深色按钮 hover/点击 | brand-active / primary-7 | #009093 | vi-3 |
| 深色按钮悬浮 | brand-hover / primary-5 | #22BBB3 | — |
| 浅色实底按钮背景 | brand-bg / primary-1 | #E8FFFB | vi-1 |
| 半透明浅色按钮 | brand-bg-subtle | rgba(0,170,166,0.1) | — |
| 页面背景 / 卡片内嵌区 | color-fill-2 | #F2F3F5 | bg-1 |
| 预改约底部等特定区域 | color-fill-3 | #E5E6EB | bg-2 |
| 卡片背景 | color-fill-white | #FFFFFF | white |
| 主文字 | color-text-1 | #1D2129 | text-3 |
| 次强调正文 | color-text-2 | #4E5969 | — |
| 辅助/次要文字 | color-text-3 | #86909C | text-2 |
| 占位符 / 置灰 | color-text-4 | #C9CDD4 | text-1 |
| 分割线 / 输入框边框 | color-border-2 | #E5E6EB | border-1 |
| 输入框 focus 边框 | brand | #00AAA6 | vi-2 |
| 错误 / 必填 | danger | #F53F3F | danger-1(旧#EE0A24) |
| 成功 | success | #00B42A | — |
| 警告 | warning | #FF7D00 | — |
| 信息 | info | #165DFF | — |
| 蓝色标签（运单/提货） | blue / arcoblue-6 | #165DFF | blue(旧#3491FA) |
| 橙色标签（2C/收货） | orange / orange-6 | #FF7D00 | orange |
| 紫色标签（电商补货） | purple / purple-6 | #722ED1 | purple |

### 旧 Figma 稿迁移对照（v1.0 → v1.1）

> **何时用这张表**：拿到仍用旧命名（`vi-1`、`text-3` 等）或写死旧色值/旧尺寸的 Figma 稿实现组件时，按"旧稿写的"这一列反查，落地时**统一改写成新命名**。旧别名在 `ui.css` 里仍可用（不会报错），但新代码请写新名。方向与上面《颜色使用规则》相反：那张按"用途"正向查，这张按"旧稿标注"反向查，且覆盖颜色 + 字体 + 间距 + 圆角 + 宽度。

**颜色（注意 text 编号是反的）**

| 旧稿写的 | 落地改写为 | 值 | 备注 |
|------|-----------|------|------|
| vi-1 | primary-1 | #E8FFFB | 浅底（旧 #E6F7F6 微调） |
| vi-2 | brand（= primary-6） | #00AAA6 | 品牌主色，值不变 |
| vi-3 | brand-active（= primary-7） | #009093 | 点击/hover，值不变 |
| text-3 | color-text-1 | #1D2129 | 主文字（编号反转！） |
| text-2 | color-text-3 | #86909C | 辅助/次要（旧 #7C8492） |
| text-1 | color-text-4 | #C9CDD4 | 占位/置灰（旧 #BFC5CC） |
| border-1 | color-border-2 | #E5E6EB | 分割线/输入框边框，值不变 |
| border-2 | color-border-3 | #C9CDD4 | 辅助线（旧 #BFC5CC） |
| bg-1 | color-fill-2 | #F2F3F5 | 页面背景/卡片内嵌（旧 #F3F5F7） |
| bg-2 | color-fill-3 | #E5E6EB | 预改约底部（旧 #EBEDF0） |
| white | color-fill-white | #FFFFFF | 卡片/输入框面 |
| 蓝 #3491FA | blue（= arcoblue-6） | #165DFF | 运单/提货标签 |
| 橙 #FF7D00 | orange（= orange-6） | #FF7D00 | 2C/收货，值不变 |
| 紫 #722ED1 | purple（= purple-6） | #722ED1 | 电商补货，值不变 |
| danger-1 #EE0A24 | danger（= red-6） | #F53F3F | 错误/必填 |
| danger-bg #FDE7E9 | danger-bg（= red-1） | #FFECE8 | 告警底 |

**字体 / 间距 / 圆角 / 宽度**

| 旧稿写的 | 落地改写为 |
|------|-----------|
| 大按钮 `width:303px` + `padding:0 119px` | `.btn--lg`（整行 `width:100%` + 左右内边距 16px），去掉写死宽 |
| 输入框/卡片 `width:303px` / `343px` | 输入框整行 `width:100%`；卡片 `width:100%` + `max-width:343px` |
| 圆角 `pill:58px` | `radius-pill`（999px，真胶囊） |
| 只有大/小两档按钮 | 需要中间态用新增的中按钮 `.btn--md`（36px） |
| 运单号/重量/时间用普通字体 | 用 `.text-number`（Nunito Sans + tabular-nums，等宽对齐） |

**规则**：旧稿标注的具体色值若 Pangea 有对应（如上表），直接换成新值；若旧稿某色 Pangea 没有对应、且明显是特意选的，先停下来跟你确认，不擅自替换。

### 字体规格速查

| 场景 | 字号 | 字重 | 行高 |
|------|------|------|------|
| 页面标题 | 16px | Medium(500) | 22px |
| 卡片标题 | 14px | Semibold(600) | 20px |
| 正文强调 | 14px | Medium(500) | 20px |
| 正文 | 12px | Medium(500) | 18px |
| 辅助信息 | 12px | Regular(400) | 18px |
| 次要/时间 | 10px | Regular(400) | 14px |
| 大按钮 | 16px | Regular(400) | 22px |
| 中按钮 | 14px | Regular(400) | 20px |
| 小按钮 | 14px | Regular(400) | 20px |
| 数字(运单号/重量/时间) | 14px | Medium(500) | 20px |（Nunito Sans, tabular-nums）

### 组件尺寸速查

| 组件 | 高度 | 宽度 | 圆角 |
|------|------|------|------|
| 大按钮 | 40px | block（100%，左右内边距 16px） | 4px |
| 中按钮 | 36px | auto（左右内边距 12px） | 4px |
| 小按钮 | 32px | auto（左右内边距 8px） | 4px |
| 输入框（注册） | 48px | block（100%） | 4px |
| 搜索框 | 36px | block（100%） | 4px |
| 卡片 | auto | block（100%，max-width 343px） | 10px |
| Tab 项 | 30px | auto | 4px |
| 浮动按钮 | 60px | 60px | 50% |
| 弹窗 | auto | 320px | 8px |
| 定位栏 | 48px | 100% | — |

> 宽度不再写死像素：大按钮/输入框/搜索框默认整行（`width:100%`），卡片 `width:100%` + `max-width:343px`，由父容器（内容区 343px）控制上限。需要内容自适应宽度用中/小按钮（`width:auto`）。

### 图标引用

```html
<img src="assets/icons/{功能}_{颜色}_{尺寸}px.svg" style="width:{尺寸}px; height:{尺寸}px;" />
```

尺寸档：48px（金刚区）/ 24px（通用）/ 20px（工具）/ 16px（辅助）/ 12px（箭头）。
颜色变体：gray / green / white / black。金刚区：`assets/shortcuts/icon/home/driver/{功能}.svg`（司机端）、`assets/shortcuts/icon/home/oa/`（管理端）。

示例：`search_gray_24px.svg`、`position_green_16px.svg`、`select/down_surface_green_12px.svg`、`close_gray_24px.svg`。

### 按任务怎么做

- **列表页**（最核心）：状态栏(44) → 标题栏(44) → 定位组件(48,可选) → 扫码接单(48,可选) → 搜索框(36) → Tab(30,可选) → 卡片列表(间距12) → 浮动按钮(可选)。参考 `examples/demo-list.html`。
- **操作页**：标题栏 → 数据展示区(只读) → 录入区(输入/选择/上传) → 底部固定提交按钮(40)。
- **弹窗**：宽 320px，内边距 24px，右上角关闭按钮(24px, top8 right8)；按钮组浅色在左深色在右；蒙层 rgba(0,0,0,0.5)。
- **首页**：渐变顶部(194px) + 扫码接单入口 + 金刚区(48px 图标网格) + 待办快捷区 + 浮动按钮。参考 `examples/demo-home.html`。

### 按钮组规范（卡片底部）

- 有「x单x件」统计文字 → 右侧按钮 ≤ 3 个。
- 无统计文字 → 右侧按钮 ≤ 5 个。
- 超出 → 显示「更多」文字按钮(14px, #00AAA6, 无底色)，点击弹浮窗（白底、8px 圆角、阴影 `0 4px 16px rgba(0,0,0,0.12)`，选项 padding 8px 16px、14px Regular #1D2129）。

### 信小递专属自查项

- [ ] 页面宽度：demo 用 375px 固定宽；交付开发用 `100% + max-width: 750px`（px×2=rpx）。
- [ ] 内容宽度 343px（两侧各 16px）。
- [ ] 间距全部是 4 的倍数（4/8/12/16/20/24/28/32/40/48）。
- [ ] 圆角只用 2/4/8/10/12/50%/pill(999) 这几档，同一视图不混用。
- [ ] 大按钮/输入框/搜索框默认整行（width:100%），不写死像素宽（不再用 303px/119px）。
- [ ] 按钮文字 Regular(400)，不用 Medium/Semibold。
- [ ] 标签颜色：蓝(#165DFF)=运单/提货，橙(#FF7D00)=2C/收货，紫(#722ED1)=电商补货——不可随意替换。
- [ ] 禁用态：只降文字 opacity 40%，不改背景色。
- [ ] placeholder 用 color-text-4(#C9CDD4)，不用 color-text-3。
- [ ] 卡片内嵌区域用 color-fill-2(#F2F3F5，旧 bg-1)，不用白色；color-fill-3(#E5E6EB，旧 bg-2) 仅用于预改约底部。
- [ ] 搜索框高 36px，查询按钮 28px 高 #00AAA6 背景白字。
- [ ] Tab 选中态 #00AAA6 背景白字，未选中白底黑字。
- [ ] Demo 里 `position:fixed` 浮层（弹窗蒙层 `.dialog-overlay`、浮动按钮 `.fab`）已在 `#app` 作用域改为 `position:absolute`，收敛到 375px 手机框内，不溢出到浏览器视口。

### 常见错误

❌ 把 color-fill-3(#E5E6EB，旧 bg-2) 当通用背景 → ✅ 只用于预改约底部
❌ 按钮用 Medium/Semibold 字重 → ✅ 按钮统一 Regular(400)
❌ 给按钮/输入框写死 width:303px 或 padding:0 119px → ✅ 用整行(width:100%) + 内边距 token
❌ 搜索框 placeholder 用 #86909C → ✅ 用 #C9CDD4(color-text-4)
❌ 标签颜色随意选 → ✅ 蓝/橙/紫各有固定业务含义
❌ 浮动按钮放页面中间 → ✅ 只放右下角固定定位
❌ demo 里弹窗蒙层/浮动按钮用 position:fixed 溢出到浏览器视口 → ✅ 在 #app 作用域改 position:absolute，收敛到 375px 手机框
❌ 卡片内嵌区用白色底 → ✅ 用 color-fill-2(#F2F3F5) 区分层级
❌ 用奇数间距(3px/7px/13px) → ✅ 只用 4 的倍数
❌ 圆角混用无规律 → ✅ 用组件级 radius token，同一视图统一圆角家族

---

## 场景匹配评估流程（生成任何 HTML 前必做）

在产出任何原型 HTML 之前，必须先做「场景匹配评估」，依据机读文件 `scenario-map.json`，**逐屏**（不是整个需求一次性）判断，并把评估结论**在对话里向用户汇报**——**不要写进 HTML**（产品经理看到的原型要保持干净，无过程注释）。

步骤：

1. 拆解 PRD，列出要做的每一屏，判断其页型（对照 `scenario-map.json` 的 `pageTypes`）。
2. 对每一屏，与 `scenario-map.json` 的 `examplePages` / `components` 比对，落到三档之一：

| 档位 | 判据 | 路由 |
|------|------|------|
| **高重合** | 命中某 examplePage 页型，且其核心区块覆盖 ≥ 70% | 以该 examplePage 为底板**复制微调** |
| **低重合** | 无现成成品页，但所需区块都能在 components 找到组件 | 用 components 组件 + `ui.css` class **逐块拼装** |
| **零重合** | 页型无成品页，且核心区块在 components 也无对应组件 | **停止生成**，走缺口流程 |

3. **高重合的"微调"允许范围**：替换数据/文案/图标；**隐藏或删除组件里当前场景用不到的子元素**（例如卡片某字段为空就整段不渲染）；增减列表项；复用组件已有状态类（collapsed/expanded/checkbox）。**禁止**：改组件 DOM 骨架、重写组件样式、加规范外装饰。
4. **低重合**：每一区块都要能追溯到某个组件 slug；禁止自造组件、禁止引用 examples 里未回收的页面私有 class。
5. **零重合**：立即停止该屏生成，先输出《缺口报告》（缺哪些组件/页型/图标/token，分别属于哪屏哪块），再询问用户二选一——(A) 人类补齐缺失项后再生成；(B) 同意先自由发挥（产出标记为非规范）。**未得到答复不得擅自发挥。**

评估示例（在对话里汇报的格式）：

> 场景匹配评估：
> - 首页 → 高重合（demo-home，复制微调；隐藏公告条）
> - 提柜列表 → 高重合（demo-list，复制微调）
> - 提柜操作页 → 低重合（用 card + input + button + selector 拼装）
> - XX 特殊页 → 零重合 → 见《缺口报告》，请选择 A/B

### 首页功能入口的歧义确认（必问）

当 PRD / 需求描述**没有说清**一个新功能在首页如何接入时，**必须先停下来向人类确认**，二选一：

1. **在首页金刚区新增功能球**（新增模块）？
2. **在现有某个功能球里改**（复用已有入口）？

确认后按对应方式处理，两种情况**首页都直接引用示例首页 `examples/demo-home.html`，绝不整块重画首页**：

- **新增功能球** → 引用 demo-home，在金刚区（function-grid）里**加一个新图标**（真实 SVG，来自 `assets/shortcuts/icon/home/driver/`；如需角标则叠加），点击进入该功能的功能选择页或列表页。首页其余内容（渐变头部、快捷卡、其余金刚区图标、待办任务、浮动按钮）保持 demo-home 原样。
- **在现有功能球里改** → 同样引用 demo-home，**不新增图标**，点击对应的现有功能球直接进入该功能的列表页；首页其余内容保持不变。

> 反例（禁止）：把首页金刚区改成 emoji、把待办任务换成自造九宫格、去掉渐变头部——这些都属于"整块重画首页"，违反本规则。

## 产出后强制校验（机械自检，非声明）

原型产出后，必须逐条**实际核对**（不是口头声明"已复用"）。任一未过即为交付失败，必须返工：

1. **权威源**：原型引用的样式必须指向 `design-system/xinxiaodi/ui.css`；**禁止**引用旧目录 `xinxiaodi-design-system/`。
2. **class 白名单**：抽取原型里所有 `class="..."` 的类名，逐个在 `ui.css` 与各组件 JSON 的 `cssClasses` 里查；**凡查不到的一律视为"疑似自造"**，必须改用组件类，或在零重合流程里显式报备。
3. **图标**：所有 `<img src>` 必须落在 `assets/` 下，不使用自创内联 SVG 图标。
4. **不留过程注释**：HTML 里不写场景评估、路由决策等过程性注释；这些只在对话中向用户汇报。

> 上述校验可由 `scripts/verify-prototype.mjs` 自动执行（后续接入）。
