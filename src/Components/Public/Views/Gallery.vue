<template>

    <div class="container fluid gallery">
        <img
         v-for="(img, i) in gallery" 
         :key="'gallery-img-' + i" 
         :src="'/content/gallery/' + img.name" 
         @click="zoom(i)"
         alt=""
        >

        <div class="overlay-img" v-if="zoomedImage != null">
            <img :src="'/content/gallery/' + gallery[zoomedImage].name" class="zoomed" alt="">            
        </div>

    </div>

</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            gallery: [
                {name: "107168221_2931257567002918_2397109773501569582_n.png", focused: false},
                {name: "107717675_2931258720336136_5232563457907433057_n.png", focused: false},
                {name: "122959741_135991471604196_8797971541135447841_n.png", focused: false},
                {name: "123000856_135991704937506_4392619432641944782_n.png", focused: false},
                {name: "123022949_135990881604255_6429294922232336359_n.png", focused: false},
                {name: "123025998_135991954937481_6513895523725205188_n.png", focused: false},
                {name: "123049843_135992291604114_5956166729340644845_n.png", focused: false},
                {name: "134081474_3418018394993497_3738618451935399388_n.png", focused: false}
            ],
            zoomedImage: null
        }
    },
    methods: {
        zoom(index) {
            this.zoomedImage = index
            setTimeout(() => {
                document.body.style.cursor = "pointer"
                document.body.addEventListener("click", this.unzoom)
            }, 1)
        },
        unzoom() {
            this.zoomedImage = null
            document.body.style.cursor = "initial"
            document.body.removeEventListener("click", this.unzoom)
        }
    }
}
</script>

<style scoped>
    .gallery {

        padding-top: 12vh;
        padding-bottom: 12vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }

    .gallery img {
        cursor: pointer;
        padding: 4em;
    }

    .gallery img:not(.zoomed):hover {
        animation: gallery-img 5s ease-in-out infinite;
        animation-delay: 1s;

    }

    @keyframes gallery-img {
        6% { transform: scale(1.05); }
        8%, 12% { transform: rotate(-3deg) scale(1.05); }
        10% { transform: rotate(3deg) scale(1.05); }
        14% { transform: rotate(0deg) scale(1.05); }
        20% { transform: scale(1); }

    }

    .overlay-img {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0; bottom: 0;
        left: 0; right: 0;
    }

    .gallery img.zoomed {
        display: block;
        max-width:100%;
        max-height: 100%;
        width: auto;
        height: 100vh;

    }
</style>