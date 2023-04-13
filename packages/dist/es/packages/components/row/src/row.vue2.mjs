import { defineComponent, computed, provide, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, normalizeStyle, withCtx, renderSlot } from "vue";
import { rowContextKey } from "./constants.mjs";
import { rowProps } from "./row.mjs";
import "../../../theme-chalk/src/row.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "row",
  props: rowProps,
  setup(__props) {
    const props = __props;
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, { gutter });
    const style = computed(() => {
      const styles = {};
      if (!gutter.value) {
        return styles;
      }
      styles.marginLeft = styles.marginRight = `vi-row-${props.gutter / 2}px`;
      return styles;
    });
    const rowKls = computed(() => [
      props.justify !== "start" ? `is-justify-${props.justify}` : "",
      props.align !== "top" ? `is-align-${props.align}` : ""
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(["vi-row", unref(rowKls)]),
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
