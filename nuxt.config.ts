export default defineNuxtConfig({
  pages: true,
  ssr: false,
  devtools: { enabled: false },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '/style.css',
  ],

  plugins: ['~/plugins/vuetify.js'],
  components: true,

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    cloudinaryApiSecret: '',
    cloudinaryApiKey: '',
    cloudinaryCloudName: '',
    public: {}
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Lumber Milling and Live Edge Slabs in Ozark, MO | Milling By Darrell',
       meta: [
        { name: 'description', content: 'Custom wood milling, live edge slabs, and dimensional lumber in Ozark, Springfield, and Nixa Missouri.' }
      ],
    }
  },

  modules: ['nuxt-calendly', 
    '@nuxtjs/sitemap', 
    '@nuxtjs/robots', 
    '@nuxtjs/seo', 
    'nuxt-schema-org',
    'nuxt-seo-utils'],
  site: {
    url: 'https://millingbydarrell.com/',
    name: 'Wood Milling and Live Edge Slabs in Ozark, MO | Milling By Darrell'
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
  calendly: {}, 
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Milling by Darrell LLC',
      logo: '/logo.png'
    }
  }
})