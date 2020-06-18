const project = require('./.eveble/project.json');

module.exports = {
  title: project.title,
  tagline: project.tagline,
  url: project.url, // URL to documentation
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: project.organizationName, // Usually your GitHub org/user name, use object to define author on package.json
  projectName: project.projectName, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: project.title,
      logo: {
        alt: `${project.title} Logo`,
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/guides/0-the-basics/getting-started',
          label: 'Docs',
          position: 'right',
        },
        {
          to: project.apiPathTo,
          label: 'API',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: project.projectUrl,
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: `${project.organizationName} Logo`,
        src: 'img/logo-monochrome.svg',
        href: project.organizationUrl,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/guides/0-the-basics/getting-started',
            },
            {
              label: 'API',
              to: project.apiPathTo,
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: project.projectUrl + '/issues',
            },
            {
              label: 'Slack',
              href: 'https://eveble.slack.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: project.projectUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="${
        project.organizationUrl
      }" target="_blank">${
        project.organizationName
      }</a>. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</.> <span class="love"></span>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
