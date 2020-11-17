<template>
  <div class="mt-8">
    <div
      class="flex items-center justify-between bg-white border-2 border-gray-300 px-4 py-4 rounded-lg"
    >
      <h1 class="text-md sm:text-2xl md:text-3xl text-gray-800 font-semibold">
        Job Listings
      </h1>
      <button
        class="bg-gray-300 px-2 py-1 sm:px-3 md:px-6 md:py-3 rounded text-gray-800 font-semibold"
      >
        Create
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      <div class="">
        <div class="shadow bg-white rounded-md px-4 py-4">
          <h1
            class="text-3xl text-gray-800 font-bold hover:text-blue-base cursor-pointer mb-1"
            onclick="toggleModal('modal-id')"
          >
            QA Platform Engineer
          </h1>
          <p class="text-gray-600 text-sm mb-1">Nov 6 2020</p>

          <ul class="flex mb-4">
            <li class="text-gray-600 text-sm mr-2">#react</li>
            <li class="text-gray-600 text-sm mr-2">#docker</li>
            <li class="text-gray-600 text-sm mr-2">#graphql</li>
          </ul>
          <p class="text-gray-800 text-sm leading-7 mb-4">
            We are hiring our first QA Engineer to support the ongoing
            development and maintenance of all of our Forem applications
            including dev.to. This person will work closely with our Lead SRE
            and must be comfortable making decisions and choosing tools that
            will form the foundation for our testing architecture. For the full
            job listing and to apply:
            <a href="" class="text-blue-base cursor-pointer"
              >https://jobs.dev.to/o/qa-platform-engineer-new-york.</a
            >
          </p>

          <div class="flex items-center">
            <img
              class="w-10 h-10 mr-2 rounded-full"
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt=""
            />

            <div class="flex flex-col">
              <h1 class="text-gray-800 text-sm font-medium">Benali Angham</h1>
              <div class="text-gray-600 text-xs">Jobs - USA, ALM</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--start modal -->

    <div
      class="hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      id="modal-id"
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div class="flex items-start justify-between px-4 py-2">
            <button
              class="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onclick="toggleModal('modal-id')"
            >
              <span
                class="text-black opacity-5 h-8 w-8 text-2xl outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>

          <div class="overflow-y-auto">
            <div class="px-6 pb-8">
              <h1
                class="text-2xl text-gray-800 font-bold hover:text-blue-base cursor-pointer mb-1"
               
              >
                QA Platform Engineer
              </h1>
              <p class="text-gray-600 text-sm mb-1">Nov 6 2020</p>

              <ul class="flex mb-4">
                <li class="text-gray-600 text-sm mr-2">#react</li>
                <li class="text-gray-600 text-sm mr-2">#docker</li>
                <li class="text-gray-600 text-sm mr-2">#graphql</li>
              </ul>
              <p class="text-gray-800 text-sm leading-7 max-w-lg mb-4">
                We are hiring our first QA Engineer to support the ongoing
                development and maintenance of all of our Forem applications
                including dev.to. This person will work closely with our Lead
                SRE and must be comfortable making decisions and choosing tools
                that will form the foundation for our testing architecture. For
                the full job listing and to apply:
                <a href="" class="text-blue-base cursor-pointer"
                  >https://jobs.dev.to/o/qa-platform-engineer-new-york.</a
                >
              </p>

              <div class="flex items-center">
                <img
                  class="w-10 h-10 mr-2 rounded-full"
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt=""
                />

                <div class="flex flex-col">
                  <h1 class="text-gray-800 text-sm font-medium">
                    Benali Angham
                  </h1>
                  <div class="text-gray-600 text-xs">Jobs - USA, ALM</div>
                </div>
              </div>
            </div>
            <div class="bg-gray-200 py-6 px-8 rounded-b">
              <h1 class="text-2xl text-gray-800 font-semibold mb-4">
                Interested?
                <span class="text-lg text-gray-700 font-semibold"
                  >Message Benali Angham</span
                >
              </h1>

              <textarea
                class="appearance-none bg-white rounded-md w-full py-1 px-3 mb-2 text-gray-700 focus:outline-none focus:shadow-outline"
                rows="3"
                type="text"
                placeholder="Enter message"
              ></textarea>
              <button
                href="#"
                class="text-md bg-blue-base px-6 py-2 rounded font-medium text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden opacity-25 fixed inset-0 z-40 bg-black"
      id="modal-id-backdrop"
    ></div>

    <!--end modal-->
  </div>
</template>
