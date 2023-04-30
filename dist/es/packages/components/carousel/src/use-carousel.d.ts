import { SetupContext } from "vue";
import { CarouselEmits, CarouselProps } from "./carousel";
export declare const useCarousel: (props: CarouselProps, emit: SetupContext<CarouselEmits>['emit']) => {
    handleIndicatorEnter: (index: number) => void;
    handleIndicatorClick: (index: number) => void;
    setIndex: (index: number) => void;
    activeIndex: import("vue").Ref<number>;
    handleMouseLeave: () => void;
    throttlePrev: import("lodash-unified").DebouncedFunc<() => void>;
    throttleNext: import("lodash-unified").DebouncedFunc<() => void>;
};
