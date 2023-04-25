import { InjectionKey, Ref, RendererElement, RendererNode, VNode } from "vue";
export declare type CarouselContext = {
    items: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>[] | undefined;
    activeIndex: Ref<number>;
};
export declare const carouselContextKey: InjectionKey<CarouselContext>;
