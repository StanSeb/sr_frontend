<template>
  <div class="programsFromTableau-container">
    <div class="content-holder">
      <h1>Program</h1>
      <button class="program-btn" @click="path">Tablå</button>
    </div>
    <div id="program-info">
      <ul v-for="(channelItem, index) in getProgramsFromTableauyID" :key="index">
        <li>
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
          <img :src="channelItem.programimage" />
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
  justify-content: center;
}

ul li {
  list-style-type: none;
  background-color: lightblue;
  margin-bottom: 20px;
  padding: 10px;
  font-family: "Alfa Slab One", cursive;
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