import { defineConfig } from 'vitepress'
import { MermaidRenderer } from './mermaid';

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
      {
        text: "Concept",
        items: [
          { text: "Rules", link: "/concept/rules.md" },
          { text: "Scoring", link: "/concept/scoring.md" },
          {
            text: 'Examples',
            collapsed: true,
            items: [
              {
                text: "The Earth Is Round",
                link: "/concept/examples/the-earth-is-round.md"
              }
            ]
          }
        ],
      },
      {
        text: "Implementation",
        items: [
          { text: "Data Structure", link: "/implementation/data-structure.md" },
        ]
      }
    ],

    socialLinks: [ { icon: 'github', link: 'https://github.com/Goga-Barabadze/shelley' } ]
  },

  markdown: {
    config: async (md) => {
      await MermaidRenderer(md);
    },
  },

  vite: {
    server: {
      fs: {
        // Better solved at https://github.com/mermaid-js/mermaid/blob/60280361b0c89a96f6d377e34f7f5cd32b52c775/packages/mermaid/src/docs/vite.config.ts#L80
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
