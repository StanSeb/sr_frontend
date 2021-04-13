<template>
  <div class="channels-container">
      <h1>Kanaler</h1>
      <ul v-for="(channelItem, index) in getChannels" :key="index">
        <li @click="path(channelItem.id)">
          <img :src="channelItem.image"/>
          <h2>{{channelItem.name}}</h2>
          <p>{{channelItem.tagline}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  
  computed: {
    getChannels(){
      return this.$store.getters.getChannels;
    },
  },

  mounted() {
    this.$store.dispatch("fetchChannels");
  },

  methods:{
    path(channelID){
  
      this.$store.dispatch("fetchChannelsByID", channelID)
      this.$router.push("/programs/" + channelID)
   }
  }
}
</script>
<style scoped>

.channels-container {
    background-color: white;
    width: 75%;
    margin: 0 auto;
    justify-content: center;
}

h1 {
  padding-top: 20px;
}

ul li {
  list-style-type: none;
  background-color: lightblue;
  margin-bottom: 20px;
  padding: 10px;
  font-family: 'Alfa Slab One', cursive;
  border-radius: 30px;
  border: 5px solid whitesmoke;
  cursor: pointer;
}

img {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: left;
}
</style>