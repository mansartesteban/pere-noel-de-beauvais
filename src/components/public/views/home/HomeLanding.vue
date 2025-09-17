<template>
  <img
    class="background md:hidden fixed brightness-40 -z-10 -mt-16 h-screen w-screen max-w-none object-cover"
    src="/ressources/images/landing-1-mobile.png"
    loading="lazy"
  />
  <img
    class="background hidden md:block brightness-40 fixed left-0 -z-10 -mt-16 md:-mt-32 h-full w-full max-w-full object-cover object-top"
    src="/ressources/images/landing-1-desktop.png"
    loading="lazy"
  />
  <div class="md:px-4 lg:px-12 xl:px-32">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-12 md:gap-14 xl:gap-16 items-center">
        <div
          class="text-4xl md:text-4xl xl:text-5xl font-[PermanentMarker] mb-16 md:mb-12 mx-12 text-justify"
        >
          Ho Ho Ho ! Bienvenue sur le site officiel du Père Noël de Beauvais !
        </div>

        <div
          class="text-lg md:text-xl text-justify md:font-bold drop-shadow-lg p-12 -my-24 md:-my-16 text-shadow-lg"
        >
          La magie de Noël n'est pas seulement une date dans le calendrier,
          c'est un sentiment, un souvenir précieux qui se crée en famille.
          <br />
          <br />
          Directement depuis le Pôle Nord, et avec une attache toute
          particulière pour notre région de l'Oise, je vous propose de donner
          vie à ce rêve pour vos enfants, votre famille ou vos événements.
          <br />
          <br />
          Imaginez leurs yeux briller de mille feux en me voyant arriver,
          connaissant leurs petites histoires et apportant avec moi toute la
          féérie de Noël.
          <br />
          <br />
          Prêts à créer un souvenir inoubliable ? Décourez comment je peux
          illuminer vos fêtes de fin d'année.
        </div>
        <router-link to="/#home-contact">
          <Button
            class="bg-white rounded-xl text-primary-500 w-32 p-4 mt-8 lg:mt-12 text-xl font-bold"
          >
            Réserver
          </Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  .background {
    animation: slide-out 1s linear both;
    animation-timeline: scroll();
    animation-range: 60vh 300vh;
  }

  @media (min-width: 768px) {
    /* md */
    .background {
      animation-range: 35vh 400vh;
    }
  }

  @media (min-width: 1024px) {
    /* lg */
    .background {
      animation-range: 10vh 300vh;
    }
  }
</style>
