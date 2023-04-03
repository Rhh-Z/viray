<script setup lang="ts">
  import Icons from './Icons.vue'
</script>

<style>
  i[class^="vi-icon"] {
    margin:5px;
  }
</style>

# Icon图标

viray 提供了一套常用的图标集合
- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。


## 基础用法

<div class="example">
  <vi-icon name="search" size="large"></vi-icon>
  <vi-icon name="down-circle"></vi-icon>
  <vi-icon name="zoomout"></vi-icon>
  <vi-icon name="close"></vi-icon>
  <vi-icon name="delete"></vi-icon>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-icon name="search" size="large"></vi-icon>
  <vi-icon name="down-circle"></vi-icon>
  <vi-icon name="zoomout"></vi-icon>
  <vi-icon name="close"></vi-icon>
  <vi-icon name="delete"></vi-icon>
</template>
```

</details>

## 修改图标颜色
使用`color`属性可以快捷修改`icon`图标颜色

<div class="example">
  <vi-icon name="search" color="#ccc"></vi-icon>
  <vi-icon name="down-circle" color="#bbb"></vi-icon>
  <vi-icon name="zoomout" color="blue"></vi-icon>
  <vi-icon name="close" color="red"></vi-icon>
  <vi-icon name="delete" color="green"></vi-icon>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-icon name="search" color="#ccc"></vi-icon>
  <vi-icon name="down-circle" color="#bbb"></vi-icon>
  <vi-icon name="zoomout" color="blue"></vi-icon>
  <vi-icon name="close" color="red"></vi-icon>
  <vi-icon name="delete" color="green"></vi-icon>
</template>
```

</details>


## 修改图标大小
使用`size`属性可以快捷修改`icon`图标大小

<div class="example">
  <vi-icon name="search" size="12px"></vi-icon>
  <vi-icon name="down-circle" color="#bbb" size="16px"></vi-icon>
  <vi-icon name="zoomout" color="blue" size="20px"></vi-icon>
  <vi-icon name="gift" size="24px"></vi-icon>
  <vi-icon name="delete" size="30px" color="#f2f"></vi-icon>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-icon name="search" size="10px"></vi-icon>
  <vi-icon name="down-circle" color="#bbb" size="12px"></vi-icon>
  <vi-icon name="zoomout" color="blue" size="14px"></vi-icon>
  <vi-icon name="delete" size="50px" color="#f2f"></vi-icon>
  <vi-icon name="delete" size="small"></vi-icon>
</template>
```
</details>

## 所有图标
<div class="example">
  <Icons />  
</div>


## API

### Attributes

| 属性名  |	说明  |	类型  |	默认值 |
| ------- |------|-------|-------|
| color  |	svg 的 fill 颜色  |	string  |		继承颜色 |
| size  |		SVG 图标的大小  |	number/string |	继承字体大小 |

### Slots
| 名称  |	说明  |
| ------- |------|
|default|自定义默认内容|