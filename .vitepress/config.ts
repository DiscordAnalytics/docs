import {DefaultTheme, defineConfig} from 'vitepress'
import { fileURLToPath } from "node:url";
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import path from "path";

const mainSiteUrl = "https://discordanalytics.xyz";

const sidebar = [
  {
    text: "Get Started",
    items: [
      {
        text: "Bot Registration",
        link: "/get-started/bot-registration"
      },
      {
        text: "Installation",
        link: "/get-started/installation",
        items: [
          {
            text: "Discord.js",
            link: "/get-started/installation/discord.js"
          },
          {
            text: "Eris",
            link: "/get-started/installation/eris"
          },
          {
            text: "Discord.py",
            link: "/get-started/installation/discord.py"
          },
          {
            text: "Java",
            link: "/get-started/installation/java"
          },
          {
            text: "Oceanic.js",
            link: "/get-started/installation/oceanic.js"
          }
        ]
      },
      {
        text: "Votes Integration",
        link: "/get-started/votes-integration"
      },
      {
        text: "Advanced Usage",
        link: "/get-started/advanced-usage",
        items: [
          {
            text: "Teams",
            link: "/get-started/advanced-usage/teams"
          },
          {
            text: "Receive Votes",
            link: "/get-started/advanced-usage/receive-votes"
          },
          {
            text: "Optimize Events (NodeJS)",
            link: "/get-started/advanced-usage/optimize-events"
          },
          {
            text: "Using ESM (JavaScript)",
            link: "/get-started/advanced-usage/esm"
          },
          {
            text: "Custom Events",
            link: "/get-started/advanced-usage/custom-events"
          }
        ]
      }
    ]
  },
  {
    text: "Legals",
    items: [
      {
        text: "Terms of Service",
        link: "/legals/terms"
      },
      {
        text: "Privacy Policy",
        link: "/legals/privacy-policy"
      },
      {
        text: "Appeal Sanction",
        link: "/legals/appeal-sanction"
      }
    ]
  },
  {
    text: "Reference",
    items: [
      {
        text: "Achievements",
        link: "/reference/achievements"
      },
      {
        text: "Graphs",
        link: "/reference/graphs"
      }
    ]
  },
  {
    text: "API Docs",
    link: mainSiteUrl + "/docs/api"
  }
] as DefaultTheme.Config["sidebar"];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discord Analytics",
  description: "A VitePress Site",
  base: "/docs/",
  lastUpdated: false,
  themeConfig: {
    sidebar,

    socialLinks: [
      { icon: 'discord', link: mainSiteUrl + "/support" }
    ],

    logoLink: {
      link: mainSiteUrl
    },
    siteTitle: "",
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    editLink: {
      pattern: 'https://github.com/DiscordAnalytics/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          // Adjust the path to point correctly to your /src folder
          // if your config is in /docs/.vitepress/config.mts, use '../../src'
          replacement: fileURLToPath(new URL('../../src', import.meta.url))
        }
      ]
    },
    publicDir: path.resolve(__dirname, '../../public')
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
