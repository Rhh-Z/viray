<template>
  <vi-button size="small">默认按钮</vi-button>
  <vi-button type="primary" plain size="large">主要按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="info" text>信息按钮</vi-button>
  <vi-button type="danger" round active color="#fcfced">危险按钮</vi-button>
  <vi-button type="success">成功按钮</vi-button>
  <vi-button type="error" text bg>错误按钮</vi-button>
  <vi-button type="info" text @click="send(name)">信息按钮</vi-button>
  <vi-button type="info" icon="down-circle" disabled>loading</vi-button>
  <vi-button native-type="submit">submit</vi-button>
  <hr>
  <vi-button-group type="warning" :size="buttonGroupSize">
    <vi-button type="info" icon="down-circle"></vi-button>
    <vi-button icon="search" @click="handleSize"></vi-button>
    <vi-button icon="down-circle"></vi-button>
  </vi-button-group>
  <vi-button-group >
    <vi-button type="primary" icon="down-circle"></vi-button>
    <vi-button type="primary" icon="search"></vi-button>
    <vi-button type="primary" icon="down-circle"></vi-button>
  </vi-button-group>
  <hr>
  <vi-icon name="search">12313213</vi-icon>
  <br />
  <vi-icon name="down-circle"></vi-icon>
  <vi-icon name="zoomout"></vi-icon>
  <vi-icon name="close"></vi-icon>
  <vi-icon name="delete" :size=24></vi-icon>
  <vi-icon name="delete" size="50px" color="#f2f"></vi-icon>
  <vi-icon name="delete" size="small"></vi-icon>
  <hr>
  <div>
    <vi-row :gutter="0" justify="space-around" align="bottom">
      <vi-col tag="div" :span="3">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="10">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="4" :offset="0">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
    </vi-row>
  </div>
  <div>
    <vi-row :gutter="20" justify="space-around" align="bottom">
      <vi-col tag="div" :span="3">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="3">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="10">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="2" :offset="0">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
    </vi-row>
  </div>
  <hr>
  <vi-text >default</vi-text>&nbsp;
  <vi-text type="primary">primary</vi-text>&nbsp;
  <vi-text type="danger">danger</vi-text>&nbsp;
  <vi-text type="info" size="large">info</vi-text>&nbsp;
  <vi-text type="info" size="default">info</vi-text>&nbsp;
  <vi-text type="info" size="small">info</vi-text>&nbsp;
  <vi-text tag="kbd">kbd</vi-text>&nbsp;
  <vi-text tag="del">del</vi-text>&nbsp;
  <vi-text tag="mark">del</vi-text>&nbsp;
  <vi-text tag="i">del</vi-text>&nbsp;
  <vi-text tag="b">del</vi-text>&nbsp;
  <vi-text tag="wavy">wavy</vi-text>&nbsp;
  <vi-text tag="emp">emp</vi-text>&nbsp;
  <vi-text tag="psw">del</vi-text>&nbsp;
  <hr>
  <vi-text style="width: 100px;" truncated>delwwwwwwwwwwwwsssssssssssssss</vi-text>
  <vi-row>
    <vi-col :span="4">
      <vi-text truncated>Squeezed by parent viement</vi-text>
    </vi-col>
  </vi-row>
  <hr>
  <vi-alert title="axx" description="info" :showIcon="true" />
  <vi-alert type="success" title="success alert" :showIcon="true" />
  <vi-alert type="error" title="title" description="error" :showIcon="true" />
  <vi-alert type="warning" center description="warning" :showIcon="true" />
  <hr>
  <div>
    <vi-input type="text" placeholder="please input" size="large" v-model="inputVlaue2" :maxlength="10" show-word-limit />
    <vi-input type="text" disabled placeholder="dacaczx" />
    <vi-input type="text" placeholder="please input" size="small" v-model="inputValue" clearable></vi-input>

    <vi-input type="passworld" placeholder="please input" v-model="inputVlaue2" showPassword />

    <vi-input type="text" placeholder="Please input" prefixIcon="book" />
    <vi-input type="text" placeholder="Please input" suffixIcon="car" />
    <vi-input type="text" placeholder="Please input" v-model="inputVlaue2">
      <template #prefix>
        <vi-icon name="search" />
      </template>
    </vi-input>
    <vi-input type="text" placeholder="Please input" :maxlength="12">
      <template #suffix>
        <vi-icon name="database" />
      </template>
    </vi-input>
    <vi-input type="text" autocomplete="on">
      <template #prepend>Http://</template>
    </vi-input>
    <vi-input type="text">
      <template #append>.com</template>
    </vi-input>
    <hr>
    <vi-input type="textarea" />
    <vi-input type="textarea" disabled />
    <vi-input>
      <template #prefix>
        <vi-icon name="search" />
      </template>
    </vi-input>
  </div>
  <hr>
  <vi-progress :percentage="percentage" :color="customColors" />
  <vi-button-group>
    <vi-button type="primary" @click="increase">+</vi-button>
    <vi-button type="primary" @click="decrease">-</vi-button>
  </vi-button-group>
  <vi-progress :percentage="80" color="#f56c6c" />
  <vi-progress :percentage="80" :format="format" status="warning" />
  <vi-progress :percentage="40" :format="format" status="success" />
  <vi-progress :percentage="60" :format="format" status="error" />
  <vi-progress :percentage="60" :format="format" :stroke-width="24" :text-inside="true" />
  <hr>
  <vi-progress type="circle" :percentage="60" />
  <vi-progress type="dashboard" :percentage="40" status="warning" />


  <!-- <vi-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value" style="display: block;">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
  </vi-progress> -->

  <vi-progress :percentage="60" :duration="2" :indeterminate="true" :format="format" />
  <hr />

  <vi-button text @click="showDialog">showDialog</vi-button>

  <!-- <vi-dialog  width="500px">
    <template #title>
      提示
    </template>
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog> -->

  <vi-dialog center width="500px" v-model="dialogVisible">
    <template #title>
      Center
    </template>
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog>

  <hr>
  <vi-button text type="primary" @click="handleMessage">Click to show message</vi-button>
  <vi-button text type="error" @click="handleErrorMessage">Click to show error message</vi-button>
  <vi-button text @click="openVn">VNode</vi-button>

  <hr>
  <vi-backtop icon="up" :visibility-height="1000" :right="70"></vi-backtop>

  <vi-breadcrumb separator="/" style="margin-bottom: 10px;">
    <vi-breadcrumbItem :to="{ path: '/about' }">About</vi-breadcrumbItem>
    <vi-breadcrumb-item>
      <a href="/about">promotion management</a>
    </vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>

  <vi-breadcrumb separator-icon="left">
    <vi-breadcrumbItem to="/user" replace>user</vi-breadcrumbItem>
    <vi-breadcrumb-item>
      <RouterLink to="/about">promotion management</RouterLink>
    </vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>

  <router-view></router-view>

  <hr>

  <vi-button plain @click="showNotify">close automatically</vi-button>

  <vi-button @click="closeNotify">关闭</vi-button>

  <hr>

  <vi-carousel width="1000px" height="150px">
    <vi-carousel-item>
      <h3>1</h3>
    </vi-carousel-item>
    <vi-carousel-item>
      <h3>2</h3>
    </vi-carousel-item>
    <vi-carousel-item>
      <h3>3</h3>
    </vi-carousel-item>
    <vi-carousel-item>
      <h3>4</h3>
    </vi-carousel-item>
  </vi-carousel>

  <hr />

  <vi-carousel height="150px">
    <vi-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </vi-carousel-item>
  </vi-carousel>

  <hr>
  <div class="demo-type">
    <div>
      <vi-avatar icon="user" />
    </div>
    <div>
      <vi-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
    <div>
      <vi-avatar> user </vi-avatar>
    </div>
  </div>

  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <vi-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
  <hr>
  <vi-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <vi-button class="button" text>Operation button</vi-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vi-card>

  <hr>

  <vi-tag>default</vi-tag>
  <vi-tag type="primary">Primary</vi-tag>
  <vi-tag type="success">Success</vi-tag>
  <vi-tag type="info">Info</vi-tag>
  <vi-tag type="danger">Danger</vi-tag>
  <vi-tag type="error">Error</vi-tag>
  <vi-tag type="warning">Warning</vi-tag>

  <vi-tag :closable="true">Primary</vi-tag>
  <vi-tag type="primary" :closable="true">Primary</vi-tag>
  <vi-tag type="success" :closable="true">Success</vi-tag>
  <vi-tag type="info" :closable="true">Info</vi-tag>
  <vi-tag type="danger" :closable="true">Danger</vi-tag>
  <vi-tag type="error" :closable="true">Error</vi-tag>
  <vi-tag type="warning" round :closable="true">Warning</vi-tag>

  <vi-tag :closable="true" effect="dark">Primary</vi-tag>
  <vi-tag type="primary" :closable="true" effect="dark">Primary</vi-tag>
  <vi-tag type="warning" :closable="true" effect="dark">Warning</vi-tag>
  <vi-tag type="success" :closable="true" effect="dark">Success</vi-tag>
  <vi-tag type="info" :closable="true" effect="dark">Info</vi-tag>
  <vi-tag type="error" :closable="true" effect="dark">Error</vi-tag>
  <vi-tag type="danger" round :closable="true" effect="dark">Danger</vi-tag>
  <hr>
  <vi-tag type="primary" :closable="true" effect="plain">Primary</vi-tag>
  <vi-tag type="warning" :closable="true" effect="plain">Warning</vi-tag>
  <vi-tag type="success" :closable="true" effect="plain">Success</vi-tag>
  <vi-tag type="info" :closable="true" effect="plain">Info</vi-tag>
  <vi-tag type="error" :closable="true" @click="handleTagClick" effect="plain">Error</vi-tag>
  <vi-tag type="danger" round :closable="true" :visible="showTag" @close="handleTagClose" effect="plain">Danger</vi-tag>

  <vi-tag type="primary" hit round effect="plain">Primary</vi-tag>
  <vi-tag type="warning" hit effect="plain">Warning</vi-tag>
  <vi-tag type="success" hit effect="plain">Success</vi-tag>
  <vi-tag type="info" effect="plain">Info</vi-tag>
  <vi-tag type="error" effect="plain">Error</vi-tag>
  <vi-tag type="danger" effect="plain">Danger</vi-tag>
  <hr>

  <div class="example">
    <vi-popover placement="bottom" title="Title" :width="200" trigger="hover" :visible="visible1"
      content="this is content, this is content, this is content">
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
  <hr>

  <vi-checkbox disabled size="small" border>
    Option 1
  </vi-checkbox>

  <vi-checkbox label="Option 2" name="checkbox2" v-model="modelValue" />
  {{ modelValue }}

  <vi-checkbox size="large" label="Option 3" :border="true" />
  <hr>
  <vi-checkbox-group v-model="checkList" size="large">
    <vi-checkbox label="Option A" />
    <vi-checkbox label="Option B" />
    <vi-checkbox label="Option C" />
    <vi-checkbox label="disabled" />
    <vi-checkbox label="selected and disabled" disabled />
  </vi-checkbox-group>
  {{ checkList }}

  <hr>

  <vi-checkbox v-model="checkAll" :border="true" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check
    all</vi-checkbox>

  <vi-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <vi-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</vi-checkbox>
  </vi-checkbox-group>

  <hr>
  <vi-link href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link type="primary">primary</vi-link>
  <vi-link type="success">success</vi-link>
  <vi-link type="warning">warning</vi-link>
  <vi-link type="danger">danger</vi-link>
  <vi-link type="info">info</vi-link>
  <hr>
  <vi-link disabled href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link disabled type="primary">primary</vi-link>
  <vi-link disabled type="success">success</vi-link>
  <vi-link disabled type="warning">warning</vi-link>
  <vi-link disabled type="danger">danger</vi-link>
  <vi-link disabled type="info">info</vi-link>
  <hr>
  <vi-link :underline="false">Without Underline</vi-link>
  <vi-link>With Underline</vi-link>
  <hr>
  <vi-link icon="edit">Edit</vi-link>
  <vi-link>
    Check<vi-icon class="el-icon--right" name="eye"></vi-icon>
  </vi-link>
  <hr>
  <span>I sit at my window this morning where the world like a passer-by stops
    for a moment, nods to me and goes.</span>
  <vi-divider content-position="left" border-style="dashed">
    Rabindranath Tagore
  </vi-divider>
  <span>
    There little thoughts are the rustle of leaves; they have their whisper
    of joy in my mind.
  </span>
  <vi-divider border-style="dashed">
    <vi-icon name="star-fill" />
  </vi-divider>
  <span>Rain</span>
  <vi-divider direction="vertical" />
  <span>Home</span>
  <vi-divider direction="vertical" border-style="dashed" />
  <span>Grass</span>
  <hr>
  <vi-timeline>
    <vi-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>

  <hr>
  <vi-timeline>
    <vi-timeline-item v-for="(activity, index) in activities1" :key="index" :icon="activity.icon" :type="activity.type"
      :color="activity.color" :size="activity.size" :hollow="activity.hollow" :timestamp="activity.timestamp">
      {{ activity.content }}
    </vi-timeline-item>
  </vi-timeline>

  <hr>
  <vi-timeline>
    <vi-timeline-item timestamp="2018/4/12" placement="top">
      <vi-card>
        <h4 style="font-size: 16px;">Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/3" placement="top">
      <vi-card>
        <h4 style="font-size: 16px;">Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/2" placement="top">
      <vi-card>
        <h4 style="font-size: 16px;">Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </vi-card>
    </vi-timeline-item>
  </vi-timeline>

  <hr>
  <vi-timeline>
    <vi-timeline-item center timestamp="2018/4/12" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/3" placement="top">
      <vi-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </vi-card>
    </vi-timeline-item>
    <vi-timeline-item center timestamp="2018/4/2" placement="top">
      Event start
    </vi-timeline-item>
    <vi-timeline-item timestamp="2018/4/2" placement="top">
      Event end
    </vi-timeline-item>
  </vi-timeline>

  <vi-badge class="item" :value="4" type="primary">
    <vi-button>123</vi-button>
  </vi-badge>
  <vi-badge class="item" value="hot">
    <vi-button>123</vi-button>
  </vi-badge>
  <vi-badge class="item" :value="111" type="primary" :max="99">
    <vi-button>123</vi-button>
  </vi-badge>

  <vi-badge is-dot class="item">query</vi-badge>
  <vi-badge class="item" type="primary" isDot>
    <vi-button>123111111111111111</vi-button>
  </vi-badge>

  <div id="box">
  </div>
