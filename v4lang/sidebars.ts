import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  javascriptSidebar: [
    {
      type: "category",
      label: "JavaScript",
      collapsible: false,
      description: "JavaScript is a programming language that adds interactivity to your website.",
      link: {
        type: "generated-index",
        slug: "javascript",
        description: "JavaScript is a programming language that adds interactivity to your website.",
      },
      items: [{ type: "autogenerated", dirName: "javascript" }],
    },
  ],
  typescriptSidebar: [
    {
      type: "category",
      label: "TypeScript",
      collapsible: false,
      description: "TypeScript is a strongly typed programming language that builds on JavaScript.",
      link: {
        type: "generated-index",
        slug: "typescript",
        description: "TypeScript is a strongly typed programming language that builds on JavaScript.",
      },
      items: [{ type: "autogenerated", dirName: "typescript" }],
    },
  ],
  nodejsSidebar: [
    {
      type: "category",
      label: "Node.js",
      collapsible: false,
      description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      link: {
        type: "generated-index",
        slug: "nodejs",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      items: [{ type: "autogenerated", dirName: "nodejs" }],
    },
  ],
  dartSidebar: [
    {
      type: "category",
      label: "Dart",
      collapsible: false,
      description: "Dart is a client-optimized language for fast apps on any platform.",
      link: {
        type: "generated-index",
        slug: "dart",
        description: "Dart is a client-optimized language for fast apps on any platform.",
      },
      items: [{ type: "autogenerated", dirName: "dart" }],
    },
  ],
  flutterSidebar: [
    {
      type: "category",
      label: "Flutter",
      collapsible: false,
      description: "Flutter is Google's UI toolkit for building natively compiled applications.",
      link: {
        type: "generated-index",
        slug: "flutter",
        description: "Flutter is Google's UI toolkit for building natively compiled applications.",
      },
      items: [{ type: "autogenerated", dirName: "flutter" }],
    },
  ],
  sqlSidebar: [
    {
      type: "category",
      label: "SQL",
      collapsible: false,
      description: "SQL is a standard language for storing, manipulating, and retrieving data in databases.",
      link: {
        type: "generated-index",
        slug: "sql",
        description: "SQL is a standard language for storing, manipulating, and retrieving data in databases.",
      },
      items: [{ type: "autogenerated", dirName: "sql" }],
    },
  ],
  er_diagramSidebar: [
    {
      type: "category",
      label: "ER Diagram",
      collapsible: false,
      description: "ER Diagram is a visual representation of the database structure.",
      link: {
        type: "generated-index",
        slug: "er_diagram",
        description: "ER Diagram is a visual representation of the database structure.",
      },
      items: [{ type: "autogenerated", dirName: "er_diagram" }],
    },
  ],
  postgresqlSidebar: [
    {
      type: "category",
      label: "PostgreSQL",
      collapsible: false,
      description: "PostgreSQL is a powerful, open source object-relational database system.",
      link: {
        type: "generated-index",
        slug: "postgresql",
        description: "PostgreSQL is a powerful, open source object-relational database system.",
      },
      items: [{ type: "autogenerated", dirName: "postgresql" }],
    },
  ],
};

export default sidebars;
