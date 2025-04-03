<template>
  <div
    ref="galleryElement"
    class="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-center p-8 mt-16"
  >
    <img
      v-for="(img, i) in gallery"
      :key="'gallery-img-' + i"
      class="border-16 shadow-xl rounded-md"
      :src="'/content/gallery/' + img.name"
      @click="zoom(i)"
      alt=""
    />

    <div
      class="flex z-20 items-center justify-center bg-black/90 fixed w-screen h-full top-0 left-0 right-0 bottom-0"
      v-if="zoomedImage != null"
      :class="{ 'block w-auto h-screen': zoomedImage !== null }"
    >
      <img
        :src="'/content/gallery/' + gallery[zoomedImage].name"
        class="zoomed"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
  const gallery = ref([]);
  const zoomedImage = ref(null);
  const galleryElement = ref(null);

  onMounted(() => {
    for (let i = 1; i <= 46; i++) {
      gallery.value.push({
        name: `gallery-${i}.png`,
        focused: false,
      });
    }

    galleryElement.value.addEventListener("touchstart", (e) => {
      if (zoomedImage.value !== null) {
        e.preventDefault();
      }
      touchstartX = e.changedTouches[0].screenX;
    });

    galleryElement.value.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      if (zoomedImage.value !== null) {
        checkDirection();
      }
    });
  });

  const zoom = (index) => {
    zoomedImage.value = index;
    setTimeout(() => {
      document.body.style.cursor = "pointer";
      document.body.addEventListener("click", unzoom);
    }, 1);
  };

  const unzoom = () => {
    zoomedImage.value = null;
    document.body.style.cursor = "initial";
    document.body.removeEventListener("click", unzoom);
  };

  let touchstartX = 0;
  let touchendX = 0;

  const checkDirection = () => {
    if (touchendX < touchstartX) {
      // Swipe left
      zoomedImage.value = Math.min(
        zoomedImage.value + 1,
        gallery.value.length - 1
      );
    }
    if (touchendX > touchstartX) {
      // Swipe right
      zoomedImage.value = Math.max(zoomedImage.value - 1, 0);
    }
    if (touchendX === touchstartX) {
      unzoom();
    }
  };
</script>
