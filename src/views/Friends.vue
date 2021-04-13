<template>
  <div class="friends-container">
    <h1>Vänner</h1>
    <ul v-for="(friendsList, friendIndex) in getFriendsList" :key="friendIndex">
      <li>
        {{ friendsList.firstName }} {{ friendsList.lastName }}
        {{ friendsList.userId }}
      </li>
      <button @click="removeFriend(friendsList.userId)">remove friend</button>
      <a
        :href="`mailto:${friendsList.email}?subject=Kolla in mina favoriter på SR-listan!&body=${getMyFavorites()}`"
        >Dela favoriter</a
      >
    </ul>
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
        myFavoritesList+= "Program: " + name + "%0D%0ALink: " + url + "%0D%0A" + "%0D%0A";
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
</style>