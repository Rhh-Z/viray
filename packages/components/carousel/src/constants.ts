import { InjectionKey, Ref, RendererElement, RendererNode, VNode } from "vue";

export type CarouselContext = {
  items: VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>[] | undefined
  activeIndex: Ref<number>
}

export const carouselContextKey: InjectionKey<CarouselContext> = Symbol('carouselContextKey')