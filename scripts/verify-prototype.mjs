#!/usr/bin/env node
/**
 * verify-prototype.mjs — 信小递原型「产出后强制校验」机械自检脚本
 * ---------------------------------------------------------------------------
 * 用途：把 Design.md「产出后强制校验」四条从"靠自觉声明"变成"可执行卡点"。
 *   1) 权威源路径：样式必须指向设计系统 ui.css，禁止引用旧目录 xinxiaodi-design-system/
 *   2) class 白名单：原型用到的 class 必须能在 <ds>/ui.css 里查到，查不到 = 疑似自造(WARN)
 *   3) 图标路径：所有本地 <img src> 必须落在 <ds>/assets/ 下，否则 ERROR
 *   4) 汇总输出：ERROR / WARN 两级；有任一 ERROR → exit 1，否则 exit 0
 *
 * 依赖：纯 Node ESM，零第三方依赖（只用内置 fs / path / url）。
 *
 * 用法：
 *   node scripts/verify-prototype.mjs <原型HTML路径> [--ds <设计系统目录>]
 *
 * 参数：
 *   <原型HTML路径>   必填，可用相对或绝对路径。
 *   --ds <目录>      可选，设计系统目录（相对仓库根或绝对路径）。
 *                    默认 design-system/xinxiaodi
 *
 * 示例：
 *   node scripts/verify-prototype.mjs prototypes/xinxiaodi-trailer-business.html
 *   node scripts/verify-prototype.mjs /abs/path/foo.html --ds design-system/xinxiaodi
 *
 * 说明：
 *   - 若原型 HTML 同目录存在被其 <script src> 引用的本地 .js/.template.js 文件，
 *     会一并纳入扫描（覆盖 Vue 模板拆分到多文件的情况）。
 *   - 原型专用布局类（如 proto-*）按规范应改用组件类或内联样式，因此会被如实列为
 *     "疑似自造 class"——这是预期行为，不是脚本 bug。
 * ---------------------------------------------------------------------------
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 仓库根：脚本在 <root>/scripts/ 下
const REPO_ROOT = path.resolve(__dirname, '..');

/* ------------------------------------------------------------------ */
/* 参数解析                                                            */
/* ------------------------------------------------------------------ */
function parseArgs(argv) {
  const args = { html: null, ds: 'design-system/xinxiaodi' };
  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--ds') {
      args.ds = rest[++i];
    } else if (a === '-h' || a === '--help') {
      args.help = true;
    } else if (!args.html) {
      args.html = a;
    }
  }
  return args;
}

function printUsage() {
  console.log(`用法: node scripts/verify-prototype.mjs <原型HTML路径> [--ds <设计系统目录>]

  <原型HTML路径>   必填。相对或绝对路径。
  --ds <目录>      可选。设计系统目录（默认 design-system/xinxiaodi）。

示例:
  node scripts/verify-prototype.mjs prototypes/xinxiaodi-trailer-business.html
  node scripts/verify-prototype.mjs /abs/foo.html --ds design-system/xinxiaodi`);
}

/* ------------------------------------------------------------------ */
/* 小工具                                                              */
/* ------------------------------------------------------------------ */
function resolveMaybe(p) {
  if (!p) return p;
  return path.isAbsolute(p) ? p : path.resolve(process.cwd(), p);
}
function resolveDs(p) {
  // --ds 相对仓库根解析（更符合"相对仓库根"的约定），也支持绝对路径
  if (!p) return p;
  return path.isAbsolute(p) ? p : path.resolve(REPO_ROOT, p);
}
function read(p) {
  return fs.readFileSync(p, 'utf8');
}
function isExternalUrl(u) {
  return /^(data:|https?:\/\/|\/\/|mailto:|tel:)/i.test(u);
}
function rel(p) {
  const r = path.relative(REPO_ROOT, p);
  return r.startsWith('..') ? p : r;
}

/* ------------------------------------------------------------------ */
/* 收集器                                                              */
/* ------------------------------------------------------------------ */
const errors = [];
const warns = [];
const passes = [];
function addError(msg) { errors.push(msg); }
function addWarn(msg) { warns.push(msg); }
function addPass(msg) { passes.push(msg); }

