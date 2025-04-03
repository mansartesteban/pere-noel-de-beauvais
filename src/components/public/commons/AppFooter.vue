<template>
  <div class="flex gap-8 p-8 text-md justify-between items-start">
    <div class="flex flex-col text-sm">
      <router-link :to="{ name: 'Legacy' }">Mentions légales</router-link>
    </div>
    <div class="flex flex-column">
      <div class="text-right">
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
