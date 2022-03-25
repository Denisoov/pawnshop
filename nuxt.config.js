export default {
  ssr: false,

  head: {
    titleTemplate: '%s - pawnshop',
    title: 'pawnshop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/money.ico' }
    ]
  },
  styleResources: {
    scss: [
    '@/assets/styles/colors.scss',
    '@/assets/styles/fonts.scss',
    '@/assets/styles/scroll.scss',
    ],
  },
  router: {
    middleware: ['authMiddleware']
  },
  css: [
    '@/assets/styles/index.scss'],
  plugins: [
    '@/plugins/api.js',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  vuetify: {
    treeShake: true,
    defaultAssets: false,
  },
  build: {
  }
}
