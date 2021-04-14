<template>
  <div class="category-container">
    <h1>Hitta program baserad på kategori</h1>
    <div class="category-list">
      <ul v-for="(category, index) in getCategories" :key="index">
        <li class="category-item" :id="category.id" @click="getProgramsByCategoryId(category)">{{ category.name }}</li>
      </ul>
    </div>
  </div>
  <div class="programs-container" :style="show ? filterStyle : null">
    <h3 :v-text="{ text : activeName}">{{ activeName }}</h3>
    <ul v-for="(program, index) in programs" :key="index">
      <li>
        <div class="image-and-text">
          <img :src="program.programimage" />
          <div class="program-text">
            <h2>{{ program.name }}</h2>
            <p style="font-style: italic;">Programinformation:</p>
          <p>{{ program.description }}</p>
         </div>
        </div>        
        <div class="icons">
          <img v-if="favoriteShow" class="icon" @click="addFavorite(program.programimage, program.name, program.programurl)" src="../assets/heart-regular.svg"/>
          <img class="icon" @click="DescriptionByProgramId(program.id)" src="../assets/info-solid.svg"/>
          <img class="icon" @click="ProgramBroadcast(program.id)" src="../assets/broadcast-tower-solid.svg"/>
        </div>        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",

  data(){
    return {
      show: false,
      filterStyle: {
        display: 'none',
      },
      activeName: '',
      favoriteShow: false
    }
  },

  computed: {
    getCategories() {
      return this.$store.getters.getCategories;
    },
    programs() {
      return this.$store.getters.getProgramsByCategoryId;
    },
  },

  async mounted() {
    this.$store.dispatch("fetchCategories");
    this.show = true;

    let user = await fetch("/api/auth/whoami");
      try {
        user = await user.json();
        this.$store.commit("setLoggedInUser", user);
        if(user!=null){
          this.favoriteShow = true;
        }
      } catch {
        console.log("Not logged in");
      }
  },

  methods: {
    getProgramsByCategoryId(category){
      this.$store.dispatch("fetchProgramsByCategoryId", category.id);
      this.show = false;

      this.activeName = category.name;
    },
    DescriptionByProgramId(programId){ // Anropar funktionen i store och skickar program-id
      this.$store.dispatch("fetchDescriptionByProgramId", programId);
      this.$router.push("/description") // Visar Description.view - view
     },
     ProgramBroadcast(programId){ // Anropar funktionen i store och skickar program-id
      this.$store.dispatch("fetchProgramBroadcasts", programId);
      this.$router.push("/broadcast") // Visar ProgramBroadcast.vue - view
     },
     async addFavorite(image, name, url) { // Funktion för att skapa POST
      let favoBody={
        name,
        image,
        url,
      }
      await fetch('http://localhost:3000/api/auth/favorites',{ // Sparar favoriter i Databasen
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(favoBody),
    }) 
      alert("Du har en ny favorit!")
      this.$router.push("/favorites") // Visar listan med favoriter som ligger i Favorites.vue
    }, 
  }

};
</script>

<style scoped>

.category-container {
  background-color: white;
  width: 75%;
  height: 200px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-top: 1px solid rgb(223, 223, 223);
  display: block;
}

h1 {
  font-size: 20px;
  padding: 10px;
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
}

h3 {
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
}

.category-list {
  display: block;
}

.category-item {
  list-style: none;
  font-size: 18px;
  margin: 20px;
  float: left;
}

.category-item:hover {
  text-decoration: underline;
  transition: 0.2;
  cursor: pointer;
}

.programs-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20px;
  border-top: 1px solid rgb(223, 223, 223);
  display: block;
}

.programs-container ul li {
  display: flex;
  list-style: none;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(223, 223, 223);
  justify-content: space-between;
}

.image-and-text {
  display: flex;
  text-align: left;
}

.image-and-text img {
  width: 200px;
  height: auto;
}

.program-text {
  margin-left: 20px;
}

.icons {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  justify-content: center;
}

.icons .icon {
  width: 40px;
  height: 40px;
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


</style>