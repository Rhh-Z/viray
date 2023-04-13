import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createBlock } from "vue";
import { progressProps } from "./progress.mjs";
import "../../../theme-chalk/src/progress.css";
import isFunction from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.mjs";
import isString from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = { class: "vi-progress-bar__outer" };
const _hoisted_3 = { viewBox: "0 0 100 100" };
const _hoisted_4 = ["d", "stroke-width"];
const _hoisted_5 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
const _hoisted_6 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "progress",
  props: progressProps,
  setup(__props) {
    const props = __props;
    const progressCls = computed(() => {
      return {
        "vi-progress": true,
        [`vi-progress--${props.type}`]: props.type,
        "vi-progress--text-inside": props.textInside,
        [`is-${props.status}`]: props.status
      };
    });
    const innerCls = computed(() => {
      return {
        "vi-progress-bar__inner": true,
        "vi-progress-bar__inner--indeterminate": props.indeterminate
      };
    });
    const content = computed(() => props.format(props.percentage));
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const iconStatus = computed(() => {
      if (props.status === "warning") {
        return "warning-circle-fill";
      }
      if (props.type === "line") {
        return props.status === "success" ? "check-circle-fill" : "close-circle-fill";
      } else {
        return props.status === "success" ? "check-circle" : "close-circle";
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.3 : props.width * 0.111111 + 2;
    });
    const relativeStrokeWidth = computed(
      () => (props.strokeWidth / props.width * 100).toFixed(1)
    );
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(
          `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
          10
        );
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const barStyle = computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index) => {
        if (isString(seriesColor)) {
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
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
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
      const _component_vi_icon = resolveComponent("vi-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(progressCls)),
        "aria-valuenow": _ctx.percentage,
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: "vi-progress-bar",
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          },
          [
            createElementVNode("div", _hoisted_2, [
              _ctx.type === "line" ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(innerCls)),
                  style: normalizeStyle(unref(barStyle))
                },
                [
                  (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: "vi-progress-bar__innerText",
                      style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
                    },
                    [
                      renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                        createElementVNode(
                          "span",
                          null,
                          toDisplayString(unref(content)),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    4
                    /* STYLE */
                  )) : createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          4
          /* STYLE */
        )) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: "vi-progress vi-progress-circle",
            style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
          },
          [
            (openBlock(), createElementBlock("svg", _hoisted_3, [
              createElementVNode("path", {
                class: "vi-progress-circle vi-progress-track",
                d: unref(trackPath),
                stroke: "#e5e9f2",
                "stroke-width": unref(relativeStrokeWidth),
                fill: "none",
                style: normalizeStyle(unref(trailPathStyle))
              }, null, 12, _hoisted_4),
              createElementVNode("path", {
                class: "vi-progress-circle vi-progress-path",
                d: unref(trackPath),
                stroke: unref(stroke),
                fill: "none",
                opacity: _ctx.percentage ? 1 : 0,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": unref(relativeStrokeWidth),
                style: normalizeStyle(unref(circlePathStyle))
              }, null, 12, _hoisted_5)
            ]))
          ],
          4
          /* STYLE */
        )),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: "vi-progress-bar__text",
            style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
          },
          [
            renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
              !_ctx.status ? (openBlock(), createElementBlock(
                "span",
                _hoisted_6,
                toDisplayString(unref(content)),
                1
                /* TEXT */
              )) : (openBlock(), createBlock(_component_vi_icon, {
                key: 1,
                name: unref(iconStatus)
              }, null, 8, ["name"]))
            ])
          ],
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
