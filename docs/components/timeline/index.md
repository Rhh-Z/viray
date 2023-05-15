<script lang="ts" setup>
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

const activities1 = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'ellipsis',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>

<style>
  .vp-doc ul {
    list-style: none;
  }
</style>

# Timeline 时间线

可视化地呈现时间流信息。

## 基础用法

Timeline 可拆分成多个按照时间戳排列的活动， 时间戳是其区分于其他控件的重要特征， 使用时注意与 `Steps` 步骤条等区分。

<div class="example">
  <vi-timeline>
    <vi-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-timeline>
    <vi-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>

```
</details>

## ⾃定义节点样式

可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

<div class="example">
  <vi-timeline>
    <vi-timeline-item
      v-for="(activity, index) in activities1"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-timeline>
    <vi-timeline-item
      v-for="(activity, index) in activities1"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>
</template>

<script lang="ts" setup>
const activities1 = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'ellipsis',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>
```
</details>

## ⾃定义时间戳

当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。

<div class="example">
  <vi-timeline>
    <vi-timeline-item center timestamp="2018/4/12" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/3" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item center timestamp="2018/4/2" placement="top">
      Event start
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/2" placement="top">
      Event end
    </vi-timeline-item>
  </vi-timeline>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-timeline>
    <vi-timeline-item center timestamp="2018/4/12" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/3" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item center timestamp="2018/4/2" placement="top">
      Event start
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/2" placement="top">
      Event end
    </vi-timeline-item>
  </vi-timeline>
</template>
```
</details>

## Timeline 插槽

| 插槽名 |	说明 |	子标签 |
|-------|-------|--------|
|   —    | 自定义时间线内容	|  Timeline-Item |

## Timeline-Item 属性
| 属性名 |	说明 |	类型 |	可选值 |	默认值 |
|--------|------|------|--------|---------|
|  timestamp  |  时间戳  |  string  |  —  |   —  |
|  hide-timestamp	  |  是否隐藏时间戳	  | boolean |  —  |  false   |
|  placement  |  时间戳位置	 | string	  |  top / bottom  |  bottom  |
| type   |  节点类型  |  string  | primary / success / warning / danger / info  |  —  |
|  color  |  节点颜色	  |  string | hsl / hsv / hex / rgb  |   —  |
|  size  |    节点尺寸  |   string  |  normal / large  |  normal  |
|  icon  |    自定义图标   |   string  |  —   |  —   |
| hollow   |  是否空心点   |  boolean   | —  |  false   |

## Timeline-Item 插槽
|  插槽名  |   说明    |
|---------|-----------|
| —  |  Timeline-Item 的内容 |
| dot |  自定义节点 |

