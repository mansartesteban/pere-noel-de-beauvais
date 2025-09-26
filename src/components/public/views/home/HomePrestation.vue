<template>
  <Section
    id="home-prestation"
    class="flex flex-col gap-12 md:gap-16 items-center text-center"
  >
    <div class="text-4xl text-center font-[PermanentMarker]">Prestations</div>

    <p class="text-xl md:text-2xl lg:text-3xl">
      Faites de votre événement un moment inoubliable
    </p>

    <p>
      Que ce soit pour un moment intime en famille, une fête d'entreprise ou une
      animation commerciale, je m'adapte à vos besoins pour créer une expérience
      sur mesure. Voici les formules magiques que je vous propose :
    </p>

    <div
      class="flex flex-wrap items-center lg:items-stretch gap-16 xl:gap-24 2xl:gap-32 justify-center"
    >
      <!-- Visite à domicile (Le rêve des enfants) -->
      <PrestationCard>
        <template #title>
          <div class="flex items-center gap-4 md:gap-8 lg:gap-8">
            <span class="text-4xl md:text-6xl lg:text-6xl">🏠</span>
            <h3>Visite à domicile (Le rêve des enfants)</h3>
          </div>
        </template>

        <template #body>
          <p class="text-justify">
            J'arrive chez vous pour une visite surprise qui laissera un souvenir
            impérissable. Je peux distribuer les cadeaux que vous aurez
            préparés, prendre des photos avec toute la famille et écouter les
            souhaits de chacun.
          </p>
        </template>
        <template #footer>
          <div class="text-left text-black">
            <div>
              <strong class="text-primary-500">Idéal pour :</strong> Le
              réveillon de Noël, un goûter de l'Avent, une surprise familiale.
            </div>
            <div>
              <strong class="text-primary-500">Durée :</strong> environ 15
              minutes
            </div>
          </div>
        </template>
      </PrestationCard>

      <!--  Animations commerciales et marchés de Noël -->
      <PrestationCard>
        <template #title>
          <div class="flex items-center gap-4 md:gap-8 lg:gap-8">
            <span class="text-4xl md:text-6xl lg:text-6xl">🎅</span>
            <h3>Animations commerciales et marchés de Noël</h3>
          </div>
        </template>

        <template #body>
          <p class="text-justify">
            Attirez les familles et créez une ambiance festive inoubliable !
            J'accueille les enfants (et les grands !) pour des séances photo, je
            déambule pour saluer les visiteurs et je distribue des sourires (et
            quelques friandises !).
          </p>
        </template>

        <template #footer>
          <div class="text-left text-black">
            <div>
              <strong class="text-primary-500">Idéal pour :</strong> Galeries
              marchandes, jardineries, magasins de jouets, marchés de Noël.
            </div>
            <div>
              <strong class="text-primary-500">Durée :</strong> Sur devis, à
              l'heure ou à la demi-journée.
            </div>
          </div>
        </template>
      </PrestationCard>

      <!-- Événements d'entreprise (arbre de Noël) -->
      <PrestationCard>
        <template #title>
          <div class="flex items-center gap-4 md:gap-8 lg:gap-8">
            <span class="text-4xl md:text-6xl lg:text-6xl">🏢</span>
            <h3>Événements d'entreprise (arbre de Noël)</h3>
          </div>
        </template>

        <template #body>
          <p class="text-justify">
            Marquez les esprits de vos collaborateurs et de leurs familles.
            J'anime votre arbre de Noël, participe à la distribution des cadeaux
            et crée une atmosphère conviviale et festive.
          </p>
        </template>

        <template #footer>
          <div class="text-left text-black">
            <div>
              <strong class="text-primary-500">Idéal pour :</strong> Comités
              d'entreprise (CE), fêtes de fin d'année professionnelles.
            </div>
            <div>
              <strong class="text-primary-500">Durée :</strong> Sur devis,
              adaptée à votre planning.
            </div>
          </div>
        </template>
      </PrestationCard>

      <!-- Écoles, crèches et associations -->
      <PrestationCard>
        <template #title>
          <div class="flex items-center gap-4 md:gap-8 lg:gap-8">
            <span class="text-4xl md:text-6xl lg:text-6xl">📚</span>
            <h3>Écoles, crèches et associations</h3>
          </div>
        </template>

        <template #body>
          <p class="text-justify">
            J'interviens pour le plus grand bonheur des enfants lors de votre
            fête de fin d'année. Une visite adaptée aux tout-petits, pleine de
            douceur et de magie.
          </p>
        </template>

        <template #footer>
          <div class="text-left text-black">
            <div>
              <strong class="text-primary-500">Idéal pour :</strong> Fêtes
              d'école, goûters associatifs.
            </div>
            <div>
              <strong class="text-primary-500">Durée :</strong> Adaptée au
              nombre d'enfants et à votre organisation.
            </div>
          </div>
        </template>
      </PrestationCard>
    </div>
  </Section>
</template>

<script>
  export default {
    name: "HomePrestation",
    data() {
      return {
        showPrice1: false,
        showPrice2: false,
      };
    },
  };
</script>
