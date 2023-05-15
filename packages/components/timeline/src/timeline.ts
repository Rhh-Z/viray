import { defineComponent, h, provide, renderSlot } from "vue";
import '../style/index';

const Timeline = defineComponent({
  name: 'ViTimeline',
  setup(_, { slots }) {

    provide('timeline', slots)

    return () => {
      return h('ul', { class: ['vi-timeline'] }, [renderSlot(slots, 'default')])
    }
  }
})

export default Timeline;
export type TimelineInstance = InstanceType<typeof Timeline>;