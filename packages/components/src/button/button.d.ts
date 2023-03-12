import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ViButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export { };
