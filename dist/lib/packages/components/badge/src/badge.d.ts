import type Badge from './badge.vue';
declare type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export declare const badgeProps: {
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    isDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<BadgeType>;
        default: string;
    };
};
export declare type BadgeInstance = InstanceType<typeof Badge>;
export {};
