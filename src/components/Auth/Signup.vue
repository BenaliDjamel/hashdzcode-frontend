<template>
  <section>
    <div class="flex items-center justify-center h-screen">
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

        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div class="">
          <label class="block text-gray-700 text-sm mb-2" for="password">
            Password
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <!--  <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex mb-8">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2 text-xs text-gray-600">Remember me</span>
          </label>
        </div>

        <button
          class="w-full bg-blue-base hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign up
        </button>
      </form>
    </div>
  </section>
</template>