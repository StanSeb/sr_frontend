<template>
  <div id="nav">
    <router-link to="/home" id="logo"><img src="./assets/Sverigesradio_ppt.png"/><br>listan</router-link>
    <div class="routes">
      <div class="channel-container">
       <router-link to="/channels" id="channels" class="route">Kanaler</router-link>
      </div>
      <div class="program-container">
        <router-link to="/categories" id="categories" class="route">Program</router-link>
      </div>
      <div class="favorites-container">
        <router-link to="/favorites" id="favorites" class="route">Favoriter</router-link>
      </div>
      <div class="friends-container">
        <router-link to="/friends" id="friends" class="route">Vänner</router-link>
      </div>
      <router-link to="/channels" id="channels" class="route">Kanaler</router-link>
      <router-link to="/programs" id="programs" class="route">Program</router-link>
      <router-link to="/favorites" id="favorites" class="route">Favoriter</router-link>
      <router-link to="/friends" id="friends" class="route">Vänner</router-link>
      <h4 v-if="isLoggedIn">Is logged in: {{loggedInUser.firstName}}</h4>
    </div>

    <input @keydown.enter="ProgramsBySearch(input)" v-model="input" type="text" placeholder="Sök" id="searchbar">
   
    <input type="text" v-model="search" placeholder="sök" id="searchbar">
    <div class="buttons">
      
      <button><router-link to="/register" id="register" class="registerRoute">sign up</router-link></button>
      <button><router-link to="/login" id="login" class="loginRoute">Login</router-link></button>
      <button class="logout" @click="logout">Logout</button>
    </div>
  </div>
  <router-view />
  <div id="search" v-if="input">
    <h1>Sökresultat för: "{{input}}"</h1> 
    <h4>{{getProgramsBySearch.length}} träffar</h4>
    <ul v-for="(program, index) in getProgramsBySearch" :key="index">
        <li>
          <img id="picture" :src=program.programimage>
          <h3>{{ program.name }}</h3>
          <p>{{ program.description}}</p>
        </li>
      </ul> 
  </div>
</template>

<script>
export default {
  data () {
    return{
      input:'',
    } 
  },
  computed: {
    getProgramsBySearch(){
     return this.$store.getters.getProgramsBySearch;  
    }
  },
  methods: {
    ProgramsBySearch(input){
      this.$store.dispatch("fetchProgramsBySearch", input)
    }
  }
}
  export default{
    async mounted(){

      let user = await fetch('/api/auth/whoami')
      try{
        user=await user.json()
        this.$store.commit('setLoggedInUser', user)
        console.log('user')
      }catch{
        console.log('not logged in');
      }
    },
    computed: {
      loggedInUser(){
        return this.$store.state.loggedInUser

      },
      isLoggedIn(){
        return this.loggedInUser !=null

      },
    },
       methods: {
       async logout(){
            //tells backend to forget about us
            fetch('/logout', {mode:'no-cors'})

            //removes logged in user from "store"
            this.$store.commit('setLoggedInUser',null)
           alert("you have logged out")
            
        },
       }
  

  }
</script>

<style>
#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #f3f3f3;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}

#nav {
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: 12.5%;
  padding-right: 12.5%;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: cursive;
  width: 10%;
}

#logo img {
  margin: 0px;
  width: 100%;
  height: auto;
}

.routes {
  margin-left: 50px;
  display: flex;
  justify-content: space-evenly;
}

.routes img{
  width: 18px;
  height: auto;
  margin-right: 100px;
}

.route {
  margin-right: 100px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 18px;
}

.program-container {
  display: flex;
}

#searchbar {
  outline: none;
  font-size: 15px;
  font-family: Avenir, sans-serif;
  background-color:rgb(236, 236, 238);
  border: none;
  border-radius: 5px;
  padding: 10px;
}

.main-container {
  background-color: white;
  width: 75%;
  height: 200px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-top: 1px solid rgb(223, 223, 223);
  display: block;
}

#search img{
  width:50px;
  height:50px;
  } 
  ul {
  list-style-type: none;
  padding: 0;
}
#search li, h1 {
  display: inline-block;
  padding:15px;
  margin:10px;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  border-radius: 15px;
}
</style>