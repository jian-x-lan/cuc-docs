const themeConfigData = require('../genSideBar.js')
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
      ...themeConfigData.navArr
    ],
    sidebarDepth: 2,
    sidebar: themeConfigData.sideBar
  }
}