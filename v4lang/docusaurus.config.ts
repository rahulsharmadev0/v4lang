import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "v4Lang",
  tagline: `Your ultimate resource for learning JavaScript, Dart, SQL, and more!`,
  favicon: "img/favicon.ico",

  url: "https://github.com",
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

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
          to: "javascript",
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
          sidebarId: "javaSidebar",
          position: "left",
          label: "☕ Java ",
          to: "java",
          items: [],
        },
        {
          type: "dropdown",
          sidebarId: "dartSidebar",
          position: "left",
          label: "🎯 Dart ",
          to: "dart",
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
          to: "sql",
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
          title: "JavaScript",
          items: [
            {
              label: "JavaScript",
              to: "javascript",
            },
            {
              label: "TypeScript",
              to: "typescript",
            },
            {
              label: "Node.js®",
              to: "nodejs",
            },
          ],
        },
        {
          title: "Java",
          items: [
            {
              label: "Java",
              to: "java",
            },
            {
              label: "Spring Boot",
              to: "spring_boot",
            },
          ],
        },
        {
          title: "Dart",
          items: [
            {
              label: "Dart",
              to: "dart",
            },
            {
              label: "Flutter",
              to: "flutter",
            },
          ],
        },
        {
          title: "SQL",
          items: [
            {
              label: "SQL",
              to: "sql",
            },
            {
              label: "ER Diagram",
              to: "er_diagram",
            },
            {
              label: "PostgreSQL",
              to: "postgresql",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/rahulsharmadev",
            },
            {
              label: "GitHub",
              href: "https://github.com/rahulsharmadev0",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} v4Lang - rahulsharmadev`,
      logo: {
        alt: "v4lang Logo",
        src: "img/logo.svg",
        width: 50,
        href: "/",
        style: {
          margin: "0 auto",
        },
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["dart", "java", "groovy", "sql"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
