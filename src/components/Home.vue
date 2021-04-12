<template>
  <div class="home-container">
    <div class="welcome">
      <div class="image">
        <img src="../assets/Sverigesradio_ppt.png" />
        <p>listan</p>
      </div>
    </div>
    <div class="channels-container">
      <h3>Live just nu!</h3>
      <ul v-for="(channelItem, index) in getChannels" :key="index">
        <li v-if="index < 3">
          <img :src="channelItem.image" />
          <div class="channel-text">
            <h2>{{ channelItem.name }}</h2>
            <p>{{ channelItem.tagline }}</p>
          </div>
          <div class="channels-live">
            <audio
              controls
              :src="channelItem.audioUrl"
              type="audio/mp3"
            ></audio>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    getChannels(){      
      return this.$store.getters.getChannels;
    }
  },

  mounted() {
    this.$store.dispatch("fetchChannels");
  },
};
</script>

<style scoped>
.home-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgb(223, 223, 223);
  display: block;
  border-color: white;
}

.welcome {
  margin: 0 auto;
  display: block;
  margin-bottom: 50px;
}

.image {
  margin-top: 50px;
  font-size: 50px;
  color: black;
  font-family: cursive;
}

.image p {
  margin: 0;
  padding: 0;
}

.image img {
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 0;
}

audio {
  outline: none;
}

.channels-container {
 display: block;
 margin-right: 50px;
 width: 100%;
 text-align: center;
}

.channels-container h3 {
  background-color: rgb(218, 40, 40);
  color: white;
  padding: 1%;
  border-radius: 20px;
  width: 10%;
  box-shadow: inset 0px 0px 10px rgb(0, 0, 0);
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 100px;
}

.channels-container ul {
  margin-right: 50px;
  justify-content: space-evenly;
}

.channels-container ul li {
  list-style: none;
  margin: 0 auto;
  display: block;
  border-bottom: 1px solid rgb(197, 197, 197);
  margin-bottom: 50px;
}

.channels-container ul li img{
  width: 10%;
  height: 10%;
}

.channel-text {
  margin-bottom: 20px;
}

.channels-live {
  display:block;
  align-items: center;
  margin-bottom: 20px;
}

.channels-live audio {
  width: 300px;
}

</style>