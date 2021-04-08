<template>
  <div id="nav">
    <router-link to="/" id="logo"><img src="./assets/Sverigesradio_ppt.png"/><br>listan</router-link>
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
  border: 1px solid black;
  font-family: Avenir, sans-serif;
}

</style>