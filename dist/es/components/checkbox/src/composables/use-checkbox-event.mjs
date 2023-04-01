import { CHANGE_EVENT as n } from "../../../../constants/events.mjs";
import { getCurrentInstance as o } from "vue";
function s() {
  const { emit: t } = o();
  return (e) => {
    const r = !!e.target.checked;
    t(n, r);
  };
}
export {
  s as useCheckboxEvent
};
