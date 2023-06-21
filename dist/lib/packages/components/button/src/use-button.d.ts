import { ButtonProps } from './button';
export declare function useButton(props: ButtonProps): {
    _size: import("vue").ComputedRef<string>;
    _type: import("vue").ComputedRef<"" | "default" | "info" | "success" | "error" | "warning" | "primary" | "danger">;
    _disabled: import("vue").ComputedRef<boolean>;
};
