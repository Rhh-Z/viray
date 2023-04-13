import { defineComponent, ref, computed, resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, unref, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString, vShow } from "vue";
import { alertProps, alertEmits, iconMaps } from "./alert.mjs";
import "../../../theme-chalk/src/alert.css";
const _hoisted_1 = { class: "vi-alert__content" };
const _hoisted_2 = {
  key: 0,
  class: "vi-alert__title"
};
const _hoisted_3 = {
  key: 1,
  class: "vi-alert__desc"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "alert",
  props: alertProps,
  emits: alertEmits,
  setup(__props, { emit }) {
    const props = __props;
    const visible = ref(true);
    const alertCls = computed(() => {
      return {
        [`vi-alert-${props.type}`]: props.type,
        "is-center": props.center
      };
    });
    const iconName = computed(() => {
      if (iconMaps[props.type] === "success")
        return `check-circle-fill`;
      if (iconMaps[props.type] === "error")
        return `close-circle-fill`;
      return `${iconMaps[props.type]}-circle-fill`;
    });
    const handleClose = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return (_ctx, _cache) => {
      const _component_vi_icon = resolveComponent("vi-icon");
      return openBlock(), createBlock(Transition, {
        name: "vi-alert-fade",
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode(
            "div",
            {
              class: normalizeClass(["vi-alert", unref(alertCls)])
            },
            [
              _ctx.showIcon ? (openBlock(), createBlock(_component_vi_icon, {
                key: 0,
                name: unref(iconName),
                class: "vi-alert__icon"
              }, null, 8, ["name"])) : createCommentVNode("v-if", true),
              createElementVNode("div", _hoisted_1, [
                _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", _hoisted_2, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.title),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : createCommentVNode("v-if", true),
                _ctx.description || _ctx.$slots.default ? (openBlock(), createElementBlock("p", _hoisted_3, [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.description),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : createCommentVNode("v-if", true),
                _ctx.closable ? (openBlock(), createBlock(_component_vi_icon, {
                  key: 2,
                  name: "close",
                  class: "vi-alert__close-btn",
                  onClick: handleClose
                })) : createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          ), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
export {
  _sfc_main as default
};
