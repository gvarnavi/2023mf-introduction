// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2023 Miller Introductions',
  tagline: 'Non-Convex Inverse Problems: Electron Ptychography',
  favicon: 'img/favicon.ico',
  customFields: {
    author: "Dr. Georgios Varnavides",
    affiliation: "UCB, LBNL",
    bitly: "bit.ly/mf23-intro"
  },

  // Set the production url of your site here
  url: 'https://gvarnavi.github.io',
  baseUrl: '/2023mf-introduction/',

  organizationName: 'gvarnavi', // Usually your GitHub org/user name.
  projectName: '2023mf-introduction', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: {
  },

  presets: [
    [
      'classic',
      ({
        docs: {
	  path: 'slides/',
          routeBasePath: 'slides/',
	  breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
	  remarkPlugins: [math],
	  rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
	sidebar:{
	  hideable: true,
	  autoCollapseCategories: false,
	}
      },
      navbar: {
        title: 'Miller Institute 2023 Introductions',
        logo: {
          alt: 'Presentations',
          src: 'img/favicon.svg',
        },
        items: [
          {
	    to: 'slides/introduction/',
            position: 'left',
            label: 'Slides',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Georgios Varnavides`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),
};

module.exports = config;
