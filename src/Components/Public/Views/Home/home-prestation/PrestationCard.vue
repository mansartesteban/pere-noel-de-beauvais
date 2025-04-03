<template>
  <div class="bg-white text-primary-500 p-12 text-xl shadow-xl rounded-xl">
    <div
      class="bg-primary-600 text-center text-white font-[PermanentMarker] p-4 px-16 mb-8 -mx-16 shadow-xl rounded-xl"
    >
      <slot name="title"></slot>
    </div>
    <div class="text-center font-[PermanentMarker] text-xl">
      <slot name="subtitle"></slot>
    </div>
    <slot></slot>
  </div>
</template>
