import { defineComponent, useSlots, ref, computed, shallowRef, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, Fragment, createCommentVNode, renderSlot, createElementVNode, createVNode, mergeProps, createBlock, toDisplayString, nextTick } from "vue";
import { inputProps, inputEmits } from "./input.mjs";
import "../../../theme-chalk/src/input.css";
import { UPDATE_MODEL_EVENT } from "../../../constants/events.mjs";
import { isKorean } from "../../../utils/i18n.mjs";
import isNil from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "input",
  props: inputProps,
  emits: inputEmits,
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const focused = ref(false);
    const hovering = ref(false);
    const passwordVisible = ref(false);
    const isComposing = ref(false);
    const textLength = computed(() => nativeInputValue.value.length);
    const input = shallowRef();
    const textarea = shallowRef();
    const _ref = computed(() => input.value || textarea.value);
    const handleInput = async (event) => {
      let { value } = event.target;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
    };
    const clearInput = () => {
      emit(UPDATE_MODEL_EVENT, "");
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
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const nativeInputValue = computed(
      () => isNil(props.modelValue) ? "" : String(props.modelValue)
    );
    const showClear = computed(
      () => props.clearable && !props.disabled && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value)
    );
    const suffixvisible = computed(
      () => !!slots.suffix || !!props.clearable || showClear.value || props.showPassword || isWordLimitVisible.value
      // (!!validateState.value && needStatusIcon.value)
    );
    const showPwdVisible = computed(
      () => props.showPassword && !props.disabled && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value)
    );
    const isWordLimitVisible = computed(
      () => props.showWordLimit && (props.type === "text" || props.type === "textarea") && !props.disabled && !props.readonly && !props.showPassword
    );
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const continerCls = computed(
      () => props.type !== "textarea" ? "vi-input" : "vi-textarea"
    );
    const wrapperCls = computed(() => {
      return {
        "vi-input__wrapper": true,
        ["is-prepend"]: slots.prepend,
        ["is-append"]: slots.append
      };
    });
    const inputInnerCls = computed(() => {
      return {
        "is-disabled": props.disabled
        // [`vi-input--${inputProps.size}`]: inputProps.size
      };
    });
    const suffixCls = computed(
      () => showClear.value || showPwdVisible.value ? "vi-input__suffix" : ""
    );
    const textareaCls = computed(() => {
      return {
        ["is-disabled"]: props.disabled
      };
    });
    return (_ctx, _cache) => {
      const _component_vi_icon = resolveComponent("vi-icon");
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(continerCls)),
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        },
        [
          _ctx.type !== "textarea" ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createCommentVNode(" prepend slot "),
              _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "prepend")
              ])) : createCommentVNode("v-if", true),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(unref(wrapperCls))
                },
                [
                  createCommentVNode(" prefix slot "),
                  _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_2, [
                    renderSlot(_ctx.$slots, "prefix")
                  ])) : createCommentVNode("v-if", true),
                  createCommentVNode(" prefixIcon "),
                  _ctx.prefixIcon ? (openBlock(), createElementBlock("span", _hoisted_3, [
                    createVNode(_component_vi_icon, { name: _ctx.prefixIcon }, null, 8, ["name"])
                  ])) : createCommentVNode("v-if", true),
                  createElementVNode("input", mergeProps({ class: "vi-input__inner" }, _ctx.$attrs, {
                    autofocus: _ctx.autofocus,
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                    class: unref(inputInnerCls),
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
                  createCommentVNode(" suffix slot "),
                  unref(suffixvisible) ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 2,
                      class: normalizeClass(unref(suffixCls))
                    },
                    [
                      renderSlot(_ctx.$slots, "suffix"),
                      unref(showClear) ? (openBlock(), createBlock(_component_vi_icon, {
                        key: 0,
                        name: "close-circle",
                        onClick: clearInput
                      })) : createCommentVNode("v-if", true),
                      unref(showPwdVisible) ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        onClick: handlePasswordVisible
                      }, [
                        createVNode(_component_vi_icon, {
                          name: passwordVisible.value ? "eye" : "eye-close"
                        }, null, 8, ["name"])
                      ])) : createCommentVNode("v-if", true),
                      unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", _hoisted_5, [
                        createElementVNode(
                          "span",
                          _hoisted_6,
                          toDisplayString(unref(textLength)) + "/" + toDisplayString(props.maxlength),
                          1
                          /* TEXT */
                        )
                      ])) : createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true),
                  createCommentVNode(" suffixIcon "),
                  _ctx.suffixIcon ? (openBlock(), createElementBlock("span", _hoisted_7, [
                    createVNode(_component_vi_icon, { name: _ctx.suffixIcon }, null, 8, ["name"])
                  ])) : createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              ),
              createCommentVNode(" append slot "),
              _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_8, [
                renderSlot(_ctx.$slots, "append")
              ])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock("textarea", mergeProps({
            key: 1,
            class: ["vi-textarea__inner", unref(textareaCls)],
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
export {
  _sfc_main as default
};
