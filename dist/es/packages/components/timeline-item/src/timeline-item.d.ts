import type { ExtractPropTypes } from "vue";
import type TimelineItem from './timeline-item.vue';
export declare const timelineItemProps: {
    /**
     * 时间戳
     */
    timestamp: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    /**
     * 是否隐藏时间戳
     */
    hideTimestamp: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 时间戳位置
     */
    placement: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    /**
     * 节点类型
     */
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    /**
     * 节点颜色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 自定义图标
     */
    icon: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 节点尺寸
     */
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    /**
     * 是否空心点
     */
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
export declare type TimelineItemInstance = InstanceType<typeof TimelineItem>;
