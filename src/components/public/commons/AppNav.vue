<template>
  <div class="topbar-container">
    <div class="">
      <div class="logo"></div>

      <NavBar></NavBar>
    </div>
  </div>
</template>

<script setup>
  import NavBar from "@/Components/Public/Commons/NavBar.vue";
</script>

<style scoped>
  /* .topbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    background: white;
  }
  .topbar:before {
    content: " ";
    width: 100%;
    height: 32px;
    left: 0;
    right: 0;
    bottom: -32px;
    position: absolute;
    background: url("/ressources/images/section-before.svg") no-repeat;
    background-size: cover;
    -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.7));
    z-index: -1;
  }

  .topbar:after {
    content: " ";
    width: 100%;
    height: 32px;
    left: 0;
    right: 0;
    bottom: -32px;
    position: absolute;
    background: url("/ressources/images/section-after.svg") no-repeat;
    background-size: cover;
    -webkit-filter: drop-shadow(0 0 25px rgba(0, 0, 0, 1));
    filter: drop-shadow(0 0 25px rgba(0, 0, 0, 1));
    z-index: -1;
  } */
</style>
