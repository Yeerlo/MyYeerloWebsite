// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
      '@nuxtjs/color-mode',
      '@nuxt/image',
      'nuxt-swiper',
  ],
  css:[
      '~/assets/css/app.css',
  ],
  plugins: [
    { src: '~/plugins/apexcharts.client.js', mode: 'client' },
  ],
  colorMode:{
      preference: 'system', // default value of $colorMode.preference
      fallback: 'dark', // fallback value if not system preference found
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
  },
  postcss:{
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
  },
})