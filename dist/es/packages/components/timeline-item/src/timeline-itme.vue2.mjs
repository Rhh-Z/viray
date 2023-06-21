import { defineComponent as u, computed as r, resolveComponent as $, openBlock as n, createElementBlock as i, normalizeClass as o, unref as m, createElementVNode as a, normalizeStyle as k, createBlock as C, createCommentVNode as l, renderSlot as p, toDisplayString as d } from "vue";
import { timelineItemProps as h } from "./timeline-item.mjs";
import "../../../theme-chalk/src/timeline-item.css";
const N = u({
  name: "ViTimelineItem"
}), w = /* @__PURE__ */ u({
  ...N,
  props: h,
  setup(_) {
    const s = _, t = "vi-timeline-item", v = r(() => ({
      [t]: !0
    })), f = r(() => ({
      [`${t}__node`]: !0,
      [`${t}__node--${s.size}`]: s.size,
      [`${t}__node--${s.type}`]: s.type,
      "is-hollow": s.hollow
    })), c = r(() => ({
      [`${t}__timestamp`]: !0,
      [`is-${s.placement}`]: s.placement
    }));
    return (e, z) => {
      const y = $("vi-icon");
      return n(), i(
        "li",
        {
          class: o(m(v))
        },
        [
          a(
            "div",
            {
              class: o(t + "__tail")
            },
            null,
            2
            /* CLASS */
          ),
          e.$slots.dot ? l("v-if", !0) : (n(), i(
            "div",
            {
              key: 0,
              class: o(m(f)),
              style: k({
                backgroundColor: e.color
              })
            },
            [
              e.icon ? (n(), C(y, {
                key: 0,
                class: o(t + "__icon"),
                name: e.icon
              }, null, 8, ["class", "name"])) : l("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          )),
          e.$slots.dot ? (n(), i(
            "div",
            {
              key: 1,
              class: o(t + "__dot")
            },
            [
              p(e.$slots, "dot")
            ],
            2
            /* CLASS */
          )) : l("v-if", !0),
          a(
            "div",
            {
              class: o(t + "__wrapper")
            },
            [
              !e.hideTimestamp && e.placement === "top" ? (n(), i(
                "div",
                {
                  key: 0,
                  class: o(m(c))
                },
                d(e.timestamp),
                3
                /* TEXT, CLASS */
              )) : l("v-if", !0),
              a(
                "div",
                {
                  class: o(t + "__content")
                },
                [
                  p(e.$slots, "default")
                ],
                2
                /* CLASS */
              ),
              !e.hideTimestamp && e.placement === "bottom" ? (n(), i(
                "div",
                {
                  key: 1,
                  class: o(m(c))
                },
                d(e.timestamp),
                3
                /* TEXT, CLASS */
              )) : l("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  w as default
};
