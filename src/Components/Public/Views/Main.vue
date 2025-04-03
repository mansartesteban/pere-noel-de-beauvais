<template>
  <div>
    <Snow></Snow>

    <AppBar></AppBar>

    <router-view></router-view>

    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
  import Snow from "@/components/ui-elements/Snow.vue";
  import AppBar from "@/components/public/commons/AppBar.vue";
  import AppFooter from "@/components/public/commons/AppFooter.vue";
</script>
