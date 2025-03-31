<template>
  <div>
    <Snow></Snow>

    <AppNav></AppNav>

    <router-view></router-view>

    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
  import Snow from "@/components/ui-elements/Snow.vue"
  import AppNav from "@/components/public/commons/AppNav.vue"
  import AppFooter from "@/components/public/commons/AppFooter.vue"
</script>

<style scoped></style>
