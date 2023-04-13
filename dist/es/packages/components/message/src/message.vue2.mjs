import { defineComponent, ref, onMounted, onUnmounted, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, unref, normalizeStyle, renderSlot, createElementBlock, toDisplayString, createCommentVNode, vShow } from "vue";
import { messageProps, messageEmits } from "./message.mjs";
import "../../../theme-chalk/src/message.css";
import { ViIcon } from "../../icon/index.mjs";
const _hoisted_1 = {
  key: 0,
  class: "vi-message__content"
};
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "message",
  props: messageProps,
  emits: messageEmits,
  setup(__props, { emit }) {
    const props = __props;
    const visible = ref(false);
    const beforeLeave = () => {
      emit("close");
    };
    const afterLeave = () => {
      emit("destroy");
    };
    const close = () => {
      visible.value = false;
    };
    onMounted(() => {
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
    onUnmounted(() => {
      clearTimeout(Number(timer));
    });
    const iconMap = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      error: "close-circle-fill",
      warning: "warning-circle-fill"
    };
    const iconName = computed(() => {
      return iconMap[props.type];
    });
    const messageCls = computed(() => {
      return {
        "vi-message": true,
        [`vi-message--${props.type}`]: props.type,
        [props.customClass]: props.customClass,
        "is-center": props.center
      };
    });
    const styles = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "message-fade",
        onBeforeLeave: beforeLeave,
        onAfterLeave: afterLeave,
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode(
            "div",
            {
              class: normalizeClass(unref(messageCls)),
              style: normalizeStyle(unref(styles)),
              onMouseenter: resetTime
            },
            [
              _ctx.icon ? (openBlock(), createBlock(unref(ViIcon), {
                key: 0,
                name: _ctx.icon,
                class: "vi-message__icon"
              }, null, 8, ["name"])) : (openBlock(), createBlock(unref(ViIcon), {
                key: 1,
                name: unref(iconName),
                class: "vi-message__icon"
              }, null, 8, ["name"])),
              renderSlot(_ctx.$slots, "default", {}, () => [
                !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_1,
                  toDisplayString(_ctx.message),
                  1
                  /* TEXT */
                )) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "vi-message__content",
                  innerHTML: _ctx.message
                }, null, 8, _hoisted_2))
              ]),
              _ctx.closeable ? (openBlock(), createBlock(unref(ViIcon), {
                key: 2,
                name: "close",
                onClick: close,
                class: "vi-message__close"
              })) : createCommentVNode("v-if", true)
            ],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
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
