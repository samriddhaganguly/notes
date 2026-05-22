import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * Modern colorful futuristic academic theme
 * for physics / thesis notes
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
        header: "Space Grotesk",
        body: "Plus Jakarta Sans",
        code: "JetBrains Mono",
      },

      colors: {
        lightMode: {
          // Backgrounds
          light: "#f7f9fc",
          lightgray: "#dce6f2",

          // Muted elements
          gray: "#7d8ca3",

          // Main text
          darkgray: "#334155",
          dark: "#0f172a",

          // Vibrant primary accent
          secondary: "#06b6d4",

          // Bright secondary accent
          tertiary: "#8b5cf6",

          // Hover / cards / highlights
          highlight: "rgba(139, 92, 246, 0.12)",

          // Text selection
          textHighlight: "#67e8f988",
        },

        darkMode: {
          // Deep blue-black background
          light: "#070b14",

          // Cards / panels
          lightgray: "#151c2e",

          // Muted text
          gray: "#7c8ba1",

          // Main readable text
          darkgray: "#dbe4f0",
          dark: "#f8fafc",

          // Neon cyan
          secondary: "#22d3ee",

          // Neon violet
          tertiary: "#a855f7",

          // Glow highlights
          highlight: "rgba(168, 85, 247, 0.16)",

          // Text selection
          textHighlight: "#22d3ee55",
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
          light: "tokyo-night-light",
          dark: "tokyo-night",
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

    filters: [
      Plugin.RemoveDrafts(),
    ],

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

      // Comment out to speed up build
      Plugin.CustomOgImages(),
    ],
  },
}

export default config