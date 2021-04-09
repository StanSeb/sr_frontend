<template>
  <div class="home-container">
    <div class="welcome">
      <div class="image">
        <img src="../assets/Sverigesradio_ppt.png" />
        <p>listan</p>
      </div>
    </div>
    <div class="channels-container">
      <ul v-for="(channelItem, index) in getChannels" :key="index">
        <li>
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
    getChannels() {
      return this.$store.getters.getChannels;
    },
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
}

.channels-container ul li {
  list-style: none;
  margin: 0 auto;
  display: flex;
}

.channels-container ul li img{
  width: 10%;
  height: 10%;
}

</style>