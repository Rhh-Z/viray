<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')

const textarea = ref('')

const text = ref('')
</script>

<style>
  .vi-input {
    margin:10px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

# Input 输入框
通过鼠标或键盘输入字符
::: warning
Input 为受控组件，它总会显示`Vue`绑定值。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。
:::

## 基础用法

<div class="example">
  <vi-input v-model="input" placeholder="Please input" />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
</details>


## 禁用状态
通过`disabled`属性指定是否禁用`input`组件
<div class="example">
  <vi-input v-model="input" disabled placeholder="Please input" />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
</details>

## 一键清空
使用clearable属性即可得到一个可一键清空的输入框
<div class="example">
  <vi-input v-model="input" placeholder="Please input" clearable/>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
</details>

## 密码框
使用 show-password 属性即可得到一个可切换显示隐藏的密码框
<div class="example">
  <vi-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
</details>

## 带图标的输入框
带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

<div class="example">
  <div class="demo-input-suffix">
    <vi-row :gutter="20">
      <span>
        Using attributes
      </span>
      <vi-input 
        type="text" 
        placeholder="Please input" 
        prefixIcon="calendar"
        v-model="input1"
      />
      <vi-input 
        type="text" 
        placeholder="Please input" 
        suffixIcon="search"
        v-model="input2"
      />
    </vi-row>
  </div>
  <div class="demo-input-suffix">
    <vi-row :gutter="20">
      <span 
        >Using slots</span
      >
      <vi-input 
        type="text" 
        placeholder="Please input" 
        v-model="input3"
      >
        <template #prefix>
          <vi-icon name="calendar"/>
        </template>
      </vi-input>
       <vi-input 
        type="text" 
        placeholder="Please input" 
        v-model="input4"
      >
        <template #suffix>
          <vi-icon name="search"/>
        </template>
      </vi-input>
    </vi-row>
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-input-suffix">
    <vi-row :gutter="20">
      <span>
        Using attributes
      </span>
      <vi-input 
        type="text" 
        placeholder="Please input" 
        prefixIcon="calendar"
        v-model="input1"
      />
      <vi-input 
        type="text" 
        placeholder="Please input" 
        suffixIcon="search"
        v-model="input2"
      />
    </vi-row>
  </div>
  <div class="demo-input-suffix">
    <vi-row :gutter="20">
      <span 
        >Using slots</span
      >
      <vi-input 
        type="text" 
        placeholder="Please input" 
        v-model="input3"
      >
        <template #prefix>
          <vi-icon name="calendar"/>
        </template>
      </vi-input>
       <vi-input 
        type="text" 
        placeholder="Please input" 
        v-model="input4"
      >
        <template #suffix>
          <vi-icon name="search"/>
        </template>
      </vi-input>
    </vi-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```
</details>

## 文本域
用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制
<div class="example">
  <vi-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
```
</details>


## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 `Input` 中分发的前置或者后置的内容。

<div class="example">
  <div>
    <vi-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </vi-input>
  </div>
  <div class="mt-4">
    <vi-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </vi-input>
  </div>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <div>
    <vi-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </vi-input>
  </div>
  <div class="mt-4">
    <vi-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </vi-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
```
</details>

## 尺寸
使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。
<div class="example">
  <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
    />
    <vi-input v-model="input2"  placeholder="Please Input" />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      suffix-icon="search"
    />
    <vi-input
      v-model="input2"
      placeholder="Please Input"
      suffix-icon="search"
    />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      suffix-icon="search"
    />
  </div>
  <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      prefix-icon="search"
    />
    <vi-input
      v-model="input2"
      placeholder="Please Input"
      prefix-icon="search"
    />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      prefix-icon="search"
    />
  </div>
</div>

<style>
  .demo-input-size{
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
    <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
    />
    <vi-input v-model="input2"  placeholder="Please Input" />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      suffix-icon="search"
    />
    <vi-input
      v-model="input2"
      placeholder="Please Input"
      suffix-icon="search"
    />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      suffix-icon="search"
    />
  </div>
  <div class="demo-input-size">
    <vi-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      prefix-icon="search"
    />
    <vi-input
      v-model="input2"
      placeholder="Please Input"
      prefix-icon="search"
    />
    <vi-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      prefix-icon="search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<style>
  .demo-input-size{
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>

```
</details>

## 输入长度限制
使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用`JavaScript`字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` `prop`可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

<div class="example">
  <vi-input
    v-model="text"
    maxlength="10"
    placeholder="Please input"
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0" />
  <vi-input
    v-model="textarea"
    maxlength="30"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
   <vi-input
    v-model="text"
    :maxlength="10"
    placeholder="Please input"
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0" />
  <vi-input
    v-model="textarea"
    :maxlength="30"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```
</details>

# API

## Attributes

| 名称 |	说明 |	类型 |	默认值 |
|------|------|--------|--------|
|  type  | 类型  | string  | text |
|  model-value / v-model  | 绑定值  | string/number  | — |
|  maxlength | 最大输入长度  | string/number  | — |
|  minlength | 原生属性，最小输入长度 | number  | — |
|  show-word-limit | 是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效  | `boolean`  | false |
|  placeholder | 输入框占位文本 | string  | — |
|  clearable  | 是否显示清除按钮，只有当 type 不是 textarea时生效 | `boolean`  | false |
| show-password  | 是否显示切换密码图标 | `boolean`  | 	false |
| disabled  | 是否禁用 | `boolean`  | 	false |
| prefix-icon | 自定义前缀图标 | string | — |
| rows  | 自定义后缀图标 | string | — |
| suffix-icon  | 输入框行数，仅 type 为 'textarea' 时有效 | string | — |
| size  | 输入框尺寸，只在 type 不为 'textarea' 时有效 | 'large'、'default'、'small' | — |
| name  | 	等价于原生 input name 属性 | string | — |
| readonly | 原生  `readonly` 属性，是否只读 | `boolean `| false |
| max | 原生 `max` 属性，设置最大值 | — | — |
| min | 原原生属性，设置最小值 | `boolean` | false |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — |


## Events
| 事件名 |	说明 |	类型 |
|-------|--------|-----|
| blur | 当选择器的输入框失去焦点时触发 | Function |
| focus | 当选择器的输入框获得焦点时触发 | Function |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | Function |
| input | 在 Input 值改变时触发 | Function |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | Function |


## Slots
| 插槽名 |	说明 |
|-------|--------|
| prefix | 入框头部内容，只对非 type="textarea" 有效 |
| suffix | 输入框尾部内容，只对非 type="textarea" 有效 |
| prepend | 输入框前置内容，只对非 type="textarea" 有效 |
| append | 输入框后置内容，只对非 type="textarea" 有效 |


## Exposes
| 事件名 |	说明 |	类型 |
|-------|--------|-----|
| blur | 使 input 失去焦点 | Function |
| clear | 清除 input 值 | Function |
| focus | 使 input 获取焦点 | Function |
| input | Input HTML 元素 | object |
| ref | HTML元素 input 或 textarea | object |
| select | 选中 input 中的文字 | Function |
| textarea | HTML textarea 元素 | object |

