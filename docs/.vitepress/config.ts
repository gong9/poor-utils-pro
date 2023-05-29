import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'poor-utils-pro',
  description: 'utils',
  base: process.env.NODE_ENV === 'production' ? '/resize-observer-vue/' : '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Utils', link: '/duplicateRemovalByAttributes' },
    ],

    sidebar: [
      {
        text: 'API',
        items: [
          { text: 'ArrayQuickFill', link: '/arrayQuickFill' },
          { text: 'ArrayShuffle', link: '/api-examples' },
          { text: 'DuplicateRemovalByAttributes', link: '/duplicateRemovalByAttributes' },
          { text: 'FilterEmptyVal', link: '/api-examples' },
          { text: 'Flatten', link: '/markdown-examples' },
          { text: 'GetUrlParams', link: '/api-examples' },
          { text: 'Soft', link: '/markdown-examples' },
          { text: 'SplitStringByEmoji', link: '/api-examples' },
          { text: 'ToThousandths', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
