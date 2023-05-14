<style>
  .vi-tag {
    margin-right:10px;
    margin-top:5px
  }

  .tag-group {
    display:flex;
  }
  .tag-group .vi-tag {
    margin-right:3px;
  }
  .tag-group__title {
    margin-right:5px;
  }
  .items-center {
    align-items: center;
  }
</style>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'primary' },
  { name: 'Tag 3', type: 'success' },
  { name: 'Tag 4', type: 'info' },
  { name: 'Tag 5', type: 'warning' },
  { name: 'Tag 7', type: 'danger' },
])

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>

# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 `tag` 的类型。 也可以通过 `color` 属性来自定义背景色。

<div class="example">
  <vi-tag>default</vi-tag>
  <vi-tag type="primary">Primary</vi-tag>
  <vi-tag type="success">Success</vi-tag>
  <vi-tag type="info">Info</vi-tag>
  <vi-tag type="danger">Danger</vi-tag>
  <vi-tag type="error">Error</vi-tag>
  <vi-tag type="warning">Warning</vi-tag>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-tag>default</vi-tag>
  <vi-tag type="primary">Primary</vi-tag>
  <vi-tag type="success">Success</vi-tag>
  <vi-tag type="info">Info</vi-tag>
  <vi-tag type="danger">Danger</vi-tag>
  <vi-tag type="error">Error</vi-tag>
  <vi-tag type="warning">Warning</vi-tag>
</template>
```
</details>


## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 `disable-transitions` 属性，它接受一个 `Boolean`，`true` 为关闭。 当 `Tag` 被移除时会触发 `close` 事件。

<div class="example">
  <vi-tag
    v-for="tag in tags"
    :key="tag.name"
    class="mx-1"
    closable
    :type="tag.type"
  >
    {{ tag.name }}
  </vi-tag>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-tag
    v-for="tag in tags"
    :key="tag.name"
    class="mx-1"
    closable
    :type="tag.type"
  >
    {{ tag.name }}
  </vi-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'primary' },
  { name: 'Tag 3', type: 'success' },
  { name: 'Tag 4', type: 'info' },
  { name: 'Tag 5', type: 'warning' },
  { name: 'Tag 7', type: 'danger' },
])
</script>
```
</details>


## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default` 或 `small`.

<div class="example">
  <vi-row>
    <vi-tag class="mx-1" size="large">Large</vi-tag>
    <vi-tag class="mx-1">Default</vi-tag>
    <vi-tag class="mx-1" size="small">Small</vi-tag>
  </vi-row>

  <vi-row class="mt-4">
    <vi-tag class="mx-1" size="large" closable>Large</vi-tag>
    <vi-tag class="mx-1" closable>Default</vi-tag>
    <vi-tag class="mx-1" size="small" closable>Small</vi-tag>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row>
    <vi-tag class="mx-1" size="large">Large</vi-tag>
    <vi-tag class="mx-1">Default</vi-tag>
    <vi-tag class="mx-1" size="small">Small</vi-tag>
  </vi-row>

  <vi-row class="mt-4">
    <vi-tag class="mx-1" size="large" closable>Large</vi-tag>
    <vi-tag class="mx-1" closable>Default</vi-tag>
    <vi-tag class="mx-1" size="small" closable>Small</vi-tag>
  </vi-row>
</template>
```
</details>

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

<div class="example">
  <div class="tag-group items-center">
    <span class="tag-group__title line-height-2">Dark</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="tag-group items-center">
    <span class="tag-group__title">Light</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="tag-group items-center">
    <span class="tag-group__title">Plain</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="tag-group items-center">
    <span class="tag-group__title line-height-2">Dark</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="tag-group items-center">
    <span class="tag-group__title">Light</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="tag-group items-center">
    <span class="tag-group__title">Plain</span>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </vi-tag>
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
      closable
    >
      {{ item.label }}
    </vi-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>
```
</details>

## 圆形标签

Tag 可以向按钮组件一样变为完全圆形。

<div class="example">
  <div class="flex flex-wrap gap-2 my-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="flex flex-wrap gap-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="light"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="plain"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="flex flex-wrap gap-2 my-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="flex flex-wrap gap-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="light"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <vi-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="plain"
      round
    >
      {{ item.label }}
    </vi-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>
```
</details>

## Tag 属性
| 属性名 |	说明 |	类型 |	可选值 |	默认值 |
|--------|-------|------|--------|---------|
| type  |   类型   |    string    | success/info/warning/danger  |  —  |
| closable	  |   是否可关闭  |    boolean    | —  |  false  |
| hit  |   是否有边框描边	 |    boolean    | —  |  false  |
| color  |   背景色	   |    string    | success/info/warning/danger  |  —  |
| size	  |   尺寸   |    string    | large / default /small |  default  |
| effect  |   主题   |    string    | dark / light / plain  |  light  |
| round  |   Tag 是否为圆形  |  boolean  | —  |  false  |

## Tag 事件
| 事件名  |   说明   |    参数    |
|---------|----------|-----------|
| click  |   	点击 Tag 时触发的事件  |    —    |
| close  |   关闭 Tag 时触发的事件  |    —    |

## Tag 插槽
| 事件名  |   说明   |
|---------|----------|
| — |   自定义默认内容 |