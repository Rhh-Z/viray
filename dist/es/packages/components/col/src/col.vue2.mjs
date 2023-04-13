import { defineComponent, inject, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, normalizeStyle, withCtx, renderSlot } from "vue";
import { colProps } from "./col.mjs";
import { rowContextKey } from "../../row/src/constants.mjs";
import { isNumber } from "../../../utils/common.mjs";
import "../../../theme-chalk/src/col.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "col",
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const colClK = computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes.push(`vi-col-${props[prop]}`);
          else if (size > 0)
            classes.push(`vi-col-${prop}-${props[prop]}`);
        }
      });
      return classes;
    });
    const style = computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(["vi-col", unref(colClK)]),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
