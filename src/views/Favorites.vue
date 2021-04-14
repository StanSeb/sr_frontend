<template>
  <div class="favorites-container">
      <h1>Favoriter</h1>

  <ul v-for="(favoritesList, favoriteIndex) in getFavoritesList" :key="favoriteIndex">
    <li id="favorites">
      <img :src="favoritesList.image"/>
      <h3>{{favoritesList.name}}</h3>
    </li>
      
  </ul>

  </div>
</template>

<script>
export default {
  name: "favoritesList",

  computed: {
    getFavoritesList(){
      return this.$store.getters.getFavoritesList // Hämtar de favoriterna sparade i Databasen
    }
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
  padding-bottom: 20px;
  display: block;
}

h1 {
  padding-top: 20px;
}

.favorites-container ul li {
  list-style: none;
  display: block;
  justify-content: center;
  margin-top: 50px;
  border-bottom: 1px solid rgb(211, 211, 211);
}

.favorites-container ul li img {
  width: 200px;
  height: auto;
}

.favorites-container ul li h3 {
  font-size: 25px;
}

</style>