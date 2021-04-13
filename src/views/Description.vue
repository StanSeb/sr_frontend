<template>
<!--Denna view är kopplade till info-icon och visar 
informationen om ett program-->
  <div>
    <ul v-if="show = true">
        <li id="description">
          <img id="info" src="../assets/logo.png"/>
          <h3>Programinformation:</h3>
          <p>{{ getDescriptionByProgramId.description}}</p>
          
          <h3>Programmet Sänds:</h3>
          <p>{{ getDescriptionByProgramId.broadcastinfo}}</p> 
           <p>-</p>      
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
 ul {
  list-style-type: none;
  padding: 0;
}
#description {
    position: fixed;
    width: 65%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    margin: 30px;
    border-radius: 20px;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
}
</style>