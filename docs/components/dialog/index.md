<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)

const showDialog1 = ()=>{
  dialogVisible1.value = true
}

const handleCancel1 = ()=>{
  dialogVisible1.value = false
}

const handleConfirm1 = ()=>{ 
  dialogVisible1.value = false
}

const showDialog2 = () => {
  dialogVisible2.value = true
}

const handleCancel2 = ()=>{
  dialogVisible2.value = false
}

const handleConfirm2 = ()=>{ 
  dialogVisible2.value = false
}
</script>

# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 before-close 的用法。

<div class="example">
  <vi-button text type="primary" @click="showDialog1">
    Click to show message
  </vi-button>

  <vi-dialog title="DialogTitle" width="500px" v-model="dialogVisible1">
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel1">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm1">确定</vi-button>
    </template>
  </vi-dialog>
</div>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button text type="primary" @click="showDialog">
    Click to show message
  </vi-button>

  <vi-dialog title="DialogTitle" width="500px" v-model="dialogVisible">
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const showDialog = ()=>{
  dialogVisible.value = true
}

const handleCancel = ()=>{
  dialogVisible.value = false
}

const handleConfirm = ()=>{ 
  dialogVisible.value = false
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
```
</details>

## 内容居中
对话框的内容可以居中。

将center设置为true即可使标题和底部居中。 center仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。

<div class="example">
  <vi-button text type="primary" @click="showDialog2">
    Click to show message
  </vi-button>

  <vi-dialog title="DialogTitle" width="500px" v-model="dialogVisible2" center>
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel2">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm2">确定</vi-button>
    </template>
  </vi-dialog>
</div>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button text type="primary" @click="showDialog">
    Click to show message
  </vi-button>

  <vi-dialog title="DialogTitle" width="500px" v-model="dialogVisible" center>
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const showDialog = ()=>{
  dialogVisible.value = true
}

const handleCancel = ()=>{
  dialogVisible.value = false
}

const handleConfirm = ()=>{ 
  dialogVisible.value = false
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
```
</details>


# Attributes
| 名称 |	说明 |	类型 | 可选值 |	默认值 |
|------|------|--------|-------|--------|
| model-value / v-model | 是否显示 Dialog | boolean | —  |  — |
| title | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入 | string | —  |  — |
| width | Dialog 的宽度 | string / number | —  |  50% |
| append-to-body | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | —  | false |
| center | 是否让 Dialog 的 header 和 footer 部分居中排列 | boolean | —  | false |


## Slots
| 插槽名 | 说明 |
|-------|------|
| — |	Dialog 的内容 |
|header |	对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| title | deprecated	与 header 作用相同 请使用 header |
| footer |	Dialog 按钮操作区的内容 |

## Events
| 事件名 |	说明 |	参数 |
|--------|-------|-------|
| open | Dialog 打开的回调 | — |
| opened |	Dialog 打开动画结束时的回调 |	— |
| close |	Dialog 关闭的回调 |	— |
| closed |	Dialog 关闭动画结束时的回调 | — |