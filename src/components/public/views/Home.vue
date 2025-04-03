<template>
  <div class="pt-40 flex flex-col">
    <HomeLanding></HomeLanding>
    <HomeContact></HomeContact>
    <HomePresentation></HomePresentation>
    <HomePrestation></HomePrestation>

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
