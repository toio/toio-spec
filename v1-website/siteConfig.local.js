/**
 * Copyright (c) 2019-present, Sony Interactive Entertainment Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'toio™コア キューブ 技術仕様',
  tagline: 'toio Core Cube Specification',

  url: 'https://github.sie.sony.com',
  baseUrl: '/pages/SIE/toio-spec/',
  projectName: 'toio-spec',
  organizationName: 'SIE',

  headerLinks: [{ search: true }, { languages: true }, { doc: 'about', label: 'Docs' }],

  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#878788',
    secondaryColor: '#595757',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Sony Interactive Entertainment Inc.`,

  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/social_image.png',
  twitterImage: 'img/social_image.png',

  // editUrl: 'https://github.com/toio/toio-spec/edit/master/docs/',

  enableUpdateBy: false,
  enableUpdateTime: false,

  repoUrl: 'https://github.sie.sony.com/pages/SIE/toio-spec',

  gaTrackingId: 'UA-133660753-2',
  gaGtag: true,
}

module.exports = siteConfig
