import { createRouter, createWebHistory } from 'vue-router'
import Categories from "../components/Categories.vue";
import Channels from "../components/Channels.vue";
import Favorites from "../components/Favorites.vue";
import Friends from "../components/Friends.vue";
import Programs from "../components/Programs.vue";
import ProgramFromTableau from '../components/ProgramFromTableau';

const routes = [
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
    path: "/programs",
    name: "Programs",
    component: Programs
  },
  {
    path: "/ProgramFromTableau",
    name: "ProgramFromTableau",
    component: ProgramFromTableau
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router