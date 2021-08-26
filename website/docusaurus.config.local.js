module.exports = {
  title: 'toio™コア キューブ 技術仕様',
  tagline: 'The technical specifications for developers and creators',
  url: 'https://github.sie.sony.com',
  baseUrl: '/pages/SIE/toio-spec/',
  organizationName: 'SIE',
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
  customFields: {
    repoUrl: 'https://github.sie.sony.com/pages/SIE/toio-spec',
    gaGtag: true,
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
          customCss: '../src/css/customTheme.css',
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
      logo: {},
    },
    gtag: {
      trackingID: 'UA-133660753-2',
    },
  },
}
