<template>
  <div class="users-container">
    <h1>Alla användare</h1>
    <ol v-for="(usersList, userIndex) in getUsersList" :key="userIndex">
      <li class="usersLi">{{ usersList.firstName }} {{ usersList.lastName }} {{ usersList.userId}}<button @click="addFriend(usersList.userId)">add friend</button>
      </li>
    </ol>
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
}
.usersLi button {
  cursor: pointer;
}
</style>