import { defineComponent as M, computed as s, resolveComponent as O, openBlock as a, createElementBlock as i, normalizeClass as S, unref as r, normalizeStyle as l, createElementVNode as d, renderSlot as _, toDisplayString as C, createCommentVNode as h, createBlock as V } from "vue";
import { progressProps as A } from "./progress.mjs";
import "../../../theme-chalk/src/progress.css";
import E from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.mjs";
import D from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const L = ["aria-valuenow"], R = { class: "vi-progress-bar__outer" }, U = { viewBox: "0 0 100 100" }, j = ["d", "stroke-width"], q = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"], G = { key: 0 }, Y = /* @__PURE__ */ M({
  __name: "progress",
  props: A,
  setup(P) {
    const t = P;
    defineOptions({ name: "ViProgess" });
    const x = s(() => ({
      "vi-progress": !0,
      [`vi-progress--${t.type}`]: t.type,
      "vi-progress--text-inside": t.textInside,
      [`is-${t.status}`]: t.status
    })), T = s(() => ({
      "vi-progress-bar__inner": !0,
      "vi-progress-bar__inner--indeterminate": t.indeterminate
    })), v = s(() => t.format(t.percentage)), k = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, z = s(() => t.status === "warning" ? "warning-circle-fill" : t.type === "line" ? t.status === "success" ? "check-circle-fill" : "close-circle-fill" : t.status === "success" ? "check-circle" : "close-circle"), m = s(() => t.type === "line" ? 12 + t.strokeWidth * 0.3 : t.width * 0.111111 + 2), f = s(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), y = s(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(f.value) / 2}`,
      10
    ) : 0), $ = s(() => {
      const e = y.value, o = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${o ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${o ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${o ? "" : "-"}${e * 2}
          `;
    }), p = s(() => 2 * Math.PI * y.value), g = s(() => t.type === "dashboard" ? 0.75 : 1), w = s(() => `${-1 * p.value * (1 - g.value) / 2}px`), I = s(() => ({
      strokeDasharray: `${p.value * g.value}px, ${p.value}px`,
      strokeDashoffset: w.value
    })), B = s(() => ({
      strokeDasharray: `${p.value * g.value * (t.percentage / 100)}px, ${p.value}px`,
      strokeDashoffset: w.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), N = s(() => {
      let e;
      return t.color ? e = b(t.percentage) : e = k[t.status] || k.default, e;
    }), W = s(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: b(t.percentage)
    }));
    function F(e) {
      const o = 100 / e.length;
      return e.map((n, c) => D(n) ? {
        color: n,
        percentage: (c + 1) * o
      } : n).sort((n, c) => n.percentage - c.percentage);
    }
    const b = (e) => {
      var u;
      const { color: o } = t;
      if (E(o))
        return o(e);
      if (D(o))
        return o;
      {
        const n = F(o);
        for (const c of n)
          if (c.percentage > e)
            return c.color;
        return (u = n[n.length - 1]) == null ? void 0 : u.color;
      }
    };
    return (e, o) => {
      const u = O("vi-icon");
      return a(), i("div", {
        class: S(r(x)),
        "aria-valuenow": e.percentage,
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        e.type === "line" ? (a(), i(
          "div",
          {
            key: 0,
            class: "vi-progress-bar",
            style: l({ height: `${e.strokeWidth}px` })
          },
          [
            d("div", R, [
              e.type === "line" ? (a(), i(
                "div",
                {
                  key: 0,
                  class: S(r(T)),
                  style: l(r(W))
                },
                [
                  (e.showText || e.$slots.default) && e.textInside ? (a(), i(
                    "div",
                    {
                      key: 0,
                      class: "vi-progress-bar__innerText",
                      style: l({ fontSize: `${r(m)}px` })
                    },
                    [
                      _(e.$slots, "default", { percentage: e.percentage }, () => [
                        d(
                          "span",
                          null,
                          C(r(v)),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    4
                    /* STYLE */
                  )) : h("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )) : h("v-if", !0)
            ])
          ],
          4
          /* STYLE */
        )) : (a(), i(
          "div",
          {
            key: 1,
            class: "vi-progress vi-progress-circle",
            style: l({ height: `${e.width}px`, width: `${e.width}px` })
          },
          [
            (a(), i("svg", U, [
              d("path", {
                class: "vi-progress-circle vi-progress-track",
                d: r($),
                stroke: "#e5e9f2",
                "stroke-width": r(f),
                fill: "none",
                style: l(r(I))
              }, null, 12, j),
              d("path", {
                class: "vi-progress-circle vi-progress-path",
                d: r($),
                stroke: r(N),
                fill: "none",
                opacity: e.percentage ? 1 : 0,
                "stroke-linecap": e.strokeLinecap,
                "stroke-width": r(f),
                style: l(r(B))
              }, null, 12, q)
            ]))
          ],
          4
          /* STYLE */
        )),
        (e.showText || e.$slots.default) && !e.textInside ? (a(), i(
          "div",
          {
            key: 2,
            class: "vi-progress-bar__text",
            style: l({ fontSize: `${r(m)}px` })
          },
          [
            _(e.$slots, "default", { percentage: e.percentage }, () => [
              e.status ? (a(), V(u, {
                key: 1,
                name: r(z)
              }, null, 8, ["name"])) : (a(), i(
                "span",
                G,
                C(r(v)),
                1
                /* TEXT */
              ))
            ])
          ],
          4
          /* STYLE */
        )) : h("v-if", !0)
      ], 10, L);
    };
  }
});
export {
  Y as default
};
