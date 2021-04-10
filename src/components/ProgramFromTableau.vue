<template>
  <div class="programsFromTableau-container">
    <div class="contentHolder">
      <h1>Programs</h1>
      <button class="program-btn" @click="path">Tablå</button>
    </div>
    <div id = "program-info">
        <ul v-for="(channelItem, index) in getProgramsFromTableauyID" :key="index">
            <li>
                <img id="info" @click="DescriptionByProgramId(channelItem.id)" src="../assets/info.png"/>
                <img id="broadcast" @click="ProgramBroadcast(channelItem.id)" src="../assets/broadcast.png"/>
                {{channelItem.responsibleeditor}} <br>
                <img :src="channelItem.programimage"/>
                {{channelItem.name}} <br>
               
                
                {{channelItem.programurl}}  
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProgramsFromTableauyID(){
      return this.$store.getters.getProgramsFromTableauyID;
    },
  },
  
  // shit is hardcoded!
  mounted() {
    this.$store.dispatch("fetchprogramsFromTableauyID", 132)
  },

  methods: {
      path(){
        this.$router.push("/programs")
      },
     DescriptionByProgramId(programId){
       this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description")
     },
     ProgramBroadcast(programId){
       this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast")
     } 
  }
}
</script>

<style scoped>
#info, #broadcast{
  width: 20px;
  height: 20px;
}

.programsFromTableau-container {
  
    background-color: white;
    width: 75%;
    margin: 0 auto;
    justify-content: center;
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

img {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: left;
}

</style>