<template>
    <footer class="pt-20 bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-100/20">
        <AtomsContainer class-name="pb-10">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-10">
                <div class="col-span-2 md:col-span-4 lg:col-span-2">
                    <NuxtLink to="/" class=" flex items-center gap-2">
                        <nuxt-img :src="siteSettings.logo.light" alt="In studio" width="500" height="auto" loading="lazy"
                        class="h-8 w-auto dark:hidden" />
                        <nuxt-img :src="siteSettings.logo.dark" alt="In studio" width="500" height="auto" loading="lazy"
                        class="h-8 w-auto hidden dark:block" />
                    </NuxtLink>

                    <p class="text-gray-600 dark:text-gray-300 pt-6">
                     {{siteSettings.footerText}}
                    </p>
                    
                </div>
                <div class="hidden md:block" ></div>
                <div class="hidden md:block" ></div>
                <div class="flex items-center gap-x-5">
                    <a :href="social.url" target="_blank" :aria-label="social.social"
                    v-for="social in socialMedia" :key="social.social">
                        <div v-html="socialIcons[social.social]"></div>
                    </a>
                </div>
            </div>
        </AtomsContainer>
        <div class="py-2 bg-gray-200 dark:bg-[rgb(10,16,29)]">
            <AtomsContainer>
                <div class="flex justify-between items-center gap-5 text-gray-600 dark:text-gray-300">
                    <div class="">
                        &copy; {{ new Date().getFullYear() }} All Rights Reserved. Powered by 
                        <NuxtLink target="_blank" to="https://yeerlo.com" class="font-bold text-primary" :style="{ color: siteColor.background }">Yeerlo</NuxtLink>
                    </div>
                </div>
            </AtomsContainer>
        </div>
    </footer>
</template>

<script  setup>
import { useStore } from '@/stores';
import {socialIcons} from "@/composables/data/social";
const { siteSettings,siteColor } = defineProps(['siteSettings','siteColor']);
const pinia = useStore();
const creatorInfo = computed(()=>pinia.creatorInformation);
const socialMedia = computed(()=>creatorInfo.value?.socialMedia || []);
</script>
