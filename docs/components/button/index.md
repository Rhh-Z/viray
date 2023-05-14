<style scoped>
  .vi-button {
      margin:10px 5px;
  }
</style>


# Button 按钮
常用的操作按钮。
## 基础用法
<div class="example">
  <vi-button>默认按钮</vi-button>
  <vi-button type="primary">主要按钮</vi-button>
  <vi-button type="danger">危险按钮</vi-button>
  <vi-button type="info">信息按钮</vi-button>
  <vi-button type="warning">警告按钮</vi-button>
  <vi-button type="error">错误按钮</vi-button>
  <br />
  <vi-button plain>默认按钮</vi-button>
  <vi-button type="primary" plain>主要按钮</vi-button>
  <vi-button type="danger" plain>危险按钮</vi-button>
  <vi-button type="info" plain>信息按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="error" plain>错误按钮</vi-button>
  <br />
  <vi-button round>默认按钮</vi-button>
  <vi-button type="primary" round>主要按钮</vi-button>
  <vi-button type="danger" round>危险按钮</vi-button>
  <vi-button type="info" round>信息按钮</vi-button>
  <vi-button type="warning" round>警告按钮</vi-button>
  <vi-button type="error" round>错误按钮</vi-button>
  <br />
  <vi-button circle icon="search"></vi-button>
  <vi-button type="primary" circle icon="down-circle"></vi-button>
  <vi-button type="danger" circle icon="check"></vi-button>
  <vi-button type="info" circle icon="message"></vi-button>
  <vi-button type="warning" circle icon="star"></vi-button>
  <vi-button type="error" circle icon="delete"></vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="example">
    <vi-button>默认按钮</vi-button>
    <vi-button type="primary">主要按钮</vi-button>
    <vi-button type="danger">危险按钮</vi-button>
    <vi-button type="info">信息按钮</vi-button>
    <vi-button type="warning">警告按钮</vi-button>
    <vi-button type="error">错误按钮</vi-button>
    <br />
    <vi-button plain>默认按钮</vi-button>
    <vi-button type="primary" plain>主要按钮</vi-button>
    <vi-button type="danger" plain>危险按钮</vi-button>
    <vi-button type="info" plain>信息按钮</vi-button>
    <vi-button type="warning" plain>警告按钮</vi-button>
    <vi-button type="error" plain>错误按钮</vi-button>
    <br />
    <vi-button round>默认按钮</vi-button>
    <vi-button type="primary" round>主要按钮</vi-button>
    <vi-button type="danger" round>危险按钮</vi-button>
    <vi-button type="info" round>信息按钮</vi-button>
    <vi-button type="warning" round>警告按钮</vi-button>
    <vi-button type="error" round>错误按钮</vi-button>
    <br />
    <vi-button circle icon="search"></vi-button>
    <vi-button type="primary" circle icon="down-circle"></vi-button>
    <vi-button type="danger" circle icon="check"></vi-button>
    <vi-button type="info" circle icon="message"></vi-button>
    <vi-button type="warning" circle icon="star"></vi-button>
    <vi-button type="error" circle icon="delete"></vi-button>
  </div>
</template>
```
</details>

::: tip
注意circle状态下的文字如果过长可能会导致样式变形
:::


## 激活状态
<div class="example">
  <vi-row>
    <vi-button active>Default</vi-button>
    <vi-button type="primary" active>Primary</vi-button>
    <vi-button type="success" active>Success</vi-button>
    <vi-button type="info" active>Info</vi-button>
    <vi-button type="warning" active>Warning</vi-button>
    <vi-button type="danger" active>Danger</vi-button>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row>
    <vi-button active>Default</vi-button>
    <vi-button type="primary" active>Primary</vi-button>
    <vi-button type="success" active>Success</vi-button>
    <vi-button type="info" active>Info</vi-button>
    <vi-button type="warning" active>Warning</vi-button>
    <vi-button type="danger" active>Danger</vi-button>
  </vi-row>
</template>
```
</details>


## 禁用状态

