<template>
  <section>
    <div class="flex items-center justify-center mt-6">
      <form
        class="w-full lg:w-2/6 bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-8">
          <h1 class="font-bold text-gray-800 text-2xl text-center">
            HashDzCode
          </h1>
          <p class="text-xs font-semibold text-center text-gray-600">
            Login to your account
          </p>
        </div>

        <ul class="mb-4">
          <li
            class="block text-red-500 text-sm mb-2"
            v-for="(error, key) of errorsForm"
            :key="key"
          >
            {{ error }}
          </li>
        </ul>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="email">
            Email
          </label>
          <input
            v-model.trim="$v.user.email.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
          <div v-if="$v.user.email.$dirty">
            <span
              v-if="!$v.user.email.required"
              class="text-red-500 text-xs italic"
              >The Email is required.</span
            >
            <span
              v-if="!$v.user.email.email"
              class="text-red-500 text-xs italic"
              >The email must be a valid email address.</span
            >
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="password">
            Password
          </label>
          <input
            v-model.trim="$v.user.password.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <div v-if="$v.user.password.$dirty">
            <span
              v-if="!$v.user.password.required"
              class="text-red-500 text-xs italic"
              >The Password is required.</span
            >
            <span
              v-if="!$v.user.password.minLength"
              class="text-red-500 text-xs italic"
              >The password must be at least 6 characters.</span
            >
          </div>
        </div>
        <div class="flex mb-8">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" />
            <span class="ml-2 text-xs text-gray-600">Remember me</span>
          </label>
        </div>

        <button
          @click.prevent="submit"
          class="w-full bg-blue-base hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-8"
          type="button"
        >
          Login
        </button>
        <a
          class="block text-center text-blue-base text-sm hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </form>
    </div>
  </section>
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { extractErrorsForDisplay } from "../../helpers/extractErrorsForDisplay";

import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorsForm: "",
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      try {
        if (!this.$v.$invalid) {
          console.log("submit!");
          await this.$store.dispatch("auth/login", this.user);
          this.$router.push("/feed");
        }
      } catch (error) {
        this.errorsForm = extractErrorsForDisplay(error);
      }
    },
  },
};
</script>