</template>

<script setup lang='ts'>
import { h, reactive, ref, toRefs,nextTick } from 'vue'
import { ViMessage, ViNotification } from "@viray/components"
import { NotificationHandle } from '@viray/components/notification/src/notification';

const checkList = ref(['selected and disabled', 'Option A'])

const name = ref('里斯')

const buttonGroupSize = ref('small')

const handleSize = async ()=>{
  buttonGroupSize.value = 'large'
  document.documentElement.offsetWidth
  await nextTick()
}

const send = (value: string) => {
  console.log(value);
}

const inputValue = ref('in it')

const inputVlaue2 = ref('formatter')

const dialogVisible = ref(false)

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)

let percentage = ref(0)

const increase = () => {
  if (percentage.value >= 100) return
  percentage.value += 10
}

const decrease = () => {
  if (percentage.value <= 0) return
  percentage.value -= 10
}

const showDialog = () => {
  dialogVisible.value = true
}

const handleCancel = () => {
  dialogVisible.value = false
}

const handleConfirm = () => {
  dialogVisible.value = false
}

const handleMessage = () => {
  ViMessage({
    message: '<emp>This is a message.</emp>',
    type: 'success',
    duration: 5000,
    dangerouslyUseHTMLString: true,
  })
}
const handleErrorMessage = () => {
  ViMessage({
    message: 'This is a error message.',
    type: 'error',
    center: true,
    duration: 1000,
  })
}

