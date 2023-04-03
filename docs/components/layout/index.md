<style lang="scss">
.vi-row {
  margin-bottom: 10px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

::: tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。
请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::


## 基础布局
使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<div class="example">
  <vi-row>
    <vi-col :span="24"><div style="background-color: #d3dce6;" class="grid-content"/></vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="12">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="12">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="8">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="8">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="8">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="6">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="6">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="6">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="6">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
</div>



<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-row>
    <vi-col :span="24"><div style="background-color: #d3dce6;" class="grid-content"/></vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="12">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="12">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="8">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="8">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="8">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="6">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="6">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="6">
      <div style="background-color: #d3dce6;" class="grid-content"/>
    </vi-col>
    <vi-col :span="6">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
  <vi-row>
    <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
     <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #d3dce4;" class="grid-content"/>
    </vi-col>
    <vi-col :span="4">
      <div style="background-color: #f2f2f2;" class="grid-content"/>
    </vi-col>
  </vi-row>
</template>

<style lang="scss">
.vi-row {
  margin-bottom: 10px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

</details>


## 分栏间隔
支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。

<div class="example">
  <vi-row :gutter="20">
   <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
   <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
   <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
   <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

```vue 
<template>
<vi-row :gutter="20">
  <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</template>

<style lang="scss">
.vi-row {
  margin-bottom: 10px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
</details>



## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局

<div class="example">
  <vi-row :gutter="20">
    <vi-col :span="16"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="16"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-row :gutter="20">
    <vi-col :span="16"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="8"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="16"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="4"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</template>

<style>
.vi-row {
  margin-bottom: 20px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
</details>


## 列偏移
您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

<div class="example">
   <vi-row :gutter="20">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="12" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-row :gutter="20">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
    <vi-col :span="6" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
  <vi-row :gutter="20">
    <vi-col :span="12" :offset="6"
      ><div style="background-color: #d3dce6;" class="grid-content"
    /></vi-col>
  </vi-row>
</template>

<style>
.vi-row {
  margin-bottom: 20px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
</details>


## 对齐方式
默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

<div class="example">
  <vi-row class="row-bg">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="center">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="end">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-between">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-around">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-evenly">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
   <vi-row class="row-bg">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="center">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="end">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-between">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-around">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
  <vi-row class="row-bg" justify="space-evenly">
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #f2f2f2;" class="grid-content" /></vi-col>
    <vi-col :span="6"><div style="background-color: #d3dce6;" class="grid-content" /></vi-col>
  </vi-row>
</template>

<style>
.vi-row {
  margin-bottom: 20px;
}
.vi-row:last-child {
  margin-bottom: 0;
}
.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
</details>


## Row API

### Row Attributes

|  属性名  |	说明  |	 类型	  |    默认值   |
|---------|--------|--------|-------------|
|  gutter | 栅格间隔  |   number   |   0    |
| justify | flex 布局下的水平排列方式 |start、end、center、space-around、space-between、space-evenly| start |
|  align  |   flex 布局下的垂直排列方式  |  top、middle、bottom  |  	top    | 
| tag    |   	自定义元素标签	|    string   |    div   |



### Row Slots
| 插槽名 |	说明 |	子标签 |
|------|------|------|
|default|	自定义默认内容|	Col |


## Col API

### Col Attributes
|  属性名  |	说明  |	 类型	  |    默认值   |
|---------|--------|--------|-------------|
|  span		|	栅格占据的列数  |	 number	  |    24    |
|  offset	|	栅格左侧的间隔格数  |	 number	  |    	0   |
|  push	|	 栅格向右移动格数  |	 number	  |    	0   |
|  pull	|	 栅格向左移动格数  |	 number	  |    	0   |
|  tag	|	 自定义元素标签  |	 string	  |    div   |

### Col Slots
| 插槽名 |	说明 |
|------|------|
|default|	自定义默认内容|
