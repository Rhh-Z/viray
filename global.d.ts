// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    "vi-alert": typeof import('@viray/components')['ViAlert'];
    "vi-button": typeof import('@viray/components')['ViButton'];
    "vi-button-group": typeof import('@viray/components')['ViButtonGroup'];
    "vi-checkbox": typeof import('@viray/components')['ViCheckbox'];
    "vi-icon": typeof import('@viray/components')['ViIcon'];
    "vi-row": typeof import('@viray/components')['ViRow'];
    "vi-col": typeof import('@viray/components')['ViCol'];
    "vi-text": typeof import('@viray/components')['ViText'];
  }
}
export { }