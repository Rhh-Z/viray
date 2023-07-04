import * as t from "./components.mjs";
import { ViMessage as i } from "./message/index.mjs";
import { ViNotification as m } from "./notification/index.mjs";
import { ViAlert as a } from "./alert/index.mjs";
import { ViAvatar as c } from "./avatar/index.mjs";
import { ViBacktop as g } from "./backtop/index.mjs";
import { ViBadge as b } from "./badge/index.mjs";
import { ViBreadcrumb as B } from "./breadcrumb/index.mjs";
import { ViBreadcrumbItem as I } from "./breadcrumb-item/index.mjs";
import { ViButton as T } from "./button/index.mjs";
import { ViButtonGroup as h } from "./button-group/index.mjs";
import { ViCard as y } from "./card/index.mjs";
import { ViCarousel as D } from "./carousel/index.mjs";
import { ViCarouselItem as G } from "./carousel-item/index.mjs";
import { ViCol as j } from "./col/index.mjs";
import { ViCheckbox as L } from "./checkbox/index.mjs";
import { ViCheckboxGroup as N } from "./checkbox-group/index.mjs";
import { ViDialog as R } from "./dialog/index.mjs";
import { ViDivider as z } from "./divider/index.mjs";
import { ViIcon as H } from "./icon/index.mjs";
import { ViInput as K } from "./input/index.mjs";
import { ViLink as S } from "./link/index.mjs";
import { messageEmits as W, messageProps as X, messageTypes as Y } from "./message/src/message.mjs";
import { ViPopover as _ } from "./popover/index.mjs";
import { ViProgress as ro } from "./progress/index.mjs";
import { ViRow as to } from "./row/index.mjs";
import { ViTag as mo } from "./tag/index.mjs";
import { ViText as fo } from "./text/index.mjs";
import { ViTimeline as Vo } from "./timeline/index.mjs";
import { ViTimelineItem as ao } from "./timeline-item/index.mjs";
const x = function(o) {
  Object.entries(t).forEach(([r, e]) => {
    o.component(r, e), o.config.globalProperties.$message = i, o.config.globalProperties.$notify = m;
  });
};
export {
  a as ViAlert,
  c as ViAvatar,
  g as ViBacktop,
  b as ViBadge,
  B as ViBreadcrumb,
  I as ViBreadcrumbItem,
  T as ViButton,
  h as ViButtonGroup,
  y as ViCard,
  D as ViCarousel,
  G as ViCarouselItem,
  L as ViCheckbox,
  N as ViCheckboxGroup,
  j as ViCol,
  R as ViDialog,
  z as ViDivider,
  H as ViIcon,
  K as ViInput,
  S as ViLink,
  i as ViMessage,
  m as ViNotification,
  _ as ViPopover,
  ro as ViProgress,
  to as ViRow,
  mo as ViTag,
  fo as ViText,
  Vo as ViTimeline,
  ao as ViTimelineItem,
  x as default,
  W as messageEmits,
  X as messageProps,
  Y as messageTypes
};