/* ------------------------------------------------------------------ */
/* 校验主流程                                                          */
/* ------------------------------------------------------------------ */
function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.html) {
    printUsage();
    process.exit(args.help ? 0 : 1);
  }

  const htmlPath = resolveMaybe(args.html);
  const dsDir = resolveDs(args.ds);
  const assetsDir = path.join(dsDir, 'assets');
  const uiCssPath = path.join(dsDir, 'ui.css');

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ 找不到原型 HTML: ${htmlPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(uiCssPath)) {
    console.error(`❌ 找不到设计系统 ui.css: ${uiCssPath}`);
    process.exit(1);
  }

  const htmlDir = path.dirname(htmlPath);
  const htmlSrc = read(htmlPath);

  // 纳入扫描的同目录本地 JS 文件（被 <script src> 引用）
  const scriptSrcs = [...htmlSrc.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)]
    .map((m) => m[1]);
  const includedJs = [];
  for (const s of scriptSrcs) {
    if (isExternalUrl(s)) continue;
    const abs = path.resolve(htmlDir, s);
    // 仅纳入与 HTML 同目录、真实存在的 .js 文件
    if (
      fs.existsSync(abs) &&
      path.dirname(abs) === htmlDir &&
      /\.js$/i.test(abs)
    ) {
      includedJs.push(abs);
    }
  }

  // 所有被扫描文件（HTML + 纳入的 JS）—— 用于 class / 图标扫描
  const scanFiles = [{ path: htmlPath, src: htmlSrc }];
  for (const j of includedJs) scanFiles.push({ path: j, src: read(j) });

  // 头部信息
  console.log('════════════════════════════════════════════════════════════');
  console.log(' 信小递原型机械自检 (verify-prototype)');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`原型 HTML : ${rel(htmlPath)}`);
  console.log(`设计系统   : ${rel(dsDir)}`);
  console.log(`权威 ui.css: ${rel(uiCssPath)}`);
  if (includedJs.length) {
    console.log(`附加扫描   : ${includedJs.map((j) => path.basename(j)).join(', ')}`);
  } else {
    console.log('附加扫描   : （无同目录 JS）');
  }
  console.log('');

  // ---- 简单字符串常量表（用于解析 :src="ICON + '...'" 的前缀）----
  const constMap = buildConstMap(scanFiles);

  // ==== [1/4] 权威源路径 ====
  checkAuthoritativeSource(htmlSrc);

  // ==== [2/4] class 白名单 ====
  checkClassWhitelist(uiCssPath, scanFiles);

  // ==== [3/5] 图标路径 ====
  checkIconPaths(scanFiles, htmlDir, dsDir, assetsDir, constMap);

  // ==== [4/5] 图标位 emoji/文本检测 ====
  checkIconSlotEmoji(scanFiles);

  // ==== [5/5] 汇总 ====
  printSummary();

  process.exit(errors.length > 0 ? 1 : 0);
}

