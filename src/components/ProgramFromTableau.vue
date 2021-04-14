<template>
  <div class="programsFromTableau-container">
    <div class="content-holder">
      <button class="program-tablue" @click="path">Tablå</button>
      <button class="program-btn">Program</button>
    </div>
    <div class="program-info">
      <ul v-for="(channelItem, index) in getProgramsFromTableauyID" :key="index">
        <li>
          <img :src="channelItem.programimage" />
          <div class="text">
            <h2>{{ channelItem.name }}</h2>
            <p>{{ channelItem.responsibleeditor }}</p>
          </div>
          <div class="icons">
            <img class="icon" v-if="show" @click="addFavorite(
                channelItem.programimage,
                channelItem.name,
                channelItem.programurl)" src="../assets/heart-regular.svg"/>
            <img class="icon" @click="DescriptionByProgramId(channelItem.id)" src="../assets/info-solid.svg"/>
            <img class="icon" @click="ProgramBroadcast(channelItem.id)" src="../assets/broadcast-tower-solid.svg" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      show: false, //Visa inte ikonen om en inte är inloggad
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
          this.show = true; // Visar lägga till favoritikonen
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
        // Sparar favoriter i Databasen
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
      // Anropar funktionen i store och skickar program-id
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

.program-info {
  display: block;
}

.program-info ul {
  margin-top: 100px;
  padding-left: 15px;
}

.program-info ul li {
  display: block;
  list-style: none;
  border-bottom: 1px solid rgb(223, 223, 223);
  margin-right: 15px;
  padding-bottom: 20px;
  align-items: center;
}

.program-info ul li img {
  width: 200px;
}

.icons {
  display: flex;
  justify-content: center;
}

.icons .icon {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  filter: invert(100%);
  background-color: rgb(65, 65, 65);
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
}

.icon:hover {
  background-color: rgb(206, 206, 206);
  filter: invert(100%);
  transition: 0.2s;
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