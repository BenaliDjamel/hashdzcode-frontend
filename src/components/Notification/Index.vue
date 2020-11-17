<template>
  <div class="mt-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="hidden md:block col-span-1">
        <div class="divide-y divide-gray-400 fixed w-1/4">
          <ul class="mb-10">
            <h1 class="mb-10 text-2xl font-medium text-gray-800">
              Notifications
            </h1>
            <li
              class="bg-white rounded px-2 py-2 text-lg font-medium mb-2 cursor-pointer"
            >
              All
            </li>
            <li class="px-2 py-2 text-sm mb-2 cursor-pointer">Posts</li>
            <li class="px-2 py-2 text-sm mb-2 cursor-pointer">Comments</li>
          </ul>

          <div class="pt-10 px-2">
            <h1 class="font-medium text-gray-800 cursor-pointer">Settings</h1>
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <div class="flex justify-between items-start md:hidden">
          <h1 class="mb-10 text-xl font-bold md:font-medium text-gray-800">
            Notifications
          </h1>

          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <svg
              class="mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
            Settings
          </button>
        </div>

        <div class="flex justify-around bg-white border-b mb-2 md:hidden">
          <div class="flex -mb-px mr-3">
            <a
              href="#"
              class="no-underline font-medium text-blue-base flex items-center py-4 border-b-2 border-blue-base"
            >
              All
            </a>
          </div>
          <div class="flex -mb-px mr-4">
            <a
              href="#"
              class="no-underline text-gray-700 opacity-50 flex items-center py-4 border-b border-transparent hover:opacity-100"
            >
              Posts
            </a>
          </div>
          <div class="flex -mb-px mr-4">
            <a
              href="#"
              class="no-underline text-gray-700 opacity-50 flex items-center py-4 border-b border-transparent hover:opacity-100"
            >
              Comments
            </a>
          </div>
        </div>
        <div class="shadow bg-white rounded-md px-4 py-8 mb-4">
          <div class="flex items-start justify-items-start">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1 class="text-gray-800 text-xs md:text-base font-bold mr-2">
                Benali Djamel
              </h1>
              <p class="text-gray-600 text-xs md:text-sm">14 hours ago</p>
            </div>

            <p class="text-gray-600 text-xs sm:text-base mr-2">
              made a new post
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7174E2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
          </div>

          <div class="border rounded-md border-gray-300 px-4 mt-4 py-4">
            <div class="cursor-pointer">
              <h1 class="text-gray-800 hover:text-blue-600 font-bold text-lg">
                What I learned from these 4 legends during the Hashnode bootcamp
              </h1>
              <div class="flex mt-2">
                <div class="">
                  <span class="text-sm text-gray-700 mr-1">#Laravel</span>
                  <span class="text-sm text-gray-700 mr-1">#react</span>
                  <span class="text-sm text-gray-700 mr-1">#vue</span>
                  <span class="text-sm text-gray-700 mr-1">#graphql</span>
                  <span class="text-sm text-gray-700 mr-1">#nodejs</span>
                  <span class="text-sm text-gray-700 mr-1">#tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <button
                class="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div class="shadow bg-white rounded-md px-4 py-8 mb-4">
          <div class="flex items-start justify-items-start">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/26.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1 class="text-gray-800 text-xs md:text-base font-bold mr-2">
                Ayat Ahmed Amine
              </h1>
              <p class="text-gray-600 text-xs md:text-sm">14 hours ago</p>
            </div>
            <p class="text-gray-600 text-xs sm:text-base mr-2">
              commented on post
            </p>
            <div>
              <svg
                fill="none"
                stroke="#7174E2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="border rounded-md border-gray-300 px-4 mt-4 py-4">
            <div class="cursor-pointer">
              <h1 class="text-gray-800 hover:text-blue-600 font-bold text-lg">
                How Machine Learning gives you an edge in System Design
              </h1>
              <div class="flex mt-2">
                <div class="">
                  <span class="text-sm text-gray-700 mr-1">#Laravel</span>
                  <span class="text-sm text-gray-700 mr-1">#react</span>
                  <span class="text-sm text-gray-700 mr-1">#vue</span>
                  <span class="text-sm text-gray-700 mr-1">#graphql</span>
                  <span class="text-sm text-gray-700 mr-1">#nodejs</span>
                  <span class="text-sm text-gray-700 mr-1">#tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <button
                class="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div class="shadow bg-white rounded-md px-4 py-8 mb-4">
          <div class="flex items-start justify-items-start">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/24.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1 class="text-gray-800 text-xs md:text-base font-bold mr-2">
                Benali Islam
              </h1>
              <p class="text-gray-600 text-xs md:text-sm">14 hours ago</p>
            </div>
            <p class="text-gray-600 text-xs sm:text-base">made a new post</p>
          </div>

          <div class="border rounded-md border-gray-300 px-4 mt-4 py-4">
            <div class="cursor-pointer">
              <h1 class="text-gray-800 hover:text-blue-600 font-bold text-lg">
                💾 Review 31: Portfolios and new projects!! | #elefDoesCode
              </h1>
              <div class="flex mt-2">
                <div class="">
                  <span class="text-sm text-gray-700 mr-1">#Laravel</span>
                  <span class="text-sm text-gray-700 mr-1">#react</span>
                  <span class="text-sm text-gray-700 mr-1">#vue</span>
                  <span class="text-sm text-gray-700 mr-1">#graphql</span>
                  <span class="text-sm text-gray-700 mr-1">#nodejs</span>
                  <span class="text-sm text-gray-700 mr-1">#tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <button
                class="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div class="shadow bg-white rounded-md px-4 py-8 mb-4">
          <div class="flex items-start justify-items-start">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1 class="text-gray-800 text-xs md:text-base font-bold mr-2">
                Zebidi Aymen
              </h1>
              <p class="text-gray-600 text-xs md:text-sm">14 hours ago</p>
            </div>
            <p class="text-gray-600 text-xs sm:text-base">made a new post</p>
          </div>

          <div class="border rounded-md border-gray-300 px-4 mt-4 py-4">
            <div class="cursor-pointer">
              <h1 class="text-gray-800 hover:text-blue-600 font-bold text-lg">
                Have you ever code when you were high? 🥃🤪
              </h1>
              <div class="flex mt-2">
                <div class="">
                  <span class="text-sm text-gray-700 mr-1">#Laravel</span>
                  <span class="text-sm text-gray-700 mr-1">#react</span>
                  <span class="text-sm text-gray-700 mr-1">#vue</span>
                  <span class="text-sm text-gray-700 mr-1">#graphql</span>
                  <span class="text-sm text-gray-700 mr-1">#nodejs</span>
                  <span class="text-sm text-gray-700 mr-1">#tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <button
                class="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div class="shadow bg-white rounded-md px-4 py-8 mb-4">
          <div class="flex items-start justify-items-start">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="flex flex-col">
              <h1 class="text-gray-800 text-xs md:text-base font-bold mr-2">
                Idir Noha
              </h1>
              <p class="text-gray-600 text-xs md:text-sm">14 hours ago</p>
            </div>
            <p class="text-gray-600 text-xs sm:text-base">made a new post</p>
          </div>

          <div class="border rounded-md border-gray-300 px-4 mt-4 py-4">
            <div class="cursor-pointer">
              <h1 class="text-gray-800 hover:text-blue-600 font-bold text-lg">
                Writing My Own Boot Loader
              </h1>
              <div class="flex mt-2">
                <div class="">
                  <span class="text-sm text-gray-700 mr-1">#Laravel</span>
                  <span class="text-sm text-gray-700 mr-1">#react</span>
                  <span class="text-sm text-gray-700 mr-1">#vue</span>
                  <span class="text-sm text-gray-700 mr-1">#graphql</span>
                  <span class="text-sm text-gray-700 mr-1">#nodejs</span>
                  <span class="text-sm text-gray-700 mr-1">#tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <button
                class="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>