const openVn = () => {
  ViMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

let closeN: NotificationHandle | null = null

const showNotify = () => {
  closeN = ViNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 3000,
    type: 'warning',
    position: 'bottom-right',
  })
}

const closeNotify = () => {
  closeN?.close()
}

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})
const { fits, url } = toRefs(state)


const showTag = ref(true)
const handleTagClick = () => {
  console.log(1);
}
const handleTagClose = () => {
  showTag.value = false
}

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

const modelValue = ref(false)

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']


const handleCheckAllChange = (val: boolean | string | number) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleCheckedCitiesChange = (value: any) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

const activities1 = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'ellipsis',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]

</script>


<style lang='scss'>
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

#box {
  height: 1000px;
}

.vi-row {
  margin: 10px;
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
  background-color: purple;
}

.vi-input {
  margin-bottom: 10px;
  width: 400px !important;
  margin-right: 10px;
}

textarea {
  width: 400px !important;
}

.vi-progress {
  margin-bottom: 10px;
}

.vi-progress--line {
  width: 350px;
}

.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}

.demo-type>div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.vi-tag {
  margin-right: 10px;
}

.example {
  margin-left: 30%;
}

.vi-link {
  margin-right: 8px;
}

.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}

.vi-badge.item {
  margin-right: 20px;
}
</style>
