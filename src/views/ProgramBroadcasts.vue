<template>
  <div id="broadcast">
      <ul v-for="(broadcast, index) in getProgramBroadcasts" :key="index">
        <li>
          <img id="picture" :src=broadcast.image>
         <h3>{{ broadcast.title }}</h3>
          <p>Datum: {{ broadcast.broadcastdateutc}}</p>
          <p>{{ broadcast.totalduration}}</p>
          <p>{{ broadcast.url}}</p>
        </li>
      </ul>  
  </div>
</template>

<script>
export default {  
name: "ProgramBroadcasts",

computed: {
    getProgramBroadcasts() {
      return this.$store.getters.getProgramBroadcasts;
    },
},
}
</script>

<style scoped>
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
 li img {
  width: 50px;
  height: 50px;
}
</style>