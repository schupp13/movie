<template>
  <v-card elevation="24" outlined class="register-card">
    <v-card-title class="text-center text-grey-darken-3">Register</v-card-title>
    <v-form
      v-model="valid"
      ref="register"
      fast-fail
      @submit.prevent="registerUser"
    >
      <v-container class="pa-6">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstName"
              autofocus
              :rules="firstNameRules"
              label="First Name"
              :clearable="true"
              density="compact"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastName"
              :rules="lastNameRules"
              label="Last Name"
              :clearable="true"
              density="compact"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="email"
              :rules="emailRules"
              label="E-mail"
              :clearable="true"
              density="compact"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="password"
              :rules="passwordRules"
              :clearable="true"
              density="compact"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="confirmPassword"
              :rules="confirmPasswordRules"
              :clearable="true"
              density="compact"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>
          </v-col>
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
const register = ref();

const firstName = ref("");
const firstNameRules = [(v) => !!v || "E-mail is required"];

const lastName = ref("");
const lastNameRules = [(v) => !!v || "E-mail is required"];

const email = ref("");
const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+/.test(v) || "E-mail must be valid",
];
const password = ref("");
const passwordRules = [
  (v) => !!v || "Password Required",
  (v) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
    "Minimum eight characters, at least one letter and one number",
];
const confirmPassword = ref("");
const confirmPasswordRules = [
  (v) => !!v || "Confirm Password Required",
  (v) => v === password.value || "Passwords Must Match",
];

const userStore = useUserStore();
const registerUser = () => {
  userStore.registerUser(form);
};

const validate = () => {
  form.value.validate();
};
const reset = () => {
  register.value.reset();
};
</script>

<style lang="scss" scoped>
.register-card {
  min-width: 100%;
}
</style>
