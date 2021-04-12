import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";
import Channels from "../components/Channels.vue";
import Favorites from "../components/Favorites.vue";
import Friends from "../components/Friends.vue";
import Programs from "../components/Programs.vue";
import ProgramFromTableau from '../components/ProgramFromTableau';
import Login from "../components/Login.vue";
import Users from "../components/Users.vue"
import Register from "../components/Register.vue";
import ProgramSearch from "../views/ProgramSearch.vue";
import Description from "../views/Description.vue";

const routes = [
  {
    path: "/home",
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
    path: "/programs",
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
    path: "/ProgramFromTableau",
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router