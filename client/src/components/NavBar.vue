<template>
  <div class="container">
    <section class="section">
      <div class="column is-full">
        <nav
          class="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <div
              class="
                navbar-item
                has-background-grey-light
                has-text-weight-semibold
              "
            >
              Zihao's Fitness Tracker Logo
            </div>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              :class="{ 'is-active': isActive }"
              @click="isActive = !isActive"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start" v-if="Session.user">
              <router-link
                class="navbar-item is-tab"
                to="/discover"
                active-class="is-active"
              >
                <strong>Share With Your Friend</strong>
              </router-link>

              <router-link
                class="navbar-item is-tab"
                to="/healthpanel"
                active-class="is-active"
              >
                <strong>Exercise Log</strong>
              </router-link>

              <router-link
                class="navbar-item is-tab"
                to="/accountManage"
                active-class="is-active"
              >
                <strong>Manage Account</strong>
              </router-link>
            </div>

            <div class="navbar-end">
              <login-badge />
            </div>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import Session from "../services/session";
import LoginBadge from "./LoginBadge";
export default {
  name: "NavBar",
  data() {
    return {
      isActive: false,
      Session,
    };
  },
  components: {
    LoginBadge,
  },
};
</script>

<style>
</style>