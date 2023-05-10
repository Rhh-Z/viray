# Carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法
结合使用`el-carousel`和`el-carousel-item`标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在`el-carousel-item`标签内。 默认情况下，在鼠标`hover`底部的指示器时就会触发切换。 通过设置`trigger`属性为`click`，可以达到点击触发的效果。

<div class="example">
  <vi-carousel width="100%" height="150px">
    <vi-carousel-item>
      <h3>1</h3>
    </vi-carousel-item>
    <vi-carousel-item>
      <h3>2</h3>
    </vi-carousel-item>
    <vi-carousel-item>
      <h3>3</h3>
    </vi-carousel-item >
    <vi-carousel-item>
      <h3>4</h3>
    </vi-carousel-item >
  </vi-carousel>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <vi-carousel trigger="click" height="150px">
      <vi-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </vi-carousel-item>
    </vi-carousel>
  </div>
</div>

<style>
.demonstration {
  color: var(--el-text-color-secondary);
}

.vi-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.vi-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.vi-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>