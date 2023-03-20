<template>
  <div>
    <TrendingMovieSection />
    <TrendingTvShowsSection />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useDisplay } from "vuetify";
import TrendingMovieSection from "@/components/section/TrendingMovieSection.vue";
import TrendingTvShowsSection from "@/components/section/TrendingTvShowsSection.vue";
const { width, mobile } = useDisplay();
const panel = ref([]);
const VALUE_MAP = ["trending", "trendi"];
if (mobile.value) {
  console.log(mobile.value);
  panel.value = [];
} else {
  console.log(VALUE_MAP);
  panel.value = VALUE_MAP;
}
watch(mobile, async (newQuestion, oldQuestion) => {
  if (newQuestion) {
    console.log(mobile.value);
    panel.value = [];
  } else {
    console.log(VALUE_MAP);
    panel.value = VALUE_MAP;
  }
});
</script>

<style lang="scss" scoped></style>
