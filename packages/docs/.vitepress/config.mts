import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "shelley",
  description: "crowd-sourced knowledge graphs",

  base: "/shelley/",
  lastUpdated: true,
  cleanUrls: true,
  lang: "en-US",

  // When set to `localhostLinks`, the build will fail on dead links, but won't check localhost links.
  ignoreDeadLinks: "localhostLinks",

  srcDir: "../../docs",

  appearance: "force-dark",
  
  themeConfig: {
    sidebar: [
      { text: 'Getting Started', link: "/" },
    ],

    socialLinks: [ { icon: 'github', link: 'https://github.com/Goga-Barabadze/shelley' } ]
  },

  vite: {
    server: {
      fs: {
        allow: ["../../.."]
      }
    },
    build: {
      rollupOptions: {
          // to avoid build fail, see: https://github.com/vuejs/vitepress/issues/2713
          external: ["vue/server-renderer", "vue"]
      }
    }
  }
})
