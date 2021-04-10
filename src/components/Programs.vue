<template>
  <div class="programs-container">
     <div class="contentHolder">
      <h1>Tablå</h1>
      <button class="program-btn" @click="path">Programs</button>
    </div>
    <div id = "program-info">
      <ul v-for="(channelItem, index) in getProgramsByChannelID" :key="index">
        <li>
          {{channelItem.starttimeutc}} <br>
          {{channelItem.title}} <br> 
        </li>
        </ul>
    </div>
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
      console.log(this.$router.params)
      this.$router.push("/ProgramFromTableau/" + this.$router.currentRoute._value.params.id)
    }
  },
}

</script>

<style scoped>

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