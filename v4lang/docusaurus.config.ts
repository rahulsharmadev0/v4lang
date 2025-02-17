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
          sidebarId: "javascript",
          position: "left",
          label: "📜 JavaScript ",
          to: "/docs/javascript/javascript",
          items: [
            {
              type: "docSidebar",
              sidebarId: "javascript",
              label: "JavaScript",
              to: "/docs/javascript",
            },
            {
              type: "docSidebar",
              sidebarId: "typescript",
              label: "TypeScript",
              to: "/docs/javascript/typescript",
            },
            {
              type: "docSidebar",
              sidebarId: "nodejs",
              label: "Node.js®",
              to: "/docs/javascript/nodejs",
            },
          ],
        },
        {
          type: "dropdown",
          sidebarId: "dart",
          position: "left",
          label: "🎯 Dart ",
          to: "/docs/dart",
          items: [
            { type: "docSidebar", label: "Dart", sidebarId: "dart", to: "/docs/dart/dart" },
            { type: "docSidebar", label: "Flutter", sidebarId: "flutter", to: "/docs/dart/flutter" },
          ],
        },
        {
          type: "dropdown",
          sidebarId: "sql",
          position: "left",
          label: "SQL ",
          to: "/docs/sql",
          items: [
            { type: "docSidebar", label: "SQL", sidebarId: "sql", to: "/docs/sql/sql" },
            { type: "docSidebar", label: "ER Diagram", sidebarId: "er_diagram", to: "/docs/sql/er_diagram" },
            { type: "docSidebar", label: "PostgreSQL", sidebarId: "postgresql", to: "/docs/sql/postgresql" },
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
              to: "/docs/javaScript/intro",
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
