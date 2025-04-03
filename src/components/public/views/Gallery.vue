<template>
  <div class="container fluid gallery">
    <img
      v-for="(img, i) in gallery"
      :key="'gallery-img-' + i"
      :src="'/content/gallery/' + img.name"
      @click="zoom(i)"
      alt=""
    />

    <div
      class="overlay-img"
      v-if="zoomedImage != null"
    >
      <img
        :src="'/content/gallery/' + gallery[zoomedImage].name"
        class="zoomed"
        alt=""
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallery",
    data() {
      return {
        gallery: [
          {
            name: "107168221_2931257567002918_2397109773501569582_n.png",
            focused: false,
          },
          {
            name: "107717675_2931258720336136_5232563457907433057_n.png",
            focused: false,
          },
          {
            name: "122959741_135991471604196_8797971541135447841_n.png",
            focused: false,
          },
          {
            name: "123000856_135991704937506_4392619432641944782_n.png",
            focused: false,
          },
          {
            name: "123022949_135990881604255_6429294922232336359_n.png",
            focused: false,
          },
          {
            name: "123025998_135991954937481_6513895523725205188_n.png",
            focused: false,
          },
          {
            name: "123049843_135992291604114_5956166729340644845_n.png",
            focused: false,
          },
          {
            name: "134081474_3418018394993497_3738618451935399388_n.png",
            focused: false,
          },
        ],
        zoomedImage: null,
      };
    },
    methods: {
      zoom(index) {
        this.zoomedImage = index;
        setTimeout(() => {
          document.body.style.cursor = "pointer";
          document.body.addEventListener("click", this.unzoom);
        }, 1);
      },
      unzoom() {
        this.zoomedImage = null;
        document.body.style.cursor = "initial";
        document.body.removeEventListener("click", this.unzoom);
      },
    },
  };
</script>
