import type Link from './link.vue';
declare type LinkType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning' | 'error';
export declare const linkProps: {
    type: {
        type: import("vue").PropType<LinkType>;
        default: string;
        validator(value: LinkType): boolean;
    };
    /**
     * 是否有下划线
     */
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
};
export declare const linkEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type LinkEmits = typeof linkEmits;
export declare type LinkInstance = InstanceType<typeof Link>;
export {};
