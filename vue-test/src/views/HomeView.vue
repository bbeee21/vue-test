<template>
  <div class="home">
    <img alt="GS EPS Logo" src="../assets/logo_gseps.jpg" class="gs_logo">
    <HelloWorld msg="Welcome to Your GS EPS App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.gs_logo{
  width : 20%;
}
</style>