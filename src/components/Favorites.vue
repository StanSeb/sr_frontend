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
  name:'favoritesList',
  computed: {
    getFavoritesList(){
      return this.$store.getters.getFavoritesList // hämtar de favoriterna sparade i Databasen
    }
  },
  mounted(){
    this.$store.dispatch("fetchFavoritesList");
  }
}
</script>

<style scoped>

 img {
  width: 50px;
  height: 50px;
}
 ul {
  list-style-type: none;
  padding: 0;
}

 #favorites, h1, h4{
  display: inline-block;
  padding: 15px;
  margin: 10px;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  border-radius: 15px;
  
}
</style>