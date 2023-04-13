import { defineComponent, computed, resolveComponent, openBlock, createBlock, Teleport, createVNode, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createElementBlock, toDisplayString, createCommentVNode, vShow } from "vue";
import { dialogProps, dialogEmits } from "./dialog.mjs";
import "../../../theme-chalk/src/dialog.css";
import { useDialog } from "./use-dialog.mjs";
import isString from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "dialog",
  props: dialogProps,
  emits: dialogEmits,
  setup(__props) {
    const props = __props;
    const dialogsty = computed(() => ({
      width: isString(props.width) ? props.width : `${props.width}px`,
      scrollbarWidth: props.lockScroll ? "none" : "auto"
    }));
    const {
      visible,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose
    } = useDialog(props);
    const dialogCls = computed(() => {
      return {
        "vi-dialog": true,
        "is-center": props.center
      };
    });
    return (_ctx, _cache) => {
      const _component_vi_icon = resolveComponent("vi-icon");
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode(
              "div",
              _hoisted_1,
              [
                createElementVNode(
                  "div",
                  {
                    role: "dialog",
                    class: normalizeClass(unref(dialogCls)),
                    style: normalizeStyle(unref(dialogsty))
                  },
                  [
                    createElementVNode("div", _hoisted_2, [
                      _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock(
                        "span",
                        _hoisted_3,
                        toDisplayString(props.title),
                        1
                        /* TEXT */
                      )),
                      createElementVNode("span", {
                        class: "vi-dialog__close",
                        onClick: _cache[0] || (_cache[0] = //@ts-ignore
                        (...args) => unref(handleClose) && unref(handleClose)(...args))
                      }, [
                        createVNode(_component_vi_icon, { name: "close" })
                      ])
                    ]),
                    createElementVNode("div", _hoisted_4, [
                      renderSlot(_ctx.$slots, "content")
                    ]),
                    _ctx.$slots.title || props.title ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      renderSlot(_ctx.$slots, "footer")
                    ])) : createCommentVNode("v-if", true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
