<template>
  <Section
    id="home-prestation"
    class="flex flex-col gap-16"
  >
    <div class="text-4xl text-center font-[PermanentMarker]">Prestations</div>

    <div
      class="flex flex-col items-center lg:items-stretch gap-16 xl:gap-24 2xl:gap-32 lg:flex-row justify-center"
    >
      <PrestationCard>
        <template #title>Passage du Père‑Noël à domicile</template>

        <template #subtitle>- Particulier -</template>
        <br />
        <div>
          <li>15 / 20 Minutes de présence</li>
          <li>Distribution des cadeaux</li>
          <li>Photos (Sans supplément)</li>
        </div>
        <br />
        <hr class="my-4" />
        <div class="text-center">
          <div>
            50 € TTC pour le secteur : Beauvais, Tillé, Allone, Voisinlieu,
          </div>
          <br />
          <div>60 € TTC en dehors du secteur ci-dessus</div>
          <div>Espèce / Chèque</div>
        </div>
      </PrestationCard>

      <PrestationCard>
        <template #title>Passage du Père‑Noël</template>
        <template #subtitle>
          - Professionnels - Associations - Ecoles -
        </template>
        <br />
        <div>
          <li>Temps de présence à définir</li>
          <li>Distribution de cadeau</li>
          <li>Photos (Sans supplément)</li>
          <li>Distribution de bonbons</li>
          <li>Déambulation dans la ville</li>
          <li>Proposition de décor</li>
        </div>
        <hr class="my-4" />
        <div class="text-center">Sur devis</div>
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
