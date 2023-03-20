<template>
  <v-progress-circular v-model="ratingPercent" :color="color" :size="35">
    <template v-slot:default="{ value }">
      <div class="rating-div">
        <strong class="text-caption bg-dark">{{ value }}%</strong>
      </div>
    </template></v-progress-circular
  >
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

const ratingPercent = computed(() => {
  return Math.round(props.rating * 10);
});

const color = computed(() => {
  return ratingPercent.value >= 90
    ? "success"
    : ratingPercent.value < 90 && ratingPercent.value >= 70
    ? "secondary"
    : ratingPercent.value < 70 && ratingPercent.value > 60
    ? "amber"
    : "red";
});

const series = computed(() => [ratingPercent]);

const options = ref({
  chart: {
    id: "vuechart-example",
  },
});
</script>
<style lang="scss" scoped>
.rating-div {
  padding: 0.4rem;
  border-radius: 50%;
  background: black;
}
</style>