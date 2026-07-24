/**
 * 信小递司机端 UI 交互库
 * 版本: 1.0.0
 *
 * 使用方式: <script src="ui.js"></script>
 * 依赖: ui.css
 *
 * 提供组件的交互行为：
 * - Tab 切换
 * - 搜索框（清除/筛选下拉）
 * - 弹窗（打开/关闭/动画）
 * - 展开收起
 * - 选择器（checkbox/radio 切换）
 * - 按钮组（更多菜单）
 * - 验证码倒计时
 */

(function (global) {
  'use strict';

  const XUI = {};

  /* ==========================================================================
     1. Tab 切换
     ========================================================================== */

  /**
   * 初始化 Tab 切换
   * @param {string} containerSelector - Tab 容器选择器
   * @param {Function} [onChange] - 切换回调 (activeIndex, activeElement)
   */
  XUI.initTabs = function (containerSelector, onChange) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
      const items = container.querySelectorAll('.tab-item');
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          items.forEach(i => i.classList.remove('tab-item--active'));
          item.classList.add('tab-item--active');
          if (typeof onChange === 'function') {
            onChange(index, item);
          }
        });
      });
    });
  };

  /* ==========================================================================
     2. 搜索框
     ========================================================================== */

  /**
   * 初始化搜索框交互
   * @param {string} containerSelector - 搜索框容器选择器
   */
  XUI.initSearchbox = function (containerSelector) {
    const boxes = document.querySelectorAll(containerSelector);
    boxes.forEach(box => {
      const input = box.querySelector('.searchbox__input');
      const clearBtn = box.querySelector('.searchbox__clear');
      const filterTrigger = box.querySelector('.searchbox__filter-trigger');
      const filterMenu = box.querySelector('.searchbox__filter-menu');

      // 清除按钮逻辑
      if (input && clearBtn) {
        input.addEventListener('input', () => {
          if (input.value.length > 0) {
            clearBtn.classList.add('searchbox__clear--visible');
          } else {
            clearBtn.classList.remove('searchbox__clear--visible');
          }
        });

        clearBtn.addEventListener('click', () => {
          input.value = '';
          clearBtn.classList.remove('searchbox__clear--visible');
          input.focus();
        });
      }

      // 筛选下拉逻辑
      if (filterTrigger && filterMenu) {
        filterTrigger.addEventListener('click', (e) => {
          e.stopPropagation();
          filterMenu.classList.toggle('searchbox__filter-menu--open');
        });

        const filterItems = filterMenu.querySelectorAll('.searchbox__filter-item');
        const filterLabel = box.querySelector('.searchbox__filter-label');
        filterItems.forEach(item => {
          item.addEventListener('click', () => {
            if (filterLabel) {
              filterLabel.textContent = item.textContent;
            }
            filterMenu.classList.remove('searchbox__filter-menu--open');
          });
        });
      }
    });

    // 全局点击关闭
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.searchbox__filter')) {
        document.querySelectorAll('.searchbox__filter-menu--open').forEach(menu => {
          menu.classList.remove('searchbox__filter-menu--open');
        });
      }
    });
  };

  /* ==========================================================================
     3. 弹窗 Dialog
     ========================================================================== */

  /**
   * 打开弹窗
   * @param {string|HTMLElement} dialogOrSelector - 弹窗 overlay 元素或选择器
   */
  XUI.openDialog = function (dialogOrSelector) {
    const overlay = typeof dialogOrSelector === 'string'
      ? document.querySelector(dialogOrSelector)
      : dialogOrSelector;
    if (!overlay) return;

    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.classList.add('dialog-overlay--visible');
    });

    // Esc 关闭
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        XUI.closeDialog(overlay);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);

    // 点击蒙层关闭
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        XUI.closeDialog(overlay);
      }
    }, { once: true });
  };

  /**
   * 关闭弹窗
   * @param {string|HTMLElement} dialogOrSelector - 弹窗 overlay 元素或选择器
   */
  XUI.closeDialog = function (dialogOrSelector) {
    const overlay = typeof dialogOrSelector === 'string'
      ? document.querySelector(dialogOrSelector)
      : dialogOrSelector;
    if (!overlay) return;

    overlay.classList.remove('dialog-overlay--visible');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 250);
  };

  /**
   * 初始化弹窗关闭按钮
   * @param {string} overlaySelector - 弹窗 overlay 选择器
   */
  XUI.initDialogClose = function (overlaySelector) {
    const overlays = document.querySelectorAll(overlaySelector);
    overlays.forEach(overlay => {
      const closeBtn = overlay.querySelector('.dialog__close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          XUI.closeDialog(overlay);
        });
      }
    });
  };

  /* ==========================================================================
     4. 展开收起
     ========================================================================== */

  /**
   * 初始化展开收起组件
   * @param {string} triggerSelector - 触发按钮选择器
   * @param {Object} [options]
   * @param {string} options.targetAttr - 目标元素的 data 属性名 (默认 'data-expand-target')
   * @param {string} options.expandText - 展开时文字 (默认 '收起')
   * @param {string} options.collapseText - 收起时文字 (默认 '展开')
   */
  XUI.initExpand = function (triggerSelector, options) {
    const opts = Object.assign({
      targetAttr: 'data-expand-target',
      expandText: '收起',
      collapseText: '展开'
    }, options);

    const triggers = document.querySelectorAll(triggerSelector);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.getAttribute(opts.targetAttr);
        const target = targetId ? document.getElementById(targetId) : trigger.previousElementSibling;
        if (!target) return;

        const isExpanded = target.style.display !== 'none';
        target.style.display = isExpanded ? 'none' : 'block';

        // 更新文字
        const textEl = trigger.querySelector('[data-expand-text]') || trigger.querySelector('span');
        if (textEl) {
          textEl.textContent = isExpanded ? opts.collapseText : opts.expandText;
        }

        // 旋转箭头
        const arrow = trigger.querySelector('svg, img');
        if (arrow) {
          arrow.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
          arrow.style.transition = 'transform 0.2s';
        }
      });
    });
  };

  /* ==========================================================================
     5. 选择器 Checkbox / Radio
     ========================================================================== */

  /**
   * 初始化 Checkbox 切换
   * @param {string} selector - checkbox 元素选择器
   * @param {Function} [onChange] - 回调 (element, isChecked)
   */
  XUI.initCheckbox = function (selector, onChange) {
    const boxes = document.querySelectorAll(selector);
    boxes.forEach(box => {
      if (box.classList.contains('checkbox--disabled')) return;

      box.addEventListener('click', () => {
        const isChecked = box.classList.contains('checkbox--checked');
        if (isChecked) {
          box.classList.remove('checkbox--checked');
          box.innerHTML = '';
        } else {
          box.classList.add('checkbox--checked');
          box.innerHTML = '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        }
        if (typeof onChange === 'function') {
          onChange(box, !isChecked);
        }
      });
    });
  };

  /**
   * 初始化 Radio 单选组
   * @param {string} groupSelector - radio 组容器选择器
   * @param {Function} [onChange] - 回调 (element, index)
   */
  XUI.initRadioGroup = function (groupSelector, onChange) {
    const groups = document.querySelectorAll(groupSelector);
    groups.forEach(group => {
      const radios = group.querySelectorAll('.radio');
      radios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
          radios.forEach(r => {
            r.classList.remove('radio--checked');
            r.innerHTML = '';
          });
          radio.classList.add('radio--checked');
          radio.innerHTML = '<svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5.5L7 0.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          if (typeof onChange === 'function') {
            onChange(radio, index);
          }
        });
      });
    });
  };

  /* ==========================================================================
     6. 按钮组 More 菜单
     ========================================================================== */

  /**
   * 初始化按钮组「更多」浮窗
   * @param {string} selector - 「更多」按钮选择器
   */
  XUI.initButtonGroupMore = function (selector) {
    const moreButtons = document.querySelectorAll(selector);
    moreButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const popup = btn.querySelector('.btn-group__popup') || btn.nextElementSibling;
        if (!popup) return;
        popup.classList.toggle('btn-group__popup--open');
      });
    });

    // 全局关闭
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-group__more')) {
        document.querySelectorAll('.btn-group__popup--open').forEach(popup => {
          popup.classList.remove('btn-group__popup--open');
        });
      }
    });
  };

  /* ==========================================================================
     7. 验证码倒计时
     ========================================================================== */

  /**
   * 启动验证码倒计时
   * @param {HTMLElement} element - 触发元素（验证码按钮）
   * @param {Object} [options]
   * @param {number} options.duration - 倒计时秒数 (默认 60)
   * @param {string} options.activeText - 激活态文字 (默认 '发送验证码')
   * @param {string} options.countingTemplate - 倒计时模板 (默认 '{n}s后重新发送')
   */
  XUI.startCountdown = function (element, options) {
    if (!element || element.dataset.counting === '1') return;

    const opts = Object.assign({
      duration: 60,
      activeText: '发送验证码',
      countingTemplate: '{n}s后重新发送'
    }, options);

    element.dataset.counting = '1';
    let seconds = opts.duration;

    const originalColor = element.style.color;
    element.textContent = opts.countingTemplate.replace('{n}', seconds);
    element.style.color = '#7C8492';
    element.style.cursor = 'not-allowed';

    const timer = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        clearInterval(timer);
        element.textContent = opts.activeText;
        element.style.color = originalColor || '#00AAA6';
        element.style.cursor = 'pointer';
        element.dataset.counting = '0';
      } else {
        element.textContent = opts.countingTemplate.replace('{n}', seconds);
      }
    }, 1000);
  };

  /* ==========================================================================
     8. 定位栏操作按钮
     ========================================================================== */

  /**
   * 初始化定位栏操作按钮的选中态切换
   * @param {string} containerSelector - 定位栏容器选择器
   */
  XUI.initLocationBar = function (containerSelector) {
    const bars = document.querySelectorAll(containerSelector);
    bars.forEach(bar => {
      const actions = bar.querySelectorAll('.location-bar__action');
      actions.forEach(action => {
        action.addEventListener('click', (e) => {
          e.stopPropagation();
          const isActive = action.classList.contains('location-bar__action--active');
          // 清除同组的选中态
          actions.forEach(a => a.classList.remove('location-bar__action--active'));
          if (!isActive) {
            action.classList.add('location-bar__action--active');
          }
        });
      });
    });
  };

  /* ==========================================================================
     9. 自动初始化
     ========================================================================== */

  /**
   * 一键初始化页面上所有信小递组件的交互
   * 在 DOM 加载完成后调用
   */
  XUI.initAll = function () {
    XUI.initTabs('.tabs');
    XUI.initSearchbox('.searchbox');
    XUI.initDialogClose('.dialog-overlay');
    XUI.initExpand('.card__expand-pill');
    XUI.initCheckbox('.checkbox');
    XUI.initButtonGroupMore('.btn-group__more');
    XUI.initLocationBar('.location-bar');
  };

  // DOM Ready 时自动初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', XUI.initAll);
  } else {
    XUI.initAll();
  }

  // 暴露到全局
  global.XUI = XUI;

})(typeof window !== 'undefined' ? window : this);
