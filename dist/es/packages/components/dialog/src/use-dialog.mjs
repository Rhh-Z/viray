import { UPDATE_MODEL_EVENT as i } from "../../../constants/events.mjs";
import { getCurrentInstance as d, ref as o, watch as m, onMounted as v } from "vue";
const L = (n) => {
  const e = d().emit, t = o(!1), l = o(!1), s = o(!1), r = () => {
    t.value = !1;
  }, c = () => {
    e("opened");
  }, f = () => {
    e("opened"), e(i, !1), n.destroyOnClose && (s.value = !1);
  }, u = () => {
    e("close");
  };
  return m(
    () => n.modelValue,
    (a) => {
      a && (l.value = !1), t.value = a;
    }
  ), v(() => {
    n.modelValue && (t.value = !0, s.value = !0, open());
  }), {
    afterEnter: c,
    afterLeave: f,
    beforeLeave: u,
    visible: t,
    handleClose: r
  };
};
export {
  L as useDialog
};
