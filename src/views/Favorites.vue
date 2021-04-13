<template>
  <div class="favorites-container">
      <h1>Favoriter</h1>

  <ul v-for="(favoritesList, favoriteIndex) in getFavoritesList" :key="favoriteIndex">
    <li id="favorites">
      <img :src="favoritesList.image"/>
      <h3>{{favoritesList.name}}</h3>
      <p>{{favoritesList.url}} </p>
    </li>
      
  </ul>

  </div>
</template>

<script>
export default {
  name: "favoritesList",

  computed: {
    getFavoritesList(){
      return this.$store.getters.getFavoritesList // hämtar de favoriterna sparade i Databasen
    }
  },
  mounted() {
    this.$store.dispatch("fetchFavoritesList");
  },
};
</script>

<style scoped>

</style>