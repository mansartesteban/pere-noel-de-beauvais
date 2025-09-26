<template>
  <div class="section relative text-primary-500 [&:nth-child(odd)]:text-white">
    <div class="section-before absolute"></div>
    <div
      class="section-content px-12 md:px-32 xl:p-40 2xl:p-56"
      v-bind="$attrs"
    >
      <slot></slot>
    </div>
    <div class="section-after absolute"></div>
  </div>
</template>
