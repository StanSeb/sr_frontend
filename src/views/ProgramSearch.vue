<template>
   <div v-if=true>
    <h1 >Sökresultat: </h1>
    <h4 style="font-style: italic;">{{ getProgramsBySearch.length }} träffar</h4>
    <ul v-for="(program, index) in getProgramsBySearch" :key="index">
        <li id="search">
          <img id="picture" :src=program.programimage>
          <h3>{{ program.name }}</h3>
          <p style="font-style: italic;">Programinformation:</p>
          <p>{{ program.description}}</p>
        </li>
      </ul> 
  </div>
</template>

<script>

export default {
    
name: "ProgramSearch",

computed: {
    getProgramsBySearch() {
      return this.$store.getters.getProgramsBySearch;
    },
},
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
 #search, h1, h4{
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