declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    "vi-alert": typeof import('@viray/components')['ViAlert'];
    "vi-button": typeof import('@viray/components')['ViButton'];
    "vi-button-group": typeof import('@viray/components')['ViButtonGroup'];
    "vi-checkbox": typeof import('@viray/components')['ViCheckbox'];
    "vi-dialog": typeof import('@viray/components')['ViDialog'];
    "vi-icon": typeof import('@viray/components')['ViIcon'];
    "vi-input": typeof import('@viray/components')['ViInput'];
    "vi-message": typeof import('@viray/components')['ViMessage'];
    "vi-progress": typeof import('@viray/components')['ViProgress'];
    "vi-row": typeof import('@viray/components')['ViRow'];
    "vi-col": typeof import('@viray/components')['ViCol'];
    "vi-text": typeof import('@viray/components')['ViText'];
  }
}
export { };