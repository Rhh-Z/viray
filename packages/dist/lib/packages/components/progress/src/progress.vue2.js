"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const progress = require("./progress.js");
require("../../../theme-chalk/src/progress.css");
const isFunction = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js");
const isString = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js");
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = { class: "vi-progress-bar__outer" };
const _hoisted_3 = { viewBox: "0 0 100 100" };
const _hoisted_4 = ["d", "stroke-width"];
const _hoisted_5 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
const _hoisted_6 = { key: 0 };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "progress",
  props: progress.progressProps,
  setup(__props) {
    const props = __props;
    const progressCls = vue.computed(() => {
      return {
        "vi-progress": true,
        [`vi-progress--${props.type}`]: props.type,
        "vi-progress--text-inside": props.textInside,
        [`is-${props.status}`]: props.status
      };
    });
    const innerCls = vue.computed(() => {
      return {
        "vi-progress-bar__inner": true,
        "vi-progress-bar__inner--indeterminate": props.indeterminate
      };
    });
    const content = vue.computed(() => props.format(props.percentage));
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const iconStatus = vue.computed(() => {
      if (props.status === "warning") {
        return "warning-circle-fill";
      }
      if (props.type === "line") {
        return props.status === "success" ? "check-circle-fill" : "close-circle-fill";
      } else {
        return props.status === "success" ? "check-circle" : "close-circle";
      }
    });
    const progressTextSize = vue.computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.3 : props.width * 0.111111 + 2;
    });
    const relativeStrokeWidth = vue.computed(
      () => (props.strokeWidth / props.width * 100).toFixed(1)
    );
    const radius = vue.computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(
          `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
          10
        );
      }
      return 0;
    });
    const trackPath = vue.computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = vue.computed(() => 2 * Math.PI * radius.value);
    const rate = vue.computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = vue.computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = vue.computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = vue.computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = vue.computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const barStyle = vue.computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index) => {
        if (isString.default(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction.default(color)) {
        return color(percentage);
      } else if (isString.default(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      const _component_vi_icon = vue.resolveComponent("vi-icon");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(progressCls)),
        "aria-valuenow": _ctx.percentage,
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: "vi-progress-bar",
            style: vue.normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          },
          [
            vue.createElementVNode("div", _hoisted_2, [
              _ctx.type === "line" ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(innerCls)),
                  style: vue.normalizeStyle(vue.unref(barStyle))
                },
                [
                  (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: "vi-progress-bar__innerText",
                      style: vue.normalizeStyle({ fontSize: `${vue.unref(progressTextSize)}px` })
                    },
                    [
                      vue.renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                        vue.createElementVNode(
                          "span",
                          null,
                          vue.toDisplayString(vue.unref(content)),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    4
                    /* STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          4
          /* STYLE */
        )) : (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 1,
            class: "vi-progress vi-progress-circle",
            style: vue.normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
          },
          [
            (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3, [
              vue.createElementVNode("path", {
                class: "vi-progress-circle vi-progress-track",
                d: vue.unref(trackPath),
                stroke: "#e5e9f2",
                "stroke-width": vue.unref(relativeStrokeWidth),
                fill: "none",
                style: vue.normalizeStyle(vue.unref(trailPathStyle))
              }, null, 12, _hoisted_4),
              vue.createElementVNode("path", {
                class: "vi-progress-circle vi-progress-path",
                d: vue.unref(trackPath),
                stroke: vue.unref(stroke),
                fill: "none",
                opacity: _ctx.percentage ? 1 : 0,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": vue.unref(relativeStrokeWidth),
                style: vue.normalizeStyle(vue.unref(circlePathStyle))
              }, null, 12, _hoisted_5)
            ]))
          ],
          4
          /* STYLE */
        )),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 2,
            class: "vi-progress-bar__text",
            style: vue.normalizeStyle({ fontSize: `${vue.unref(progressTextSize)}px` })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
              !_ctx.status ? (vue.openBlock(), vue.createElementBlock(
                "span",
                _hoisted_6,
                vue.toDisplayString(vue.unref(content)),
                1
                /* TEXT */
              )) : (vue.openBlock(), vue.createBlock(_component_vi_icon, {
                key: 1,
                name: vue.unref(iconStatus)
              }, null, 8, ["name"]))
            ])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
