<template>
<!--Denna view är kopplade till 
broadcast-icon och visar programmets sändningar-->
  <div class="broadcast">
     
      <h1 v-if="getProgramBroadcasts.length===0"> Det finns ingenting att visa.</h1>
      <ul v-for="(broadcast, index) in getProgramBroadcasts" :key="index"> 
          <li>  
           <div class="image-text">
            <img id="picture" :src=broadcast.image>
            <div class="text">
              <h3>{{ broadcast.title }}</h3>
              <p>Datum: {{ broadcast.broadcastdateutc}}</p>
            </div>
           </div>
           <div class="audio">
            <audio controls :src="broadcast.url"></audio>
            <p>Längd: {{ broadcast.totalduration}}</p>
           </div>
           <img id="favo" @click="addFavorite(broadcast.image, broadcast.title)" src="../assets/heart-regular.svg" v-if="isLoggedIn"/>
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

.audio {
  margin-right: 50px;
  outline: none;
}

</style>