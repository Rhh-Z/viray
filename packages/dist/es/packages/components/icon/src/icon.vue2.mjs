import { defineComponent, useCssVars, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps } from "./icon.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "icon",
  props: iconProps,
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "8e7c279d-color": _ctx.color,
      "8e7c279d-size": _ctx.size
    }));
    const iconCls = computed(() => {
      return {
        [`vi-icon-${props.name}`]: props.name,
        [`vi-icon--${props.size}`]: props.size
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "i",
        {
          class: normalizeClass(unref(iconCls))
        },
        [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
