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
        alwaysUseUpToDateVersions: false
      },

      // website public config
      siteSettings:{
        logo: {
          dark: "/logo-dark.png",
          light: "/logo-light.png"
        },
        favicon: "/favicon.png",
        siteTitle: "Yeerlo Personal - Home",
        siteDescription: "Yeerlo Personal  landing page website.",
        footerText: "Elevate Your Experience - Where Every Event Becomes Unforgettable",

        siteHero:{
          Header: "Electrify Your Night: An Unforgettable Journey with MC Yeerlo",
          Paragraph: "Join me for a night of electrifying beats and unforgettable moments. Dive into a world where comedy, music and magic meet. Get ready for an experience that will set your heart racing!",
          imgOne: "/images/sidebiew.webp",
          imgTwo: "/images/sidebiew.webp"
        },

        siteColor: {
          background: "#f37e01",
          textcolor: "white"
        },
        
        subscribeText: {
          head: "Subscribe  to recieve updates on my upcoming events",
          color: "#f37e01",
          text: "By subscribing , you'll get the latest news and updates about all my upcoming events delivered straight to your inbox. Stay connected and be the first to know about exciting new happenings!"
        }
      }
    }
  },
})