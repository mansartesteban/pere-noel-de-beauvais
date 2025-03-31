<template>
  <button
    :class="{ hidden: !show }"
    class="fab"
    @click="window.scrollTo(0, 0)"
  >
    <div class="arrow-fab"></div>
  </button>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps({
    show: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  });
</script>

<style>
  .arrow-fab {
    background: linear-gradient(var(--color-primary-1), var(--color-primary-2));
    -webkit-mask: url(/ressources/icons/arrow-up.svg) no-repeat center;
    mask: url(/ressources/icons/arrow-up.svg) no-repeat center;
    height: 64px;
    width: 64px;
  }
</style>
