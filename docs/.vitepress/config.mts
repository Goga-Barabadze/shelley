import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "shelley",
  description: "crowd-sourced knowledge graphs",

  base: "/shelley/",

  themeConfig: {
    sidebar: [
      { text: 'Getting Started', link: "/" },
    ],

    socialLinks: [ { icon: 'github', link: 'https://github.com/Goga-Barabadze/shelley' } ]
  },
})
