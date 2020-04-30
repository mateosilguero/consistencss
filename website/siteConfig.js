/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Bitrice',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image:
      'https://lh3.googleusercontent.com/CI0lB2u_NoTwTqp2hpwUIOHUZ-E-QFvLBQThA4l6Rj0MVwmiNrFH2X0gL2tbHc-n7ICW=s360-rw',
    infoLink:
      'https://play.google.com/store/apps/details?id=com.bitrise&hl=es_AR',
    pinned: true,
  },
  {
    caption: 'JSand',
    image:
      'https://lh3.googleusercontent.com/JOloldr8-Uf4enRFzcvnZeKzeZR4TN3jquhNezvRS2dRvzRhOCOBTm6m3d8m_WNVLdU=s360-rw',
    infoLink:
      'https://play.google.com/store/apps/details?id=com.JSand&hl=en_US',
    pinned: true,
  },
];

const siteConfig = {
  title: 'consistencss', // Title for your website.
  tagline: 'An "atomic css" style toolkit for React Native',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'consistencss',
  organizationName: 'facebook',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { doc: 'background', label: 'API' },
    {
      href: 'https://github.com/mateosilguero/consistencss',
      label: 'GitHub',
    },
    //{ blog: true, label: 'Blog' },
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#536DFE',
    secondaryColor: '#7986CB',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/mateosilguero/consistencss',

  algolia: {
    apiKey: 'cc789b89c83469554d617a2019279b16',
    indexName: 'consistencss',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
