<template>
  <!--start content section-->
  <section class="my-10">
    <!-- component -->
    <!-- This is an example component -->
    <div class="pt-2 relative mb-20 mt-10 text-gray-600 text-center">
      <input
        class="border-2 border-gray-300 bg-white h-12 w-1/2 px-5 pr-10 md:pr-20 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" class="absolute top-0 mt-6 -ml-8">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </div>

    <div class="">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="shadow bg-white rounded-md px-4 py-4 relative border-l-8 border-blue-600"
        >
          <div class="flex justify-between items-start relative">
            <h1 class="text-gray-800 text-2xl font-medium mb-5">#react</h1>
            <button
              class="bg-gray-300 px-3 py-1 rounded text-gray-700 font-semibold"
            >
              Follow
            </button>
          </div>
          <p class="text-gray-700 text-md mb-12">
            We want the layout of the page to resemble a column where the
            flex-items are arranged from top to bottom. By default, flexbox
            arranges flex-items horizontally in a row from left to right.
          </p>
          <div class="absolute left-3 bottom-0 flex">
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4 mr-2 md:mr-4"
            >
              2714 posts published
            </h1>
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4"
            >
              121 followers
            </h1>
          </div>
        </div>

        <div
          class="shadow bg-white rounded-md px-4 py-4 relative border-l-8 border-red-600"
        >
          <div class="flex justify-between items-start relative">
            <h1 class="text-gray-800 text-2xl font-medium mb-5">#laravel</h1>
            <button
              class="bg-gray-300 px-3 py-1 rounded text-gray-700 font-semibold"
            >
              Follow
            </button>
          </div>
          <p class="text-gray-700 text-md mb-12">
            We want the layout of the page to resemble a column where the
            flex-items are arranged from top to bottom. By default, flexbox
            arranges flex-items horizontally in a row from left to right.
          </p>
          <div class="absolute left-3 bottom-0 flex">
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4 mr-2 md:mr-4"
            >
              2714 posts published
            </h1>
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4"
            >
              121 followers
            </h1>
          </div>
        </div>

        <div
          class="shadow bg-white rounded-md px-4 py-4 relative border-l-8 border-green-600"
        >
          <div class="flex justify-between items-start relative">
            <h1 class="text-gray-800 text-2xl font-medium mb-5">#vue</h1>
            <button
              class="bg-gray-300 px-3 py-1 rounded text-gray-700 font-semibold"
            >
              Follow
            </button>
          </div>
          <p class="text-gray-700 text-md mb-12 w-11/12">
            We want the layout of the page to resemble a column where the
            flex-items are arranged from top to bottom. By default, flexbox
            arranges flex-items horizontally in a row from left to right.
          </p>
          <div class="absolute left-3 bottom-0 flex">
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4 mr-2 md:mr-4"
            >
              789 posts published
            </h1>
            <h1
              class="text-gray-700 bg-gray-200 px-1 sm:px-2 py-1 rounded-full font-medium text-xs mb-4"
            >
              369 followers
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--end content section-->
</template>