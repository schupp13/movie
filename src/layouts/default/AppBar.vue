<template>
  <v-app-bar prominent :elevation="10">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <!-- <v-app-bar-nav-icon
      variant="text"
      @click.stop="$emit('update:drawer', !drawer)"
    ></v-app-bar-nav-icon> -->

    <v-toolbar-title>Movie Feed</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-divider vertical></v-divider>
    <v-btn variant="text">Movies</v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text">Tv</v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text">Actors</v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text" icon="mdi-archive-search-outline"></v-btn>
    <v-divider vertical></v-divider>

    <v-btn @click="toggleTheme" variant="text" icon="mdi-theme-light-dark">
      <v-tooltip activator="parent" location="bottom">
        Theme in {{ theme.global.current.value.dark ? "light" : "dark" }} Mode
      </v-tooltip>
    </v-btn>
    <v-btn variant="text" icon="mdi-account"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { onMounted } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
// set theme

onMounted(() => {
  if (localStorage.getItem("movieFeedTheme") === null) {
    localStorage.setItem("movieFeedTheme", theme.global.name.value);
    theme.global.name.value = localStorage.getItem("movieFeedTheme");
  } else {
    theme.global.name.value = localStorage.getItem("movieFeedTheme");
  }
});

defineEmits(["update:drawer"]);
const props = defineProps(["drawer"]);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  localStorage.setItem("movieFeedTheme", theme.global.name.value);
}
defineExpose({
  toggleTheme,
});
//
</script>
