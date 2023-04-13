"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const events = require("../../../constants/events.js");
const vue = require("vue");
const useDialog = (props) => {
  const instance = vue.getCurrentInstance();
  const emit = instance.emit;
  const visible = vue.ref(false);
  const closed = vue.ref(false);
  const rendered = vue.ref(false);
  const handleClose = () => {
    visible.value = false;
  };
  const afterEnter = () => {
    emit("opened");
  };
  const afterLeave = () => {
    emit("opened");
    emit(events.UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  };
  const beforeLeave = () => {
    emit("close");
  };
  vue.watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
      }
      visible.value = val;
    }
  );
  vue.onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    visible,
    handleClose
  };
};
exports.useDialog = useDialog;
