<template>
  <div class="landing-card">
    <div class="flip-card-inner">
      <div v-if="login" class="flip-card-front">
        <LoginForm />
      </div>
      <div v-else class="flip-card-back">
        <RegisterForm />
      </div>
    </div>
    <div class="actions text-subtitle-1 rounded-sm pa-2 hover-pointer mb-10">
      <p v-if="login" @click="login = false">Or sign up here!</p>
      <p v-else @click="login = true">Already a memeber? Login here</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "../forms/LoginForm.vue";
import RegisterForm from "@/components/forms/RegisterForm.vue";

const login = ref(true);
</script>

<style scoped>
.actions {
  background-color: rgba(255, 255, 255, 0.6);
}
.actions:hover {
  cursor: pointer;
}
</style>