/* ------------------------------------------------------------------ */
/* [1/4] 权威源路径                                                    */
/* ------------------------------------------------------------------ */
function checkAuthoritativeSource(htmlSrc) {
  console.log('── [1/5] 权威源路径 ─────────────────────────────');
  const linkTags = [...htmlSrc.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
  const stylesheetHrefs = [];
  for (const tag of linkTags) {
    if (!/rel=["']?stylesheet/i.test(tag)) continue;
    const hm = tag.match(/href=["']([^"']+)["']/i);
    if (hm) stylesheetHrefs.push(hm[1]);
  }

  if (!stylesheetHrefs.length) {
    addError('未发现任何 <link rel="stylesheet">，缺少设计系统样式引用。');
    console.log('  ❌ 未发现任何样式表引用');
    console.log('');
    return;
  }

  // 旧目录检测
  const oldRefs = stylesheetHrefs.filter((h) => h.includes('xinxiaodi-design-system'));
  for (const h of oldRefs) {
    addError(`引用了旧目录 xinxiaodi-design-system/：${h}（应改为 design-system/xinxiaodi/ui.css）`);
    console.log(`  ❌ 旧目录引用: ${h}`);
  }

  // 权威 ui.css 检测
  const authoritative = stylesheetHrefs.filter(
    (h) => path.basename(h.split('?')[0]) === 'ui.css' && h.includes('design-system/xinxiaodi')
  );
  if (authoritative.length) {
    addPass(`已指向设计系统权威 ui.css：${authoritative[0]}`);
    console.log(`  ✅ 指向权威 ui.css: ${authoritative[0]}`);
  } else {
    addError('未找到指向设计系统的 ui.css（basename=ui.css 且路径包含 design-system/xinxiaodi）。');
    console.log('  ❌ 未找到指向 design-system/xinxiaodi/ui.css 的样式引用');
    console.log(`     现有样式引用: ${stylesheetHrefs.join(', ')}`);
  }
  console.log('');
}

/* ------------------------------------------------------------------ */
/* [2/4] class 白名单                                                  */
/* ------------------------------------------------------------------ */
function extractCssClassWhitelist(cssText) {
  // 按规范：正则从 ui.css 抽取所有类选择器 \.([A-Za-z0-9_-]+)
  const set = new Set();
  for (const m of cssText.matchAll(/\.([A-Za-z0-9_-]+)/g)) {
    set.add(m[1]);
  }
  return set;
}

function extractUsedClasses(files) {
  // 返回 Map<className, Set<file basename>>
  const used = new Map();
  const add = (cls, file) => {
    const c = cls.trim();
    if (!c) return;
    if (!used.has(c)) used.set(c, new Set());
    used.get(c).add(path.basename(file));
  };

  for (const { path: fp, src } of files) {
    // 1) 静态 class="..." / class='...'（用 lookbehind 排除 :class / v-bind:class）
    const staticClass = [
      ...src.matchAll(/(?<![:\w-])class="([^"]*)"/g),
      ...src.matchAll(/(?<![:\w-])class='([^']*)'/g),
    ];
    for (const m of staticClass) {
      for (const tok of m[1].split(/\s+/)) {
        // 跳过含插值/绑定/表达式的动态片段
        if (!tok || /[{}$?.=()]/.test(tok)) continue;
        add(tok, fp);
      }
    }
    // 2) 动态 :class="..." —— 仅抓引号内字面量 class 名
    const dynClass = [
      ...src.matchAll(/:class="([^"]*)"/g),
      ...src.matchAll(/:class='([^']*)'/g),
    ];
    for (const m of dynClass) {
      const expr = m[1];
      // 2a) 对象语法 { 'x': cond } —— 取冒号前的键
      for (const km of expr.matchAll(/['"]([A-Za-z0-9_\- ]+)['"]\s*:/g)) {
        for (const tok of km[1].split(/\s+/)) add(tok, fp);
      }
      // 2b) 数组语法 ['x', ...] —— 取数组内字符串字面量
      for (const am of expr.matchAll(/\[([\s\S]*?)\]/g)) {
        for (const sm of am[1].matchAll(/['"]([A-Za-z0-9_\- ]+)['"]/g)) {
          for (const tok of sm[1].split(/\s+/)) add(tok, fp);
        }
      }
    }
  }
  return used;
}

function checkClassWhitelist(uiCssPath, files) {
  console.log('── [2/5] class 白名单 ───────────────────────────');
  const whitelist = extractCssClassWhitelist(read(uiCssPath));
  const used = extractUsedClasses(files);

  const suspicious = [];
  for (const [cls, fileSet] of used) {
    if (!whitelist.has(cls)) {
      suspicious.push([cls, [...fileSet].join(', ')]);
    }
  }
  suspicious.sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`  白名单类数(ui.css): ${whitelist.size}    原型用到的类数: ${used.size}`);
  if (!suspicious.length) {
    addPass('所有 class 均在 ui.css 白名单内。');
    console.log('  ✅ 未发现疑似自造 class');
  } else {
    console.log(`  ⚠️ 疑似自造 class ${suspicious.length} 个（不在 ui.css 白名单内）:`);
    for (const [cls, where] of suspicious) {
      addWarn(`疑似自造 class: .${cls}  (出现于 ${where})`);
      console.log(`     .${cls}  ← ${where}`);
    }
  }
  console.log('');
}

/* ------------------------------------------------------------------ */
/* [3/4] 图标路径                                                      */
/* ------------------------------------------------------------------ */
function buildConstMap(files) {
  // 抓取简单字符串常量: const/let/var NAME = '...' / "..."
  const map = new Map();
  for (const { src } of files) {
    for (const m of src.matchAll(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*['"]([^'"]+)['"]/g)) {
      if (!map.has(m[1])) map.set(m[1], m[2]);
    }
  }
  return map;
}

function collectImgSrcs(files, constMap) {
  // 返回数组: { raw, resolvedRel, file, kind }
  //   resolvedRel: 相对 HTML 的引用字符串（供后续 path.resolve）
  //   若无法解析（动态表达式），kind='dynamic-unresolved'，跳过校验
  const out = [];
  for (const { path: fp, src } of files) {
    // 逐个 <img ...> 标签处理，静态 src + 动态 :src 都在标签内
    for (const tag of src.matchAll(/<img\b[^>]*>/gi)) {
      const t = tag[0];
      // 静态 src（lookbehind 排除 :src / v-bind:src），引号类型感知
      const staticM = t.match(/(?<![:\w-])src="([^"]*)"/i) || t.match(/(?<![:\w-])src='([^']*)'/i);
      // 动态 :src，引号类型感知（允许双引号内含单引号字面量）
      const dynM = t.match(/:src="([^"]*)"/i) || t.match(/:src='([^']*)'/i);
      if (staticM) {
        out.push({ raw: staticM[1], resolvedRel: staticM[1], file: fp, kind: 'static' });
      }
      if (dynM) {
        const expr = dynM[1].trim();
        // 形如  IDENT + 'file.svg'  的拼接
        const cm = expr.match(/^([A-Za-z_$][\w$]*)\s*\+\s*['"]([^'"]+)['"]$/);
        if (cm && constMap.has(cm[1])) {
          out.push({
            raw: expr,
            resolvedRel: constMap.get(cm[1]) + cm[2],
            file: fp,
            kind: 'concat',
          });
        } else {
          out.push({ raw: expr, resolvedRel: null, file: fp, kind: 'dynamic-unresolved' });
        }
      }
    }
  }
  return out;
}

