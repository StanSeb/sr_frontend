import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    
    favoritesList:[],
    friendsList:[],
    usersList:[],
    friend:String,
    email:String,
    password:String,
    name:String,
    lastName:String,
    loggedInUser:null,
    channels: String,
    channelByID: String,
    categories : String,
    programsByCategoryId : String,
    programsFromTableauyID : String,
    programsBySearch : String,
    descriptionByProgramId: String,
  },

  mutations: {

    setFavorites(state, payload){
      state.favoritesList=payload;
    },
    setFriendsList(state, payload){
      state.friendsList=payload;
    },
    setUsersList(state, payload){
      state.usersList=payload;
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


    addFriend(state, friendId) 
     {
                                  //find loopar igenom en lista och stannar vid första matchning och returnerar objektet den hittar 
      let friend = state.usersList.find(user=>user.userId==friendId)
      if(friend){
         state.friendsList.push(friend);
      }
    },
    removeFriend(state, friendId) 
     {
                                  //find loopar igenom en lista och stannar vid första matchning och returnerar objektet den hittar 
      let friend = state.friendsList.find(user=>user.userId==friendId)
      if(friend){
        let friendIndex=state.friendsList.indexOf(friend)
         state.friendsList.splice(friendIndex,1);
      }
    },
    setRemoveFriend(state, payload) {
      state.friend = payload;
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
    setProgramsBySearch(state, payload){
      state.programsBySearch = payload;
    },
    setDescriptionByProgramId(state, payload){
      state.descriptionByProgramId = payload;
    }
  },
  
  actions: {
    async fetchFavoritesList(){
      await axios.get("http://localhost:3000/api/auth/favorites")
      .then(response=>{
        this.commit("setFavorites",response.data)
      })
    },
    async fetchFriendsList(){
      await axios.get("http://localhost:3000/api/auth/friends")
      .then(response=>{
        this.commit("setFriendsList",response.data)
      })
    },
    async fetchUsersList(){
      await axios.get("http://localhost:3000/api/auth/users")
      .then(response=>{
        this.commit("setUsersList",response.data)
      })
    },
    async actionWithValue(store, data){
      console.log(data)
    },

    async fetchDescriptionByProgramId(store, programId){
      await axios.get("http://localhost:3000/api/rest/description/" + programId)
      .then(response => {
        this.commit("setDescriptionByProgramId", response.data)
      })
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
   
    async fetchRemoveFriend(store, friend) {//fungerar inte än
      console.log(friend)
      await axios.put("http://localhost:3000/api/auth/friends/"+{friend})
      .then(response => {
          console.log(response.data)
          this.commit("setRemoveFriend", response.data)
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
    getDescriptionByProgramId(state){
      return state.descriptionByProgramId
    },

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
    getProgramsFromTableauyID(state){
      return state.programsFromTableauyID;
    },
    getFavoritesList(state){
      return state.favoritesList
    },
    getFriendsList(state){
      return state.friendsList
    },
    getUsersList(state){
      return state.usersList
    }
  },    
    

  modules: {
  }
})