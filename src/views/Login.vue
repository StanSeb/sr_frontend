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
      <button type="submit" class="LoginBtn">Login</button>
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
      console.log(credentials);

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
        console.log(user);
      } catch {
        alert("Wrong credentials! Please check username or password.");
      }
      this.$router.push("/")
    },
  },
};
</script>

<style scoped>

</style>