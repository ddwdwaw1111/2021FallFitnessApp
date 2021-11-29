<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <Navbar />
                <router-view/>   
                <Footer />              
            </div>
        </div>
       
    </div>

</template>

<style lang="scss">
</style>

<script>
import Footer from "./components/Footer.vue"
import Navbar from "./components/NavBar.vue";
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>