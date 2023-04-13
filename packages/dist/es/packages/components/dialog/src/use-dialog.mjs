import { UPDATE_MODEL_EVENT } from "../../../constants/events.mjs";
import { getCurrentInstance, ref, watch, onMounted } from "vue";
const useDialog = (props) => {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const handleClose = () => {
    visible.value = false;
  };
  const afterEnter = () => {
    emit("opened");
  };
  const afterLeave = () => {
    emit("opened");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  };
  const beforeLeave = () => {
    emit("close");
  };
  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
      }
      visible.value = val;
    }
  );
  onMounted(() => {
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
export {
  useDialog
};
