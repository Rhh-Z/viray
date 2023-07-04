import { debugWarn as E } from "../../../utils/error.mjs";
import { isVNode as u, createVNode as y, render as g } from "vue";
import { notificationTypes as N } from "./notification.mjs";
import T from "./notification.vue.mjs";
import h from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isElement.mjs";
import b from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const f = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, v = 16;
let A = 1;
const d = (e = {}, o = null) => {
  (b(e) || u(e)) && (e = { message: e });
  const i = e.position || "top-right";
  let n = e.offset || 0;
  f[i] && f[i].forEach(({ vm: l }) => {
    var a;
    n += (((a = l.el) == null ? void 0 : a.offsetHeight) || 0) + v;
  }), n += v;
  const s = `notification_${A++}`, p = e.onClose, m = {
    ...e,
    offset: n,
    id: s,
    onClose: () => {
      H(s, i, p);
    }
  };
  let c = document.body;
  h(e.appendTo) ? c = e.appendTo : b(e.appendTo) && (c = document.querySelector(e.appendTo)), h(c) || (E(
    "ElNotification",
    "the appendTo option is not an HTMLElement. Falling back to document.body."
  ), c = document.body);
  const r = document.createElement("div"), t = y(
    T,
    m,
    u(m.message) ? { default: () => m.message } : null
  );
  return t.appContext = o ?? d._context, t.props.onDestroy = () => {
    g(null, r);
  }, g(t, r), f[i].push({ vm: t }), console.log(t.component.exposed), c == null || c.appendChild(r.firstElementChild), console.log(f), {
    close: () => {
      t.component.exposed.visible.value = !1;
    },
    closeAll: () => {
      for (const l of Object.values(f))
        l.forEach(({ vm: a }) => {
          a.component.exposed.visible.value = !1;
        });
    }
  };
};
N.forEach((e) => {
  d[e] = (o = {}) => ((typeof o == "string" || u(o)) && (o = {
    message: o
  }), d({
    ...o,
    type: e
  }));
});
function H(e, o, i) {
  const n = f[o], s = n.findIndex(
    ({ vm: t }) => {
      var l;
      return ((l = t.component) == null ? void 0 : l.props.id) === e;
    }
  );
  if (s === -1)
    return;
  const { vm: p } = n[s];
  i == null || i(p);
  const m = p.el.offsetHeight, c = o.split("-")[0];
  n.splice(s, 1);
  const r = n.length;
  if (!(r < 1))
    for (let t = s; t < r; t++) {
      const { el: l, component: a } = n[t].vm, x = Number.parseInt(l.style[c], 10) - m - v;
      a.props.offset = x;
    }
}
function _() {
  for (const e of Object.values(f))
    e.forEach(({ vm: o }) => {
      o.component.exposed.visible.value = !1;
    });
}
d.closeAll = _;
d._context = null;
export {
  _ as closeAll,
  d as default
};
