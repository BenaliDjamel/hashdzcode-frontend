<template>
  <section class="mt-2">
    <div class="grid grid-cols-5 gap-2">
      <div
        class="hidden md:block md:col-span-1 overflow-y-auto h-100"
        id="chat-friend-scroll"
      >
        <ul class="flex flex-col">
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center bg-gray-300 px-3 py-4 rounded-md">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/women/29.jpg"
                alt=""
              />
              <div class="text-gray-700 text-sm font-medium">Benali Angham</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Benali Djamel</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">
                Ayat Ahmed Amine
              </div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Zebidi Aymen</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">
                Bentaleb Youssouf
              </div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">
                Ismmail Mostapha
              </div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">
                Bekhikh Djamel
              </div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Saadon Imad</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Benali Sofian</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">
                Benali Ghorab Amine
              </div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Benali Djamel</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Benali Djamel</div>
            </div>
          </li>
          <li class="mb-4 cursor-pointer">
            <div class="flex items-center px-2">
              <img
                class="w-8 h-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt=""
              />
              <div class="text-gray-600 text-sm font-normal">Benali Djamel</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="col-span-5 md:col-span-4">
        <div class="shadow bg-white rounded-md py-3 h-auto">
          <div class="divide-y divide-gray-300">
            <div class="flex justify-between items-center mb-4 px-4">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-2"
                  src="https://randomuser.me/api/portraits/men/17.jpg"
                  alt=""
                />
                <div class="text-gray-700 text-md font-medium">
                  Benali Djamel
                </div>
              </div>
              <div class="flex flex-row">
                <p class="font-bold text-gray-700 cursor-pointer">
                  <i class="fas fa-ellipsis-h"></i>
                </p>
              </div>
            </div>

            <div class="overflow-y-auto h-70 px-4 mb-4" id="chat-scroll">
              <div class="flex justify-start py-3">
                <div class="flex items-end">
                  <img
                    class="w-8 h-8 rounded-full mr-2"
                    src="https://randomuser.me/api/portraits/men/17.jpg"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <div
                      class="bg-blue-base px-2 py-2 rounded-lg rounded-bl-none mb-2"
                    >
                      <div class="flex flex-col items-end justify-center">
                        <p class="text-white text-sm font-medium mb-2">
                          Hi, Angham can you send me your new book ? please.
                        </p>
                        <div
                          class="text-gray-400 text-xs font-medium object-right-bottom"
                        >
                          10:31
                        </div>
                      </div>
                    </div>
                    <div class="text-gray-600 text-sm font-medium">
                      Benali Djamel
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end items-end py-3">
                <div class="flex items-end">
                  <div class="flex flex-col items-end mr-2">
                    <div
                      class="bg-gray-200 px-2 py-2 rounded-lg rounded-br-none mb-2"
                    >
                      <div class="flex flex-col items-end justify-center">
                        <p class="text-gray-600 text-sm font-medium mb-2">
                          hi Djamel...Good Morning!
                        </p>
                        <div
                          class="text-gray-600 text-xs font-medium object-right-bottom"
                        >
                          10:31
                        </div>
                      </div>
                    </div>
                    <div class="text-gray-600 text-sm font-medium">
                      Benali Angham
                    </div>
                  </div>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/women/29.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="flex justify-end items-end py-3">
                <div class="flex items-end">
                  <div class="flex flex-col items-end mr-2">
                    <div
                      class="bg-gray-200 px-2 py-2 rounded-lg rounded-br-none mb-2"
                    >
                      <div class="flex flex-col items-end justify-center">
                        <p class="text-gray-600 text-sm font-medium mb-2">
                          Yes of course , you'll find it in your email, happy
                          reading!
                        </p>
                        <div
                          class="text-gray-600 text-xs font-medium object-right-bottom"
                        >
                          10:31
                        </div>
                      </div>
                    </div>
                    <div class="text-gray-600 text-sm font-medium">
                      Benali Angham
                    </div>
                  </div>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/women/29.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="flex justify-start py-3">
                <div class="flex items-end">
                  <img
                    class="w-8 h-8 rounded-full mr-2"
                    src="https://randomuser.me/api/portraits/men/17.jpg"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <div
                      class="bg-blue-base px-2 py-2 rounded-lg rounded-bl-none mb-2"
                    >
                      <div class="flex flex-col items-end justify-center">
                        <p class="text-white text-sm font-medium mb-2">
                          Yeay ! thank you
                        </p>
                        <div
                          class="text-gray-400 text-xs font-medium object-right-bottom"
                        >
                          10:35
                        </div>
                      </div>
                    </div>
                    <div class="text-gray-600 text-sm font-medium">
                      Benali Djamel
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-8 px-2">
              <div class="flex items-center">
                <textarea
                  class="appearance-none bg-gray-300 rounded-md w-full py-1 px-3 mr-4 text-gray-700 focus:outline-none focus:shadow-outline"
                  rows="2"
                  type="text"
                  placeholder="Enter message"
                ></textarea>
                <div
                  class="bg-blue-base px-3 py-3 w-12 h-12 rounded-full text-center text-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>