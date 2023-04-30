// declare module "@vue/runtime-core" {
//   export interface GlobalComponents {
//     "vi-alert": typeof import('@viray/components')['ViAlert'];
//     "vi-avatar": typeof import('@viray/components')['ViAvatar'];
//     "vi-backtop": typeof import('@viray/components')['ViBacktop'];
//     "vi-breadcrumb": typeof import('@viray/components')['ViBreadcrumb'];
//     "vi-breadcrumbItem": typeof import('@viray/components')['ViBreadcrumbItem'];
//     "vi-button": typeof import('@viray/components')['ViButton'];
//     "vi-button-group": typeof import('@viray/components')['ViButtonGroup'];
//     "vi-card": typeof import('@viray/components')['ViCard'];
//     "vi-carousel": typeof import('@viray/components')['ViCarousel'];
//     "vi-carousel-item": typeof import('@viray/components')['ViCarouselItem'];
//     "vi-col": typeof import('@viray/components')['ViCol'];
//     "vi-checkbox": typeof import('@viray/components')['ViCheckbox'];
//     "vi-checkbox-group": typeof import('@viray/components')['ViCheckboxGroup']
//     "vi-dialog": typeof import('@viray/components')['ViDialog'];
//     "vi-icon": typeof import('@viray/components')['ViIcon'];
//     "vi-input": typeof import('@viray/components')['ViInput'];
//     "vi-message": typeof import('@viray/components')['ViMessage'];
//     "vi-notification": typeof import('@viray/components')['ViNotification'];
//     "vi-popover": typeof import('@viray/components')['ViPopover'];
//     "vi-progress": typeof import('@viray/components')['ViProgress'];
//     "vi-row": typeof import('@viray/components')['ViRow'];
//     "Vi-tag": typeof import('@viray/components')['ViTag'];
//     "vi-text": typeof import('@viray/components')['ViText'];
//   }
// }
// export { };

import * as components from "../packages/components/components";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    "vi-alert": typeof components.ViAlert;
    "vi-avatar": typeof components.ViAvatar;
    "vi-backtop": typeof components.ViBacktop;
    "vi-breadcrumb": typeof components.ViBreadcrumb;
    "vi-breadcrumbItem": typeof components.ViBreadcrumbItem;
    "vi-button": typeof components.ViButton;
    "vi-button-group": typeof components.ViButtonGroup;
    "vi-card": typeof components.ViCard;
    "vi-carousel": typeof components.ViCard;
    "vi-carousel-item": typeof components.ViCarouselItem;
    "vi-col": typeof components.ViCol;
    "vi-checkbox": typeof components.ViCheckbox;
    "vi-checkbox-group": typeof components.ViCheckboxGroup;
    "vi-dialog": typeof components.ViDialog;
    "vi-icon": typeof components.ViIcon;
    "vi-input": typeof components.ViInput;
    "vi-message": typeof components.ViMessage;
    "vi-notification": typeof components.ViNotification;
    "vi-popover": typeof components.ViPopover;
    "vi-progress": typeof components.ViProgress;
    "vi-row": typeof components.ViRow;
    "Vi-tag": typeof components.ViTag;
    "vi-text": typeof components.ViText;
  }
}
export { };