// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WALDO Documentation',
  tagline: 'First visual anti-cheat powered by AI',
  url: 'https://tsundDev.github.io',
  baseUrl: '/waldo-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'tsundDev', // Usually your GitHub org/user name.
  projectName: 'waldo-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/waldo-vision/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/waldo-vision',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WALDO',
        logo: {
          alt: 'WALDO',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blogs', position: 'left'},
          {
            href: 'https://github.com/waldo-vision',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Teams',
            items: [
              {
                label: 'Analysis',
                to: '/docs/Analysis/',
              },
              {
                label: 'FrontEnd',
                to: '/docs/FrontEnd/',
              },
              {
                label: 'Infrastructure',
                to: '/docs/Infrastructure',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/waldo-vision',
              },
              {
                label: 'Discord',
                href: 'https://bit.ly/3mqDTV0',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/waldo-vision',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WALDO Vision, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
