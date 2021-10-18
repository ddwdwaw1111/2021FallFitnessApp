<template>
<div class="container">
<section class="section">
                  <div class="column is-full">
                    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <div class="navbar-item has-background-grey-light has-text-weight-semibold">
                                Zihao's Fitness Tracker Logo
                            </div>

                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">
                                <a class="navbar-item" href="./healthPanel.html">
                      Health Panel
                    </a>

                                <a class="navbar-item">
                             New Post
                        </a>

                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                        More
                      </a>

                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                          About
                        </a>
                                        <a class="navbar-item">
                          Contact
                        </a>
                                        <hr class="navbar-divider">
                                        <a class="navbar-item">
                          Report an issue
                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="buttons">
                                        <a class="button is-primary" href="./profile.html">
                                            <strong>My Profile</strong>
                                        </a>
                                        <a class="button is-light" href="login.html">
                          Log out
                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
</section>
</div>

</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>

</style>