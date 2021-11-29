<template>
  <div class="buttons" v-if="!Session.user">
    <router-link class="button is-black" to="/Register">
      <strong>Sign up</strong>
    </router-link>
    <a class="button is-light" @click="login"> Log in </a>
  </div>
  <div v-else class="navbar-item is-tab has-dropdown is-hoverable">
    <div class="navbar-link">
      <n-avatar :src="Session.user.pic"></n-avatar>
      <strong>&nbsp; {{ name }}</strong>

      <div class="navbar-dropdown has-text-centered">
        <button class="has-text-weight-bold button " @click="logout()"> Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import { NAvatar } from "naive-ui";
export default {
  components: {
    NAvatar
  },
  data() {
    return {
      Session,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout(){
        console.log('log out');
        this.Session.Logout();
        this.$router.push('/login');

    }
  },
  computed: {
    name() {
      return this.Session.user.firstName + " " + this.Session.user.lastName;
    },
  },
};
</script>

<style>
</style>