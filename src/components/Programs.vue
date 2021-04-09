<template>
  <div class="programs-container">
    <h1>Program</h1>
    <div id="program-info">
      <ul v-for="(channelItem, index) in getProgramsByChannelID" :key="index">
        <li>
          <h2>{{ channelItem.starttimeutc }}</h2>
          <p>{{ channelItem.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProgramsByChannelID() {
      return this.$store.getters.getProgramsByChannelID;
    },
  },
};
</script>

<style scoped>

body {
  background-color: rgb(116, 116, 116);
}

.programs-container {
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
  font-family: "Alfa Slab One", cursive;
  border-radius: 30px;
  border: 5px solid whitesmoke;
  cursor: pointer;
}
</style>