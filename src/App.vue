<template>
  <div id="nav">
    <router-link to="/" id="logo"><img src="./assets/Sverigesradio_ppt.png"/><br>listan</router-link>
    <div class="routes">
      <router-link to="/channels" id="channels" class="route">Kanaler</router-link>
      <router-link to="/programs" id="programs" class="route">Program</router-link>
      <router-link to="/favorites" id="favorites" class="route">Favoriter</router-link>
      <router-link to="/friends" id="friends" class="route">Vänner</router-link>
      <h4 v-if="isLoggedIn">Is logged in: {{loggedInUser.firstName}}</h4>
    </div>
    <input type="text" v-model="search" placeholder="sök" id="searchbar">
    <div class="buttons">
      
      <button><router-link to="/register" id="register" class="registerRoute">sign up</router-link></button>
      <button><router-link to="/login" id="login" class="loginRoute">Login</router-link></button>
      <button class="logout" @click="logout">Logout</button>
    </div>
  </div>
  <router-view />
</template>

<script>
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
}

.route {
  margin-right: 100px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 18px;
}

#searchbar {
  outline: none;
  font-size: 15px;
  border: 1px solid black;
  font-family: Avenir, sans-serif;
}

</style>