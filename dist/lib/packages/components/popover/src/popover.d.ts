import { ExtractPropTypes, PropType } from "vue";
import Popover from './popover.vue';
export declare const popoverProps: {
    trigger: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    offset: {
        type: NumberConstructor;
        default: number;
    };
    visible: BooleanConstructor;
    'onUpdate:visible': {
        type: PropType<(visible: boolean) => void>;
    };
};
export declare type PopoverProps = ExtractPropTypes<typeof popoverProps>;
export declare const popoverEmits: {
    'update:visible': (value: boolean) => boolean;
    'before-enter': () => boolean;
    'before-leave': () => boolean;
    'after-enter': () => boolean;
    'after-leave': () => boolean;
    click: () => boolean;
};
export declare type PoopoverEmits = ExtractPropTypes<typeof popoverEmits>;
export declare type PoopoverInstance = InstanceType<typeof Popover>;
