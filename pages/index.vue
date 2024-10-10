<script setup >
const siteType = ref('cinema')

const changeSiteType = () => {
  if (siteType.value == "cinema"){
    siteType.value ="personal";
  }else{
    siteType.value = "cinema";
  }
    };

const siteColor = ref(
  {
    background: "#f37e01",
    textcolor: "white"
  }
)
const siteSettings = ref(
  {
    logo: {
      dark: "/logo-dark.png",
      light: "/logo-light.png"
    },
    favicon: "/favicon.png",
    siteTitle: "Yeerlo Personal - Home",
    siteDescription: "Yeerlo Personal  landing page website.",
    footerText: "Elevate Your Experience - Where Every Event Becomes Unforgettable",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#tweet",
      instagram: "#insta",
      youtube: "#youtube",
      tiktok: "#tiktok"

    },
  }

)
const siteHero = ref(
  {
    Header: "Electrify Your Night: An Unforgettable Journey with MC Yeerlo",
    Paragraph: "Join me for a night of electrifying beats and unforgettable moments. Dive into a world where comedy, music and magic meet. Get ready for an experience that will set your heart racing!",
    imgOne: "/images/sidebiew.webp",
    imgTwo: "/images/sidebiew.webp"
  }
)

const siteEvents = ref(
  [
    {
      "id": 1,
      "title": "The Secret Garden",
      "link": "#",
      "duration": "24min",
      "image": "https://picsum.photos/800/600",
      "category": "",
      "createdAt": "",
      "description": "A magical journey in a hidden garden filled with wonders and mysteries."
    },
    {
      "id": 2,
      "title": "Inception",
      "link": "#",
      "duration": "30min",
      "image": "https://picsum.photos/800/601",
      "category": "",
      "createdAt": "",
      "description": "A mind-bending heist within dreams, exploring the depths of the subconscious."
    },
    {
      "id": 3,
      "title": "Eternal Sunshine of the Spotless Mind",
      "link": "#",
      "duration": "28min",
      "image": "https://picsum.photos/800/602",
      "category": "",
      "createdAt": "",
      "description": "A unique and emotional journey as two individuals erase memories of each other."
    },
    {
      "id": 4,
      "title": "The Shawshank Redemption",
      "link": "#",
      "duration": "22min",
      "image": "https://picsum.photos/800/603",
      "category": "",
      "createdAt": "",
      "description": "An inspiring tale of friendship and hope in the harsh confines of Shawshank Prison."
    },
    {
      "id": 5,
      "title": "Blade Runner 2049",
      "link": "#",
      "duration": "35min",
      "image": "https://picsum.photos/800/604",
      "category": "",
      "createdAt": "",
      "description": "A visually stunning exploration of identity, humanity, and artificial intelligence."
    },
    {
      "id": 6,
      "title": "The Grand Budapest Hotel",
      "link": "#",
      "duration": "26min",
      "image": "https://picsum.photos/800/605",
      "category": "",
      "createdAt": "",
      "description": "A quirky and comedic adventure set in a luxurious European hotel."
    },
    {
      "id": 7,
      "title": "Interstellar",
      "link": "#",
      "duration": "40min",
      "image": "https://picsum.photos/800/606",
      "category": "",
      "createdAt": "",
      "description": "A space odyssey to save humanity, exploring love, time dilation, and cosmic mysteries."
    },
    {
      "id": 8,
      "title": "Pulp Fiction",
      "link": "#",
      "duration": "32min",
      "image": "https://picsum.photos/800/607",
      "category": "",
      "createdAt": "",
      "description": "A nonlinear narrative intertwining crime, redemption, and dark humor in Los Angeles."
    },
    {
      "id": 9,
      "title": "The Matrix",
      "link": "#",
      "duration": "28min",
      "image": "https://picsum.photos/800/608",
      "category": "",
      "createdAt": "",
      "description": "A cyberpunk journey exploring the nature of reality and human existence."
    },
    {
      "id": 10,
      "title": "Forrest Gump",
      "link": "#",
      "duration": "35min",
      "image": "https://picsum.photos/800/609",
      "category": "",
      "createdAt": "",
      "description": "Life is like a box of chocolates in this heartwarming tale of a simple man's extraordinary life."
    },
    {
      "id": 11,
      "title": "The Dark Knight",
      "link": "#",
      "duration": "27min",
      "image": "https://picsum.photos/800/610",
      "category": "",
      "createdAt": "",
      "description": "Gotham City's protector faces a new nemesis in this epic tale of chaos and heroism."
    },
    {
      "id": 12,
      "title": "Inglourious Basterds",
      "link": "#",
      "duration": "33min",
      "image": "https://picsum.photos/800/611",
      "category": "",
      "createdAt": "",
      "description": "Quentin Tarantino's World War II masterpiece filled with vengeance, strategy, and unexpected alliances."
    }
  ]

)
const subscribeText = ref({
  head: "Subscribe  to recieve updates on my upcoming events",
  color: siteColor.value.background,
  text: "By subscribing , you'll get the latest news and updates about all my upcoming events delivered straight to your inbox. Stay connected and be the first to know about exciting new happenings!"
})

useHead({
  title: siteSettings.value.siteTitle,
  meta: [
    { name: 'description', content: siteSettings.value.siteDescription },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: siteSettings.value.favicon }
  ],
})

</script>
<template>
  <div>
    <div v-if="siteType && siteType === 'cinema'">
      <HomecinemaCinemaHeader :siteLogo="siteSettings.logo" :siteColor="siteColor" />
      <HomecinemaCinemaMain :siteColor="siteColor" :siteEvents="siteEvents" />
    </div>
    <div v-else>

      <AppHeader :siteLogo="siteSettings.logo" :siteColor="siteColor" />
      <SectionsHomeHeroSection :siteHero="siteHero" :siteColor="siteColor" />
      <SectionsHomePopularPodcasts :siteColor="siteColor" :siteEvents="siteEvents" />
    </div>

    <div class="flex justify-center items-center ">
      <br>
    <button @click="changeSiteType" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Change site type
    </button>
  </div>
    <SectionsCallToAction :subscribeText="subscribeText" />
    <AppFooter :siteSettings="siteSettings" :siteColor="siteColor" />
  </div>
</template>