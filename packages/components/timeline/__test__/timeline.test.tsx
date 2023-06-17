// import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TimeLine from '../src/timeline'
import TimeLineItem from '../../timeline-item/src/timeline-itme.vue'

import type { TimelineItemProps } from '../../timeline-item/src/timeline-item'

const activities: {
  content: string
  timestamp: string
  placement?: TimelineItemProps['placement']
  hideTimestamp?: boolean
}[] = [
    {
      content: 'Step 1: xxxxxx',
      timestamp: '2018-04-11',
    },
    {
      content: 'Step 2: xxxxxx',
      timestamp: '2018-04-13',
    },
    {
      content: 'Step 3: xxxxxx',
      timestamp: '2018-04-15',
    },
  ]

describe('TimeLine.vue', () => {
  test('create', () => {
    const wrapper = mount(TimeLine as any, {
      slots: {
        default: '123'
      }
    })

    const contentWrappers = wrapper.findAll('.vi-timeline-item__content')

    contentWrappers.forEach((content, index) => {
      expect(content.text()).toEqual(activities[index].content)
    })
  })

  test('placement', () => {
    activities[0].placement = 'top'

    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((activity, index) => (
          <TimeLineItem key={index} placement={activity.placement} />
        ))}
      </TimeLine>
    ))

    const timestampWrapper = wrapper.findAll('.vi-timeline-item__timestamp')[0]

    expect(timestampWrapper.classes('is-top')).toBe(true)
  })

  test('color', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem color="#f00" />
      </TimeLine>
    ))

    const vm = wrapper.vm
    const nodeElm = vm.$el.querySelector('.vi-timeline-item__node')

    expect(nodeElm.style.backgroundColor).toEqual('#f00')
  })


  test('type', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem type="primary" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.vi-timeline-item__node')

    expect(nodeWrapper.classes('vi-timeline-item__node--primary')).toBe(true)
  })

  test('size', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem size="large" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.vi-timeline-item__node')

    expect(nodeWrapper.classes('vi-timeline-item__node--large')).toBe(true)
  })

  test('hollow', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem hollow />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.vi-timeline-item__node')

    expect(nodeWrapper.classes('is-hollow')).toBe(true)
  })

  test('dot', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem
          v-slots={{
            dot: () => 'dot',
          }}
        />
      </TimeLine>
    ))

    const dotWrapper = wrapper.find('.vi-timeline-item__dot')

    expect(dotWrapper.text()).toEqual('dot')
    expect(wrapper.find('.vi-timeline-item__node').exists()).toBe(false)
  })
})

