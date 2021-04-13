<template>
  <div class="programs-container">
     <div class="contentHolder">
      <h1>Tablå</h1>
      <button class="today-btn" @click="today">Idag</button>
      <button class="tomorrow-btn" @click="tomorrow">Imorgon</button>
      <button class="dayAfterTomorrow-btn" @click="dayAfterTomorrow">2 dagar framåt</button>
      <button class="program-btn" @click="path">Programs</button>
    </div>
    <div id = "program-info">
      <ul v-for="(channelItem, index) in getProgramsByChannelID" :key="index">
        <li>
            <!-- Visar Programmets sändningar. Skicka program-id till store-funktionen genom ProgramBroadcast()-->
           <img id="broadcast" @click="ProgramBroadcast(channelItem.id)" src="../assets/broadcast.png"/>
                    <!-- Visar Programmets info. Skicka program-id till store-funktionen genom DescriptionByProgramId()-->
           <img id="info" @click="DescriptionByProgramId(channelItem.id)" src="../assets/info.png"/>
            {{channelItem.starttimeutc}} <br>
          {{channelItem.title}} <br> 
        </li>
      </ul>
    </div>
      <h1>Program</h1>
     
  </div>
</template>

<script>

export default {
 
  computed: {
    getProgramsByChannelID() {
      return this.$store.getters.getProgramsByChannelID;
    },
  },

  methods:{
    path(){
      this.$router.push("/ProgramFromTableau/" + this.$route.params.id)
    },
      tomorrow(){
      this.$store.dispatch("fetchChannelsByIDTomorrow", this.$route.params.id)
    },
      dayAfterTomorrow(){
        this.$store.dispatch("fetchChannelsByIDDayAfterTomorrow", this.$route.params.id)
    },
    today(){
       this.$store.dispatch("fetchChannelsByID",  this.$route.params.id)
    }
     DescriptionByProgramId(programId){ // anropar funktionen i store och skickar program-id
       this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description")//visar Description.view - view
     },
     ProgramBroadcast(programId){// anropar funktionen i store och skickar program-id
       this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast")//visar ProgramBroadcast.vue - view
     },
     
  },


}

</script>

<style scoped>
  #program-info img{
    width:20px;
    height:20px;
    margin-top:10px;
    

  }
  body {
      background-color: rgb(116, 116, 116);
  }

  ul li {
    list-style-type: none;
    background-color: lightblue;
    margin-bottom: 20px;
    padding: 10px;
    font-family: 'Alfa Slab One', cursive;
    border-radius: 30px;
    border: 5px solid whitesmoke;
    cursor: pointer;
  }

  .contentHolder{
    display: flex;
    justify-content: center;
  }
  
</style>