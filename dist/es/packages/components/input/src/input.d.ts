import type { PropType } from "vue";
import type Input from './input.vue';
export declare type InputAutoSize = {
    minRows?: number;
    maxRows?: number;
} | boolean;
export declare const inputProps: {
    /**
   * @description binding value
   */
    modelValue: {
        type: PropType<string | number | null | undefined>;
        default: string;
    };
    /**
      * @description native input id
      */
    id: {
        type: StringConstructor;
        default: undefined;
    };
    size: PropType<"" | "default" | "small" | "large">;
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    form: {
        type: StringConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
      * @description word count
      */
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
      * @description prefix icon
      */
    prefixIcon: StringConstructor;
    /**
      * @description suffix icon
      */
    suffixIcon: StringConstructor;
    maxlength: {
        type: NumberConstructor;
    };
    autoSize: {
        type: PropType<InputAutoSize>;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const inputEmits: {
    "update:modelValue": (val: string) => boolean;
    input: (val: string) => boolean;
    change: (val: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: KeyboardEvent | Event) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export declare type InputEmits = typeof inputEmits;
export declare type InputInstance = InstanceType<typeof Input>;
