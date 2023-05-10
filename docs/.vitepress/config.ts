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
              text: "Alert",
              link: "/components/alert/index.md",
            },
            {
              text: "Avatar",
              link: "/components/avatar/index.md",
            },
            {
              text: "Backtop",
              link: "/components/backtop/index.md",
            },
            {
              text: "Breadcrumb",
              link: "/components/breadcrumb/index.md",
            },
            {
              text: "Button",
              link: "/components/button/index.md",
            },
            {
              text: "Card",
              link: "/components/card/index.md",
            },
            // {
            //   text: "Carousel",
            //   link: "/components/carousel/index.md",
            // },
            {
              text: "Checkbox",
              link: "/components/checkbox/index.md",
            },
            {
              text: "Dialog",
              link: "/components/dialog/index.md",
            },
            {
              text: "Layout",
              link: "/components/layout/index.md",
            },
            {
              text: "Icon",
              link: "/components/icon/index.md",
            },
            {
              text: "Input",
              link: "/components/input/index.md",
            },
            {
              text: "Text",
              link: "/components/text/index.md",
            }
          ],
        }
      ]
    },
  },
};
