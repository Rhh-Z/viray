// import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TimeLine from '../src/timeline'
// import TimeLineItem from '../src/timeline-item.vue'

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

})

