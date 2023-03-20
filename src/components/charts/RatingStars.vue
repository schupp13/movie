<template>
  <div class="rating-div">
    <v-rating
      size="x-small"
      v-model="getFiveStarRating"
      readonly
      half-increments
      color="primary"
    />
    {{ getFiveStarRating }}
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

const getFiveStarRating = computed(() => {
  return Math.round((10 * props.rating) / 2) / 10;
});
</script>

<style lang="scss" scoped>
.rating-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>