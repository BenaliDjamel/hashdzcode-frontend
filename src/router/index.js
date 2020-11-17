import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from "../components/Auth/Login.vue";
import Signup from "../components/Auth/Signup.vue";



import CreatePost from "../components/Post/CreatePost.vue";
import Feed from "../components/Post/Feed.vue";
import Post from "../components/Post/Post.vue";
import ReadingList from "../components/Post/ReadingList.vue";


import CreateJob from "../components/Job/CreateJob.vue";
import Jobs from "../components/Job/Index.vue";

import Profile from "../components/Profile/Index.vue";
import EditProfile from "../components/Profile/EditProfile.vue";

import PostsByTag from "../components/Tag/PostsByTag.vue";
import Tags from "../components/Tag/Index.vue";


import Notifications from "../components/Notification/Index.vue";
import Chat from "../components/Chat/Index.vue";


import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/new",
    name: "CreatePost",
    component: CreatePost
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  },
  {
    path: "/readinglist",
    name: "ReadingList",
    component: ReadingList
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  },
  {
    path: "/jobs/new",
    name: "CreateJob",
    component: CreateJob
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/profile/edit",
    name: "EditProfile",
    component: EditProfile
  },
  {
    path: "/posts/t",
    name: "PostsByTag",
    component: PostsByTag
  },
  {
    path: "/tags",
    name: "Tags",
    component: Tags
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat
  },
  /*  {
     path: "/about",
     name: "About",
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () =>
       import( webpackChunkName: "about"  "../views/About.vue")
   } */

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
