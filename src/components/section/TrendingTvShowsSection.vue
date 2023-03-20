<template>
  <HorizontalScrollSection title="TV-Shows" :items="items">
    <template #item="{ item, toggle, isSelected }">
      <BasicInfoCard
        class="ml-6"
        @click="toggle"
        :is-selected="isSelected"
        :image="item.poster_path"
        :title="item.name"
        :description="item.overview"
        :rating="item.vote_average"
        :item-id="item.id"
        :back-drop="item.backdrop_path || ''"
      />
    </template>
  </HorizontalScrollSection>
</template>

<script setup>
import { computed } from "vue";
import HorizontalScrollSection from "@/components/section/HorizontalScrollSection.vue";
import BasicInfoCard from "@/components/cards/info/BasicInfoCard.vue";
import { useMovieDBStore } from "@/store/movieDB";

const movieStore = useMovieDBStore();

movieStore.fetchTrendingTvShows();
const items = computed(() => {
  return movieStore.getTrendingTvShows?.results || [];
});
</script>

<style lang="scss" scoped>
</style>