<div class="example">
  <vi-row>
    <vi-button disabled>Default</vi-button>
    <vi-button type="primary" disabled>Primary</vi-button>
    <vi-button type="success" disabled>Success</vi-button>
    <vi-button type="info" disabled>Info</vi-button>
    <vi-button type="warning" disabled>Warning</vi-button>
    <vi-button type="danger" disabled>Danger</vi-button>
  </vi-row>

  <vi-row>
    <vi-button plain disabled>Plain</vi-button>
    <vi-button type="primary" plain disabled>Primary</vi-button>
    <vi-button type="success" plain disabled>Success</vi-button>
    <vi-button type="info" plain disabled>Info</vi-button>
    <vi-button type="warning" plain disabled>Warning</vi-button>
    <vi-button type="danger" plain disabled>Danger</vi-button>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="example">
    <vi-row>
    <vi-button disabled>Default</vi-button>
    <vi-button type="primary" disabled>Primary</vi-button>
    <vi-button type="success" disabled>Success</vi-button>
    <vi-button type="info" disabled>Info</vi-button>
    <vi-button type="warning" disabled>Warning</vi-button>
    <vi-button type="danger" disabled>Danger</vi-button>
    </vi-row>

    <vi-row>
    <vi-button plain disabled>Plain</vi-button>
    <vi-button type="primary" plain disabled>Primary</vi-button>
    <vi-button type="success" plain disabled>Success</vi-button>
    <vi-button type="info" plain disabled>Info</vi-button>
    <vi-button type="warning" plain disabled>Warning</vi-button>
    <vi-button type="danger" plain disabled>Danger</vi-button>
    </vi-row>
  </div>
</template>
```
</details>



## 文字按钮
没有边框和背景色的按钮。

<div class="example">
  Basic text button
  <vi-row>
    <vi-button text>Default</vi-button>
    <vi-button type="primary" text>Primary</vi-button>
    <vi-button type="success" text>Success</vi-button>
    <vi-button type="info" text>Info</vi-button>
    <vi-button type="warning" text>Warning</vi-button>
    <vi-button type="danger" text>Danger</vi-button>
  </vi-row>
  Background color always on
  <vi-row>
    <vi-button  text  bg>默认按钮</vi-button>
    <vi-button type="primary"  text bg>Primary</vi-button>
    <vi-button type="success"  text bg>Success</vi-button>
    <vi-button type="info"  text bg>Info</vi-button>
    <vi-button type="warning"  text bg>Warning</vi-button>
    <vi-button type="danger"  text bg>Danger</vi-button>
  </vi-row>
  Disabled text button
  <vi-row>
    <vi-button  text disabled>默认按钮</vi-button>
    <vi-button type="primary" text disabled>Primary</vi-button>
    <vi-button type="success" text disabled>Success</vi-button>
    <vi-button type="info" text disabled>Info</vi-button>
    <vi-button type="warning" text disabled>Warning</vi-button>
    <vi-button type="danger" text disabled>Danger</vi-button>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="example">
    Basic text button
    <vi-row>
      <vi-button text>Default</vi-button>
      <vi-button type="primary" text>Primary</vi-button>
      <vi-button type="success" text>Success</vi-button>
      <vi-button type="info" text>Info</vi-button>
      <vi-button type="warning" text>Warning</vi-button>
      <vi-button type="danger" text>Danger</vi-button>
    </vi-row>
    Background color always on
    <vi-row>
      <vi-button  text  bg>默认按钮</vi-button>
      <vi-button type="primary"  text bg>Primary</vi-button>
      <vi-button type="success"  text bg>Success</vi-button>
      <vi-button type="info"  text bg>Info</vi-button>
      <vi-button type="warning"  text bg>Warning</vi-button>
      <vi-button type="danger"  text bg>Danger</vi-button>
    </vi-row>
    Disabled text button
    <vi-row>
      <vi-button  text disabled>默认按钮</vi-button>
      <vi-button type="primary" text disabled>Primary</vi-button>
      <vi-button type="success" text disabled>Success</vi-button>
      <vi-button type="info" text disabled>Info</vi-button>
      <vi-button type="warning" text disabled>Warning</vi-button>
      <vi-button type="danger" text disabled>Danger</vi-button>
    </vi-row>
  </div>
</template>
```
</details>


## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 还通过在`button`按钮的插槽中在文字的右方使用`vi-icon`组件使图标放在文字右边。

<div class="example">
    <div class="flex">
      <vi-button type="primary" icon="edit" />
      <vi-button type="primary" icon="share" />
      <vi-button type="primary" icon="delete" />
      <vi-button type="primary" icon="search">Search</vi-button>
      <vi-button type="primary">
        Upload<vi-icon name="upload"></vi-icon>
      </vi-button>
    </div>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="example">
    <div class="flex">
      <vi-button type="primary" icon="edit" />
      <vi-button type="primary" icon="share" />
      <vi-button type="primary" icon="delete" />
      <vi-button type="primary" icon="search">Search</vi-button>
      <vi-button type="primary">
        Upload<vi-icon name="upload"></vi-icon>
      </vi-button>
    </div>
