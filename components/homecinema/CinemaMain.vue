<template>
    <main class="dark:bg-black bg-mainColor mb-[-40px] lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <Swiper class="mySwiper lg:h-screen sm:h-[640px] xs:h-[520px] h-[460px] w-full" :modules="[SwiperAutoplay]"
            :slides-per-view="1" :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
            }">
            <SwiperSlide class=" h-full w-full " v-for="(event, index) in siteEvents" :key="index"
                :style="getBackgroundStyle(event.image)">
                <div
                    class="max-w-[1140px] md:px-8 sm:px-6 px-4 xl:px-0 mx-auto flex items-center h-full flex-row lg:gap-32 sm:gap-20">
                    <div
                        class="text-gray-300 sm:max-w-[80vw] max-w-[90vw] md:max-w-[420px] font-nunito flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8">
                        <h2
                            class="sm:text-4xl xs:text-3xl text-[28.75px] font-extrabold sm:leading-[1.2] xs:leading-normal leading-snug text-secColor sm:max-w-[420px] xs:max-w-[320px] max-w-[280px]">
                            {{ event.title }}
                        </h2>
                        <p class="sm:text-base xs:text-[15.75px] text-[14.25px] leading-relaxed">
                            {{ event.description }}
                        </p>
                        <div class="flex flex-row items-center gap-4 sm:mt-6 xs:mt-5 mt-[18px]">
                            <a type="button" :href="event.link" name="watch-trailer"
                                class="sm:text-base xs:text-[14.75px] text-[13.75px] xs:py-2 py-[6px] sm:px-6 xs:px-5 px-[18px] hover:-translate-y-[2px] transition-all duration-300 active:translate-y-[1px] rounded-full font-medium text-shadow watch-trailer">
                                Watch trailer</a><a type="button" :href="event.link" name="watch-now"
                                class="sm:text-base xs:text-[14.75px] text-[13.75px] xs:py-2 py-[6px] sm:px-6 xs:px-5 px-[18px] hover:-translate-y-[2px] transition-all duration-300 active:translate-y-[1px] rounded-full font-medium bg-green text-secColor bg-primary "
                                :style="{ backgroundColor: siteColor.background }">
                                Watch now
                            </a>
                        </div>
                    </div>
                    <div class="md:block hidden h-[380px] w-[254px] mr-auto">
                        <div style="opacity: 1; transform: none">
                            <img :src="event.image" :alt="event.title" height="380" width="254"
                                class="h-[380px] w-[254px] object-cover rounded-xl shadow-lg transition-all duration-300 opacity-100">
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>


        <div class="max-w-[1140px] mx-auto md:px-8 sm:px-6 px-4 xl:px-0 lg:mt-12 md:mt-8 sm:mt-6 xs:mt-4 mt-2">
            <section class="sm:py-[20px] xs:py-[18.75px] py-[16.75px] font-nunito">
                <div class="flex flex-row justify-between items-center sm:mb-6 mb-[22.75px]">
                    <h3
                        class="sm:text-[22.25px] xs:text-[20px] text-[18.75px] dark:text-gray-50 sm:font-bold font-semibold relative">
                        <span>Trending movies</span>
                        <div class="line" :style="{ backgroundColor: siteColor.background }"></div>
                    </h3>
                    <a class="sm:py-1 py-[2px] sm:text-[14px] xs:text-[12.75px] text-[12px] sm:px-4 px-3 rounded-full dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 view-all-btn--light"
                        href="#Allmovies">View all</a>
                </div>
                <div class="xs:min-h-[250px] min-h-[216px]">
                    <Swiper :modules="[SwiperAutoplay]" :slides-per-view="'auto'" :loop="true" :spaceBetween="15"
                        class="mySwiper">
                        <SwiperSlide v-for="(event, index) in siteEvents" :key="index"
                            class="flex !w-fit flex-col xs:gap-[14px] gap-2 max-w-[170px] rounded-lg"
                            style="margin-right: 15px;width: auto;">
                            <a class="dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden"
                                :href="event.link"><img :src="event.image" :alt="event.title" height="250" width="170"
                                    style="
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        " class="object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out zoomInEffect opacity-100" />
                                <div
                                    class="absolute top-0 left-0 w-[170px] h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] transition-all duration-300 rounded-lg flex items-center justify-center">
                                    <div class="xs:text-[48px] text-[42px] text-[green] scale-[0.4] group-hover:scale-100 transition-all duration-300"
                                        :style="{ color: siteColor.background }">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 576 512" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <h4
                                class="dark:text-gray-300 text-center cursor-default sm:text-base xs:text-[14.75px] text-[14px] font-medium">
                                {{ event.title }}
                            </h4>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>



            <section class="sm:py-[20px] xs:py-[18.75px] py-[16.75px] font-nunito">
                <div class="flex flex-row justify-between items-center sm:mb-6 mb-[22.75px]">
                    <h3
                        class="sm:text-[22.25px] xs:text-[20px] text-[18.75px] dark:text-gray-50 sm:font-bold font-semibold relative">
                        <span id="Allmovies" >All Movies</span>
                        <div class="line" :style="{ backgroundColor: siteColor.background }"></div>
                    </h3>
                </div>
                <div class="xs:min-h-[250px] min-h-[216px]" >
                    <div class=" grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div class=" col-span-1 flex flex-col xs:gap-[14px] gap-2 max-w-[170px] rounded-lg"
                            v-for="(event, index) in siteEvents" :key="index" style="margin-right: 15px">
                            <a class="dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden"
                                :href="event.link"><img :src="event.image" :alt="event.title" height="250" width="170"
                                    style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    " class="object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out zoomInEffect opacity-100" />
                                <div
                                    class="absolute top-0 left-0 w-[170px] h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] transition-all duration-300 rounded-lg flex items-center justify-center">
                                    <div class="xs:text-[48px] text-[42px] text-[green] scale-[0.4] group-hover:scale-100 transition-all duration-300"
                                        :style="{ color: siteColor.background }">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 576 512" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <h4
                                class="dark:text-gray-300 text-center cursor-default sm:text-base xs:text-[14.75px] text-[14px] font-medium">
                                {{ event.title }}
                            </h4>
                        </div>

                    </div>

                </div>
            </section>

        </div>



    </main>
</template>

<style scoped>
@import '~/assets/css/cinema.css';
</style>
<script setup>
// Access props directly
const { PropData } = defineProps(['siteColor', 'siteEvents']);


const getBackgroundStyle = (imageUrl) => ({
    backgroundImage: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.5)
      ), url('${imageUrl}')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // Add other styles as needed
});
</script>