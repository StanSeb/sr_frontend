<template>
  <div class="favorites-container">
    <h1>Favoriter</h1>
    <ul v-for="(favoritesList, favoriteIndex) in getFavoritesList" :key="favoriteIndex">
      <li>
        <img :src="favoritesList.image">
        <a :href="favoritesList.url">{{ favoritesList.name }}</a>
      </li>
      <button @click="remove">X</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "favoritesList",

  computed: {
    getFavoritesList() {
      return this.$store.getters.getFavoritesList;
    },
  },
  mounted() {
    this.$store.dispatch("fetchFavoritesList");
  },
};
</script>

<style scoped>
.favorites-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 20px;
}

.favorites-container ul li {
  list-style: none;
}

h1 {
  padding-top: 20px;
}
</style>