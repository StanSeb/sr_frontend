import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    channels: String,
    channelByID: String
  },

  mutations: {
    setChannels(state, payload) {
      state.channels = payload;
    },

    setProgramsByChannelID(state, payload) {
      state.channelByID = payload;
    }
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
    }
  },

  getters: {
    getChannels(state) {
      return state.channels
    },

    getProgramsByChannelID(state) {
      return state.channelByID;
    }
  },

  modules: {
  }
})
