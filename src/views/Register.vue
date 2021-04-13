<template>
  <div class="registerContainer">
      <h1>Logga in på sveriges radio!</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="register">
          <div class="register-form">
            <input
              type="firstName"
              class="form-control"
              placeholder="First name"
              v-model="firstName"
              required
            />
        
          <div class="register-form">
            <input
              type="lastName"
              class="form-control"
              placeholder="Last name"
              v-model="lastName"
              required
            />
          </div>
          <div class="register-form">
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              v-model="email"
              required
            />
          </div>
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
          <button type="submit" class="RegisterBtn">Register</button>
        </form>
        <br>
        <label>Already have an account? Press "Login"</label>
        <br>
        <br>
         <button class="loginBtn"><router-link to="/login" id="login" class="loginRoute">Login</router-link></button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    },
    methods:{
      async register(){
        let credentials={
            
            email:this.email,
            password:this.password,
            firstName:this.firstName,
            lastName:this.lastName

        }
        await fetch('http://localhost:3000/api/rest/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(credentials),

        })
            alert("Registered succesfurry!")

    this.$router.push("/"
)
    }

    }

}
</script>

<style>

.RegisterBtn{
  
        display: inline-block;
        background-color:rgb(105, 117, 105);
        border-radius: 10px;
        border: 3px double #cccccc;
        color:seashell;
        text-align: center;
        font-size: 14px;
        padding: 3px;
        width: 60px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        margin: 5px;
        outline: none;
}
.RegisterBtn:hover{
  background: royalblue;
  
}
.loginBtn{
  
        display: inline-block;
        background-color:rgb(105, 117, 105);
        border-radius: 10px;
        border: 3px double #cccccc;
        color:black;
        text-align: center;
        font-size: 14px;
        padding: 3px;
        width: 60px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        margin: 5px;
        outline: none;
}
.loginBtn:hover{
  background: royalblue;
  
}
</style>