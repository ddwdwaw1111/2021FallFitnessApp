<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
          </router-link>
          <router-link class="button is-light" to="/">
            Log in
          </router-link>
    </div>
    <div v-else>
         <span class="navbar-item">
             <strong>Hello,{{name}}</strong> 
         </span>
         <router-link class="navbar-item button is-primary" to="/accountManage">
        <strong>Manage Account</strong>
        </router-link>
    </div>
</template>

<script>
import Session from "../services/session"
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
</style>