<template>
  <div class="broadcast">     
      <h1 v-if="getProgramBroadcasts.length===0"> Det finns ingenting att visa.</h1>
      <ul v-for="(broadcast, index) in getProgramBroadcasts" :key="index"> 
          <li>  
           <div class="image-text">
            <img class="broadcastImage" :src=broadcast.image>
            <div class="text">
              <h3>{{ broadcast.title }}</h3>
              <p>Datum: {{ broadcast.broadcastdateutc}}</p>
            </div>
           </div>
           <div class="audio-icon">
             <div class="audio">
              <audio controls :src="broadcast.url"></audio>
              <p>Längd: {{ broadcast.totalduration}}</p>
             </div>            
            <img class="icon" @click="addFavorite(broadcast.image, broadcast.title, broadcast.url)" src="../assets/heart-regular.svg" v-if="isLoggedIn"/>
           </div>         
        </li>        
      </ul>  
  </div>
</template>

<script>
export default {  
name: "ProgramBroadcasts",

// Sparar variabler för att använda i funktioner
data(){
  return {
    isLoggedIn: false // Lägga till favoriter ikonen visas inte - Ej inloggad
  }
},

// Hämtar om en användare är inloggad för att visa "Lägga till favorit" ikonen
async mounted(){
  let user = await fetch("/api/auth/whoami");
      try {
        user = await user.json();
        this.$store.commit("setLoggedInUser", user);
        if(user!=null){
          this.isLoggedIn = true; // Lägga till favoriter visas då en är inloggad
        }
      } catch {
        console.log("Not logged in");
      }
},


computed: {
  // Hämtar sändningar från funktionen i store
  getProgramBroadcasts() {
    let broadcast = this.$store.getters.getProgramBroadcasts;
    return broadcast;  
  } 
  },

  methods: {
     async addFavorite(image, name, url) {
      let favoBody={
        name,
        image,
        url,
      }
      await fetch('http://localhost:3000/api/auth/favorites',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(favoBody),
    }) 
      alert("Du har lagt till en ny favorit")
      this.$router.push("/favorites")
    }, 
  }
}

</script>

<style scoped>

.broadcast{
  background-color: white;
  width: 75%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  margin-top: 20px;
}

.broadcast ul {
  list-style: none;
}

.broadcast ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(211, 211, 211);
  padding-bottom: 20px;
  align-items: center;
}

.broadcast ul li img {
  width: 200px;
  height: auto;
}

.image-text {
  display: flex;
  float: left;
}

.text {
  margin-left: 50px;
  text-align: left;
}

.audio-icon {
  display: flex;
}

.audio {
  margin-right: 50px;
  outline: none;
}

.audio-icon .icon{
  width: 40px;
  height: 40px;
  filter: invert(100%);
  background-color: rgb(65, 65, 65);
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  margin-right: 50px;
  cursor: pointer;
}

.audio-icon .icon:hover {
  background-color: rgb(206, 206, 206);
  filter: invert(100%);
  transition: 0.2s;
}

</style>