function checkIconPaths(files, htmlDir, dsDir, assetsDir, constMap) {
  console.log('── [3/5] 图标路径 ───────────────────────────────');
  const imgs = collectImgSrcs(files, constMap);
  let localChecked = 0;
  let ok = 0;
  let skippedExternal = 0;
  let skippedDynamic = 0;

  for (const img of imgs) {
    if (img.kind === 'dynamic-unresolved') {
      skippedDynamic++;
      continue;
    }
    const ref = img.resolvedRel;
    if (isExternalUrl(ref)) {
      skippedExternal++;
      continue;
    }
    localChecked++;
    const abs = path.resolve(htmlDir, ref);

    if (ref.includes('xinxiaodi-design-system') || abs.includes('xinxiaodi-design-system')) {
      addError(`图标指向旧目录 xinxiaodi-design-system/：${img.raw}  (出现于 ${path.basename(img.file)})`);
      console.log(`  ❌ 旧目录图标: ${img.raw}`);
      continue;
    }

    const inside = abs === assetsDir || abs.startsWith(assetsDir + path.sep);
    if (inside) {
      ok++;
    } else {
      addError(`图标未落在 <ds>/assets/ 下：${img.raw} → ${rel(abs)}  (出现于 ${path.basename(img.file)})`);
      console.log(`  ❌ 越界图标: ${img.raw} → ${rel(abs)}`);
    }
  }

  console.log(
    `  本地图标校验 ${localChecked} 个（通过 ${ok}）；跳过外链 ${skippedExternal} 个；跳过无法解析的动态 :src ${skippedDynamic} 个`
  );
  if (localChecked > 0 && ok === localChecked) {
    addPass(`全部 ${ok} 个本地图标均落在 <ds>/assets/ 下。`);
    console.log('  ✅ 所有本地图标路径合规');
  } else if (localChecked === 0) {
    console.log('  ✅ 无需校验的本地图标（全部为外链或动态）');
  }
  console.log('');
}

/* ------------------------------------------------------------------ */
/* [4/5] 图标位 emoji/文本检测                                          */
/* ------------------------------------------------------------------ */
// 图标位（金刚区 grid-icon / proto-grid-icon、快捷卡 .action-item .icon、
// 扫码位 scan-entry__icon 等）内应使用 assets SVG 的 <img>，若直接出现
// emoji / 中文 / 字母等裸文本 → WARN。
const ICON_SLOT_CLASSES = ['grid-icon', 'proto-grid-icon', 'scan-entry__icon', 'icon'];

// 从 openTagEnd（开始标签 '>' 之后的下标）起，按同名标签配对查找匹配的闭合，
// 返回内部 HTML 字符串（不含首尾标签）。
function sliceInnerHtml(src, openTagEnd, tagName) {
  const openRe = new RegExp('<' + tagName + '\\b', 'gi');
  const closeRe = new RegExp('</' + tagName + '\\s*>', 'gi');
  let depth = 1;
  let idx = openTagEnd;
  while (idx < src.length) {
    openRe.lastIndex = idx;
    closeRe.lastIndex = idx;
    const nextOpen = openRe.exec(src);
    const nextClose = closeRe.exec(src);
    if (!nextClose) break; // 无闭合，放弃
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth++;
      idx = nextOpen.index + nextOpen[0].length;
    } else {
      depth--;
      if (depth === 0) return src.slice(openTagEnd, nextClose.index);
      idx = nextClose.index + nextClose[0].length;
    }
  }
  return src.slice(openTagEnd);
}

