import * as t from "./components.mjs";
import { version as x } from "./package.json.mjs";
import { ViMessage as m } from "./message/index.mjs";
import { ViAlert as V } from "./alert/index.mjs";
import { ViButton as c } from "./button/index.mjs";
import { ViButtonGroup as l } from "./button-group/index.mjs";
import { ViCheckbox as b } from "./checkbox/index.mjs";
import { ViDialog as h } from "./dialog/index.mjs";
import { ViIcon as C } from "./icon/index.mjs";
import { ViInput as I } from "./input/index.mjs";
import { messageEmits as d, messageProps as j, messageTypes as k } from "./message/src/message.mjs";
import { ViProgress as w } from "./progress/index.mjs";
import { ViRow as A } from "./row/index.mjs";
import { ViCol as G } from "./col/index.mjs";
import { ViText as O } from "./text/index.mjs";
const i = function(o) {
  Object.entries(t).forEach(([r, e]) => {
    o.component(r, e), o.config.globalProperties.$message = m;
  });
};
export {
  V as ViAlert,
  c as ViButton,
  l as ViButtonGroup,
  b as ViCheckbox,
  G as ViCol,
  h as ViDialog,
  C as ViIcon,
  I as ViInput,
  m as ViMessage,
  w as ViProgress,
  A as ViRow,
  O as ViText,
  i as default,
  d as messageEmits,
  j as messageProps,
  k as messageTypes,
  x as version
};
