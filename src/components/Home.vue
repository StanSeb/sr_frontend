<template>
  <div class="home-container">
    <div class="welcome">
      <h1>Välkommen till</h1>
      <div class="image">
        <img src="../assets/Sverigesradio_ppt.png" />
        <p>listan</p>
      </div>
    </div>
    <div class="channels-live">
      <audio controls :src="channelUrl" type="audio/mp3"></audio>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return {
            channelUrl: "http://sverigesradio.se/topsy/direkt/srapi/132.mp3",
        }
    }
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
}

h1 {
  margin-bottom: 100px;
}

.image {
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
</style>