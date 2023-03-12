import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    viButton: typeof components.Button;
    viIcon: typeof components.Icon;
  }
}
export { };
