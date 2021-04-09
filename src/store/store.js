import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    
    favoritesList:[],
    email:String,
    password:String,
    name:String,
    lastName:String,
    loggedInUser:null

  },
  mutations: {

    setFavorites(state, payload){
      state.favoritesList=payload;
    },
    setLoggedInUser(state, user){
     state.loggedInUser = user

    },
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
    }
  },
  getters: {
    getFavoritesList(state){
      return state.favoritesList
    }

  },
  modules: {
  }
})
