import * as components from "../packages/components/components";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    "vi-alert": typeof components.ViAlert;
    "vi-avatar": typeof components.ViAvatar;
    "vi-backtop": typeof components.ViBacktop;
    "vi-badge": typeof components.ViBadge;
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
    "vi-divider": typeof components.ViDivider;
    "vi-icon": typeof components.ViIcon;
    "vi-input": typeof components.ViInput;
    "vi-link": typeof components.ViLink;
    "vi-message": typeof components.ViMessage;
    "vi-notification": typeof components.ViNotification;
    "vi-popover": typeof components.ViPopover;
    "vi-progress": typeof components.ViProgress;
    "vi-row": typeof components.ViRow;
    "Vi-tag": typeof components.ViTag;
    "vi-text": typeof components.ViText;
    "vi-timeline": typeof components.ViTimeline;
    "vi-timelineItem": typeof components.ViTimelineItem;
  }
}
export { };