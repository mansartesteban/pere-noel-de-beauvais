<template>
  <div class="pt-16 md:pt-32 flex flex-col">
    <div class="text-center p-8">
      <h1 class="text-2xl md:text-2xl lg:text-4xl mb-8 font-[PermanentMarker]">
        Quelques souvenirs magiques en images
      </h1>

      <p class="text-lg md:text-lg lg:text-xl">
        Découvrez quelques-uns des moments de joie et d'émerveillement partagés
        au fil des années. Chaque sourire est ma plus belle récompense.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
      <img
        v-for="(img, index) in thumbnails"
        :key="index"
        :src="img"
        class="cursor-pointer border-4 md:border-8 shadow-xl rounded-lg"
        @click="openLightbox(index)"
      />
    </div>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="handleHide"
    />
  </div>
</template>

<script>
  export default {
    components: { VueEasyLightbox },
  };
</script>

<script setup>
  import VueEasyLightbox from "vue-easy-lightbox";

  const images = ref(
    Array.from(
      { length: 46 },
      (_, i) => `/content/gallery/gallery-${i + 1}.png`
    )
  );
  const thumbnails = ref(
    Array.from(
      { length: 46 },
      (_, i) => `/content/gallery/thumbs/gallery-${i + 1}.webp`
    )
  );

  const visible = ref(false);
  const index = ref(0);

  const openLightbox = (i) => {
    index.value = i;
    visible.value = true;
  };

  const handleHide = () => {
    visible.value = false;
  };
</script>

<style lang="css" scoped></style>
