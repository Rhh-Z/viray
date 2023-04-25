import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { debugWarn as E } from "../../../utils/error.mjs";
import { isVNode as g, createVNode as x, render as v } from "vue";
import { notificationTypes as y } from "./notification.mjs";
import N from "./notification.vue.mjs";
import { exports as u } from "../../../../_virtual/lodash.mjs";
const a = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, h = 16;
let T = 1;
const m = (e = {}, t = null) => {
  (u.isString(e) || g(e)) && (e = { message: e });
  const s = e.position || "top-right";
  let n = e.offset || 0;
  a[s] && a[s].forEach(({ vm: r }) => {
    var p;
    n += (((p = r.el) == null ? void 0 : p.offsetHeight) || 0) + h;
  }), n += h;
  const c = `notification_${T++}`, d = e.onClose, f = {
    ...e,
    offset: n,
    id: c,
    onClose: () => {
      H(c, s, d);
    }
  };
  let i = document.body;
  u.isElement(e.appendTo) ? i = e.appendTo : u.isString(e.appendTo) && (i = document.querySelector(e.appendTo)), u.isElement(i) || (E(
    "ElNotification",
    "the appendTo option is not an HTMLElement. Falling back to document.body."
  ), i = document.body);
  const l = document.createElement("div"), o = x(
    N,
    f,
    g(f.message) ? { default: () => f.message } : null
  );
  return o.appContext = t ?? m._context, o.props.onDestroy = () => {
    v(null, l);
  }, v(o, l), a[s].push({ vm: o }), i == null || i.appendChild(l.firstElementChild), {
    close: () => {
      o.component.exposed.visible.value = !1;
    }
  };
};
y.forEach((e) => {
  m[e] = (t = {}) => ((typeof t == "string" || g(t)) && (t = {
    message: t
  }), m({
    ...t,
    type: e
  }));
});
function H(e, t, s) {
  const n = a[t], c = n.findIndex(
    ({ vm: o }) => {
      var r;
      return ((r = o.component) == null ? void 0 : r.props.id) === e;
    }
  );
  if (c === -1)
    return;
  const { vm: d } = n[c];
  s == null || s(d);
  const f = d.el.offsetHeight, i = t.split("-")[0];
  n.splice(c, 1);
  const l = n.length;
  if (!(l < 1))
    for (let o = c; o < l; o++) {
      const { el: r, component: p } = n[o].vm, b = Number.parseInt(r.style[i], 10) - f - h;
      p.props.offset = b;
    }
}
function S() {
  for (const e of Object.values(a))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
m.closeAll = S;
m._context = null;
export {
  S as closeAll,
  m as default
};
