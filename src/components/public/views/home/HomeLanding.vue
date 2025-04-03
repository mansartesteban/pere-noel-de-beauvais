<template>
  <img
    class="md:hidden absolute brightness-50 -z-10 -mt-16 h-screen w-screen max-w-none object-cover"
    src="/ressources/images/landing-1-mobile.png"
    loading="lazy"
  />
  <img
    class="hidden md:block brightness-50 absolute left-0 -z-10 -mt-16 md:-mt-32 h-full w-full max-w-full object-cover object-top"
    src="/ressources/images/landing-1-desktop.png"
    loading="lazy"
  />
  <div class="overflow-clip md:px-4 lg:px-12 xl:px-32">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-12 md:gap-14 xl:gap-16 items-center">
        <div
          class="text-3xl md:text-5xl xl:text-6xl text-center font-[PermanentMarker]"
        >
          Le Père‑Noel<br class="md:hidden" />
          de Beauvais
        </div>
        <div
          class="text-xl md:text-2xl xl:text-3xl text-center font-bold drop-shadow-lg p-12 -mt-16 md:-mt-8 xl:mt-0"
        >
          La magie du Père Noël, chez vous ou dans votre ville
        </div>
        <div
          class="text-md md:text-xl text-justify md:font-bold drop-shadow-lg p-12 -my-24 md:-my-16"
        >
          Vivez un moment inoubliable en compagnie du véritable Père Noël : à
          domicile pour les familles, ou lors d’événements pour les écoles,
          mairies, associations et entreprises.
        </div>
        <Button
          class="bg-white rounded-xl text-primary-500 w-32 p-4 mt-8 lg:mt-12 text-xl font-bold"
        >
          Réserver
        </Button>
      </div>
    </div>
  </div>
</template>
