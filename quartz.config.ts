import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Samriddha's Thesis Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "samriddhaganguly.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },

      colors: {
        lightMode: {
          light: "#fcfcfd",
          lightgray: "#e6e8ec",
          gray: "#a0a7b4",
          darkgray: "#525866",
          dark: "#1f2937",

          // Primary accent
          secondary: "#2563eb",

          // Secondary accent
          tertiary: "#7c3aed",

          // UI highlights
          highlight: "rgba(37, 99, 235, 0.10)",
          textHighlight: "#fde68a88",
        },

        darkMode: {
          light: "#0f1117",
          lightgray: "#232634",
          gray: "#7b8496",
          darkgray: "#d6d9e0",
          dark: "#f3f4f6",

          // Primary accent
          secondary: "#60a5fa",

          // Secondary accent
          tertiary: "#a78bfa",

          // UI highlights
          highlight: "rgba(96, 165, 250, 0.12)",
          textHighlight: "#facc1588",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),

      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),

      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),

      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.TableOfContents(),

      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),

      Plugin.Description(),

      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],

    filters: [Plugin.RemoveDrafts()],

    emitters: [
      Plugin.AliasRedirects(),

      Plugin.ComponentResources(),

      Plugin.ContentPage(),

      Plugin.FolderPage(),

      Plugin.TagPage(),

      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),

      Plugin.Assets(),

      Plugin.Static(),

      Plugin.Favicon(),

      Plugin.NotFoundPage(),

      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config