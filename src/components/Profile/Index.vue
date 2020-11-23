<template>
  <div>
    <!--start profile-->
    <section>
      <div class="">
        <img src="../../assets/1500x500.jpg" alt="" srcset="" />

        <div class="w-full pt-1 pb-5">
          <div class="hidden sm:flex sm:justify-end md:mt-3">
            <router-link
              to="/profile/edit"
              class="bg-blue-base px-2 text-sm md:px-2 py-2 mb-2 rounded md:font-medium lg:mt-0 text-white"
            >
              Edit Profile
            </router-link>
          </div>
          <div
            class="rounded-full w-16 h-16 sm:w-24 sm:h-24 -mt-10 sm:-mt-24 mx-auto shadow-lg"
          >
            <img
              class="rounded-full w-16 h-16 sm:w-24 sm:h-24"
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt=""
            />
          </div>

          <h1 class="text-2xl text-center font-bold text-gray-900 mt-4 md:mt-3">
            Benali djamel
          </h1>
          <p class="text-center text-sm text-gray-700 mt-2">
            [Developer, Thinker, Confident, Advisor , Calm, Introvert, Leader,
            Observer, Learner,Sufism, null]
          </p>
          <div class="md:hidden mt-4 text-center">
            <a
              href="https://www.facebook.com/manelbi.lajed"
              target="_blank"
              class="inline-block bg-white rounded-full mr-2 cursor-pointer"
            >
              <img
                class="w-6 h-6 rounded"
                src="../../assets/facebook.svg"
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <a
              href="https://twitter.com/benalidjamel6"
              target="_blank"
              class="inline-block bg-white rounded-full mr-2 cursor-pointer"
            >
              <img
                class="w-6 h-6 rounded"
                src="../../assets/twitterblue.svg"
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/djamel-benali-68269b149/"
              target="_blank"
              class="inline-block rounded-full mr-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
                  />
                </g>
              </svg>
            </a>
            <div class="flex justify-center sm:hidden mt-4">
              <router-link
                to="/profile/edit"
                class="bg-blue-base px-2 text-sm py-2 mb-2 rounded md:font-medium lg:mt-0 text-white"
              >
                Edit Profile
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end profile-->

    <!--start content section-->
    <section class="mt-10">
        <div class="mb-4">
          <div class="grid grid-cols-3 gap-4 justify-items-stretch">
            <div class="hidden md:block md:col-span-1">
              <div class="shadow bg-white rounded px-4 py-4 h-auto mb-4">
                <div class="mb-2">
                  <h1 class="text-gray-600 font-normal">
                    Location:
                    <span class="text-gray-800">Sougueur tiaret algeria.</span>
                  </h1>
                </div>
                <div>
                  <h1 class="text-gray-600 font-normal">
                    Joined: <span class="text-gray-800">March 26, 2018.</span>
                  </h1>
                </div>

                <div class="mt-6">
                  <div class="text-gray-600 font-normal mb-4">Links:</div>

                  <a
                    href="https://www.facebook.com/manelbi.lajed"
                    target="_blank"
                    class="inline-block bg-white rounded-full mr-2 cursor-pointer"
                  >
                    <img
                      class="w-6 h-6 rounded"
                      src="../../assets/facebook.svg"
                      alt="Avatar of Jonathan Reinink"
                    />
                  </a>
                  <a
                    href="https://twitter.com/benalidjamel6"
                    target="_blank"
                    class="inline-block bg-white rounded-full mr-2 cursor-pointer"
                  >
                    <img
                      class="w-6 h-6 rounded"
                      src="../../assets/twitterblue.svg"
                      alt="Avatar of Jonathan Reinink"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/djamel-benali-68269b149/"
                    target="_blank"
                    class="inline-block bg-white rounded-full mr-2 cursor-pointer"
                  >
                    <img
                      class="w-6 h-6 rounded"
                      src="../../assets/linkedin.svg"
                      alt="Avatar of Jonathan Reinink"
                    />
                  </a>
                </div>
              </div>

              <div class="shadow bg-white rounded px-4 py-4 h-auto mb-4">
                <div class="flex justify-start">
                  <div class="mr-10">
                    <h1 class="text-gray-600">Followers</h1>
                    <h1 class="font-bold text-xl text-gray-700">242</h1>
                  </div>

                  <div>
                    <h1 class="text-gray-600">Following</h1>
                    <h1 class="font-bold text-xl text-gray-700">71</h1>
                  </div>
                </div>
              </div>

              <div class="shadow bg-white rounded px-4 py-4 h-auto">
                 <h1 class=" text-gray-600 mb-2"> My Tech Stack</h1>
                <ul class="flex flex-wrap">
                  <li class="font-medium text-sm text-gray-700 mr-2">#Laravel</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#react</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#vue</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#javascript</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#Laravel</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#Laravel</li>
                  <li class="font-medium text-sm text-gray-700 mr-2">#Laravel</li>
                </ul>
              </div>
            </div>

            <div class="col-span-3 md:col-span-2">
              <!--  <div class="shadow hidden md:block bg-white rounded  lg:px-20  mb-6">
              <div class="flex flex-row justify-between">
                <div class="text-gray-700 text-xs md:text-sm font-medium cursor-pointer  md:px-4 py-2 m-2">Profile</div>
                <div class="text-gray-700 text-xs md:text-sm font-medium cursor-pointer md:px-4 py-2 m-2">Followers
                </div>
                <div class="text-gray-700 text-xs md:text-sm font-medium cursor-pointer md:px-4 py-2 m-2">Following
                </div>
                <div class="text-gray-700 text-xs md:text-sm font-medium cursor-pointer md:px-4 py-2 m-2">Filter</div>
              </div>
            </div> -->

              <div
                class="shadow rounded hidden md:block bg-white md:border-b mb-6"
              >
                <div class="container mx-auto px-4">
                  <div class="md:flex">
                    <div class="flex -mb-px mr-3 lg:mr-8">
                      <a
                        href="#"
                        class="no-underline text-gray-700 md:text-blue-base flex items-center py-4 border-b border-blue-base"
                      >
                        <svg
                          class="h-6 w-6 mr-2"
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
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          ></path>
                          <circle cx="12" cy="7" r="4"></circle></svg
                        >Profile
                      </a>
                    </div>
                    <div class="flex -mb-px mr-4 lg:mr-8">
                      <a
                        href="#"
                        class="no-underline text-gray-700 opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                      >
                        <svg
                          class="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#454545"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          ></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Followers
                      </a>
                    </div>
                    <div class="flex -mb-px mr-4 lg:mr-8">
                      <a
                        href="#"
                        class="no-underline text-gray-700 opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                      >
                        <svg
                          class="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#454545"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          ></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <polyline points="17 11 19 13 23 9"></polyline>
                        </svg>
                        Following
                      </a>
                    </div>
                    <div class="flex -mb-px mr-4 lg:mr-8">
                      <a
                        href="#"
                        class="no-underline text-gray-700 opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                      >
                        Filter<svg
                          class="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#454545"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!--start show filter dropdown in xs to md size -->
              <div class="md:hidden relative text-left flex justify-end mb-2">
                <div>
                  <span class="rounded-md shadow-sm">
                    <button
                      type="button"
                      class="inline-flex justify-center w-auto mr-2 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Profile
                      <!-- Heroicon name: chevron-down -->
                      <svg
                        class="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div>
                  <span class="rounded-md shadow-sm">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      New
                      <!-- Heroicon name: chevron-down -->
                      <svg
                        class="-mr-1 ml-2 h-5 w-5"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="currentColor"
                      >
                        <g>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </span>
                </div>

                <!-- <div class=" absolute mt-10 w-40 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem">Best</a>
                    <a href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem">Feature</a>
                  </div>
                </div>
              </div> -->

                <!--  <div class=" absolute mt-10 w-40 mr-32 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem">Profile</a>
                    <a href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem">Following</a>
                    <a href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem">Followers</a>
                   
                  </div>
                </div>
              </div> -->
              </div>
              <!--end show dropdown in xs to md size -->

              <!--start show dropdown in xs to md size -->
              <!-- <div class="md:hidden relative text-left flex justify-end">
               
              </div> -->
              <!--end show filter dropdown in xs to md size -->

              <div
                class="px-4 py-4 mb-4 bg-white shadow-md rounded-lg cursor-pointer"
              >
                <div class="py-2 flex flex-row items-center justify-between">
                  <div class="flex flex-row items-center">
                    <a
                      href="#"
                      class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <img
                        class="rounded-full h-12 w-12 object-cover"
                        src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <p class="ml-4 text-base font-medium">Benali Djamel</p>
                        <p class="ml-4 text-gray-700 text-xs">
                          Published on 27 sep 2020
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="flex flex-row items-center -mt-6">
                    <p class="font-bold text-gray-700 cursor-pointer">
                      <i class="fas fa-ellipsis-h"></i>
                    </p>
                  </div>
                </div>
                <div class="py-2 w-4/5">
                  <p class="font-bold text-gray-900">
                    What's the best alternative to indexOf() d dqdfqs for
                    checking existence of element in an array erfs ze zer
                    zaerazr az ?
                  </p>
                  <p class="mt-4 text-gray-800">
                    In most languages, indexOf() returns -1 if element is not
                    found, which IMO is a bit counter productive. What's the
                    best alternative to this...
                  </p>
                </div>

                <div class="mt-4">
                  <div class="py-2 flex flex-row items-center">
                    <button
                      class="flex text-gray-700 flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-5 h-5"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      <span class="ml-1 font-medium text-xs">34</span>
                    </button>
                    <button
                      class="flex text-gray-700 flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-10"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-5 h-5"
                      >
                        <path
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      <span class="ml-1 font-medium text-xs">566</span>
                    </button>
                    <button
                      class="flex flex-row text-gray-800 text-lg ml-auto items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <i class="far fa-bookmark"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="px-4 py-4 bg-white shadow-md rounded-lg cursor-pointer"
              >
                <div class="py-2 flex flex-row items-center justify-between">
                  <div class="flex flex-row items-center">
                    <a
                      href="#"
                      class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <img
                        class="rounded-full h-12 w-12 object-cover"
                        src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <p class="ml-4 text-base font-medium">Benali Djamel</p>
                        <p class="ml-4 text-gray-700 text-xs">27 sep 2020</p>
                      </div>
                    </a>
                  </div>

                  <div class="flex flex-row items-center -mt-6">
                    <p class="font-bold text-gray-700 cursor-pointer">
                      <i class="fas fa-ellipsis-h"></i>
                    </p>
                  </div>
                </div>
                <div class="py-2 w-4/5">
                  <p class="font-bold text-gray-900">
                    What's the best alternative to indexOf() d dqdfqs for
                    checking existence of element in an array erfs ze zer
                    zaerazr az ?
                  </p>
                  <p class="mt-4 text-gray-800">
                    In most languages, indexOf() returns -1 if element is not
                    found, which IMO is a bit counter productive. What's the
                    best alternative to this...
                  </p>
                </div>

                <div class="mt-4">
                  <div class="py-2 flex flex-row items-center">
                    <button
                      class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <svg
                        fill="#EF5050"
                        stroke="#EF5050"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-5 h-5"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      <span class="ml-1 font-medium text-gray-700 text-xs"
                        >34</span
                      >
                    </button>
                    <button
                      class="flex text-gray-700 flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-10"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-5 h-5"
                      >
                        <path
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      <span class="ml-1 font-medium text-xs">44</span>
                    </button>
                    <button
                      class="flex flex-row text-gray-700 text-lg ml-auto items-center focus:outline-none focus:shadow-outline rounded-lg"
                    >
                      <i class="fas fa-bookmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>

    <!--end content section-->
  </div>
</template>