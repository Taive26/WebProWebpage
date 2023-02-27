// const { description } = require('../../package')

module.exports = {

  title: 'WebPro',
  description: 'VEEBILAHENDUSED SINU ETTEVÕTTELE',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    logo: '/hero.png',
    search: false,
    nav: [
      {
        text: 'TEENUSED',
        link: '/services/',
      },
      {
        text: 'TEHTUD TÖÖD',
        link: '/portfolio/'
      },
      {
        text: 'ETTEVÕTTEST',
        link: '/info/'
      }
    ],
    sidebar: {
      '/portfolio/': [
        {
          title: 'Tehtud tööd',
          collapsable: false,
          children: [
            '',
            'wordpress',
            'integration',
            'javascript',
          ]
        }
      ],

      '/services/': [
        {
          title: 'Meie teenused',
          collapsable: false,
          children: [
            '',
            'automation',
            'custom',
          ]
        }
      ],

      '/info/': [
        {
          title: 'Ettevõttest',
          collapsable: false,
          children: [
            '',
            'team',
            'internship',
          ]
        }
      ],
    }
  },

  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-attrs'), {
        // optional, these are default options
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []  // empty array = all attributes are allowed
      })
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
