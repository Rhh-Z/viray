import type { ExtractPropTypes } from "vue"
import type TimelineItem from './timeline-item.vue'

export const timelineItemProps = {
  /**
   * 时间戳
   */
  timestamp: {
    type: String,
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    default: ''
  },
  /**
   * 是否隐藏时间戳
   */
  hideTimestamp: {
    type: Boolean,
    default: false
  },
  /**
   * 时间戳位置
   */
  placement: {
    type: String,
    values: ['top', 'bottom'],
    default: "bottom"
  },
  /**
   * 节点类型
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    default: '',
  },
  /**
   * 节点颜色
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 自定义图标
   */
  icon: {
    type: String,
    default: ''
  },
  /**
   * 节点尺寸
   */
  size: {
    type: String,
    values: ['normal', 'large'],
    default: 'normal',
  },
  /**
   * 是否空心点
   */
  hollow: {
    type: Boolean,
    default: false
  }
}

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>
export type TimelineItemInstance = InstanceType<typeof TimelineItem>
