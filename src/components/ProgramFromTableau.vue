<template>
  <div class="programsFromTableau-container">
    <div class="content-holder">
      <button class="program-tablue" @click="path">Tablå</button>
      <button class="program-btn">Program</button>
    </div>
    <div id="program-info">
      <ul v-for="(channelItem, index) in getProgramsFromTableauyID" :key="index">
        <li>
          <img :src="channelItem.programimage" /><br>
          <!-- Lägg till favoriter. Skicka favorit-objektet till store-funktionen genom addFavorite()-->
          <img v-if="show" id="favo" @click="addFavorite(
                channelItem.programimage,
                channelItem.name,
                channelItem.programurl)" src="../assets/heart-regular.svg"/>
          <!-- Visar Programmets info. Skicka program-id till store-funktionen genom DescriptionByProgramId()-->
          <img id="info" @click="DescriptionByProgramId(channelItem.id)" src="../assets/info-solid.svg"/>
          <!-- Visar Programmets sändningar. Skicka program-id till store-funktionen genom ProgramBroadcast()-->
          <img id="broadcast" @click="ProgramBroadcast(channelItem.id)" src="../assets/broadcast-tower-solid.svg" />
          {{ channelItem.responsibleeditor }} <br />
          
          <p>{{ channelItem.name }}</p>
          <p>{{ channelItem.programurl }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      show: false,
    }
  },

  computed: {
    getProgramsFromTableauyID() {
      return this.$store.getters.getProgramsFromTableauyID;
    },
  },

  async mounted() {
    this.$store.dispatch("fetchprogramsFromTableauyID", this.$route.params.id);

      let user = await fetch("/api/auth/whoami");
      try {
        user = await user.json();
        this.$store.commit("setLoggedInUser", user);
        if(user!=null){
          this.show = true;
        }
      } catch {
        console.log("Not logged in");
      }
  },

  methods: {
    async addFavorite(image, name, url) {
      // funktion för att skapa POST
      let favoBody = {
        name,
        image,
        url,
      };

      await fetch("http://localhost:3000/api/auth/favorites", {
        // sparar favoriter i Databasen
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favoBody),
      });
      alert("Du har lagt till en ny favorit.");
      this.$router.push("/favorites"); 
    },
    path() {
      this.$router.push("/programs/" + this.$route.params.id);
    },

    DescriptionByProgramId(programId) {
      this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description");
    },

    ProgramBroadcast(programId) {
      // anropar funktionen i store och skickar program-id
      this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast");
    },
  },
};
</script>

<style scoped>

.content-holder h1 {
  padding-top: 20px;
}

.programsFromTableau-container {
    background-color: white;
    width: 75%;
    margin: 0 auto;
    padding-bottom: 20px;
    border-top: 1px solid rgb(223, 223, 223);
    display: block;
    margin-top: 20px;
}

ul{
  padding:0;
  margin-left: 10px;
}

ul li {
    margin-top: 100px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(223, 223, 223);
    display: block;
}

img {
  width: 130px;
  height: 130px;
}

.content-holder{
  margin-top: 10px;
  float: left;
  margin-left: 10px;
}

.content-holder button {
  margin-top: 10px;
  border-radius: 5px;
  margin-left: 3px;
}

.content-holder button:hover{
  background-color: grey;
  color:whitesmoke;
}

.program-btn{
  background-color: royalblue;
  color: white;
}

#info {
  cursor: pointer;
}

#broadcast{
  cursor: pointer;
}
</style>