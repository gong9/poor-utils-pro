import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'poor-utils-pro',
  description: 'utils',
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
          { text: 'ArrayShuffle', link: '/arrayShuffle' },
          { text: 'DuplicateRemovalByAttributes', link: '/duplicateRemovalByAttributes' },
          { text: 'FilterEmptyVal', link: '/filterEmptyVal' },
          { text: 'GetAncestorsNodes', link: '/getAncestorsNodes' },
          { text: 'Flatten', link: '/flatten' },
          { text: 'GetUrlParams', link: '/getUrlParams' },
          { text: 'Soft', link: '/404' },
          { text: 'SplitStringByEmoji', link: '/splitStringByEmoji' },
          { text: 'ToThousandths', link: '/404' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gong9/poor-utils' },
    ],
  },
})
