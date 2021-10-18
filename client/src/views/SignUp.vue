<template>
      <div class="container">
        <section class="section">
            <div class="container">
                <div class="column is-full has-text-centered">
                    <h1 class="title ">Sign Up</h1>
                </div>
                <div class="column is-one-third is-offset-one-third">
                    <div class="box">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
                                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="username" placeholder="Username">
                                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password">
                                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Repeat Password">
                                <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
                            </p>
                        </div>

                        <div class="column is-full has-text-centered">
                            <button class="button is-black is-centered">
                        Sign Up
                    </button>
                        </div>
                    </div>
                </div>
                <div class="column is-one-third is-offset-one-third">
                    <div class="box">
                        <div class=" column is-full has-text-centered">
                            <router-link to="/"> Back To Login Page</router-link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section class=" hero is-fullheight">
        </section>
    </div>
</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style>
 body {
            background-color: rgb(250, 250, 250);
            background-size: cover;
        }
</style>