</div>
</template>
```
</details>


## 按钮组
以按钮组的方式出现，常用于多项类似操作。

使用`<vi-button-group>`对多个按钮分组。
<div class="example">
  <vi-button-group>
    <vi-button type="primary" icon="arrowleft">Previous Page</vi-button>
    <vi-button type="primary">
      Next Page<vi-icon name="arrowright"></vi-icon>
    </vi-button>
  </vi-button-group>

  <vi-button-group class="ml-4">
    <vi-button type="primary" icon="edit" />
    <vi-button type="primary" icon="share" />
    <vi-button type="primary" icon="delete" />
  </vi-button-group>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="example">
  <vi-button-group>
    <vi-button type="primary" icon="arrowleft">Previous Page</vi-button>
    <vi-button type="primary">
      Next Page<vi-icon name="arrowright"></vi-icon>
    </vi-button>
  </vi-button-group>

  <vi-button-group class="ml-4">
    <vi-button type="primary" icon="edit" />
    <vi-button type="primary" icon="share" />
    <vi-button type="primary" icon="delete" />
  </vi-button-group>
  </div>
</template>
```
</details>

## 尺寸调整
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<div class="example">
  <vi-row>
    <vi-button size="large">Large</vi-button>
    <vi-button>Default</vi-button>
    <vi-button size="small">Small</vi-button>
    <vi-button size="large" icon="search">Search</vi-button>
    <vi-button icon="search">Search</vi-button>
    <vi-button size="small" icon="search">Search</vi-button>
  </vi-row>
  <vi-row>
    <vi-button size="large" round>Large</vi-button>
    <vi-button round>Default</vi-button>
    <vi-button size="small" round>Small</vi-button>
    <vi-button size="large" icon="search" round>Search</vi-button>
    <vi-button icon="search" round>Search</vi-button>
    <vi-button size="small" icon="search" round>Search</vi-button>
  </vi-row>
  <vi-row>
    <vi-button icon="search" size="large" circle />
    <vi-button icon="search" circle />
    <vi-button icon="search" size="small" circle />
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row>
    <vi-button size="large">Large</vi-button>
    <vi-button>Default</vi-button>
    <vi-button size="small">Small</vi-button>
    <vi-button size="large" icon="search">Search</vi-button>
    <vi-button icon="search">Search</vi-button>
    <vi-button size="small" icon="search">Search</vi-button>
  </vi-row>
  <vi-row>
    <vi-button size="large" round>Large</vi-button>
    <vi-button round>Default</vi-button>
    <vi-button size="small" round>Small</vi-button>
    <vi-button size="large" icon="search" round>Search</vi-button>
    <vi-button icon="search" round>Search</vi-button>
    <vi-button size="small" icon="search" round>Search</vi-button>
  </vi-row>
  <vi-row>
    <vi-button icon="search" size="large" circle />
    <vi-button icon="search" circle />
    <vi-button icon="search" size="small" circle />
  </vi-row>
</template>
```
</details>


## Button API

### Button Attributes
| 属性名	|    说明	    |     类型    |	   默认值    |
| ------ | ----------- | ----------- | ----------- |
| size   |     尺寸    |  large、default、small | small |
| type   |     类型    |  default、primary、success、danger、error、info、error | small |
|  plain   |    是否为朴素按钮     |   boolean     |    false     |
|  text   |    是否为文字按钮     |   boolean     |    false     |
|  bg   |  	是否显示文字按钮背景颜色    |   boolean     |    false     |
|  round   |  	是否为圆角按钮    |   boolean     |    false     |
|  circle   |  	是否为圆形按钮 |   boolean     |    false     |
|  disabled   |  按钮是否为禁用状态	 |   boolean     |    false     |
|  icon   |  图标组件	 |   string     |    —    |
|  autofocus   |  	原生 autofocus 属性	 |   boolean     |    false    |
|  nativeType   | 	原生 type 属性  | 'button'| 'submit'| 'reset'    |   button   |


## Button Slots
| 插槽名	|    说明	    |
| ------ | ----------- |
| default | 自定义默认内容|
| icon | 自定义图标内容|


## ButtonGroup Slots
| 插槽名	|    说明	    |    子标签   |
| ------	| -------  |  --------   |
| default	 |  自定义按钮组内容 |	Button  |