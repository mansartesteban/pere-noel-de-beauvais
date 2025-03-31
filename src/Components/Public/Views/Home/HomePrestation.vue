<template>
  <div
    class="prestation section"
    id="home-prestation"
  >
    <div class="prestation-title title">Prestations</div>

    <div class="prestation-content">
      <div class="prestation-card-parent card-left">
        <div
          class="prestation-card"
          :class="{ 'show-price': showPrice1 }"
          @click="showPrice1 = !showPrice1"
        >
          <div class="prestation-card-title">Passage du Père-Noël</div>
          <div class="prestation-card-subtitle">- Particulier -</div>
          <br />
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
        <div
          class="prestation-card"
          :class="{ 'show-price': showPrice2 }"
          @click="showPrice2 = !showPrice2"
        >
          <div class="prestation-card-title">Passage du Père-Noël</div>
          <div class="prestation-card-subtitle">
            - Professionnels - Associations - Ecoles -
          </div>
          <br />
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
        showPrice2: false,
      };
    },
  };
</script>
