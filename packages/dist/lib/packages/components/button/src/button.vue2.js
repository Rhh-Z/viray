"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/button.css");
const button = require("./button.js");
const _hoisted_1 = ["autofocus", "disabled"];
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "button",
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(__props, { emit }) {
    const props = __props;
    const buttonStyle = vue.computed(() => {
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
    const iconName = vue.computed(() => {
      return `vi-icon-${props.icon}`;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["vi-button", vue.unref(buttonStyle)]),
        autofocus: _ctx.autoFocus,
        disabled: _ctx.disabled,
        onClick: handleClick
      }, [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          vue.unref(iconName) && !_ctx.loading ? (vue.openBlock(), vue.createElementBlock(
            "i",
            {
              key: 0,
              class: vue.normalizeClass(vue.unref(iconName))
            },
            null,
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
