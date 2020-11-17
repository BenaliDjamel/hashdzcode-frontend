<template>
  <section class="mt-4">
    <!--start edit form  -->
    <section class="container px-4 mx-auto">
      <div class="flex items-center justify-center">
        <form
          class="w-full lg:w-1/2 bg-white shadow-md rounded-md px-4 md:px-8 pt-6 pb-8 mb-4"
        >
          <div class="divide-y divide-gray-400 w-full">
            <div class="mb-8">
              <div class="mb-8">
                <h1 class="font-base text-gray-700 text-lg">
                  Create a job Listing
                </h1>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="title">
                  Title
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Enter your title"
                />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="body">
                  Body Markdown
                </label>
                <quill-editor
                
                  
                  class="quill-height"
                  ref="myQuillEditor"
                  v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                />
                <p class="text-gray-600 text-xs">
                  400 characters max, 12 line break max, no images allowed,
                  *markdown is encouraged*
                </p>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="tags">
                  Tags
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

              <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="location">
                  Location
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm mb-2"
                  for="expire-date"
                >
                  Custom Expire Date
                </label>
                <input
                  type="date"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expire-date"
                  placeholder="22/11/2020"
                />
              </div>

              <div class="mb-6">
                <label class="flex items-center">
                  <input class="form-checkbox mr-3 w-5 h-5" type="checkbox" />
                  <div>
                    <h1 class="text-lg text-gray-700">Connect messaging</h1>
                    <p class="text-gray-600 text-xs">
                      Allow Users to message me via Connect.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            class="w-full bg-blue-base hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
            type="button"
          >
            Publish job
          </button>
        </form>
      </div>
    </section>
    <!--end login card-->
  </section>
</template>
<script>
import "quill/dist/quill.snow.css";

import { quillEditor } from "vue-quill-editor";
import Multiselect from "vue-multiselect";
import hljs from "highlight.js";

import "highlight.js/styles/monokai-sublime.css";

export default {
  components: {
    quillEditor,
    Multiselect,
  },
  data() {
    return {
      content: "",
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vue" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
        { name: "react", code: "react" },
        { name: "php", code: "php" },
      ],

      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            ["link"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
        placeholder: "Your Job Content",

        theme: "snow",
      },
    };
  },

  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      
      this.content = html;
    },

   
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
.multiselect-tags >>> .multiselect__tags {
  min-height: 42px;
}
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

.quill-editor {
  background-color: white;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.ql-container {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
}

.quill-height >>> .ql-container {
  height: 7rem;
}
</style>
