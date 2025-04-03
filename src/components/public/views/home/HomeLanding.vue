<template>
  <div class="overflow-clip">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-16 items-center">
        <div class="text-4xl text-center font-[PermanentMarker]">
          Le Père‑Noel<br />de Beauvais
        </div>
        <div class="text-2xl text-center font-bold drop-shadow-lg p-12">
          Offrez-vous le père Noël à domicile pour vous et vos proches !
        </div>
        <img
          class="md:hidden absolute -z-10 -mt-40 h-full w-full max-w-full object-cover"
          src="/ressources/images/landing-2.jpg"
        />
        <img
          class="hidden md:block absolute left-0 -z-10 -mt-40 h-full w-full max-w-full object-cover object-top"
          src="/ressources/images/landing-2-full.jpg"
        />
        <Button
          class="bg-white rounded-xl text-primary-500 w-32 p-4 mt-20 text-xl font-bold"
        >
          Réserver
        </Button>
      </div>
    </div>
  </div>
</template>
