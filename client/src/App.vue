<template>

      <div id="nav">
    <NavBar />
  </div>
  <router-view/>
  <Footer />


</template>

<style lang="scss">
</style>

<script>
import NavBar from"./components/NavBar.vue"
import Footer from"./components/Footer.vue"
export default {
    components:
    {
      NavBar,
      Footer
    }

}
</script>