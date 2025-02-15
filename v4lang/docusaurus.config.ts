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
  
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "v4lang",
      logo: {
        alt: "v4lang Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "dropdown",
          sidebarId: "javascriptSidebar",
          position: "left",
          label: "📜 JavaScript ",
          to: "/docs/category/javascript",
          items: [
            {
              label: "JavaScript",
              to: "/docs/category/javascript",
            },
            {
              label: "TypeScript",
              to: "/docs/category/typescript",
            },
            {
              label: "Node.js®",
              to: "/docs/category/nodejs",
            },
          ],
        },
        {
          type: "dropdown",
          sidebarId: "dartSidebar",
          position: "left",
          label: "🎯 Dart ",
          to: "/docs/dart/intro",
          items: [
            {
              label: "Dart",
              to: "/docs/dart/dart/intro",
            },
            {
              label: "Flutter",
              to: "/docs/dart/flutter/intro",
            },
          ],
        },
        {
          href: "https://github.com/rahulsharmadev0/v4lang",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'search',
          position: 'right',
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
