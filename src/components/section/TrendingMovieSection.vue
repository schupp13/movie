<template>
  <HorizontalScrollSection title="Movies" :items="items">
    <template v-slot:options>
      <v-btn-toggle shaped mandatory>
        <v-btn> Day </v-btn>
        <v-btn> Week </v-btn>
        <v-btn>
          <v-icon>mdi-format-align-right</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
    <template #item="{ item, toggle, isSelected }">
      <BasicInfoCard
        class="ml-6"
        @click="toggle"
        :is-selected="isSelected"
        :image="item.poster_path"
        :title="item.title"
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

movieStore.fetchTrendingMovies();
const items = computed(() => movieStore.trendingMovies?.data?.results || []);
</script>

<style lang="scss" scoped>
</style>