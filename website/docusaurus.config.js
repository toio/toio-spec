require('dotenv').config()

module.exports = {
  title: 'toio™コア キューブ 技術仕様',
  tagline: 'The technical specifications for developers and creators',
  url: process.env.URL ?? 'https://toio.github.io',
  baseUrl: process.env.BASE_URL ?? '/toio-spec/',
  organizationName: process.env.ORGANIZATION_NAME ?? 'toio',
  projectName: 'toio-spec',
  scripts: ['https://buttons.github.io/buttons.js'],
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
    },
  },
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          path: '../docs',
          sidebarPath: './sidebars.json',
          includeCurrentVersion: false,
        },
        blog: {},
        theme: {
          customCss: [require.resolve('./src/css/customTheme.css')],
        },
        gtag: process.env.TRACKING_ID && {
          trackingID: process.env.TRACKING_ID,
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: 'toio™コア キューブ 技術仕様',
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'about',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    image: 'img/social_image.png',
    footer: {
      links: [
        {
          // Label of the section of these links
          title: 'Docs',
          items: [
            {
              label: 'はじめに',
              to: 'docs/about',
            },
            {
              label: 'ハードウェアについて',
              to: 'docs/hardware_components',
            },
            {
              label: '通信仕様について',
              to: 'docs/ble_communication_overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'ユーザー&ライブラリ',
              to: 'users',
            },
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/toio',
            },
            {
              label: 'スタック・オーバーフロー',
              to: 'https://ja.stackoverflow.com/questions/tagged/toio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Official Web',
              to: 'https://toio.io/',
            },
            {
              label: 'toio blog',
              to: 'https://toio.io/blog/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Cookie Policy',
              to: 'https://www.sie.com/jp/website.html',
            },
            {
              label: 'Privacy Policy',
              to: 'https://toio.io/privacy.html',
            },
            {
              label: 'Trademark Notice',
              to: '/trademark-notice',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2021 Sony Interactive Entertainment Inc.',
    },
    algolia: process.env.ALGOLIA_API_KEY && {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: false,
    },
  },
}
