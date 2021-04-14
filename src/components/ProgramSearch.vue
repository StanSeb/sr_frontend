<template>
   <div v-if="true" class="search-container">
    <h1 >Sökresultat: </h1>
    <h4 style="font-style: italic;">{{ getProgramsBySearch.length }} träffar</h4>
    <ul v-for="(program, index) in getProgramsBySearch" :key="index">
        <li>
          <div class="image-text">
            <img id="picture" :src=program.programimage>
            <h3>{{ program.name }}</h3>
            <p style="font-style: italic;">Om programmet:</p>
            <p>{{ program.description }}</p>
          </div>
          <div class="icons">
           <img v-if="show" class="icon" @click="addFavorite(program.programimage, program.name, program.programurl)" src="../assets/heart-regular.svg"/>
           <img class="icon" @click="DescriptionByProgramId(program.id)" src="../assets/info-solid.svg"/>
           <img class="icon" @click="ProgramBroadcast(program.id)" src="../assets/broadcast-tower-solid.svg"/>
          </div>
          </li>
      </ul> 
  </div>
</template>

<script>

export default {
    
name: "ProgramSearch",

data(){
  return {
    show: false
  }
},

// Hämtar om en användare är inloggad för att visa "Lägga till favorit" ikonen
async mounted(){
let user = await fetch("/api/auth/whoami");
      try {
        user = await user.json();
        this.$store.commit("setLoggedInUser", user);
        if(user!=null){
          this.show = true;
        }
      } catch {
        console.log("Not logged in");
      }
},

computed: {
    getProgramsBySearch() {
      return this.$store.getters.getProgramsBySearch;// Hämtar program från den respektiva funktionen i store
    },
},

 methods: {
     DescriptionByProgramId(programId){// Anropar funktionen i store och skickar program-id
      this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description")// Visar Description.view - view
     },
     ProgramBroadcast(programId){// Anropar funktionen i store och skickar program-id
       this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast")//visar ProgramBroadcast.vue - view
     },
     async addFavorite(image, name, url) {// Funktion för att skapa POST
      let favoBody={
        name,
        image,
        url,
      }
      await fetch('http://localhost:3000/api/auth/favorites',{// Sparar favoriter i Databasen
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(favoBody),
    }) 
      alert("Du har lagt till en ny favorit!")
      this.$router.push("/favorites")// Tar en till Favorite view
    }, 
  }
}
</script>

<style scoped>

.search-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20px;
  display: block;
  margin-top: 20px;
}

.search-container h1 {
  padding-top: 20px;
}

.search-container ul li {
  list-style-type: none;
  display: block;
  border-bottom: 1px solid rgb(211, 211, 211);
  padding-bottom: 20px;
  justify-content: center
}

.image-text img{
  width: 200px;
  height: auto;
}

.icons {
  display: flex;
  margin-right: 20px;
  justify-content: center;
}

.icons .icon {
  width: 30px;
  height: 30px;
  filter: invert(100%);
  background-color: rgb(65, 65, 65);
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
}

.icon:hover {
  background-color: rgb(206, 206, 206);
  filter: invert(100%);
  transition: 0.2s;
}
 
</style>