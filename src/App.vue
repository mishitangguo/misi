<template>
  <div id="app">
    <keep-alive include="homepage,category,bookrank">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){

  }
}
</script>

<style>
  .slide-enter-active,.slide-leave-active{
    transition:transform 0.5s;
  }
  .slide-enter,.slide-leave-to{
    transform:translate3d(-100vw,0px,0px);
  }
</style>
