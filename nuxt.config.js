export default {
  // target: 'static',
  // router: {
  //   base: '/One-and-Only-Status-saver-app-web.github.io/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app-web-site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],

  link: [
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/fontawesome-free/css/all.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/animate/animate.compat.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/simple-line-icons/css/simple-line-icons.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/owl.carousel/assets/owl.carousel.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/owl.carousel/assets/owl.theme.default.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/magnific-popup/magnific-popup.min.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'css/theme.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'css/theme-elements.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/circle-flip-slideshow/css/component.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'css/skins/default.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'css/custom.css' },
    { type: 'text/css', rel: 'stylesheet', href: 'vendor/modernizr/modernizr.min.js' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  script: [
    { src: 'vendor/plugins/js/plugins.min.js' },
    { src: 'js/theme.js' },
    { src: 'vendor/circle-flip-slideshow/js/jquery.flipshow.min.js' },
    { src: 'js/views/view.home.js' },
    { src: 'js/theme.init.js' },
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {

  },
  privateRuntimeConfig: {
    
  }
}
