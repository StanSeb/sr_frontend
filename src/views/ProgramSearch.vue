<template>
  <!--Denna view är kopplade till webbsidan sökmotorn och visar 
alla program som matchar den skrivna orden i sökfältet-->
   <div v-if=true>
    <h1 >Sökresultat: </h1>
    <h4 style="font-style: italic;">{{ getProgramsBySearch.length }} träffar</h4>
    <ul v-for="(program, index) in getProgramsBySearch" :key="index">
        <li class="search"> <img id="picture" :src=program.programimage>
          <h3>{{ program.name }}</h3>
          <p style="font-style: italic;">Om programmet:</p>
          <p>{{ program.description }}</p>
          <!-- Lägg till favoriter. Skicka favorit-objektet till store-funktionen genom addFavorite()-->
          <img id="info" @click="addFavorite(program.programimage, program.name, program.programurl)" src="../assets/favorite.png"/>
          <!-- Visar Programmets info. Skicka program-id till store-funktionen genom DescriptionByProgramId()-->
           <img id="info" @click="DescriptionByProgramId(program.id)" src="../assets/info.png"/>
           <!-- Visar Programmets sändningar. Skicka program-id till store-funktionen genom ProgramBroadcast()-->
           <img id="broadcast" @click="ProgramBroadcast(program.id)" src="../assets/broadcast.png"/>
           </li>
      </ul> 
  </div>
</template>

<script>

export default {
    
name: "ProgramSearch",

computed: {
    getProgramsBySearch() {
      return this.$store.getters.getProgramsBySearch;// Hämtar program från den respektiva funktionen i store
    },
},

 methods: {
     DescriptionByProgramId(programId){// anropar funktionen i store och skickar program-id
       this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description")//visar Description.view - view
     },
     ProgramBroadcast(programId){// anropar funktionen i store och skickar program-id
       this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast")//visar ProgramBroadcast.vue - view
     },
     async addFavorite(image, name, url) {// funktion för att skapa POST
      let favoBody={
        name,
        image,
        url,
      }
      await fetch('http://localhost:3000/api/auth/favorites',{// sparar favoriter i Databasen
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(favoBody),
    }) 
      alert("Du har en ny favorit <3!!!")
      this.$router.push("/favorites")// Visar listan med favoriter som ligger i Favorites.vue
    }, 
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
#info, #broadcast {
   width:20px;
    height:20px;
    

}

 .search, h1, h4{
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