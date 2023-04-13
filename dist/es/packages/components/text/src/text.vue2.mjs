import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, withCtx, renderSlot } from "vue";
import "../../../theme-chalk/src/text.css";
import { textProps } from "./text.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "text",
  props: textProps,
  setup(__props) {
    const props = __props;
    const textCls = computed(() => {
      return {
        [`vi-text--${props.type}`]: props.type,
        [`vi-text--${props.size}`]: props.size,
        "is-kbd": props.kbd,
        "is-truncated": props.truncated
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(["vi-text", unref(textCls)])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
