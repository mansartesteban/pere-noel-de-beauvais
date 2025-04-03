<template>
  <div class="flex p-8 text-lg justify-between items-start">
    <div class="flex flex-col">
      <router-link :to="{ name: 'Legacy' }">Mentions légales</router-link>
      <!-- <router-link :to="{ name: 'Credits' }">Crédits</router-link> -->
    </div>
    <div class="flex flex-column">
      <div class="copyrights">
        Site développé par
        <a
          href="https://mansartesteban.vercel.app"
          target="_blank"
          class="font-bold"
          >Vegaia</a
        >
      </div>
    </div>
  </div>
</template>
