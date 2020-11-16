<template>
  <div class="mt-6">
    <div class="flex flex-col sm:flex-row items-baseline justify-start mb-8">
      <h1
        class="text-gray-800 font-medium mb-4 mr-8 sm:mb-0 sm:font-bold text-md sm:text-xl"
      >
        Write a new post
      </h1>
      <div>
        <a
          class="font-semibold text-gray-800 py-1 px-2 sm:px-3 rounded-md mr-1 bg-gray-300"
          href="#"
          >Edit</a
        >
        <a
          href="#"
          @click="preview"
          class="text-gray-700 py-1 px-2 sm:pl-3 rounded-md hover:text-gray-900 hover:bg-gray-400"
          >Preview</a
        >
      </div>
    </div>
    <div class="grid grid-cols-6 gap-10">
      <div class="col-span-6 md:hidden">
        <div class="mb-6">
          <button
            class="border-2 border-gray-400 bg-white hover:bg-gray-200 hover:border-gray-500 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add a cover image
          </button>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="title">
            Post Title
          </label>
          <input
            class="shadow border appearance-none rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Your Post Title"
          />
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 mb-2" for="bio"> Tags </label>
          <multiselect
            class="shadow multiselect-tags multiselect-tag multiselect-placeholder rounded-md w-full"
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
      </div>

      <div class="col-span-6 md:col-span-4">
        <quill-editor
          v-if="!isPreview"
          class="mb-4"
          ref="myQuillEditor"
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        />

        <div class="mb-4">
          <button
            class="bg-blue-base hover:bg-blue-700 text-white font-medium mb-2 sm:mb-0 py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Publish
          </button>
          <button
            class="bg-grey-base hover:bg-gray-500 text-gray-900 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save draft
          </button>
        </div>
        <div class="bg-white shadow rounded-md py-4 px-4" v-if="isPreview">
          <div class="title">Output</div>
          <div class="ql-editor" v-html="content"></div>
        </div>
      </div>

      <div class="hidden md:block md:col-span-2">
        <div class="mb-6">
          <button
            class="border-2 border-gray-400 bg-white hover:bg-gray-200 hover:border-gray-500 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add a cover image
          </button>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="title">
            Post Title
          </label>
          <input
            class="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Your Post Title"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="bio"> Tags </label>
          <multiselect
            class="shadow multiselect-tags multiselect-tag multiselect-placeholder rounded-md w-full"
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
      </div>
    </div>
  </div>
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
      isPreview: false,
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
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
        placeholder: "Your Post Content",

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

    preview() {
      this.isPreview = !this.isPreview;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
.multiselect-tags >>> .multiselect__tags {
  min-height: 51px;
}
.multiselect-placeholder >>> .multiselect__placeholder {
  color: #A0AEC0;
  font-size: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.multiselect-tag >>> .multiselect__tag {
  background:#d6d6d6;
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

.ql-editor .ql-syntax {
  background-color: rgb(240, 81, 81);
}
</style>
