<template>
  <div class="programs-container">
    <div class="btn">
      <div class="programTablue">
      <button class="tablue">Tablå</button>
      <button class="program-btn" @click="path">Program</button>
      </div>
    
      <div class="scheduals-container">
        <button class="today-btn" @click="today">Idag</button>
        <button class="tomorrow-btn" @click="tomorrow">Imorgon</button>
        <button class="dayAfterTomorrow-btn" @click="dayAfterTomorrow">2 dagar framåt</button>
      </div>
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
    },
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

  .programs-container {
    background-color: white;
    width: 75%;
    margin: 0 auto;
    padding-bottom: 20px;
    border-top: 1px solid rgb(223, 223, 223);
    display: block;
    margin-top: 20px;
  }

  #program-info img{
    width:20px;
    height:20px;
    margin-top:10px;
  }

  body {
    background-color: rgb(116, 116, 116);
  }

  #program-info ul {
    padding: 0;  
  }

  #program-info ul li {
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(223, 223, 223);
    display: block;
  }

  .btn{
    margin-top:20px;
    margin-bottom: 100px;
  }

 .btn button {
    border-radius: 5px;
    margin-left: 5px;    
    cursor: pointer;
  }

  .tablue{
    background-color: royalblue;
    color: white;
  }

  .btn button:hover{
    background-color: grey;
    color:whitesmoke;
  }

 .programTablue{
   float: left;
   margin-left: 5px;
 }

 .scheduals-container{
   float: right;
   margin-right: 5px;
 }
  
</style>