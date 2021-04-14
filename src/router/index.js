import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Channels from "../views/Channels.vue";
import Favorites from "../views/Favorites.vue";
import Friends from "../views/Friends.vue";
import Programs from "../views/Programs.vue";
import ProgramFromTableau from '../components/ProgramFromTableau';
import Login from "../views/Login.vue";
import Users from "../components/Users.vue"
import Register from "../views/Register.vue";
import ProgramSearch from "../components/ProgramSearch.vue";
import Description from "../views/Description.vue";
import ProgramBroadcasts from "../components/ProgramBroadcasts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/channels",
    name: "Channels",
    component: Channels
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/programs/:id",
    name: "Programs",
    component: Programs
  },
  {
    path:"/login",
    name: "Login",
    component: Login
  },
  {
    path:"/register",
    name: "Register",
    component: Register
  },
  {
    path: "/ProgramFromTableau/:id",
    name: "ProgramFromTableau",
    component: ProgramFromTableau
  },
  {
    path:"/search",
    name: "ProgramSearch",
    component: ProgramSearch
  },
  {
    path:"/description",
    name: "Description",
    component: Description
  },
  {
    path:"/broadcast",
    name: "ProgramBroadcasts",
    component: ProgramBroadcasts
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router