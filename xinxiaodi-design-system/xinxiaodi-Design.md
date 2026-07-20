---
version: 1.0
name: 信小递司机端
description: 信小递司机端微信小程序设计系统，基于 Figma 设计稿整理，设计宽度 375px（iPhone X）。
colors:
  # 主色 Primary
  vi-1: "#E6F7F6"       # 浅色按钮背景
  vi-2: "#00AAA6"       # 品牌主色、按钮、链接、图标
  vi-3: "#009093"       # 按钮 hover/active 态
  # 文字 Text
  text-1: "#BFC5CC"     # placeholder 暗提示、搜索框提示文字
  text-2: "#7C8492"     # 辅助文字、次要信息
  text-3: "#1D2129"     # 主文字、标题、已输入内容
  # 线条 Border
  border-1: "#E5E6EB"   # 分割线、卡片分隔
  border-2: "#BFC5CC"   # 辅助线条、虚线框、搜索框分割线
  # 背景色 BG
  bg-1: "#F3F5F7"       # 页面背景、卡片内容区
  bg-2: "#EBEDF0"       # 预改约底部区域
  white: "#FFFFFF"      # 卡片背景、输入框背景
  # 辅助色 Subcolor
  blue: "#3491FA"       # 蓝色标签（提货点/运单状态）
  orange: "#FF7D00"     # 橙色标签（2C/收货点）、约定时间
  # 警告色 Danger
  danger-1: "#EE0A24"   # 错误提示、告警文字、必传提醒
  danger-bg: "#FDE7E9"  # 告警提示条背景色
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
spacing:
  1: 4px    # 紧凑行距
  2: 8px    # 标准行距、图标与文字
  3: 12px   # 卡片间距
  4: 16px   # 页面边距、卡片内边距
  6: 24px   # 区块间距
  8: 32px   # 大区间距
  base: 4px
rounded:
  xs: 2px    # 标签
  sm: 4px    # 按钮、输入框、Tab
  md: 10px   # 卡片
  lg: 12px   # 图标背景
  full: 50%  # 头像、浮窗按钮
components:
  button-primary-large:
    backgroundColor: "{colors.vi-2}"
    textColor: "{colors.white}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    padding: "0 119px"
    height: 40px
    width: 303px
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
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-3}"
    placeholderColor: "{colors.gray-4}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: 48px
    width: 303px
    borderColor: "{colors.border-1}"
  searchbox:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-3}"
    placeholderColor: "{colors.text-1}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: "0 8px 0 4px"
    height: 36px
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    shadow: "0px 4px 12px rgba(0,0,0,0.05)"
    padding: "12px 16px"
    width: 343px
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

色彩体系分为主色、文字、线条、背景色、辅助色与警告色六组：

- **主色 vi-1/vi-2/vi-3** 构成品牌梯度：`vi-1` 用于浅色按钮背景，`vi-2` 是品牌主色用于按钮、链接、选中态图标，`vi-3` 用于 hover/active 状态。
- **文字 text-1/text-2/text-3** 编码信息层级：`text-1` 仅用于 placeholder 暗提示，`text-2` 用于辅助说明，`text-3` 用于标题与正文。
- **线条 border-1/border-2**：`border-1` 用于分割线与卡片分隔，`border-2` 用于搜索框内分割线与虚线框。
- **背景色 bg-1/bg-2/white**：`bg-1` 是页面级灰底与卡片内容区，`bg-2` 用于预改约底部区域，`white` 为卡片与输入框表面。
- **辅助色 blue/orange** 承载业务含义：`blue` 用于提货点/运单状态标签，`orange` 用于 2C 标签与约定时间。
- **警告色 danger-1/danger-bg**：`danger-1` 用于错误文字与必传提醒，`danger-bg` 用于告警提示条背景。

各处应使用 token 名称引用，不要直接硬编码 hex 值。

## 排版

PingFang SC 为唯一字体家族。上文 `typography` token 携带 `fontFamily`、`fontSize`、`fontWeight` 与 `lineHeight`：

- `page-title`（16px/Medium）用于页面标题与导航栏标题。
- `card-title`（14px/Semibold）用于卡片标题行。
- `body-emphasis`（14px/Medium）用于正文中需要强调的信息。
- `body`（12px/Medium）用于一般正文内容。
- `secondary`（12px/Regular）用于辅助说明，搭配 `text-2` 色值。
- `caption`（10px/Regular）用于次要信息、时间、标签文字。
- `button-large`（16px/Regular）用于大按钮文字。
- `button-small`（14px/Regular）用于小按钮与搜索框内文字。
- `tag`（10px/Regular）用于标签组件。

`body` 与 `secondary` 覆盖大多数文字场景。不要在这些 token 之外自行设定字号或字重。

## 布局

间距遵循 4px 基础刻度：4、8、12、16、24、32px。保持三级节奏：行内元素间 4–8px，同组元素间 12px，区块之间 16–24px。卡片使用 16px 内边距，页面左右边距 16px，卡片列表间距 12px。内容区域限定在 343px 宽度（375px 减去左右各 16px 边距）。

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

## 形状

圆角保持克制：`2px` 用于标签，`4px` 用于按钮、输入框和 Tab，`10px` 用于卡片，`12px` 用于图标背景，`50%` 仅用于头像与浮窗按钮。一个视图内保持统一的圆角家族，不混用。

## 层级与深度

层级通过背景色区分：`bg-1` 灰底页面 → `white` 卡片表面 → `bg-1` 卡片内嵌内容区。阴影仅用于卡片容器（`0px 4px 12px rgba(0,0,0,0.05)`）和浮窗弹出层（`0 4px 16px rgba(0,0,0,0.12)`）。浮动按钮使用品牌色阴影（`0px 4px 12px rgba(0,170,166,0.3)`）。

## 组件

上文 `components` token 给出各元素的即用值：

- **大按钮（button-primary-large）**：实心 `vi-2` 填充，白色文字，303×40px，用于页面级主操作（登录、提交）。hover 态切换为 `vi-3`，禁用态文字降低为 40% 透明度。
- **浅色大按钮（button-light-large）**：`rgba(0,170,166,0.1)` 半透明填充，`vi-2` 文字，用于次要操作。
- **清除大按钮（button-clear-large）**：`bg-2` 填充，`text-3` 文字，用于取消/重置。
- **小按钮（button-primary-small）**：32px 高，`vi-2` 填充，用于卡片内操作（扫码到库、分单、审核）。
- **浅色小按钮（button-light-small）**：`vi-1` 填充，`vi-2` 文字。
- **文字小按钮（button-text-small）**：透明填充，`vi-2` 文字，无底色，用于低强调操作（更多）。
- **输入框（input-register）**：白色填充，`border-1` 边框，48px 高，用于注册/登录页。
- **搜索框（searchbox）**：白色填充，36px 高，含搜索图标 + 输入区 + 查询按钮（28px 高，`vi-2` 背景）。可附加筛选下拉（12px `vi-2` 文字 + 分割线）或排序/筛选图标按钮（36×36px）。
- **卡片（card）**：白色填充，10px 圆角，343px 宽，低阴影。
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
- 搜索框 placeholder 使用 `text-1`（#BFC5CC），不要使用 `text-2`。
- 浮动按钮仅放置在右下角固定定位，不要用于页面内嵌。
