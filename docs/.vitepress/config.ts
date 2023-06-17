export default {
  title: 'Viray',
  titleTemplate: ':title - Viray',
  lastUpdated: true,
  lastUpdatedText: '最近更新时间',
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023'
  },
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Rhh-Z/viray" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/install",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        // {
        //   text: "进阶",
        //   items: [
        //     {
        //       text: "xx",
        //       link: "/xx",
        //     },
        //   ],
        // },
      ],
      "/components/": [
        {
          text: "Basic基础组件",
          items: [
            {
              text: "Alert提示",
              link: "/components/alert/index.md",
            },
            {
              text: "Avatar头像",
              link: "/components/avatar/index.md",
            },
            {
              text: "Backtop回到顶部",
              link: "/components/backtop/index.md",
            },
            {
              text: "Badge徽章",
              link: "/components/badge/index.md",
            },
            {
              text: "Breadcrumb面包屑",
              link: "/components/breadcrumb/index.md",
            },
            {
              text: "Button按钮",
              link: "/components/button/index.md",
            },
            {
              text: "Card卡片",
              link: "/components/card/index.md",
            },
            // {
            //   text: "Carousel",
            //   link: "/components/carousel/index.md",
            // },
            {
              text: "Checkbox多选框",
              link: "/components/checkbox/index.md",
            },
            {
              text: "Dialog对话框",
              link: "/components/dialog/index.md",
            },
            {
              text: "Divider分割线",
              link: "/components/divider/index.md",
            },
            {
              text: "Icon图标",
              link: "/components/icon/index.md",
            },
            {
              text: "Input输入框",
              link: "/components/input/index.md",
            },
            {
              text: "Layout布局",
              link: "/components/layout/index.md",
            },
            {
              text: "Link链接",
              link: "/components/link/index.md",
            },
            {
              text: "Message消息提示",
              link: "/components/message/index.md",
            },
            {
              text: "Notification通知",
              link: "/components/notification/index.md",
            },
            {
              text: "popover弹出框",
              link: "/components/popover/index.md",
            },
            {
              text: "Progress进度条",
              link: "/components/progress/index.md",
            },
            {
              text: "Tag标签",
              link: "/components/tag/index.md",
            },
            {
              text: "Text文本",
              link: "/components/text/index.md",
            },
            {
              text: "Timeline时间戳",
              link: "/components/timeline/index.md",
            }
          ],
        }
      ]
    },
  },
};
