<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'watch'
  }
</script>

<style>
  body {
    -webkit-app-region: drag;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0);
    margin: 0;
  }
</style>
