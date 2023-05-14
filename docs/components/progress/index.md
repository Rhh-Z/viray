<script lang="ts" setup>
import { ref,onMounted } from 'vue'

// example 1
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

// example 2
const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

// example 3
const percentage1 = ref(10)
const percentage2 = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>


<style scoped>
/* 文档的样式 */
.vi-progress .vi-button {
  margin:0;
}

.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .vi-progress--circle {
  margin-right: 15px;
}
</style>

# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性**必填**，并且必须在 `0-100` 的范围内。 你可以通过设置 format 来自定义文字显示的格式。

<div class="example">
  <div class="demo-progress">
    <vi-progress :percentage="50" />
    <vi-progress :percentage="100" :format="format" />
    <vi-progress :percentage="100" status="success" />
    <vi-progress :percentage="100" status="warning" />
    <vi-progress :percentage="50" status="exception" />
  </div>
</div>



<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress :percentage="50" />
    <vi-progress :percentage="100" :format="format" />
    <vi-progress :percentage="100" status="success" />
    <vi-progress :percentage="100" status="warning" />
    <vi-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```
</details>


## 进度条内显示百分比标识

百分比不占用额外控件，适用于文件上传等场景。

`Progress` 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。

<div class="example">
  <div class="demo-progress">
    <vi-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <vi-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <vi-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <vi-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
    <div class="demo-progress">
    <vi-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <vi-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <vi-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <vi-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```
</details>


## 自定义进度条的颜色

可以通过 `color` 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。

<div class="example">
  <div class="demo-progress">
    <vi-progress :percentage="percentage" :color="customColor" />
    <vi-progress :percentage="percentage" :color="customColorMethod" />
    <vi-progress :percentage="percentage" :color="customColors" />
    <vi-progress :percentage="percentage" :color="customColors" />
    <div>
      <vi-button-group>
        <vi-button icon="minus" @click="decrease" />
        <vi-button icon="plus" @click="increase" />
      </vi-button-group>
    </div>
  </div>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress :percentage="percentage" :color="customColor" />
    <vi-progress :percentage="percentage" :color="customColorMethod" />
    <vi-progress :percentage="percentage" :color="customColors" />
    <vi-progress :percentage="percentage" :color="customColors" />
    <div>
      <vi-button-group>
        <vi-button icon="minus" @click="decrease" />
        <vi-button icon="plus" @click="increase" />
      </vi-button-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>
<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```
</details>


## 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

<div class="example">
  <div class="demo-progress">
    <vi-progress type="circle" :percentage="0" />
    <vi-progress type="circle" :percentage="25" />
    <vi-progress type="circle" :percentage="100" status="success" />
    <vi-progress type="circle" :percentage="70" status="warning" />
    <vi-progress type="circle" :percentage="50" status="exception" />
  </div>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress type="circle" :percentage="0" />
    <vi-progress type="circle" :percentage="25" />
    <vi-progress type="circle" :percentage="100" status="success" />
    <vi-progress type="circle" :percentage="70" status="warning" />
    <vi-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```
</details>


## 仪表盘形进度条

您也可以指定 `type` 属性到 `dashboard` 使用控制面板进度栏。

<div class="example">
  <div class="demo-progress">
    <vi-progress type="dashboard" :percentage="percentage1" :color="colors" />
    <vi-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <vi-button-group>
        <vi-button icon="minus" @click="decrease" />
        <vi-button icon="plus" @click="increase" />
      </vi-button-group>
    </div>
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress type="dashboard" :percentage="percentage1" :color="colors" />
    <vi-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <vi-button-group>
        <vi-button icon="minus" @click="decrease" />
        <vi-button icon="plus" @click="increase" />
      </vi-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const percentage1 = ref(10)
const percentage2 = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>

<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .vi-progress--circle {
  margin-right: 15px;
}
</style>
```
</details>

## 自定义内容

通过默认插槽添加自定义内容。

<div class="example">
  <div class="demo-progress">
    <vi-progress :percentage="50">
      <vi-button text>Content</vi-button>
    </vi-progress>
    <vi-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </vi-progress>
    <vi-progress type="circle" :percentage="100" status="success">
      <vi-button type="success" icon="check" circle />
    </vi-progress>
    <vi-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </vi-progress>
  </div>
</div>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .vi-progress--circle {
  margin-right: 15px;
}
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress :percentage="50">
      <vi-button text>Content</vi-button>
    </vi-progress>
    <vi-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </vi-progress>
    <vi-progress type="circle" :percentage="100" status="success">
      <vi-button type="success" icon="check" circle />
    </vi-progress>
    <vi-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </vi-progress>
  </div>
</template>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .vi-progress--circle {
  margin-right: 15px;
}
</style>
```
</details>


## 动画进度条

使用 `intermediate` 属性来设置不确定的进度， duration 来控制动画持续时间。

<div class="example">
  <div class="demo-progress">
    <vi-progress :percentage="50" :indeterminate="true" />
    <vi-progress :percentage="100" :format="format" :indeterminate="true" />
    <vi-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <vi-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <vi-progress :percentage="50" status="exception" :indeterminate="true" />
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-progress">
    <vi-progress :percentage="50" :indeterminate="true" />
    <vi-progress :percentage="100" :format="format" :indeterminate="true" />
    <vi-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <vi-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <vi-progress :percentage="50" status="exception" :indeterminate="true" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .vi-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```
</details>

## Attribute
| 属性名 |	说明 |	类型 |	可选值 |	默认值 |
|--------|-------|------|----------|--------|
|  percentage | 百分比，**必填** | number | (0-100) |   0  |
| type |  进度条类型   |  string  | line/circle/dashboard  |   line  |
| stroke-width |  进度条的宽度 | number  |  —  |   6   |
| text-inside |  进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）  |  boolean  |  —  |   false  |
|  status  |  进度条当前状态	  |  string  | success/exception/warning |   -   |
| indeterminate  |  是否为动画进度条	  |  boolean  |  -	 |   false   |
| duration |  控制动画进度条速度 |  number  |  - |   3  |
|  color  |  进度条背景色 进度条背景色 （会覆盖 status 状态颜色）  |  string/function/array |  — |   ''  |
| width |  环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）  | number |  —  |   126   |
|  stroke-linecap	 |  	circle/dashboard 类型路径两端的形状  |  string  |  butt/round/square |   	round  |
|  format	 |  指定进度条文字内容  |  function(percentage)  |  —  |   —  |

## Slots
|  名称  |	说明  |
|-------|---------|
| default | 自定义内容，参数为 { percentage } |




