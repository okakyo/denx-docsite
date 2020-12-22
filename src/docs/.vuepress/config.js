const { description } = require('../../../package')

const fs = require('fs');
const dirpath = "src/docs"
let addPathDir = {}

fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
}).map(dir=>{

    if(dir!=='.vuepress'){
         addPathDir[`/${dir}/`]=
            [{title: dir,
            collapsable: true,
            children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
                return  childDir==="README.md"|| childDir==="index.md" ? "":childDir.split(".")[0]
            })}]
        }
    })


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DENX ドキュメント ',
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
    ['link', { href: '/css/style.css', rel: 'stylesheet'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '勉強会',
        link: '/seminar/',
      },
      {
        text: '使い方',
        link: '/how-to/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: addPathDir
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
