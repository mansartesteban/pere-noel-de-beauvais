<template>
  <div class="topbar-container">
    <div class="topbar">
      <div class="logo"></div>

      <NavBar></NavBar>
    </div>
  </div>
</template>

<script setup>
  import NavBar from "@/Components/Public/Commons/NavBar.vue";
</script>

<style scoped lang="scss">
  .topbar {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    padding-left: 8%;
    padding-right: 8%;

    background: white;

    &:before {
      content: " ";
      width: 100%;
      height: 32px;
      left: 0;
      right: 0;
      top: -32px;
      position: absolute;
      background: url("/ressources/images/section-before.svg") no-repeat;
      background-size: cover;
      -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.7));
      filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.7));
      z-index: -1;
    }

    &:after {
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
    }

    .logo {
      /*background: yellow;
            height: 64px;
            width: 64px;
            -webkit-mask: url("/ressources/images/logo.svg") no-repeat center;
            mask: url("/ressources/images/logo.svg") no-repeat center;*/
    }
  }

  .topbar-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20000;
  }

  @media only screen and (max-width: 600px) {
    .topbar {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
  }

  @media only screen and (min-width: 1201px) {
  }
</style>
