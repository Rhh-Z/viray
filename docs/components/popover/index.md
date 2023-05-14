<script lang="ts" setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

<style scoped>
.vi-button + .vi-button {
  margin-left: 8px;
}
</style>

# Popover 气泡卡片

## 基础用法

`trigger` 属性被用来决定 `popover` 的触发方式，支持的触发方式： `hover`、`click`、`focus` 或 `contextmenu`。 如果你想手动控制它，可以设置 `:visible` 属性。

<div class="example">
  <vi-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="hover"
    :visible="visible1"
    content="this is content, this is content, thisis content"
  >
    <template #reference>
      <vi-button @click="visible1 = !visible1">Click to activate1</vi-button>
    </template>
  </vi-popover>
    <vi-popover :visible="visible2" title="Tittleasadasd" placement="bottom" trigger="hover">
      <template #reference>
        <vi-button @click="visible2 = !visible2">Click to activate2</vi-button>
      </template>
      <template #title>
        Title
      </template>
      <template #content>
        this is content this is content
      </template>
    </vi-popover>
    <vi-popover :visible="visible3" title="Tittleasadasd" placement="right" trigger="hover">
    <template #reference>
      <vi-button @click="visible3 = !visible3">Click to activate3</vi-button>
      </template>
      <template #title>
        Title
      </template>
      <template #content>
        this is content this is content
    </template>
  </vi-popover>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="hover"
    :visible="visible1"
    content="this is content, this is content, thisis content"
  >
    <template #reference>
      <vi-button @click="visible1 = !visible1">Click to activate1</vi-button>
    </template>
  </vi-popover>
    <vi-popover :visible="visible2" title="Tittleasadasd" placement="bottom" trigger="hover">
      <template #reference>
        <vi-button @click="visible2 = !visible2">Click to activate2</vi-button>
      </template>
      <template #title>
        Title
      </template>
      <template #content>
        this is content this is content
      </template>
    </vi-popover>
    <vi-popover :visible="visible3" title="Tittleasadasd" placement="right" trigger="hover">
    <template #reference>
      <vi-button @click="visible3 = !visible3">Click to activate3</vi-button>
      </template>
      <template #title>
        Title
      </template>
      <template #content>
        this is content this is content
    </template>
  </vi-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

<style scoped>
.vi-button + .vi-button {
  margin-left: 8px;
}
</style>
```
</details>

## Attributes
|  属性名 |	说明 |	类型 |	可选值 |	默认值 |
|--------|------|-------|---------|---------|
| trigger | 触发方式| string | click/hover  |   click   |
| title | 标题 |  string  |   —   |   —  |
| width | 宽度 |  string / number  |   —   |  最小宽度 150px |
| content | 	显示的内容，也可以通过写入默认 `slot`修改显示内容 | string  |   — | —  |
| placement | 出现位置 | string | top/bottom/left/right/right-start  |   bottom   |
| visible / v-model:visible | Popover 是否显示 | Boolean | —	 |  false  |
| offset | 出现位置的偏移量 | number | —	  |   0  |
| trigger | 触发方式| string | click/focus/hover/contextmenu  |   hover   |







