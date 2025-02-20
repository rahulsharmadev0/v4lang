import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "v4lang",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "v4lang",
  projectName: "v4lang",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
    },

    navbar: {
      title: "v4lang",
      hideOnScroll: true,
      logo: {
        alt: "v4lang Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "dropdown",
          position: "left",
          label: "📜 JavaScript ",
          sidebarId: "javascriptSidebar",
          to: "../javascript",
          items: [
            {
              type: "docSidebar",
              sidebarId: "javascriptSidebar",
              label: "JavaScript",
            },
            {
              type: "docSidebar",
              sidebarId: "typescriptSidebar",
              label: "TypeScript",
            },
            {
              type: "docSidebar",
              sidebarId: "nodejsSidebar",
              label: "Node.js®",
            },
          ],
        },
        {
          type: "dropdown",
          sidebarId: "dartSidebar",
          position: "left",
          label: "🎯 Dart ",
          to: "../dart",
          items: [
            { type: "docSidebar", label: "Dart", sidebarId: "dartSidebar" },
            { type: "docSidebar", label: "Flutter", sidebarId: "flutterSidebar" },
          ],
        },
        {
          type: "dropdown",
          sidebarId: "sqlSidebar",
          position: "left",
          label: "🐘 SQL ",
          to: "../sql",
          items: [
            { type: "docSidebar", label: "SQL", sidebarId: "sqlSidebar" },
            { type: "docSidebar", label: "ER Diagram", sidebarId: "er_diagramSidebar" },
            { type: "docSidebar", label: "PostgreSQL", sidebarId: "postgresqlSidebar" },
          ],
        },
        {
          href: "https://github.com/rahulsharmadev0/v4lang",
          label: "GitHub",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Javascript",
          items: [
            {
              label: "Javascript",
              to: "/docs/javaScript",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} v4lang.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
