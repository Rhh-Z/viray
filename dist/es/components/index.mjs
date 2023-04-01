import * as e from "./components.mjs";
import { version as m } from "./package.json.mjs";
import { ViAlert as x } from "./alert/index.mjs";
import { ViButton as V } from "./button/index.mjs";
import { ViButtonGroup as a } from "./button-group/index.mjs";
import { ViCheckbox as u } from "./checkbox/index.mjs";
import { ViIcon as h } from "./icon/index.mjs";
import { ViRow as C } from "./row/index.mjs";
import { ViCol as j } from "./col/index.mjs";
import { ViText as v } from "./text/index.mjs";
const p = function(o) {
  Object.entries(e).forEach(([r, t]) => {
    o.component(r, t);
  });
};
export {
  x as ViAlert,
  V as ViButton,
  a as ViButtonGroup,
  u as ViCheckbox,
  j as ViCol,
  h as ViIcon,
  C as ViRow,
  v as ViText,
  p as default,
  m as version
};
