"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const dialog = require("./dialog.js");
require("../../../theme-chalk/src/dialog.css");
const useDialog = require("./use-dialog.js");
const isString = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js");
const _hoisted_1 = { class: "vi-mask" };
const _hoisted_2 = { class: "vi-dialog__header" };
const _hoisted_3 = {
  key: 1,
  class: "vi-dialog__title"
};
const _hoisted_4 = { class: "vi-dialog__content" };
const _hoisted_5 = {
  key: 0,
  class: "vi-dialog__footer"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "dialog",
  props: dialog.dialogProps,
  emits: dialog.dialogEmits,
  setup(__props) {
    const props = __props;
    const dialogsty = vue.computed(() => ({
      width: isString.default(props.width) ? props.width : `${props.width}px`,
      scrollbarWidth: props.lockScroll ? "none" : "auto"
    }));
    const {
      visible,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose
    } = useDialog.useDialog(props);
    const dialogCls = vue.computed(() => {
      return {
        "vi-dialog": true,
        "is-center": props.center
      };
    });
    return (_ctx, _cache) => {
      const _component_vi_icon = vue.resolveComponent("vi-icon");
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        vue.createVNode(vue.Transition, {
          name: "dialog-fade",
          onAfterEnter: vue.unref(afterEnter),
          onAfterLeave: vue.unref(afterLeave),
          onBeforeLeave: vue.unref(beforeLeave),
          persisted: ""
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "div",
              _hoisted_1,
              [
                vue.createElementVNode(
                  "div",
                  {
                    role: "dialog",
                    class: vue.normalizeClass(vue.unref(dialogCls)),
                    style: vue.normalizeStyle(vue.unref(dialogsty))
                  },
                  [
                    vue.createElementVNode("div", _hoisted_2, [
                      _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(
                        "span",
                        _hoisted_3,
                        vue.toDisplayString(props.title),
                        1
                        /* TEXT */
                      )),
                      vue.createElementVNode("span", {
                        class: "vi-dialog__close",
                        onClick: _cache[0] || (_cache[0] = //@ts-ignore
                        (...args) => vue.unref(handleClose) && vue.unref(handleClose)(...args))
                      }, [
                        vue.createVNode(_component_vi_icon, { name: "close" })
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_4, [
                      vue.renderSlot(_ctx.$slots, "content")
                    ]),
                    _ctx.$slots.title || props.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
                      vue.renderSlot(_ctx.$slots, "footer")
                    ])) : vue.createCommentVNode("v-if", true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, vue.unref(visible)]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
exports.default = _sfc_main;
