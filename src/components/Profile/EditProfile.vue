<template>
  <div>
    <!--start profile-->
    <section>
      <div >
        <img src="../../assets/1500x500.jpg" alt="" srcset="" />

        <div class="w-full pt-1 pb-5">
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
          </div>
        </div>
      </div>
    </section>
    <!--end profile-->

    <!--start content section-->
    <section class="mt-4">
      <!--start edit form  -->
     
        <div class="flex items-center justify-center">
          <form
            class="w-full lg:w-1/2 bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4"
          >
            <div class="divide-y divide-gray-400 w-full">
              <div class="mb-8">
                <div class="mb-8">
                  <h1 class="font-base text-gray-700 text-lg">Account Info</h1>
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
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="bio">
                    Bio
                  </label>
                  <textarea
                    class="appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="bio"
                    type="text"
                    rows="4"
                  >
[Developer, Thinker, Confident, Advisor , Calm, Introvert, Leader, Observer, Learner,Sufism, null]
                </textarea
                  >
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="bio">
                    Tech Stack
                  </label>
                  <multiselect
                  class="multiselect-tags multiselect-tag multiselect-placeholder rounded-md w-full"
                  v-model="value"
                  :max="4"
                  placeholder="js, php, vue"
                  label="name"
                  track-by="code"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                ></multiselect>
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="profile-img"
                  >
                    Profile image
                  </label>
                  <div class="flex">
                    <img
                      class="hidden sm:block rounded-full w-10 h-10 mr-2"
                      src="https://randomuser.me/api/portraits/men/17.jpg"
                      alt=""
                    />
                    <input
                      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="profile-img"
                      type="file"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>

                <div class="">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="password"
                  >
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
              </div>
              <div>
                <div class="my-8">
                  <h1 class="font-base text-gray-700 text-lg">Links</h1>
                </div>

                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="Linkedin"
                  >
                    Linkedin
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Linkedin"
                    type="text"
                    placeholder="Enter your Linkedin"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="Github">
                    Github
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Github"
                    type="text"
                    placeholder="Enter your Github"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="Youtube">
                    Youtube
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Youtube"
                    type="text"
                    placeholder="Enter your Youtube"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="Stackoverflow"
                  >
                    Stackoverflow
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Stackoverflow"
                    type="text"
                    placeholder="Enter your Stackoverflow"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="Twitter">
                    Twitter
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Twitter"
                    type="text"
                    placeholder="Enter your Twitter"
                  />
                </div>
              </div>
            </div>

            <button
              class="w-full bg-blue-base hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
              type="button"
            >
              Save your Information
            </button>
          </form>
        </div>
      </section>
      <!--end login card-->

    <!--end edit form-->
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
   components: {
    Multiselect,
  },
  data() {
    return {
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vue" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
        { name: "react", code: "react" },
        { name: "php", code: "php" },
      ],
    }
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped >
  .multiselect-placeholder >>> .multiselect__placeholder {
  color: #A0AEC0;
  font-size: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.multiselect-tag >>> .multiselect__tag {
  background: #d6d6d6;
  color: #1b1b1b;
}
</style>