// 判断内部 HTML 是否存在"裸文本/emoji"（去掉嵌套元素及其内容、去掉自闭合标签后仍有非空白字符）
function hasBareText(inner) {
  // 反复移除成对嵌套元素（含内容），处理如 <span class="proto-badge">{{ x }}</span>
  let prev;
  let s = inner;
  do {
    prev = s;
    s = s.replace(/<([A-Za-z][\w-]*)\b[^>]*>[\s\S]*?<\/\1\s*>/g, '');
  } while (s !== prev);
  // 移除剩余的自闭合/空元素标签（如 <img ... />、<br>）
  s = s.replace(/<[^>]+>/g, '');
  // HTML 注释也去掉
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  return /\S/.test(s);
}

function checkIconSlotEmoji(files) {
  console.log('── [4/5] 图标位 emoji/文本检测 ───────────────────');
  const tagRe = /<([A-Za-z][\w-]*)\b[^>]*\bclass=("([^"]*)"|'([^']*)')[^>]*>/g;
  let slotCount = 0;
  const bad = [];
  for (const { path: fp, src } of files) {
    let m;
    tagRe.lastIndex = 0;
    while ((m = tagRe.exec(src)) !== null) {
      const tagName = m[1];
      const classVal = m[3] !== undefined ? m[3] : m[4];
      const tokens = classVal.split(/\s+/).filter(Boolean);
      if (!tokens.some((t) => ICON_SLOT_CLASSES.includes(t))) continue;
      // 自闭合的图标位标签（<img class="...icon"/>）本身即图标，跳过
      const openTagEnd = tagRe.lastIndex;
      if (/\/>\s*$/.test(m[0]) || /^(img|svg|input|br)$/i.test(tagName)) continue;
      slotCount++;
      const inner = sliceInnerHtml(src, openTagEnd, tagName);
      if (hasBareText(inner)) {
        const slotCls = tokens.find((t) => ICON_SLOT_CLASSES.includes(t));
        const snippet = inner.replace(/\s+/g, ' ').trim().slice(0, 40);
        bad.push([slotCls, snippet, path.basename(fp)]);
      }
    }
  }
  console.log(`  扫描图标位容器 ${slotCount} 个`);
  if (!bad.length) {
    addPass('图标位均使用 assets SVG 的 <img>，无 emoji/文本。');
    console.log('  ✅ 未发现图标位使用 emoji/文本');
  } else {
    console.log(`  ⚠️ 图标位使用了 emoji/文本 ${bad.length} 处（应改用 assets SVG）:`);
    for (const [cls, snippet, file] of bad) {
      addWarn(`图标位使用了 emoji/文本，应改用 assets SVG: .${cls} 内含 "${snippet}"  (出现于 ${file})`);
      console.log(`     .${cls}: "${snippet}"  ← ${file}`);
    }
  }
  console.log('');
}

/* ------------------------------------------------------------------ */
/* [5/5] 汇总                                                          */
/* ------------------------------------------------------------------ */
function printSummary() {
  console.log('── [5/5] 汇总 ───────────────────────────────────');
  if (passes.length) {
    console.log(`✅ 通过 ${passes.length} 项:`);
    for (const p of passes) console.log(`   · ${p}`);
  }
  if (warns.length) {
    console.log('');
    console.log(`⚠️  WARN ${warns.length} 项（不影响退出码，但需处理）:`);
    for (const w of warns) console.log(`   · ${w}`);
  }
  if (errors.length) {
    console.log('');
    console.log(`❌ ERROR ${errors.length} 项（交付失败，必须返工）:`);
    for (const e of errors) console.log(`   · ${e}`);
  }
  console.log('');
  console.log('════════════════════════════════════════════════════════════');
  if (errors.length) {
    console.log(`结论: ❌ 未通过（ERROR ${errors.length}，WARN ${warns.length}）`);
  } else if (warns.length) {
    console.log(`结论: ✅ 通过（0 ERROR，WARN ${warns.length} 需人工确认）`);
  } else {
    console.log('结论: ✅ 全部通过');
  }
  console.log('════════════════════════════════════════════════════════════');
}

main();
