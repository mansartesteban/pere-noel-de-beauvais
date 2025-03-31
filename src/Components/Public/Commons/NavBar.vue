<template>
  <div class="navbar">
    <div>
      <router-link
        :to="{ name: 'Home' }"
        extact
        >Accueil</router-link
      >
    </div>
    <div>
      <router-link :to="'/#home-presentation'">Présentation</router-link>
    </div>
    <div>
      <router-link :to="'/#home-prestation'">Prestations</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Galery' }">Galerie</router-link>
    </div>
    <div>
      <router-link :to="'/#home-contact'">Contact</router-link>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>
