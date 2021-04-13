<template>
  <div class="channels-container">
      <h1>Kanaler</h1>
      <ul v-for="(channelItem, index) in getChannels" :key="index">
        <li @click="path(channelItem.id)">
          <img :src="channelItem.image"/>
          <div class="text">
            <h2>{{channelItem.name}}</h2>
            <p>{{channelItem.tagline}}</p>
          </div>
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

.channels-container h1 {
  padding-top: 20px;
}

.channels-container ul {
  margin-top: 50px;
  padding-left: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.channels-container ul li {
  list-style: none;
  display: flex;
  padding-right: 20px;
  border-bottom: 1px solid rgb(211, 211, 211);
  margin-bottom: 20px;
}

.channels-container ul li:hover {
  background-color: lightgrey;
  transition: 0.2s;
  cursor: pointer;
}

.channels-container ul li img {
  width: 200px;
  height: auto;
}

.text {
  text-align: left;
  margin-left: 20px;
}

</style>