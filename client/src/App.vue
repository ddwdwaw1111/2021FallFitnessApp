<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <Navbar />
                <router-view/>                 
            </div>
        </div>
       
    </div>

</template>

<style lang="scss">
</style>

<script>
import Navbar from "./components/NavBar.vue";
export default {
    components: {
        Navbar,
    }
}
</script>