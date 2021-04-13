<template>
<!--Denna view är kopplade till 
broadcast-icon och visar programmets sändningar-->
  <div id="broadcast">
     
      <h3 v-if="getProgramBroadcasts.length===0"> Det finns ingenting att visa :(</h3>
      <ul v-for="(broadcast, index) in getProgramBroadcasts" :key="index"> 
          <li>  
          <img id="picture" :src=broadcast.image>
         <h3>{{ broadcast.title }}</h3>
          <p>Datum: {{ broadcast.broadcastdateutc}}</p>
          <p>{{ broadcast.totalduration}}</p>
          <p>{{ broadcast.url}}</p>
           <img id="favo" @click="addFavorite(broadcast.image, broadcast.title, broadcast.url)" src="../assets/favorite.png"/>
        </li>
        
      </ul>  
  </div>
</template>

<script>
export default {  
name: "ProgramBroadcasts",


computed: {
  getProgramBroadcasts() {
    let broadcast = this.$store.getters.getProgramBroadcasts;// hämtar sändningar från funktionen i store
   
   
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
      alert("Du har en ny favorit <3!!!")
      this.$router.push("/favorites")
    }, 
  }
}

</script>

<style scoped>
li #favo{
  width: 25px;
  height: 25px;
}
li{
  padding: 15px;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  border-radius: 15px; 
}
 ul {
  list-style-type: none;
  padding: 0;
}
 #favo, li img {
  width: 50px;
  height: 50px;
}
</style>