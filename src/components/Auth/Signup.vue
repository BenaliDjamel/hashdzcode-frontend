<template>
  <section class="mt-6">
    <div class="flex items-center justify-center ">
      <form
        class="w-full lg:w-2/6 bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-8">
          <h1 class="font-bold text-gray-800 text-2xl text-center">
            HashDzCode
          </h1>
          <p class="text-xs font-semibold text-center text-gray-600">
            Create account
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
          <label class="block text-gray-700 text-sm mb-2" for="firstName">
            FirstName
          </label>
          <input
            v-model.trim="$v.user.firstname.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your firstName"
          />
          <div v-if="$v.user.firstname.$dirty">
            <span
              v-if="!$v.user.firstname.required"
              class="text-red-500 text-xs italic"
              >The Firstname is required.</span
            >
            <span
              v-if="!$v.user.firstname.minLength"
              class="text-red-500 text-xs italic"
              >The Firstname must be at least 3 characters.</span
            >
             <span
              v-if="!$v.user.firstname.maxLength"
              class="text-red-500 text-xs italic"
              >The Firstname may not be greater than 10 characters.</span
            >
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="lastName">
            LastName
          </label>
          <input
            v-model.trim="$v.user.lastname.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your lastName"
          />
          <div v-if="$v.user.lastname.$dirty">
            <span
              v-if="!$v.user.lastname.required"
              class="text-red-500 text-xs italic"
              >The Lastname is required.</span
            >
            <span
              v-if="!$v.user.lastname.minLength"
              class="text-red-500 text-xs italic"
              >The Lastname must be at least 3 characters.</span
            >
             <span
              v-if="!$v.user.lastname.maxLength"
              class="text-red-500 text-xs italic"
              >The Lastname may not be greater than 10 characters.</span
            >
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="password">
            Password
          </label>
          <input
            v-model.trim="$v.user.password.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
         <div class="">
          <label class="block text-gray-700 text-sm mb-2" for="confirm-password">
            Password Confirmation
          </label>
          <input
            v-model.trim="$v.user.passwordConfirmation.$model"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm password"
          />
          <div v-if="$v.user.passwordConfirmation.$dirty">
              <span
              v-if="!$v.user.passwordConfirmation.required"
              class="text-red-500 text-xs italic"
              >The Password confirmation is required.</span
            >
            <span
              v-if="$v.user.passwordConfirmation.required && !$v.user.passwordConfirmation.sameAs"
              class="text-red-500 text-xs italic"
              >The Password confirmation does not match</span
            >
          
          </div>
        </div>
        <div class="flex mb-8">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2 text-xs text-gray-600">Remember me</span>
          </label>
        </div>

        <button
        @click.prevent="submit"
          class="w-full bg-blue-base hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign up
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { required, email, sameAs, minLength, maxLength } from "vuelidate/lib/validators";
import {extractErrorsForDisplay} from "../../helpers/extractErrorsForDisplay"

export default {
  data() {
    return {
      user: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        passwordConfirmation:""
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
      firstname: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(10),
      },
      lastname: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(10),
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirmation: {
        required,
        sameAs:sameAs('password')
      }
    },
  },

  methods: {
    async submit() {
      this.$v.$touch();
      try {
        if (!this.$v.$invalid) {
          console.log("submit!");
          const user = {
            email: this.user.email,
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            password: this.user.password,
            password_confirmation: this.user.passwordConfirmation
          }
          await this.$store.dispatch("auth/signup", user);         
          await this.$store.dispatch("auth/login", user);
          this.$router.push("/feed");
        }
      } catch (error) {
      console.log("🚀 ~ file: Signup.vue ~ line 233 ~ submit ~ error", error)
      
        this.errorsForm = extractErrorsForDisplay(error);
      }
    },

  },
};
</script>