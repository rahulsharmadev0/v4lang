import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "v4lang",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "v4lang",
  projectName: "v4lang",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
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
          to: "/docs/javaScript/intro",
          items: [
            {
              label: "JavaScript",
              // sidebarId: "javascript_sidebarId",
              to: "/docs/javaScript/javaScript/intro",
            },
            {
              label: "TypeScript",
              // sidebarId: "typescript_sidebarId",
              to: "/docs/javaScript/typescript/intro",
            },
            {
              label: "Node.js®",
              // sidebarId: "nodejs_sidebarId",
              to: "/docs/javaScript/nodejs/intro",
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
              // sidebarId: "dart_sidebarId",
              to: "/docs/dart/dart/intro",
            },
            {
              label: "Flutter",
              // sidebarId: "flutter_sidebarId",
              to: "/docs/dart/flutter/intro",
            },
          ],
        },
        {
          href: "https://github.com/facebook/docusaurus",
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
