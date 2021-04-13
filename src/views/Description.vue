<template>
<!--Denna view är kopplade till info-icon och visar 
informationen om ett program-->
  <div class="desc-container">
    <ul v-if="show = true">
        <li class="description">
          <img id="info" src="../assets/Sverigesradio_ppt.png"/>
          <div class="program-info">
            <div class="info">
              <h3>Programinformation:</h3>
              <p>{{ getDescriptionByProgramId.description}}</p>          
            </div>
            <div class="broadcast">
              <h3>Programmet Sänds:</h3>
              <p>{{ getDescriptionByProgramId.broadcastinfo}}</p> 
            </div>
          </div>
   
        </li>
      </ul> 
  </div>
</template>

<script>
export default {  
name: "Description",

computed: {
    getDescriptionByProgramId() { //Hämtar programmets information från funktionen i store
      return this.$store.getters.getDescriptionByProgramId;
    },
},
}
</script>

<style scoped>

.desc-container{
  background-color: white;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20px;
  display: block;
}

.desc-container img {
  width: 50%;
  height: auto;
  padding-top: 20px;
}

.description {
  list-style: none;
}

.program-info {
  margin-top: 50px;
}

.info {
  margin-bottom: 50px;
}

</style>