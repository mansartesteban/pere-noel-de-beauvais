<template>
  <div class="content section">
    <div class="landing">
      <div class="landing-left">
        <div class="landing-title">Le Père‑Noel de Beauvais</div>
        <div class="landing-subtitle">
          Offrez-vous le père Noël à domicile pour vous et vos proches !
        </div>
        <div class="landing-text">
          A l’occasion des fêtes de fin d’années, le père de Noël de Beauvais
          rajoute votre adresse sur la liste des domiciles où rester plus
          longtemps pendant sa tournée.
        </div>
        <button class="buy-button">Réserver</button>
      </div>
      <div class="landing-right">
        <img
          class="animated-santa"
          src="/ressources/images/landing-santa-claus.svg"
          width="100%"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<!-- <style scoped lang="scss">


    .landing {
        color: white;
        padding-top: 2em;
    }

    .landing-title {
        font-family: PermanentMarker;
        font-size: 2.5rem;
    }

    .landing-right {
        width: 70%;
    }

    @media screen and (min-width: 768px)   {
        
        .landing-right img {
            width: 160%;
            
            z-index: 10000;
            margin-bottom: -15em;
            position: relative;
            top: 2em;
        }

        .landing {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 3em;
            z-index: 10000;
            position: relative;
        }

        .landing-left {
            width: 85%;
            text-align: center;
            padding-right: 5em;
        }

        .landing-title {
            letter-spacing: .1em;
            font-size: 3em;
        }

        .landing-subtitle {
            font-size: 1.5em;
            font-weight: bold;
            margin-top: 2em;
            text-align: justify;

        }

        .landing-text {
            margin-top: 2em;
            font-size: 1.2em;
            text-align: justify;
        }

        .buy-button {
            margin-top: 2em;
        }

    }

.animated-santa {
    animation: moving-santa infinite 5s ease-in-out;
}

@keyframes moving-santa {
    0% {
        transform: rotateZ(25deg);
    }
    45% {
        transform: rotateZ(-5deg);
    }
    50% {
        transform: rotateZ(-5deg);
    }
    95% {
        transform: rotateZ(25deg);
    }
    100% {
        transform: rotateZ(25deg);
    }
}


</style> -->
