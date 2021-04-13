<template>
  <div id="nav">
    <router-link to="/" id="logo">
      <img src="./assets/Sverigesradio_ppt.png" /><br />listan</router-link>
    <div class="routes">
      <div class="channel-container">
        <router-link to="/channels" id="channels" class="route">Kanaler</router-link>
      </div>
      <div class="program-container">
        <router-link to="/categories" id="categories" class="route">Program</router-link>
      </div>
      <template v-if="isLoggedIn">
      <div class="favorites-container">
        <router-link to="/favorites" id="favorites" class="route">Favoriter</router-link >
      </div>
      </template>
      <template v-if="isLoggedIn">
      <div class="friends-container">
        <router-link to="/friends" id="friends" class="route">Vänner</router-link>
      </div>
      </template>
    </div>

    <input
      @keydown.enter="ProgramsBySearch(input)"
      v-model="input"
      type="text"
      placeholder="Sök"
      id="searchbar"
    />
    <div class="buttons">
      <button class="sameBtns" v-if="!isLoggedIn">
        <router-link to="/register" id="register" class="registerRoute">Sign up</router-link>
      </button>
      <button class="sameBtns" v-if="!isLoggedIn">
        <router-link to="/login" id="login" class="loginRoute">Login</router-link>
      </button>
      <button class="sameBtns" v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
   <h4 class="loggedInUser" v-if="isLoggedIn"> {{ loggedInUser.firstName }}</h4>
    </div>
  
  <router-view />
</template>

<script>
export default {
  
  computed: {

    loggedInUser() {
      return this.$store.state.loggedInUser;
    },

    isLoggedIn() {
      return this.loggedInUser != null;
    },
  },

  methods: {
    ProgramsBySearch(input) {
      this.$store.dispatch("fetchProgramsBySearch", input);
      this.$router.push("/search")
    },

    async logout() {
      //tells backend to forget about us
      fetch('/logout', { mode: 'no-cors' });

      //removes logged in user from "store"
      this.$store.commit('setLoggedInUser', null);
      this.$router.push('/')
      alert('You have logged out');
    }
  },

  async mounted() {
    let user = await fetch('/api/auth/whoami');
    try {
      user = await user.json();
      this.$store.commit('setLoggedInUser', user);
    } catch {
      console.log('Not logged in');
    }
  },
};
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

.routes img {
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
  background-color: rgb(236, 236, 238);
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

.sameBtns{
        display: inline-block;
        background-color:rgb(105, 117, 105);
        border-radius: 10px;
        border: 3px double #cccccc;
        color:seashell;
        text-align: center;
        font-size: 14px;
        padding: 1px;
        width: 60px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        margin: 1px; 
        text-decoration: none;
        outline: none;
        
}
.sameBtns:hover{
background-color:royalblue;
}
.sameBtns:active{
  text-decoration: none;
  color: seashell;
}
#register{
   text-decoration: none;
   color: seashell;
}
#login{
   text-decoration: none;
   color: seashell;
}
.loggedInUser{
margin-left: 8px;
cursor:progress;


}
.buttons{
  margin-left: 10px;
}

</style>