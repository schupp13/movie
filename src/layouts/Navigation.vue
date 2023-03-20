<template>
  <v-layout>
    <app-bar v-model:drawer="drawer"></app-bar>
    <!-- <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer> -->

    <v-main class="container">
      <v-container>
        <default-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import AppBar from "./default/AppBar.vue";
import DefaultView from "./default/View";
const drawer = ref(false);
const group = ref(null);
const items = ref([
  {
    title: "Movie",
    value: "foo",
  },
  {
    title: "TV Shows",
    value: "bar",
  },
  {
    title: "Actors",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);

watch(group, async () => {
  drawer.value = false;
});
</script>

<style lang="scss" scoped>
</style>
