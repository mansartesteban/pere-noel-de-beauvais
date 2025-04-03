<template>
  <button
    v-bind="$attrs"
    class="cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({});
</script>
