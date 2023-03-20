<template>
  <v-dialog v-model="dialog" width="auto" max-width="800">
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-play-box"
        v-bind="props"
        color="cyan-darken-3"
        size="tiny"
      />
    </template>

    <v-card class="movie-card-trailer">
      <div class="movie-trailer">
        <iframe :src="source" allowFullScreen="true" title="title"></iframe>
      </div>
      <v-card-text v-bind="props">
        {{ description }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="dialog = false">CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  description: {
    type: String,
  },
  itemId: {
    type: Number,
  },
  title: {
    type: String,
  },
});
const dialog = ref(false);
const source = `https://www.youtube.com/embed/${props.itemId}`;

const getDiscription = computed(() => {
  return !props.description
    ? "More Info"
    : props.description.length > 50
    ? `${props.description.slice(0, 50)}...`
    : props.description;
});

mounted(() => {});
</script>

<style lang="scss" scoped>
.movie-card-trailer {
}
</style>