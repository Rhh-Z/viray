import { InjectionKey } from "vue";
import { BreadcrumbProps } from "./breadcrumb";


export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')