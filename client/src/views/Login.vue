<template>
      <section class="section">
        <div class="container">
            <div class="column is-full has-text-centered">
                <h1 class="title ">Login</h1>
            </div>

            <div class="column is-one-third is-offset-one-third ">
                <form class="box" @submit.prevent="login()">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" placeholder="Email" v-model="email">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <input class="input" type="password" placeholder="Password" v-model="password">
                        </p>
                    </div>
                     <div class="field">
                     <p class="control has-text-centered">
                          <button class="button is-success">
                          Login
                            </button>
                     </p>
                    </div>
                </form>
            </div>

            <div class="column is-one-third is-offset-one-third">
                <div class="box">
                    <div class="columns is-multiline">
                        <div class=" column is-full has-text-centered">
                            <router-link to="/signup"> Create a new account</router-link>
                        </div>
                        <div class=" column is-full is-gapless has-text-centered">
                            <router-link to="/forgetpassword"> Forget password</router-link>
                    </div>
                </div>
            </div>
    </div>
        </div>
    </section>

</template>

<script>
import Session from "../services/session";
export default {
    name:'Login',
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}

</script>

<style>
        body {
            background-color: rgb(250, 250, 250);
            background-size: cover;
        }
</style>