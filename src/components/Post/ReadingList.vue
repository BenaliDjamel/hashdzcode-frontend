<template>
  <section class="mt-8">
    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-16 lg:gap-10">
      <div class="hidden md:block md:col-span-1">
        <div class="fixed md:w-58 xl:w-64">
          <h1 class="mb-6 text-2xl font-medium text-gray-800">
            Reading list(45)
          </h1>

          <ul class="overflow-y-auto h-64">
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #Laravel
            </li>
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #react
            </li>
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #vue
            </li>
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #graphql
            </li>
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #nodejs
            </li>
            <li
              class="text-md text-gray-900 mb-2 cursor-pointer hover:bg-gray-300 hover:text-blue-600 px-2 py-2 rounded-md"
            >
              #tailwind
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-4 md:col-span-3">
        <div class="flex md:justify-end">
          <div class="pt-2 relative mb-4 text-gray-600 w-full md:w-auto">
            <input
              class="border-2 border-gray-300 bg-white h-12 px-5 w-full md:w-auto pr-10 md:pr-20 rounded-lg text-sm focus:outline-none"
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
        </div>

        <div class="shadow bg-white px-2 sm:px-4 py-4 rounded-md">
          <div
            class="flex items-start justify-items-start mb-8 border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-start justify-items-start mb-8 border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-start justify-items-start mb-8 border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-start justify-items-start mb-8 border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-start justify-items-start mb-8 border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-start justify-items-start border border-gray-300 px-1 sm:px-4 py-6 rounded-md"
          >
            <img
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1
                class="text-gray-800 text-xs md:text-base font-bold mr-2 cursor-pointer hover:text-blue-600"
              >
                10 Useful Vanilla Javascript Plugins 2021
              </h1>

              <div class="flex items-center">
                <h1
                  class="text-gray-700 text-xs md:text-md font-medium text-center mr-2 cursor-pointer hover:text-blue-600"
                >
                  Benali Djamel
                </h1>
                <div class="text-gray-600 mr-1">•</div>
                <p class="text-gray-600 text-xs md:text-md text-center mr-2">
                  14 hours ago
                </p>
                <div class="text-gray-600 mr-1">•</div>
                <ul class="hidden sm:flex sm:flex-row">
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #Laravel
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #react
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #vue
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #graphql
                  </li>
                  <li
                    class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                  >
                    #nodejs
                  </li>
                </ul>
              </div>
              <ul class="flex flex-wrap mt-2 sm:hidden">
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #Laravel
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #react
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #vue
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #graphql
                </li>
                <li
                  class="text-xs text-gray-600 cursor-pointer hover:text-blue-600 mr-2 rounded-md"
                >
                  #nodejs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>