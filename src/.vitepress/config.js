const { description } = require('../../package')

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
    sidebar: {
      "/tutorial/":[{
        text:`使い方`,
        children:[
          {text:"はじめに",link:"/tutorial/"},
          {text:"マークダウンの記法",link:"/tutorial/markdown"},
          {text:"ルール",link:"/tutorial/rule"}
        ]
      }],
      "/web/":[
        {
          text:"Web 勉強会",
          link:"/web/"
        },
        {
          text:"Web 入門",
          children:[
            {text:"はじめに",link:"/web/"},
            {text:"HTML/ CSS について",link:"/web/1st"},
            {text:"Web アプリ構築について",link:"/web/2nd"},
            {text:"Node.jsについて",link:"/web/3rd"},
            {text:"API構築について",link:"//web/4th"},
          ]
        },
        {
          text:"Web 応用",
          children:[
            {text:"準備中",link:"/web/5th"},
            {text:"CSS について",link:"/web/6th"},
            {text:"CSS について",link:"/web/7th"},
            {text:"CSS について",link:"/web/8th"},
            {text:"CSS について",link:"/web/9th"},
          ]
        },
      ]
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
