<template>
  <div class="section">
    <h1 class="title has-text-centered">Login</h1>
    <form class="" @submit.prevent="login()">
      <div class="column is-one-third is-offset-one-third">
        <div class="box">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Email"
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Password"
                v-model="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field has-text-centered">
            <p class="control">
              <button class="button is-black">Login</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  data: () => ({
    email: null,
    password: null,
    Session,
  }),
  methods: {
    login() {
      this.Session.Login(this.email, this.password);
    },
  },
};
</script>

<style>
</style>