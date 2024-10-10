
<template>
  <div>
    <AppHeader :siteLogo="siteSettings.logo" :siteColor="siteSettings.siteColor" />
    <SectionsHomeHeroSection :siteHero="siteSettings.siteHero" :siteColor="siteSettings.siteColor" />

    <!-- <NuxtYeerlo/> -->

    <SectionsCallToAction :subscribeText="siteSettings.subscribeText" />
    <AppFooter :siteSettings="siteSettings" :siteColor="siteSettings.siteColor" />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const siteSettings = runtimeConfig.public.siteSettings;
const yeerloConfig = runtimeConfig.public.yeerlo;
const creatorId = yeerloConfig.creatorId;

useHead({
  title: siteSettings.siteTitle,
  meta: [
    { name: 'description', content: siteSettings.siteDescription },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: siteSettings.favicon }
  ],
});
</script>