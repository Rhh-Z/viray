"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const message = require("./message.js");
require("../../../theme-chalk/src/message.css");
const index = require("../../icon/index.js");
const _hoisted_1 = {
  key: 0,
  class: "vi-message__content"
};
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "message",
  props: message.messageProps,
  emits: message.messageEmits,
  setup(__props, { emit }) {
    const props = __props;
    const visible = vue.ref(false);
    const beforeLeave = () => {
      emit("close");
    };
    const afterLeave = () => {
      emit("destroy");
    };
    const close = () => {
      visible.value = false;
    };
    vue.onMounted(() => {
      visible.value = true;
      startTimerFn();
    });
    let timer = null;
    const startTimerFn = () => {
      if (props.duration > 0) {
        timer = setTimeout(() => {
          visible.value = false;
        }, props.duration);
      }
    };
    const resetTime = () => {
      clearTimeout(Number(timer));
      startTimerFn();
    };
    vue.onUnmounted(() => {
      clearTimeout(Number(timer));
    });
    const iconMap = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      error: "close-circle-fill",
      warning: "warning-circle-fill"
    };
    const iconName = vue.computed(() => {
      return iconMap[props.type];
    });
    const messageCls = vue.computed(() => {
      return {
        "vi-message": true,
        [`vi-message--${props.type}`]: props.type,
        [props.customClass]: props.customClass,
        "is-center": props.center
      };
    });
    const styles = vue.computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "message-fade",
        onBeforeLeave: beforeLeave,
        onAfterLeave: afterLeave,
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(messageCls)),
              style: vue.normalizeStyle(vue.unref(styles)),
              onMouseenter: resetTime
            },
            [
              _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(index.ViIcon), {
                key: 0,
                name: _ctx.icon,
                class: "vi-message__icon"
              }, null, 8, ["name"])) : (vue.openBlock(), vue.createBlock(vue.unref(index.ViIcon), {
                key: 1,
                name: vue.unref(iconName),
                class: "vi-message__icon"
              }, null, 8, ["name"])),
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                !_ctx.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock(
                  "span",
                  _hoisted_1,
                  vue.toDisplayString(_ctx.message),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock("span", {
                  key: 1,
                  class: "vi-message__content",
                  innerHTML: _ctx.message
                }, null, 8, _hoisted_2))
              ]),
              _ctx.closeable ? (vue.openBlock(), vue.createBlock(vue.unref(index.ViIcon), {
                key: 2,
                name: "close",
                onClick: close,
                class: "vi-message__close"
              })) : vue.createCommentVNode("v-if", true)
            ],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
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
