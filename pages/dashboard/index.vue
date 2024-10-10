<script setup lang="ts">
import DataStatsOne from '@/components/dashboardpages/DataStats/DataStatsOne.vue'
import ChartOne from '@/components/dashboardpages/Charts/ChartOne.vue'
import ChartThree from '@/components/dashboardpages/Charts/ChartThree.vue'
import ChartTwo from '@/components/dashboardpages/Charts/ChartTwo.vue'
import ChatCard from '@/components/dashboardpages/ChatCard.vue'
import TableOne from '@/components/dashboardpages/Tables/TableOne.vue'
import DefaultLayout from '@/layouts/DashboardLayout.vue'
</script>

<template>
  <DefaultLayout>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <DataStatsOne />
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <!-- ====== Chart One Start -->
      <client-only>
      <ChartOne />
      <!-- ====== Chart One End -->

      <!-- ====== Chart Two Start -->
      <ChartTwo />
      <!-- ====== Chart Two End -->

      <!-- ====== Chart Three Start -->
      <ChartThree />
      <!-- ====== Chart Three End -->

    </client-only>

      <!-- ====== Table One Start -->
      <div class="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
      <!-- ====== Table One End -->

      <!-- ====== Chat Card Start -->
      <ChatCard />
      <!-- ====== Chat Card End -->
    </div>
  </DefaultLayout>
</template>
<style>

@import '~/assets/css/style.css';
</style>