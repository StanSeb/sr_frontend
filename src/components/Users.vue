<template>
  <div class="users-container">
    <h1>Alla användare</h1>
    <ul v-for="(usersList, userIndex) in getUsersList" :key="userIndex">
      <li class="usersLi">{{ usersList.firstName }} {{ usersList.lastName }} {{ usersList.userId}}<button class="addFriend" @click="addFriend(usersList.userId)">Lägg till</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "usersList",
  computed: {
    getUsersList() {
      return this.$store.getters.getUsersList;
    },
  },
  data() {
    return {
      userId: "",
    };
  },

  mounted() {
    this.$store.dispatch("fetchUsersList");
  },
  methods: {
    async addFriend(userId) {
      let friend = {
        userId,
      
      }
      
      let response = await fetch("http://localhost:3000/api/auth/friends", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(friend),
        
      });
          response= await response.text()
        if(response=='success'){
          this.$store.commit('addFriend',userId)
        }
        
    },
  },
};
</script>

<style scoped>
.users-container {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 20px;
}

h1 {
  padding-top: 20px;
}

.usersLi {
  list-style: none;
  font-size: 19px;
}

.usersLi button {
  cursor: pointer;
}
.addFriend{
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
        margin: 5px;
        text-decoration: none;
        outline: none;
}
.addFriend:hover{

  background: green;;
}
</style>