# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

<div class="example">
  <span>
    I sit at my window this morning where the world like a passer-by stops
    for a moment, nods to me and goes.
  </span>
  <vi-divider />
  <span>
    There little thoughts are the rustle of leaves; they have their whisper
    of joy in my mind.
  </span>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <span>
    I sit at my window this morning where the world like a passer-by stops
    for a moment, nods to me and goes.
  </span>
  <vi-divider />
  <span>
    There little thoughts are the rustle of leaves; they have their whisper
    of joy in my mind.
  </span>
</template>
```
</details>


## 设置文案

可以在分割线上自定义文本内容。

<div class="example">
  <span>
    What you are you do not see, what you see is your shadow.
  </span>
  <vi-divider content-position="left">
    Rabindranath Tagore
  </vi-divider>
  <span>
    My wishes are fools, they shout across thy song, my Master. Let me but listen.
  </span>
  <vi-divider>
    <vi-icon name="star-fill" />
  </vi-divider>
  <span>
    I cannot choose the best. The best chooses me.
  </span>
  <vi-divider content-position="right">
    Rabindranath Tagore
  </vi-divider>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <span>
    What you are you do not see, what you see is your shadow.
  </span>
  <vi-divider content-position="left">
    Rabindranath Tagore
  </vi-divider>
  <span>
    My wishes are fools, they shout across thy song, my Master. Let me but listen.
  </span>
  <vi-divider>
    <vi-icon name="star-fill" />
  </vi-divider>
  <span>
    I cannot choose the best. The best chooses me.
  </span>
  <vi-divider content-position="right">
    Rabindranath Tagore
  </vi-divider>
</template>
```
</details>

## 虚线

您可以设置分隔符的样式。

<div class="example">
  <div>
    <span>What language is thine, O sea?</span>
    <vi-divider border-style="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <vi-divider border-style="dotted" />
  <span>What language is thy answer, O sky?</span>
  <vi-divider border-style="double" />
  <span>The language of eternal silence.</span>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div>
    <span>What language is thine, O sea?</span>
    <vi-divider border-style="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <vi-divider border-style="dotted" />
  <span>What language is thy answer, O sky?</span>
  <vi-divider border-style="double" />
  <span>The language of eternal silence.</span>
</template>
```
</details>

## 垂直分隔线

<div class="example">
  <div>
    <span>Rain</span>
    <vi-divider direction="vertical" />
    <span>Home</span>
    <vi-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div>
    <span>Rain</span>
    <vi-divider direction="vertical" />
    <span>Home</span>
    <vi-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
</template>
```
</details>


## API

### Attributes
| 属性名 |	说明 |	类型 |	默认 |
|------|---------|-------|-----|
| direction  |  设置分割线方向   |  'horizontal'、'vertical'  |  horizontal  |
| border-style | 设置分隔符样式	| 'none'、'solid'、'hidden'、'dashed'...|solid  |
| content-position |  自定义分隔线内容的位置 |  'left'、'right'、'center' |  center |

### Slots
| 事件名 |	Description |
|--------|--------------|
| default | 设置分割线文案的位置 |