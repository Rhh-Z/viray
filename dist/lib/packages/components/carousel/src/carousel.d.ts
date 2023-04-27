import { ExtractPropTypes } from "vue";
import Carousel from './carousel.vue';
declare type Trigger = 'hover' | 'click';
export declare const carouselProps: {
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: import("vue").PropType<"default" | "updown" | "fade">;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<Trigger>;
        values: string[];
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    arrow: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export declare const carouselEmits: {
    change: (current: number, prev: number) => boolean;
};
export declare type CarouselEmits = typeof carouselEmits;
export declare type CarouselInstance = InstanceType<typeof Carousel>;
export {};
