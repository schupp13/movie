<template>
  <div class="landing-page-container">
    <div class="overlay">
      <div class="reg-card-container">
        <FlipCard></FlipCard>
      </div>
    </div>

    <div class="landing-page">
      <v-card
        elevation="5"
        class="item"
        v-for="movie in topTen"
        :key="movie.id"
        :style="{
          'background-image': `url(${movieImageBaseUrl}/${movie.backdrop_path})`,
        }"
      ></v-card>
    </div>
  </div>
</template>

<script setup>
import FlipCard from "@/components/cards/FlipCard";

import { computed } from "vue";
import { useMovieDBStore } from "@/store/movieDB";

const movieStore = useMovieDBStore();
movieStore.fetchTrendingMovies({ page: 1 });

const topTen = computed(() => {
  return movieStore.getTopTenTrendingMovies;
});

const movieImageBaseUrl = computed(() => {
  return import.meta.env.VITE_MOVIE_DB_IMAGE_URL;
});
</script>
<style lang="scss" scoped>
.reg-card-container {
  width: 90%;
  max-width: 450px;
}
.landing-page-container {
  height: 100%;
  position: fixed;
  z-index: 0;
  width: 100%;
  .landing-page {
    width: 100%;
    display: grid;
    height: 100%;
    grid-gap: 5px;
    position: relative;
    z-index: 0;

    .item {
      background-size: cover;
      background-position: top center;
      animation-name: example;
      animation-fill-mode: both;
      animation-duration: 2;
    }
    div:nth-of-type(1) {
      animation-delay: 2;
      grid-column: 1/3;
    }

    div:nth-of-type(5) {
      grid-column: 2/4;
    }

    div:nth-of-type(7) {
      grid-column: 1/5;
    }
    div:nth-of-type(10) {
      grid-column: 3/5;
    }
  }
  .overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1;
    min-height: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(1, 180, 228, 0.4) 35%,
      rgba(144, 206, 161, 0.4) 100%
    );
  }
  @keyframes example {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    65% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
