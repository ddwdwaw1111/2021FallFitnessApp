<template>
      <div class="container">
        <section class="section">
            <div class="container">
                <div class="column is-full has-text-centered">
                    <h1 class="title ">Register</h1>
                </div>
                <div class="column is-one-third is-offset-one-third">
                    <form class="box" @submit.prevent="register()">

                        <div class="field">
                            <p class="control">
                                <input class="input" type="firstName" v-model="user.firstName" placeholder="First name">
                            </p>
                        </div>
                        
                        <div class="field">
                            <p class="control">
                                <input class="input" type="lastName" v-model="user.lastName" placeholder="Last name">
                            </p>
                        </div>
                                                <div class="field">
                            <p class="control">
                                <input class="input" type="email" v-model="user.emails" placeholder="Email ">
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="username" v-model="user.handle" placeholder="Username">
                                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" v-model="user.password" placeholder="Password">
                                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" v-model="cpassword" placeholder="Confirm Password">
                                <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
                            </p>
                        </div>

                        <div class="column is-full has-text-centered">
                            <button type="submit" class="button is-black is-centered">
                        Sign Up
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Footer />

    </div>
</template>

<script>

import Session from "../services/session";
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
    name: "SignUp",
    data: () => {
        return {
        Session,
        cpassword : '',
        user:{
        "firstName": '',
        "lastName": '',
        "handle": '',
        "pic": 'https://bulma.io/images/placeholders/128x128.png',
        "password": "",
        "isAdmin": false,
        "country": 'Unknown',
        "emails": [
            ""
        ],
        "following": [{}],
        "healthProfile":
            {
                "Height":"0",
                "Weight":"0",
                "Age":"0",
                "Sex": "Unknown"
            }
        },      
        }
    },
    methods: {
    register() {
        if(this.user.password !== this.cpassword)
        {
            alert("Password does not match")
        }
        else
        {
            
                  this.Session.Register(this.user);
        }

    }
    }
}
</script>

<style>

</style>