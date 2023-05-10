<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)


const checked7 = ref(false)
const checked8 = ref(true)

const checkList = ref(['selected and disabled', 'Option A'])

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>

## Checkbox 多选框
在一组备选项中进行多选。

::: tip
文档处的样式有点问题，但是使用时应该不会有问题
:::

## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox`按钮后的介绍。

`checkbox-group`元素能把多个`checkbox`管理为一组，只需要在`Group`中使用`v-model`绑定`Array`类型的变量即可。 只有一个选项时的默认值类型为`Boolean`，当选中时值为`true`。`el-checkbox`标签中的内容将成为复选框按钮之后的描述。

<div class="example">
  <div>
    <vi-checkbox v-model="checked1" label="Option 1" size="large" />
    <vi-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <vi-checkbox v-model="checked3" label="Option 1" />
    <vi-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" />
    <vi-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <vi-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div>
    <vi-checkbox v-model="checked1" label="Option 1" size="large" />
    <vi-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <vi-checkbox v-model="checked3" label="Option 1" />
    <vi-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" />
    <vi-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <vi-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>
```
</details>

## 禁用状态
多选框不可用状态。

设置`disabled`属性即可。

<div class="example">
  <vi-checkbox v-model="checked7" disabled>Disabled</vi-checkbox>
  <vi-checkbox v-model="checked8">Not disabled</vi-checkbox>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-checkbox v-model="checked1" disabled>Disabled</vi-checkbox>
  <vi-checkbox v-model="checked2">Not disabled</vi-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
</script>
```
</details>


## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在`el-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。 在`el-checkbox`组件中，`label`是选择框的值。 如果该组件下没有被传入内容，那么`label`将会作为`checkbox`按钮后的介绍。`label`也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

<div class="example">
  <vi-checkbox-group v-model="checkList">
    <vi-checkbox label="Option A" />
    <vi-checkbox label="Option B" />
    <vi-checkbox label="Option C" />
    <vi-checkbox label="disabled" disabled />
    <vi-checkbox label="selected and disabled" disabled />
  </vi-checkbox-group>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-checkbox-group v-model="checkList">
  <vi-checkbox label="Option A" />
  <vi-checkbox label="Option B" />
  <vi-checkbox label="Option C" />
  <vi-checkbox label="disabled" disabled />
  <vi-checkbox label="selected and disabled" disabled />
  </vi-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
```
</details>

## 中间状态
`indeterminate`属性用以表示`checkbox`的不确定状态，一般用于实现全选的效果

<div class="example">
  <vi-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</vi-checkbox
  >
  <vi-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <vi-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</vi-checkbox>
  </vi-checkbox-group>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</vi-checkbox
  >
  <vi-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox>
  </vi-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>
```
</details>

## 可选项目数量的限制
使用`min`和`max`属性能够限制可以被勾选的项目的数量。

<div class="example">
  <vi-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <vi-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</vi-checkbox>
  </vi-checkbox-group>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <vi-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</vi-checkbox>
  </vi-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>
```
</details>

## 带有边框
设置`border`属性可以渲染为带有边框的多选框。

<div class="example">
  <div>
    <vi-checkbox v-model="checked1" label="Option 1" size="large" border/>
    <vi-checkbox v-model="checked2" label="Option 2" size="large" border/>
  </div>
  <div>
    <vi-checkbox v-model="checked3" label="Option 1" border/>
    <vi-checkbox v-model="checked4" label="Option 2" border/>
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" border/>
    <vi-checkbox v-model="checked6" label="Option 2" size="small" border/>
  </div>
  <div>
    <vi-checkbox v-model="checked5" label="Option 1" size="small" disabled border/>
    <vi-checkbox v-model="checked6" label="Option 2" size="small" disabled border/>
  </div>
</div>


# Checkbox API
## Checkbox Attributes
| 属性名 | 说明 | 类型 | 默认值 |
|-------|------|------|---------|
|model-value / v-model| 选中项绑定值 |string / number / boolean|— |
| label  | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string/ number/ boolean / object | — |
|  true-label  | 选中时的值 | 	string/ number | — |
|  false-label  | 	没有选中时的值 | string/ number | — |
|  disabled  | 是否禁用 | boolean | false |
|  border  | 是否显示边框 | boolean | false |
|  size  | Checkbox 的尺寸 | 'large'、'default'、'small' | — |
| checked  | 当前是否勾选	| boolean | false|
|  indeterminate  | 设置不确定状态，仅负责样式控制 | boolean | false |


## Checkbox Events
| 属性名 | 说明 | 类型 |
|-------|------|------|
| change | 当绑定值变化时触发的事件	| Function |
	
## Checkbox Slots
| 插槽名 | 说明 | 
| default |	自定义默认内容 |


# CheckboxGroup API
## CheckboxGroup Attributes
| 属性名 | 说明 | 类型 | 默认值 |
|-------|------|------|---------|
| model-value / v-model | 绑定值 | string[]、number[] | [] |
| size | 多选框组尺寸 | 'large' 、'default'、'small' | false |
| min | 可被勾选的 checkbox 的最小数量 | number | — |
| max | 可被勾选的 checkbox 的最大数量 | number | — |
| label | 为屏幕阅读器准备的标签 | string | — |
| tag | 复选框组元素标签 | string | div |
| disabled | 是否禁用 | boolean | false |


## CheckboxGroup Events
| 属性名 | 说明 | 类型 | 
|-------|------|------|
| change	 | 当绑定值变化时触发的事件 |Function |

## CheckboxGroup Slots
| 属性名 | 说明 | 子标签 | 
|-------|------|------|
| default	 | 自定义默认内容	 | Checkbox |

