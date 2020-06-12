const configData = require('../genSideBar.js')
module.exports = {
  title: 'CUC-DOCS',
  description: 'cuc部门内部文档库',
  base: "/cuc-docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '目录一', link: '/docs/category1/' },
      { text: '目录二', link: '/docs/category2/' }
    ],
    sidebarDepth: 3,
    sidebar: configData.sidebarData
  }
}