<template>
<meta charset="utf-8">
  <div class="friends-container">
    <h1>Vänner</h1>
    <div class="ulDiv">
    <ul v-for="(friendsList, friendIndex) in getFriendsList" :key="friendIndex">
    
      <li class="friend">
        {{ friendsList.firstName }} {{ friendsList.lastName }}
      </li>
      <button class="removeBtn" @click="removeFriend(friendsList.userId)">Ta bort</button>
      <a class="mailBtn"
        :href="`mailto:${friendsList.email}?subject=Kolla in mina favoriter på SR-listan!&body=${getMyFavorites()}`"
        >Dela favoriter</a
      >
    </ul>
    </div>
  </div>
  <div class="users-container">
    <Users />
  </div>
</template>

<script>
import Users from "../components/Users.vue";

export default {
  name: "friendsList",

  data() {

    return {
      userId: "",
    }
  },

  computed: {
    getFriendsList() {
      return this.$store.getters.getFriendsList;
    },
    getFavoritesList() {
      return this.$store.getters.getFavoritesList;
    },
  },  

  mounted() {
    this.$store.dispatch("fetchFriendsList");
    this.$store.dispatch("fetchFavoritesList");
  },
  
  components: {
    Users
  },

  methods: {
    async removeFriend(userId) {
      let response = await fetch(
        "http://localhost:3000/api/auth/friends/" + userId,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userId),
        }
      );
      response = await response.text();
      if (response == "success") {
        this.$store.commit("removeFriend", userId);
      }
    },

    getMyFavorites(){
      var myFavorites = this.getFavoritesList;
      var myFavoritesList = "";
      var name = "";
      var url = "";

      for(var i = 0; i < myFavorites.length; i++){
        name = myFavorites[i].name;
        url = myFavorites[i].url;
        myFavoritesList+= "Program: " + name + " %0D%0ALink: " + url + " %0D%0A " + " %0D%0A";
      }
      return myFavoritesList;
    }
  },
};
</script>

<style scoped>
.friends-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 20px;
}

.users-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 20px;
}

.friends-container ul li {
  list-style: none;
}

h1 {
  padding-top: 20px;
}
.removeBtn{
  
  
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
        margin: 5px;
        outline: none;
}
.removeBtn:hover{
  background:red;
  
}
a.mailBtn{
        display: inline-block;
        background-color:rgb(105, 117, 105);
        border-radius: 10px;
        border: 3px double #cccccc;
        color:seashell;
        text-align: center;
        font-size: 14px;
        padding: 1px;
        width: 90px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        margin: 5px;
        text-decoration: none;
        outline: none;
}
a.mailBtn:hover{
background-color:royalblue;
}
.friend{
  
  
  font-size: 18px;
  color: black;
  text-shadow: 1px 1px 0 royalblue;
  font-weight: bolder;
  text-align: center;
  margin: 0;

}

</style>