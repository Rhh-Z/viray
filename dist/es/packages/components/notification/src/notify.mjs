import { debugWarn as x } from "../../../utils/error.mjs";
import { isVNode as u, createVNode as y, render as h } from "vue";
import { notificationTypes as N } from "./notification.mjs";
import T from "./notification.vue.mjs";
import v from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isElement.mjs";
import b from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const a = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, g = 16;
let H = 1;
const m = (e = {}, t = null) => {
  (b(e) || u(e)) && (e = { message: e });
  const c = e.position || "top-right";
  let n = e.offset || 0;
  a[c] && a[c].forEach(({ vm: s }) => {
    var p;
    n += (((p = s.el) == null ? void 0 : p.offsetHeight) || 0) + g;
  }), n += g;
  const l = `notification_${H++}`, d = e.onClose, f = {
    ...e,
    offset: n,
    id: l,
    onClose: () => {
      _(l, c, d);
    }
  };
  let i = document.body;
  v(e.appendTo) ? i = e.appendTo : b(e.appendTo) && (i = document.querySelector(e.appendTo)), v(i) || (x(
    "ElNotification",
    "the appendTo option is not an HTMLElement. Falling back to document.body."
  ), i = document.body);
  const r = document.createElement("div"), o = y(
    T,
    f,
    u(f.message) ? { default: () => f.message } : null
  );
  return o.appContext = t ?? m._context, o.props.onDestroy = () => {
    h(null, r);
  }, h(o, r), a[c].push({ vm: o }), i == null || i.appendChild(r.firstElementChild), {
    close: () => {
      o.component.exposed.visible.value = !1;
    }
  };
};
N.forEach((e) => {
  m[e] = (t = {}) => ((typeof t == "string" || u(t)) && (t = {
    message: t
  }), m({
    ...t,
    type: e
  }));
});
function _(e, t, c) {
  const n = a[t], l = n.findIndex(
    ({ vm: o }) => {
      var s;
      return ((s = o.component) == null ? void 0 : s.props.id) === e;
    }
  );
  if (l === -1)
    return;
  const { vm: d } = n[l];
  c == null || c(d);
  const f = d.el.offsetHeight, i = t.split("-")[0];
  n.splice(l, 1);
  const r = n.length;
  if (!(r < 1))
    for (let o = l; o < r; o++) {
      const { el: s, component: p } = n[o].vm, E = Number.parseInt(s.style[i], 10) - f - g;
      p.props.offset = E;
    }
}
function A() {
  for (const e of Object.values(a))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
m.closeAll = A;
m._context = null;
export {
  A as closeAll,
  m as default
};
