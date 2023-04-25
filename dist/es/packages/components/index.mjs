import * as t from "./components.mjs";
import { version as a } from "./package.json.mjs";
import { ViMessage as i } from "./message/index.mjs";
import { ViNotification as m } from "./notification/index.mjs";
import { ViAlert as c } from "./alert/index.mjs";
import { ViAvatar as l } from "./avatar/index.mjs";
import { ViBacktop as b } from "./backtop/index.mjs";
import { ViBreadcrumb as B } from "./breadcrumb/index.mjs";
import { ViBreadcrumbItem as d } from "./breadcrumb-item/index.mjs";
import { ViButton as h } from "./button/index.mjs";
import { ViButtonGroup as v } from "./button-group/index.mjs";
import { ViCard as y } from "./card/index.mjs";
import { ViCarousel as E } from "./carousel/index.mjs";
import { ViCarouselItem as $ } from "./carousel-item/index.mjs";
import { ViCol as w } from "./col/index.mjs";
import { ViCheckbox as M } from "./checkbox/index.mjs";
import { ViCheckboxGroup as O } from "./checkbox-group/index.mjs";
import { ViDialog as q } from "./dialog/index.mjs";
import { ViIcon as F } from "./icon/index.mjs";
import { ViInput as J } from "./input/index.mjs";
import { messageEmits as L, messageProps as Q, messageTypes as S } from "./message/src/message.mjs";
import { ViPopover as W } from "./popover/index.mjs";
import { ViProgress as Y } from "./progress/index.mjs";
import { ViRow as _ } from "./row/index.mjs";
import { ViTag as ro } from "./tag/index.mjs";
import { ViText as to } from "./text/index.mjs";
const x = function(o) {
  Object.entries(t).forEach(([r, e]) => {
    o.component(r, e), o.config.globalProperties.$message = i, o.config.globalProperties.$notify = m;
  });
};
export {
  c as ViAlert,
  l as ViAvatar,
  b as ViBacktop,
  B as ViBreadcrumb,
  d as ViBreadcrumbItem,
  h as ViButton,
  v as ViButtonGroup,
  y as ViCard,
  E as ViCarousel,
  $ as ViCarouselItem,
  M as ViCheckbox,
  O as ViCheckboxGroup,
  w as ViCol,
  q as ViDialog,
  F as ViIcon,
  J as ViInput,
  i as ViMessage,
  m as ViNotification,
  W as ViPopover,
  Y as ViProgress,
  _ as ViRow,
  ro as ViTag,
  to as ViText,
  x as default,
  L as messageEmits,
  Q as messageProps,
  S as messageTypes,
  a as version
};
