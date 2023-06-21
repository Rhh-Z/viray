import { UPDATE_MODEL_EVENT as u } from "../../../constants/events.mjs";
import { getCurrentInstance as i, ref as a, watch as d, onMounted as m } from "vue";
const D = (n) => {
  const e = i().emit, t = a(!1), o = a(!1), s = () => {
    t.value = !1;
  }, l = () => {
    e("opened");
  }, r = () => {
    e("opened"), e(u, !1), n.destroyOnClose && (o.value = !1);
  }, c = () => {
    e("close");
  };
  return d(
    () => n.modelValue,
    (f) => {
      t.value = f;
    }
  ), m(() => {
    n.modelValue && (t.value = !0, o.value = !0);
  }), {
    afterEnter: l,
    afterLeave: r,
    beforeLeave: c,
    visible: t,
    handleClose: s
  };
};
export {
  D as useDialog
};
