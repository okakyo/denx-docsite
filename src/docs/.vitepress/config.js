const { description } = require('../../../package')

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
    docsDir: 'src/docs',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Tutorial',
        link: '/tutorial/'
      },
      {
        text: '勉強会',
        link: '/seminar/',
      },
      
      {
        text: 'VuePress',
        link: 'https://vitepress.vuejs.org/'
      }
    ],
    sidebar: {
      "/tutorial/":[{
        text:"チュートリアル",
        children:[
          {text:"はじめに",link:"/tutorial/"},
          {text:"マークダウンの記法",link:"/tutorial/markdown"},
          {text:"ルール",link:"/tutorial/rule"}
        ]
      }],
      "/seminar/":[
        {
          text:"勉強会",
          link:"/seminar/"
        },
        {
        text:"Web",
        children:[
          {text:"環境構築",link:"/seminar/web/"},
          {text:"HTML",link:"/seminar/web/1st"},
          {text:"CSS について",link:"/seminar/web/2nd"},
        ]
      }]
    }

  },
  markdown: {
      linkify: true
    },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
