<template>
  <div
    class="bg-white w-full text-primary-500 w-1/2 p-8 lg:p-12 xl:p-12 text-xl shadow-xl rounded-xl"
  >
    <div
      class="bg-primary-600 text-center text-white font-[PermanentMarker] p-4 px-16 mb-8 -mx-12 lg:-mx-16 xl:-mx-20 shadow-xl rounded-xl"
    >
      <slot name="title"></slot>
    </div>
    <div class="text-center font-[PermanentMarker] text-xl">
      <slot name="subtitle"></slot>
    </div>
    <div class="text-lg md:text-lg lg:text-2xl text-gray-900">
      <slot></slot>
    </div>
  </div>
</template>
