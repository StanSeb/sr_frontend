<template>
  <div class="loginContainer">
    <h1 class="loginH1">Logga in på sveriges radio!</h1>

    <form class="form-signin" @submit.prevent="login">
      <div class="login-form">
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="email"
          required
        />
      </div>
      <div class="password-div">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="LoginBtn">Logga in</button>
    </form>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {
    console.log("mounted Login");
  },

  methods: {
   
    async login() {
      const credentials =
        "username=" +
        encodeURIComponent(this.email) +
        "&password=" +
        encodeURIComponent(this.password);

      await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: "no-cors",
        body: credentials,
      });

      let user = await fetch("/api/auth/whoami");
      try {
        user = await user.json();
        this.$store.commit("setLoggedInUser", user);
      } catch {
        alert("Wrong credentials! Please check username or password.");
      }
      this.$router.push("/")
    },
  },
};
</script>

<style scoped>

.loginContainer {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
}

.loginContainer h1 {
  padding-top: 20px;
}

.LoginBtn{
  
        display: inline-block;
        background-color:rgb(105, 117, 105);
        border-radius: 10px;
        border: 3px double #cccccc;
        color:white;
        text-align: center;
        font-size: 14px;
        padding: 5px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        margin: 5px;
        outline: none;
}
.LoginBtn:hover{
  background: royalblue;

}

</style>