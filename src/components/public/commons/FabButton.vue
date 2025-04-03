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
