const { description } = require('../../package')
const parsedParentFile = require("./file");

const fs = require("fs");
const yaml = require("yaml")
const getYamlFile = yaml.parse(fs.readFileSync(__dirname+"/nav.yaml",'utf-8'))

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DENX アーカイブ',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: '/css/style.css', rel: 'stylesheet'}],
    ['link', { href:"https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css" ,rel: 'stylesheet'}],
    ['link', { href:" https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css",rel:"stylesheet"}], 
    ['link', { rel: 'icon', href: 'img/hero.png' }] //Favicon 設定
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'src/docs',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '使い方',
        link: '/tutorial/'
      },
      {
        text: 'Web 勉強会',
        link: '/web/',
      },
      {
        text: 'VuePress',
        link: 'https://vitepress.vuejs.org/'
      }
    ],
    // TODO : Sidebar を自動化するシステム（yaml ファイルで管理したい）
    sidebar: {
      "/tutorial/":parsedParentFile("src","tutorial",getYamlFile),
      "/web/":parsedParentFile("src","web",getYamlFile)
    }

  },
  markdown: {
      linkify: true,
      config: (md) => {
      // use more markdown-it plugins!
        md.use(require('markdown-it-video'))
        md.use(require('markdown-it-textual-uml'))
    }
    },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
 
}
