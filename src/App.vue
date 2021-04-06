<template>
  <div id="nav">
      <router-link to="/" id="logo">Sveriges Radio Lista</router-link>
    <div class="routes">
      <router-link to="/channels">Kanaler</router-link>
      <router-link to="/programs">Program</router-link>
      <router-link to="/favorites">Favoriter</router-link>
      <router-link to="/friends">Vänner</router-link>
    </div>
    <input type="text">
    <div class="buttons">
      <button class="signup">Sign up</button>
      <button class="login">Login</button>
      <button class="logout">Logout</button>
    </div>
  </div>
  <router-view />
</template>

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
}

#logo {
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  color: black;
}

</style>