import { InjectionKey, Ref, RendererElement, RendererNode, VNode, VNodeNormalizedChildren } from "vue";
export declare type CarouselContext = {
    items: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>[] | undefined | VNodeNormalizedChildren;
    activeIndex: Ref<number>;
};
export declare const carouselContextKey: InjectionKey<CarouselContext>;
