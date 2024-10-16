// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-swiper',
    '@yeerlo/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css:[
    '~/assets/css/app.css',
    '~/assets/css/main.css',
  ],
  colorMode:{
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
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
  runtimeConfig:{
    public:{
      // yeerlo public config
      yeerlo:{
        creatorId: '2bbegYWBgxCUih8p26L17V3IM7W', // your yeerlo id
        layoutMode: "events",
        displayFormat: "default", // one of "default", "simple"
        limit: 0, // (Optional) total number of events you want to display.
        alwaysUseUpToDateVersions: true
      },

      // website public config
      siteSettings:{
        logo: {
          dark: "https://storage.yeerlo.com/logos/Asset%204.png",
          light: "https://storage.yeerlo.com/logos/Asset%202.png"
        },
        favicon: "https://storage.yeerlo.com/logos/Asset%2020.png",
        siteTitle: "Yeerlo Personal - Home",
        siteDescription: "Yeerlo Personal landing page website.",
        footerText: "Elevate Your Experience - Where Every Event Becomes Unforgettable",
        siteColor: {
          background: "#f37e01",
          textcolor: "white"
        },
      }
    }
  },
})