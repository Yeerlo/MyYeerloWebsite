<template>
    <header class="absolute inset-x-0 top-0 py-3 z-1">
        <AtomsContainer class-name="relative">
            <nav class="flex items-center justify-between w-full relative">
                <!-- app logo -->
                <div class="inline-flex relative bg-inherit">
                    <NuxtLink to="/" class=" flex items-center gap-2">
                        <nuxt-img :src="siteLogo.light" alt="logo" width="500" height="auto" loading="lazy"
                            class="h-8 w-auto dark:hidden"/>
                        <nuxt-img :src="siteLogo.dark" alt="logo" width="500" height="auto" loading="lazy"
                            class="h-8 w-auto hidden dark:block"/>
                    </NuxtLink>
                </div>

                <div class="flex items-center bg-inherit gap-1 lg:gap-3 min-w-max" style="backdrop-filter: blur(5px);">
                    <!-- <ElementsThemeSwitcher /> -->
                    <div class="hidden lg:flex lg:items-center gap-4">

                        <AtomsLinkBtn href="#events" variant="none" class="text-white bg-primary"
                            :style="{ backgroundColor: siteColor.background }">
                            Explore Events
                        </AtomsLinkBtn>
                    </div>

                </div>
            </nav>
        </AtomsContainer>
    </header>
</template>

<script setup>
const { siteLogo, siteColor } = defineProps(['siteLogo', 'siteColor']);
</script>