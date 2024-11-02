<template>
  <div v-if="creatorInfo">
    <AppHeader
      :siteLogo="siteSettings.logo" 
      :siteColor="{ background: siteSettings.siteColor, textcolor: 'white' }"
    />
    <SectionsHero
      :siteHero="{
        Header: creatorInfo?.name,
        Paragraph: creatorInfo?.bio,
        imgOne: creatorInfo?.image?.url || localEvents[0]?.image?.url,
        imgTwo: localEvents[0]?.image?.url || creatorInfo?.backgroundImage?.url || creatorInfo?.image?.url
      }"
      :siteColor="{ background: siteSettings.siteColor, textcolor: 'white' }"
    />
    
    <div id="events" class="mt-12 nuxt-yeerlo-wrapper">
      <ClientOnly>
        <NuxtYeerlo :creatorId="creatorId" />
      </ClientOnly>
    </div>

    <AppFooter :siteSettings="siteSettings" :siteColor="siteSettings.siteColor" />
  </div>
</template>

<script setup>
import { useStore } from '@/stores';
import { getCreator_ } from "~/composables/requests/creator";
const runtimeConfig = useRuntimeConfig();
const siteSettings = runtimeConfig.public.siteSettings;
const yeerloConfig = runtimeConfig.public.yeerlo;
const creatorId = yeerloConfig.creatorId;
const pinia = useStore();

const creatorInfo = computed(()=>pinia.creatorInformation);
const localEvents = ref([]);

// Function to fetch creator info
const getCreatorInfo = async () => {
  const result = await getCreator_(creatorId);
  if(result.id){
    pinia.setCreatorInformation(result);
    return result; // return result to avoid duplicating this request on client side
  }
};

await useAsyncData(async ()=>await getCreatorInfo());

const siteName = creatorInfo.value?.name || siteSettings.siteTitle;
const siteDescription = creatorInfo.value?.bio || siteSettings.siteDescription;
useHead({
  title: siteName,
  meta: [
    { name: 'description', content: siteDescription },
    // Open Graph / Facebook
    { hid: 'og:site_name', property: 'og:site_name', content: siteName },
    { hid: 'og:title', property: 'og:title', content: siteName },
    { hid: 'og:description', property: 'og:description', content: siteDescription },
    { hid: 'og:image', property: 'og:image', content: creatorInfo.value?.image?.url },
    { hid: 'og:url', property: 'og:url', content: '/' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: siteName },
    { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: creatorInfo.value?.image?.url },
  ],
  link: [
    { rel: 'canonical', href: '/' },
    { rel: 'icon', type: 'image/png', href: siteSettings.favicon }
  ]
});

const getLocalEvents = ()=>{
  localEvents.value = JSON.parse(sessionStorage.getItem("yeerlo-events") || '[]');
}

onMounted(()=>{
  getLocalEvents()
});
</script>
