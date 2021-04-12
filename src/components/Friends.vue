<template>
  <div class="friends-container">
      <h1>Vänner</h1>
       <ol v-for="(friendsList, friendIndex) in getFriendsList" :key="friendIndex">
    <li>{{friendsList.firstName}} {{friendsList.lastName}} {{friendsList.userId}}</li><button @click="removeFriend(friendsList.userId)">remove friend</button>
  </ol>
  </div>
  <div class="usersdiv">

  <Users/>
  </div>
</template>

<script>
import Users from './Users.vue';
export default {
 name:'friendsList',
  computed: {
    getFriendsList(){
      return this.$store.getters.getFriendsList
    }
  },
     
  mounted(){
    this.$store.dispatch("fetchFriendsList");
  },
  components:{
    Users
  },
  data() {
    return {
      userId: "",
    };
  },
    methods: 
  {
    async removeFriend(userId){
      let response = await fetch("http://localhost:3000/api/auth/friends/"+userId, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userId),
        
      });
          response= await response.text()
        if(response=='success'){
          this.$store.commit('removeFriend',userId)
        }

   
    },
  }

}
</script>

<style>
.friends-container {
    background-color: white;
    width: 75%;
    margin: 0 auto;
    justify-content: center;
}
</style>