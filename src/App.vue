<template>
  <div id="nav">
      <router-link to="/" id="logo">Sveriges Radio<br>Lista</router-link>
    <div class="routes">
      <router-link to="/channels" id="channels" class="route">Kanaler</router-link>
      <router-link to="/programs" id="programs" class="route">Program</router-link>
      <router-link to="/favorites" id="favorites" class="route">Favoriter</router-link>
      <router-link to="/friends" id="friends" class="route">Vänner</router-link>
    </div>
    <input type="text" placeholder="Sök" id="searchbar">
    <div class="buttons">
      <button class="signup">Sign up</button>
      <button class="login">Login</button>
      <button class="logout">Logout</button>
    </div>
  </div>
  <router-view />
</template>

<script>
  
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
  font-weight: bold;
  font-size: 20px;
  color: black;
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

</style>