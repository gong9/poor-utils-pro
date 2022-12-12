import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'poor-utils',
  base: process.env.NODE_ENV === 'production' ? '/rpoor-utils/' : '/',
  themeConfig: {
    nav: [
      {
        text: 'Api',
        items: [
          { text: 'Api', link: '/api/add' },
        ],
      }],
    sidebar: {
      '/api/': [
        {
          text: 'Api',
          items: [
            { text: 'add', link: '/api/add' },
            { text: 'arrayQuickFill', link: '/api/arrayQuickFill' },
            { text: 'arrayShuffle', link: '/api/arrayShuffle' },
            { text: 'curry', link: '/api/curry' },
            { text: 'debounce', link: '/api/debounce' },
            { text: 'defer', link: '/api/defer' },
            { text: 'delay', link: '/api/delay' },
            { text: 'filterEmptyVal', link: '/api/filterEmptyVal' },
            { text: 'flatten', link: '/api/flatten' },
            { text: 'getUrlParams', link: '/api/getUrlParams' },
            { text: 'lazyImg', link: '/api/lazyImg' },
            { text: 'soft', link: '/api/soft' },
            { text: 'throttle', link: '/api/throttle' },
            { text: 'toThousandths', link: '/api/toThousandths' },
          ],
        },
      ],
    },
  },
})
