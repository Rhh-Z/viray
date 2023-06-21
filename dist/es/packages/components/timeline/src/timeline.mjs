import { defineComponent as i, provide as n, h as t, renderSlot as r } from "vue";
import "../../../theme-chalk/src/timeline.css";
const p = i({
  name: "ViTimeline",
  setup(m, { slots: e }) {
    return n("timeline", e), () => t("ul", { class: ["vi-timeline"] }, [r(e, "default")]);
  }
});
export {
  p as default
};
