<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <Navbar />
                <messages />
                <router-view/>                 
            </div>
        </div>
       
    </div>

</template>

<style lang="scss">
</style>

<script>
import Messages from './components/Messages.vue';
import Navbar from "./components/NavBar.vue";
export default {
    components: {
        Navbar,
        Messages
    }
}
</script>