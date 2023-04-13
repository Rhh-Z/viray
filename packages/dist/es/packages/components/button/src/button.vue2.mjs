import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps, buttonEmits } from "./button.mjs";
const _hoisted_1 = ["autofocus", "disabled"];
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit }) {
    const props = __props;
    const buttonStyle = computed(() => {
      return {
        [`vi-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-disabled": props.disabled,
        "is-round": props.round,
        "is-active": props.active,
        [`vi-button--${props.size}`]: props.size,
        "is-circle": props.circle,
        "is-text": props.text,
        "is-bg": props.bg
      };
    });
    const handleClick = (evt) => {
      emit("click", evt);
    };
    const iconName = computed(() => {
      return `vi-icon-${props.icon}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["vi-button", unref(buttonStyle)]),
        autofocus: _ctx.autoFocus,
        disabled: _ctx.disabled,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_2, [
          unref(iconName) && !_ctx.loading ? (openBlock(), createElementBlock(
            "i",
            {
              key: 0,
              class: normalizeClass(unref(iconName))
            },
            null,
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)
        ])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
