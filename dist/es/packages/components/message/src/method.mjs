import { messageTypes as h } from "./message.mjs";
import x from "./message.vue.mjs";
import { isVNode as d, createVNode as T, render as u } from "vue";
import y from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.mjs";
import p from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
let C = 1;
const n = [];
let v = 2e3;
const f = function(e = {}, t) {
  (p(e) || d(e)) && (e = { message: e });
  const s = `message_${C++}`;
  let c = 20;
  n.forEach((g) => {
    var i;
    c += ((i = g.el) == null ? void 0 : i.offsetHeight) + 16;
  });
  const m = {
    ...e,
    zIndex: v++,
    id: s,
    offset: c,
    onClose: () => {
      E(s, e.onClose);
    }
  }, l = m.message, o = T(
    x,
    m,
    y(l) ? { default: l } : d(l) ? { default: () => l } : null
  );
  o.appContext = t || f._context, o.props.onDestroy = () => {
    u(null, r);
  };
  const r = document.createElement("div");
  u(o, r);
  let a = document.body;
  return p(e.appendTo) ? a = document.querySelector(e.appendTo) : e.appendTo && e.appendTo instanceof Element && (a = e.appendTo), a.appendChild(r.firstElementChild), n.push(o), {
    close: () => o.component.proxy.visible = !1
  };
};
h.forEach((e) => {
  f[e] = (t = {}, s) => {
    (p(t) || d(t)) && (t = { message: t }), f({ ...t, type: e }, s);
  };
});
function E(e, t) {
  var l;
  const s = n.findIndex((o) => o.props.id === e);
  if (s === -1)
    return;
  const c = n[s];
  t && t(c), n.splice(s, 1);
  const m = c.el.offsetHeight;
  for (let o = s; o < n.length; o++) {
    const r = parseInt((l = n[o].el) == null ? void 0 : l.style.top) - m - 16;
    n[o].component.props.offset = r;
  }
}
function I() {
  for (let e = n.length - 1; e >= 0; e--) {
    const t = n[e].component;
    (t == null ? void 0 : t.proxy).close(), console.log(t);
  }
}
f.closeAll = I;
f._context = null;
export {
  I as closeAll,
  f as default
};
