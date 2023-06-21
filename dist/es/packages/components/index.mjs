import * as t from "./components.mjs";
import { version as a } from "./package.json.mjs";
import { ViMessage as i } from "./message/index.mjs";
import { ViNotification as m } from "./notification/index.mjs";
import { ViAlert as c } from "./alert/index.mjs";
import { ViAvatar as g } from "./avatar/index.mjs";
import { ViBacktop as b } from "./backtop/index.mjs";
import { ViBadge as B } from "./badge/index.mjs";
import { ViBreadcrumb as I } from "./breadcrumb/index.mjs";
import { ViBreadcrumbItem as T } from "./breadcrumb-item/index.mjs";
import { ViButton as v } from "./button/index.mjs";
import { ViButtonGroup as y } from "./button-group/index.mjs";
import { ViCard as D } from "./card/index.mjs";
import { ViCarousel as G } from "./carousel/index.mjs";
import { ViCarouselItem as j } from "./carousel-item/index.mjs";
import { ViCol as L } from "./col/index.mjs";
import { ViCheckbox as N } from "./checkbox/index.mjs";
import { ViCheckboxGroup as R } from "./checkbox-group/index.mjs";
import { ViDialog as z } from "./dialog/index.mjs";
import { ViDivider as H } from "./divider/index.mjs";
import { ViIcon as K } from "./icon/index.mjs";
import { ViInput as S } from "./input/index.mjs";
import { ViLink as W } from "./link/index.mjs";
import { messageEmits as Y, messageProps as Z, messageTypes as _ } from "./message/src/message.mjs";
import { ViPopover as ro } from "./popover/index.mjs";
import { ViProgress as to } from "./progress/index.mjs";
import { ViRow as mo } from "./row/index.mjs";
import { ViTag as fo } from "./tag/index.mjs";
import { ViText as Vo } from "./text/index.mjs";
import { ViTimeline as ao } from "./timeline/index.mjs";
import { ViTimelineItem as co } from "./timeline-item/index.mjs";
const x = function(o) {
  Object.entries(t).forEach(([r, e]) => {
    o.component(r, e), o.config.globalProperties.$message = i, o.config.globalProperties.$notify = m;
  });
};
export {
  c as ViAlert,
  g as ViAvatar,
  b as ViBacktop,
  B as ViBadge,
  I as ViBreadcrumb,
  T as ViBreadcrumbItem,
  v as ViButton,
  y as ViButtonGroup,
  D as ViCard,
  G as ViCarousel,
  j as ViCarouselItem,
  N as ViCheckbox,
  R as ViCheckboxGroup,
  L as ViCol,
  z as ViDialog,
  H as ViDivider,
  K as ViIcon,
  S as ViInput,
  W as ViLink,
  i as ViMessage,
  m as ViNotification,
  ro as ViPopover,
  to as ViProgress,
  mo as ViRow,
  fo as ViTag,
  Vo as ViText,
  ao as ViTimeline,
  co as ViTimelineItem,
  x as default,
  Y as messageEmits,
  Z as messageProps,
  _ as messageTypes,
  a as version
};
