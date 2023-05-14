import { InjectionKey, Ref, RendererElement, RendererNode, VNode, VNodeNormalizedChildren } from "vue";

export type CarouselContext = {
  items: VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>[] | undefined | VNodeNormalizedChildren
  activeIndex: Ref<number>
}

export const carouselContextKey: InjectionKey<CarouselContext> = Symbol('carouselContextKey')