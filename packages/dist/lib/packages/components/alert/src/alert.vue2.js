"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const alert = require("./alert.js");
require("../../../theme-chalk/src/alert.css");
const _hoisted_1 = { class: "vi-alert__content" };
const _hoisted_2 = {
  key: 0,
  class: "vi-alert__title"
};
const _hoisted_3 = {
  key: 1,
  class: "vi-alert__desc"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "alert",
  props: alert.alertProps,
  emits: alert.alertEmits,
  setup(__props, { emit }) {
    const props = __props;
    const visible = vue.ref(true);
    const alertCls = vue.computed(() => {
      return {
        [`vi-alert-${props.type}`]: props.type,
        "is-center": props.center
      };
    });
    const iconName = vue.computed(() => {
      if (alert.iconMaps[props.type] === "success")
        return `check-circle-fill`;
      if (alert.iconMaps[props.type] === "error")
        return `close-circle-fill`;
      return `${alert.iconMaps[props.type]}-circle-fill`;
    });
    const handleClose = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return (_ctx, _cache) => {
      const _component_vi_icon = vue.resolveComponent("vi-icon");
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "vi-alert-fade",
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(["vi-alert", vue.unref(alertCls)])
            },
            [
              _ctx.showIcon ? (vue.openBlock(), vue.createBlock(_component_vi_icon, {
                key: 0,
                name: vue.unref(iconName),
                class: "vi-alert__icon"
              }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("div", _hoisted_1, [
                _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
                  vue.renderSlot(_ctx.$slots, "title", {}, () => [
                    vue.createTextVNode(
                      vue.toDisplayString(_ctx.title),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                _ctx.description || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_3, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    vue.createTextVNode(
                      vue.toDisplayString(_ctx.description),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_vi_icon, {
                  key: 2,
                  name: "close",
                  class: "vi-alert__close-btn",
                  onClick: handleClose
                })) : vue.createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          ), [
            [vue.vShow, visible.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
exports.default = _sfc_main;
