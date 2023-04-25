import { defineComponent as p, computed as m, provide as s, toRefs as a, openBlock as i, createBlock as u, resolveDynamicComponent as l, withCtx as d, renderSlot as f, nextTick as h } from "vue";
import { checkboxGroupProps as k, checkboxGroupEmits as x } from "./checkbox-group.mjs";
import { checkboxGroupContextKey as _ } from "../../checkbox/src/constant.mjs";
import { UPDATE_MODEL_EVENT as b } from "../../../constants/events.mjs";
import "../../../theme-chalk/src/checkbox-group.css";
import g from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.mjs";
const V = /* @__PURE__ */ p({
  __name: "checkbox-group",
  props: k,
  emits: x,
  setup(c, { emit: e }) {
    const t = c, r = async (o) => {
      e(b, o), await h(), e("change", o);
    }, n = m({
      get() {
        return t.modelValue;
      },
      set(o) {
        r(o);
      }
    });
    return s(_, {
      ...g(a(t), [
        "size",
        "min",
        "max",
        "disabled"
      ]),
      modelValue: n,
      changeEvent: r
    }), (o, E) => (i(), u(l(o.tag), { class: "vi-checkbox-group" }, {
      default: d(() => [
        f(o.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  V as default
};
