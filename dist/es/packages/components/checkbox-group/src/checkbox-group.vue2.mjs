import { defineComponent as c, computed as s, provide as m, toRefs as a, openBlock as i, createBlock as u, resolveDynamicComponent as l, withCtx as d, renderSlot as f, nextTick as h } from "vue";
import { checkboxGroupProps as k, checkboxGroupEmits as x } from "./checkbox-group.mjs";
import { checkboxGroupContextKey as _ } from "../../checkbox/src/constant.mjs";
import { UPDATE_MODEL_EVENT as b } from "../../../constants/events.mjs";
import "../../../theme-chalk/src/checkbox-group.css";
import E from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.mjs";
const g = c({ name: "ViCheckboxGroup" }), w = /* @__PURE__ */ c({
  ...g,
  props: k,
  emits: x,
  setup(n, { emit: e }) {
    const t = n, r = async (o) => {
      e(b, o), await h(), e("change", o);
    }, p = s({
      get() {
        return t.modelValue;
      },
      set(o) {
        r(o);
      }
    });
    return m(_, {
      ...E(a(t), [
        "size",
        "min",
        "max",
        "disabled"
      ]),
      modelValue: p,
      changeEvent: r
    }), (o, C) => (i(), u(l(o.tag), { class: "vi-checkbox-group" }, {
      default: d(() => [
        f(o.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  w as default
};
