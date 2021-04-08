import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    categories : String,
    programsByCategoryId : String,
  },

  mutations: {
    setCategories(state, payload){
      state.categories = payload;
    },
    setProgramsByCategoryId(state,payload){
      state.programsByCategoryId = payload;
    },
  },
  actions: {
    async fetchCategories(){
      await axios.get("http://localhost:3000/api/rest/categories")
      .then(response => {
        this.commit("setCategories", response.data)
      })
    },

    async fetchProgramsByCategoryId(store, data){
      await axios.get("http://localhost:3000/api/rest/programs/category/" + data)
      .then(response => {
        this.commit("setProgramsByCategoryId", response.data)
      })
    },
  },

  getters: {
    getCategories(state){
      return state.categories
    },
    getProgramsByCategoryId(state){
      return state.programsByCategoryId
    }
  },
  modules: {
  }
})