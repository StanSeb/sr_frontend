import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    channels: String,
    channelByID: String,
    categories : String,
    programsByCategoryId : String,
    programsFromTableauyID : String,
  },

  mutations: {
    setChannels(state, payload) {
      state.channels = payload;
    },

    setProgramsByChannelID(state, payload) {
      state.channelByID = payload;
    },
    setCategories(state, payload){
      state.categories = payload;
    },
    setProgramsByCategoryId(state,payload){
      state.programsByCategoryId = payload;
    },

    setProgramsFromTableauyID(state, payload){
      state.programsFromTableauyID = payload;
    },
  },
  
  actions: {
    async fetchChannels() {
      await axios.get("http://localhost:3000/api/rest/channels")
        .then(response => {
          this.commit("setChannels", response.data)
        })
    },

    async fetchChannelsByID(store, channelID) {
      console.log(channelID)
      await axios.get("http://localhost:3000/api/rest/channels/broadcasts/" + channelID)
      .then(response => {
          console.log(response.data)
          this.commit("setProgramsByChannelID", response.data)
      })
    },
    async fetchCategories(){
      await axios.get("http://localhost:3000/api/rest/categories")
      .then(response => {
        this.commit("setCategories", response.data)
      })
    },

    async fetchProgramsByCategoryId(store, id){
      await axios.get("http://localhost:3000/api/rest/programs/category/" + id)
      .then(response => {
        this.commit("setProgramsByCategoryId", response.data)
        
      })
    },

    // programsFromTableau
    async fetchprogramsFromTableauyID(store, data){
      await axios.get("http://localhost:3000/api/rest/programs/channel/" + data)
      .then(response =>{
        this.commit("setProgramsFromTableauyID", response.data)
      })
    },
  },

  getters: {
    getCategories(state){
      return state.categories
    },
    getProgramsByCategoryId(state){
      return state.programsByCategoryId
    },
    getChannels(state) {
      return state.channels
    },
    getProgramsByChannelID(state) {
      return state.channelByID;
    },
    getProgramsFromTableauyID(state){
      return state.programsFromTableauyID;
    },
  },    

  modules: {
  }
})