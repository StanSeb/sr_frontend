<template>
   <div v-if=true>
    <h1 >Sökresultat: </h1>
    <h4 style="font-style: italic;">{{ getProgramsBySearch.length }} träffar</h4>
    <ul v-for="(program, index) in getProgramsBySearch" :key="index">
        <li class="search"> <img id="picture" :src=program.programimage>
          <h3>{{ program.name }}</h3>
          <p style="font-style: italic;">Om programmet:</p>
          <p>{{ program.description }}</p>
           <img id="info" @click="DescriptionByProgramId(program.id)" src="../assets/info.png"/>
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
      return this.$store.getters.getProgramsBySearch;
    },
},

 methods: {
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