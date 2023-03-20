<template>
  <div>
    <div class="">
      <h3 class="text-5 text-uppercase">{{ title }}</h3>
      <slot name="options" />
    </div>
    <v-slide-group v-model="model" show-arrows>
      <v-slide-group-item
        v-for="(item, index) in items"
        :key="`item-${index}`"
        v-slot="{ isSelected, toggle }"
      >
        <slot
          name="item"
          :isSelected="isSelected"
          :toggle="toggle"
          :item="item"
        />
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const model = ref(null);
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
}
</style>