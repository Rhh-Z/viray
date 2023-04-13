"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const input = require("./input.js");
require("../../../theme-chalk/src/input.css");
const events = require("../../../constants/events.js");
const i18n = require("../../../utils/i18n.js");
const isNil = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js");
const _hoisted_1 = {
  key: 0,
  class: "vi-input__prepend"
};
const _hoisted_2 = {
  key: 0,
  class: "vi-input__prefix"
};
const _hoisted_3 = {
  key: 1,
  class: "vi-input__prefix"
};
const _hoisted_4 = ["autofocus", "type", "value", "autocomplete", "aria-label", "tabindex", "maxlength", "placeholder", "disabled"];
const _hoisted_5 = {
  key: 2,
  class: "vi-int__count"
};
const _hoisted_6 = { class: "vi-input__count-inner" };
const _hoisted_7 = { key: 3 };
const _hoisted_8 = {
  key: 1,
  class: "vi-input__append"
};
const _hoisted_9 = ["readonly", "placeholder", "disabled", "aria-label", "tabindex", "autofocus", "autocomplete"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "input",
  props: input.inputProps,
  emits: input.inputEmits,
  setup(__props, { emit }) {
    const props = __props;
    const slots = vue.useSlots();
    const focused = vue.ref(false);
    const hovering = vue.ref(false);
    const passwordVisible = vue.ref(false);
    const isComposing = vue.ref(false);
    const textLength = vue.computed(() => nativeInputValue.value.length);
    const input2 = vue.shallowRef();
    const textarea = vue.shallowRef();
    const _ref = vue.computed(() => input2.value || textarea.value);
    const handleInput = async (event) => {
      let { value } = event.target;
      emit(events.UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await vue.nextTick();
    };
    const clearInput = () => {
      emit(events.UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      focused.value = false;
      emit("blur", event);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const handleMouseEnter = (event) => {
      hovering.value = true;
      emit("mouseenter", event);
    };
    const handleMouseLeave = (event) => {
      hovering.value = false;
      emit("mouseenter", event);
    };
    const handleCompositionStart = (event) => {
      isComposing.value = true;
      emit("compositionstart", event);
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !i18n.isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const nativeInputValue = vue.computed(
      () => isNil.default(props.modelValue) ? "" : String(props.modelValue)
    );
    const showClear = vue.computed(
      () => props.clearable && !props.disabled && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value)
    );
    const suffixvisible = vue.computed(
      () => !!slots.suffix || !!props.clearable || showClear.value || props.showPassword || isWordLimitVisible.value
      // (!!validateState.value && needStatusIcon.value)
    );
    const showPwdVisible = vue.computed(
      () => props.showPassword && !props.disabled && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value)
    );
    const isWordLimitVisible = vue.computed(
      () => props.showWordLimit && (props.type === "text" || props.type === "textarea") && !props.disabled && !props.readonly && !props.showPassword
    );
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await vue.nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const continerCls = vue.computed(
      () => props.type !== "textarea" ? "vi-input" : "vi-textarea"
    );
    const wrapperCls = vue.computed(() => {
      return {
        "vi-input__wrapper": true,
        ["is-prepend"]: slots.prepend,
        ["is-append"]: slots.append
      };
    });
    const inputInnerCls = vue.computed(() => {
      return {
        "is-disabled": props.disabled
        // [`vi-input--${inputProps.size}`]: inputProps.size
      };
    });
    const suffixCls = vue.computed(
      () => showClear.value || showPwdVisible.value ? "vi-input__suffix" : ""
    );
    const textareaCls = vue.computed(() => {
      return {
        ["is-disabled"]: props.disabled
      };
    });
    return (_ctx, _cache) => {
      const _component_vi_icon = vue.resolveComponent("vi-icon");
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(continerCls)),
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        },
        [
          _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              vue.createCommentVNode(" prepend slot "),
              _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                vue.renderSlot(_ctx.$slots, "prepend")
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass(vue.unref(wrapperCls))
                },
                [
                  vue.createCommentVNode(" prefix slot "),
                  _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
                    vue.renderSlot(_ctx.$slots, "prefix")
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" prefixIcon "),
                  _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
                    vue.createVNode(_component_vi_icon, { name: _ctx.prefixIcon }, null, 8, ["name"])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("input", vue.mergeProps({ class: "vi-input__inner" }, _ctx.$attrs, {
                    autofocus: _ctx.autofocus,
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                    class: vue.unref(inputInnerCls),
                    value: _ctx.modelValue,
                    autocomplete: _ctx.autocomplete,
                    "aria-label": _ctx.label,
                    tabindex: _ctx.tabindex,
                    maxlength: _ctx.maxlength,
                    placeholder: _ctx.placeholder,
                    disabled: _ctx.disabled,
                    onInput: handleInput,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    onChange: handleChange,
                    onKeydown: handleKeydown
                  }), null, 16, _hoisted_4),
                  vue.createCommentVNode(" suffix slot "),
                  vue.unref(suffixvisible) ? (vue.openBlock(), vue.createElementBlock(
                    "span",
                    {
                      key: 2,
                      class: vue.normalizeClass(vue.unref(suffixCls))
                    },
                    [
                      vue.renderSlot(_ctx.$slots, "suffix"),
                      vue.unref(showClear) ? (vue.openBlock(), vue.createBlock(_component_vi_icon, {
                        key: 0,
                        name: "close-circle",
                        onClick: clearInput
                      })) : vue.createCommentVNode("v-if", true),
                      vue.unref(showPwdVisible) ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 1,
                        onClick: handlePasswordVisible
                      }, [
                        vue.createVNode(_component_vi_icon, {
                          name: passwordVisible.value ? "eye" : "eye-close"
                        }, null, 8, ["name"])
                      ])) : vue.createCommentVNode("v-if", true),
                      vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
                        vue.createElementVNode(
                          "span",
                          _hoisted_6,
                          vue.toDisplayString(vue.unref(textLength)) + "/" + vue.toDisplayString(props.maxlength),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" suffixIcon "),
                  _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, [
                    vue.createVNode(_component_vi_icon, { name: _ctx.suffixIcon }, null, 8, ["name"])
                  ])) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              ),
              vue.createCommentVNode(" append slot "),
              _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                vue.renderSlot(_ctx.$slots, "append")
              ])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (vue.openBlock(), vue.createElementBlock("textarea", vue.mergeProps({
            key: 1,
            class: ["vi-textarea__inner", vue.unref(textareaCls)],
            ref_key: "textarea",
            ref: textarea
          }, _ctx.$attrs, {
            readonly: _ctx.readonly,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled,
            "aria-label": _ctx.label,
            tabindex: _ctx.tabindex,
            autofocus: _ctx.autofocus,
            autocomplete: _ctx.autocomplete,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd
          }), null, 16, _hoisted_9))
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      );
    };
  }
});
exports.default = _sfc_main;
