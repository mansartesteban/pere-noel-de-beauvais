<template>
  <div>
    <div
      class="absolute top-0 left-0 bg-fuchsia-500 p-2 rounded-br-md border-4 border-yellow-500"
    >
      <div class="md:hidden">sm</div>
      <div class="hidden md:block lg:hidden">md</div>
      <div class="hidden lg:block xl:hidden">lg</div>
      <div class="hidden xl:block 2xl:hidden">xl</div>
      <div class="hidden 2xl:block">2xl</div>
    </div>
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
