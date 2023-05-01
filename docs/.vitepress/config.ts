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
              text: "Button",
              link: "/components/button/index.md",
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
              text: "Text",
              link: "/components/text/index.md",
            }
          ],
        }
      ]
    },
  },
};
