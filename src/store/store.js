import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    
    favoritesList:[],
    email:String,
    password:String,
    name:String,
    lastName:String,
    loggedInUser:null,
    channels: String,
    channelByID: String,
    categories : String,
    programsByCategoryId : String,
    programsBySearch : String,
  },

  mutations: {

    setFavorites(state, payload){
      state.favoritesList=payload;
    },
    setLoggedInUser(state, user){
     state.loggedInUser = user

    },
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
    setProgramsBySearch(state, payload){
      state.programsBySearch = payload;
    }
  },

  actions: {
    async fetchFavoritesList(){
      await axios.get("http://localhost:3000/api/auth/favorites")
      .then(response=>{
        this.commit("setFavorites",response.data)
      })
    },
    async actionWithValue(store, data){
      console.log(data)
    },

    async fetchProgramsBySearch(store, input){
      await axios.get("http://localhost:3000/api/rest/programs/" + input)
      .then(response => {
        this.commit("setProgramsBySearch", response.data)
      })
    },

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

    async fetchProgramsByCategoryId(store, data){
      await axios.get("http://localhost:3000/api/rest/programs/category/" + data)
      .then(response => {
        this.commit("setProgramsByCategoryId", response.data)
      })
    },
  },

  getters: {
    getProgramsBySearch(state){
      return state.programsBySearch
    },

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
    getFavoritesList(state){
      return state.favoritesList
    }
  },    


  modules: {
  }
})