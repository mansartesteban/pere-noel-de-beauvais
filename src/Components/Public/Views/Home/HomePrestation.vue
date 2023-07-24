<template>
    <div class="prestation section" id="home-prestation">

            <div class="prestation-title title" >
                Prestations
            </div>

            <div class="prestation-content">

                <div class="prestation-card-parent card-left">

                    <div class="prestation-card" :class="{'show-price': showPrice1}" @click="showPrice1 = !showPrice1">
                        <div class="prestation-card-title">Passage du Père-Noël</div>
                        <div class="prestation-card-subtitle">- Particulier -</div>
                        <br>
                        <div class="prestation-card-content">
                            <div class="prestation-card-item">15 / 20 Minutes de présence</div>
                            <div class="prestation-card-item">Distribution des cadeaux</div>
                            <div class="prestation-card-item">Photos (Sans supplément)</div>
                        </div>
                    </div>
                    <div class="prestation-card-price">
                        <div class="prestation-card-item">50 € TTC</div>
                        <div class="prestation-card-item">Espèce / Chèque</div>
                    </div>
                </div>

                <div class="prestation-card-parent card-right">
                    <div class="prestation-card" :class="{'show-price': showPrice2}" @click="showPrice2 = !showPrice2">
                        <div class="prestation-card-title">Passage du Père-Noël</div>
                        <div class="prestation-card-subtitle">- Professionnels - Associations - Ecoles -</div>
                        <br>
                        <div class="prestation-card-content">
                            <div class="prestation-card-item">Temps de présence à définir</div>
                            <div class="prestation-card-item">Distribution des cadeaux</div>
                            <div class="prestation-card-item">Photos (Sans supplément)</div>
                            <div class="prestation-card-item">Distribution de bonbons</div>
                        </div>
                    </div>
                    <div class="prestation-card-price">
                        <div class="prestation-card-item">Sur devis</div>
                    </div>
                </div>

            </div>

        </div>
</template>

<script>
export default {
    name: "HomePrestation",
    data() {
        return {
            showPrice1: false,
            showPrice2: false
        }
    }
}
</script>

<style scoped>
    .prestation {
        padding-bottom: 8em;
    }

    .prestation-title  {
        color: white;
    }

    .prestation-content {
        display: flex;
        margin-top: 3em;
        flex-direction: row;
        justify-content: space-around;
    }

    .prestation-card-parent {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        min-width: 33%;
        transition: all .3s ease-in-out;
        position: relative;

    }

    .prestation-card {
        background: rgba(255, 255, 255);
        border-radius: 8px;
        box-shadow: 2px 2px 25px rgba(0, 0, 0, .3);
        padding: 2em;
        width: 100%;
        /* opacity: .3; */
    }
    .prestation-card-parent:hover {
        box-shadow: 0 0 100px -10px rgba(255, 100, 100, 1);
    }

    .prestation-card-parent.card-left:hover {
        transform: perspective(500px) rotateY(10deg) rotateX(5deg) rotateZ(0deg) translateX(-10px);
    }

    .prestation-card-parent.card-right:hover {
        transform: perspective(500px) rotateY(-10deg) rotateX(5deg) rotateZ(0deg) translateX(10px);
    }

    .show-price {
        /* transform: perspective(200px) rotateY(10deg) rotateX(5deg) rotateZ(0deg) translateX(-10px); */
    }

    .prestation-card-parent:hover .prestation-card-price {
        position: absolute;
        transform: translateY(90%);
        z-index: -1;
    }

    .prestation-card-title {
        background: linear-gradient(var(--color-primary-1), var(--color-primary-2)) no-repeat;
        padding: .2em 1em;
        border-radius: 8px;
        margin: -0.8em -2.2em 0 -2.2em;
        font-family: PermanentMarker;
        color: white;
        text-align: center;
        font-size: 1.35em;
        box-shadow: 0 0 8px rgba(0, 0, 0, .5);
        /* position: absolute */
    }

    .prestation-card-subtitle {
        margin-top: 1em;
        background: linear-gradient(var(--color-primary-1), var(--color-primary-2)) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-family: PermanentMarker;
    }

    .prestation-card-content {
        margin-top: 1em;
        text-align: center;
        font-weight: bold;
        position: relative;
    }

    .prestation-card-item  {
        margin-top: 1em;
        background: linear-gradient(var(--color-primary-1), var(--color-primary-2)) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .prestation-card-price {
        position: absolute;
        background: white; 
        padding: 1.4em 2em;
        border-radius: 8px;
        box-shadow: 2px 2px 25px rgba(0, 0, 0, .3);
        width: 70%;
        margin: 0 auto;
        left: 7.5%;
        bottom: 0;
        z-index: -1;
        text-align: center;
        transition: all .3s ease-in-out;
        transition-delay: .3s;
    }

    .prestation-car-price:hover {
        animation: price-open .5s linear infinite;
        animation-delay: .5s;
    }

    @keyframes price-open {
        30% { transform: scale(1.2); }
        40%, 60% { transform: rotate(-20deg) scale(1.2); }
        50% { transform: rotate(20deg) scale(1.2); }
        70% { transform: rotate(0deg) scale(1.2); }
        100% { transform: scale(1); }
    }
    .prestation-card-price .prestation-card-item {
        margin: 0;
        font-family: PermanentMarker;
    }

</style>