<template>
  <v-card elevation="24" outlined class="login-card">
    <v-card-title class="text-center text-grey-darken-3">Login</v-card-title>
    <v-form v-model="valid" ref="login" fast-fail @submit.prevent="loginUser">
      <v-container class="pa-6">
        <v-row>
          <v-text-field
            v-model.trim="email"
            :rules="emailRules"
            autofocus
            prepend-icon="mdi-email"
            label="E-mail"
            :clearable="true"
            density="compact"
            :error-messages="errors['email'] ? errors['email'][0] : ''"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            prepend-icon="mdi-lock"
            v-model.trim="password"
            :rules="passwordRules"
            :clearable="true"
            density="compact"
            label="Password"
            type="password"
            :error-messages="errors.password ? errors.password[0] : ''"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-col cols="6" md="6">
            <v-btn @click="reset" class="w-full" min-width="100%">
              RESET
            </v-btn>
          </v-col>
          <v-col cols="6" md="6">
            <v-btn
              :disabled="!valid"
              type="submit"
              class="w-full"
              min-width="100%"
            >
              SUBMIT
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { ref } from "vue";
const valid = ref(false);
const login = ref();
const errors = ref([]);

const email = ref("");
const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+/.test(v) || "E-mail must be valid",
];
const password = ref("");
const passwordRules = [
  (v) => !!v || "Password Required",
  //   (v) =>
  //     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
  //     "Minimum eight characters, at least one letter and one number",
];

const userStore = useUserStore();
const loginUser = async () => {
  const loginValidation = await validate();
  if (loginValidation.valid) {
    try {
      const response = await userStore.loginUser({
        email: email.value,
        password: password.value,
      });
      userStore.user = response.data;
    } catch (e) {
      errors.value = e.response.data.errors;
    }
  } else {
  }
};

const validate = () => {
  return login.value.validate();
};
const reset = () => {
  login.value.reset();
};
</script>

<style lang="scss" scoped>
.login-card {
  min-width: 100%;
}
</style>
