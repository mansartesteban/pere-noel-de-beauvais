<template>
  <div class="container fluid main-content">
    <HomeLanding></HomeLanding>
    <HomePresentation></HomePresentation>
    <HomePrestation></HomePrestation>
    <HomeContact></HomeContact>

    <FabButton :show="showFabButton"></FabButton>
  </div>
</template>

<script setup>
  import HomeLanding from "@/components/public/views/home/HomeLanding.vue";
  import HomePresentation from "@/components/public/views/home/HomePresentation.vue";
  import HomePrestation from "@/components/public/views/home/HomePrestation.vue";
  import HomeContact from "@/components/public/views/home/HomeContact.vue";
  import FabButton from "@/components/public/commons/FabButton.vue";

  const showFabButton = ref(false);
</script>
