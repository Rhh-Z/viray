import { getCurrentInstance as l } from "vue";
const f = (t, {
  isLimitExceeded: n
}) => {
  const { emit: r } = l();
  function a(e) {
    return e === t.trueLabel || e === !0 ? t.trueLabel ?? !0 : t.falseLabel ?? !1;
  }
  function u(e) {
    if (n.value)
      return;
    const c = e.target;
    r("change", a(c.checked), e);
  }
  return {
    handleChange: u
  };
};
export {
  f as useCheckboxEvent
};
