<template>
  <div
    class="bg-white text-primary-500 text-2xl shadow-xl rounded-4xl w-full xl:w-2/5 self-start"
  >
    <div
      class="from-primary-400 to-primary-700 bg-gradient-to-bl rounded-3xl p-2 m-2"
    >
      <div class="bg-white rounded-2xl p-1">
        <div class="p-8 lg:p-12 xl:p-12">
          <!-- <div
        class="from-primary-500 to-primary-700 bg-gradient-to-br text-center text-white font-[PermanentMarker] p-4 px-16 -mx-12 lg:-mx-16 xl:-mx-20 shadow-xl rounded-xl"
      > -->
          <div class="text-center font-[PermanentMarker] text-2xl mb-4">
            <slot name="title"></slot>
          </div>
        </div>
        <!-- <div class="text-center font-[PermanentMarker] text-xl">
      <slot name="subtitle"></slot>
    </div> -->
        <div
          class="text-lg md:text-lg lg:text-lg text-gray-900 px-8 lg:px-12 xl:px-12"
        >
          <slot name="body"></slot>
        </div>

        <div
          class="from-amber-200 to-amber-400 bg-gradient-to-br p-1 m-4 md:m-8 rounded-2xl text-lg md:text-lg lg:text-lg"
        >
          <div class="bg-white rounded-2xl text-lg md:text-lg lg:text-lg">
            <div
              class="from-amber-300 to-amber-500 bg-gradient-to-br p-1 rounded-2xl text-lg md:text-lg lg:text-lg"
            >
              <div
                class="bg-white p-4 md:p-8 rounded-xl text-lg md:text-lg lg:text-lg"
              >
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
