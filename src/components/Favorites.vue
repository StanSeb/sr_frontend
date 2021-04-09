<template>
  <div class="favorites-container">
      <h1>Favoriter</h1>

  <ol v-for="(favoritesList, favoriteIndex) in getFavoritesList" :key="favoriteIndex">
    <li>{{favoritesList.name}}{{favoritesList.url}}</li><span @click="remove">X</span>
  </ol>

  </div>
</template>

<script>
export default {
  name:'favoritesList',
  computed: {
    getFavoritesList(){
      return this.$store.getters.getFavoritesList
    }
  },
  mounted(){
    this.$store.dispatch("fetchFavoritesList");
  }
}
</script>

<style>
.favorites-container {
    background-color: white;
    width: 75%;
    margin: 0 auto;
    justify-content: center;
}
</style>