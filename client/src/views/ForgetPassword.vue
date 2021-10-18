<template>
  
    <section class="section">
        <div class="container">
            <div class="column is-full has-text-centered">
                <h1 class="title ">Forget Password</h1>
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


                    <div class="column is-full has-text-centered">
                        <button class="button is-black is-centered">
                        Send Reset Link
                    </button>
                    </div>
                </div>
            </div>

            <div class="column is-one-third is-offset-one-third">
                <div class="box">
                    <div class="columns is-multiline">
                        <div class=" column is-full has-text-centered">
                            <router-link to="/"> Back to login</router-link>
                        </div>
                        <div class=" column is-full is-gapless has-text-centered">
                            <router-link to="/signup"> Sign Up</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name:'ForgetPassword'
}
</script>

<style>
        body {
            background-color: rgb(250, 250, 250);
            background-size: cover;
        }
</style>