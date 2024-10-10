<template>
    <div>
        <header class="md:py-[16px] py-[14.5px] absolute top-0 left-0 w-full z-10 header transition-all duration-50">
            <nav class="max-w-[1140px] mx-auto  md:px-8 sm:px-6 px-4 xl:px-0 flex justify-between flex-row items-center">
                <!-- <a class="" href="/"><img src="/assets/tmovie-6deffd9e.svg"
                        alt="logo" class="sm:h-[28px] h-[24px] sm:w-[28px] w-[24px]" /><span
                        class="text-primary font-semibold sm:text-[18px] text-[16.75px]">tMovies</span></a> -->
                        <NuxtLink to="/" class=" flex flex-row items-center xs:gap-2 gap-[6px])">
                            <!-- <nuxt-img :src="siteLogo.light" alt="In studio" width="500" height="auto" loading="lazy"
                                class="h-8 w-auto dark:hidden"/> -->
                            <nuxt-img :src="siteLogo.dark" alt="logo" width="500" height="auto" loading="lazy"
                                class="h-8 w-auto "/>
                        </NuxtLink>
                <div class="md:flex flex-row gap-8 items-center text-gray-600 dark:text-gray-300">
                    <div class="button relative">
                        <ElementsThemeSwitcher />
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script  setup>
// Access props directly
const { siteLogo, siteColor } = defineProps(['siteLogo', 'siteColor']);


</script>

<style scoped>

</style>