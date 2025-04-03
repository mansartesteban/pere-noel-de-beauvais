<template>
  <div
    class="appbar drop-shadow-[0_0_32px_rgba(0,0,0,.33)] flex flex-col fixed top-0 w-screen z-1 transition-colors duration-300"
    :class="{ 'bg-white': hasScrolled, 'h-12': hasScrolled && !opened }"
  >
    <div
      class="text-primary-500 text-xl font-[PermanentMarker] p-4"
      :class="{ block: hasScrolled, hidden: !hasScrolled }"
    >
      Le Père‑Noel de Beauvais
    </div>
    <div
      :class="{ 'opacity-100': hasScrolled || opened }"
      class="snowy opacity-0 transition-opacity duration-300 absolute top-full left-0 right-0 h-[63px] z-[-1] pointer-events-none after:w-full after:h-8 after:left-0 after:right-0 after:absolute after:-bottom-[-32px]"
    ></div>

    <Button
      @click="toggleMenu"
      class="toggle-button self-end p-4 absolute transition-colors"
      :class="{
        'text-primary-500': hasScrolled || opened,
        'text-white': !hasScrolled && !opened,
      }"
    >
      <XMarkIcon
        v-if="opened"
        class="w-8 h-8"
      ></XMarkIcon>
      <Bars3Icon
        v-else
        class="w-8 h-8"
      ></Bars3Icon>
    </Button>
    <nav
      id="menu"
      class="navbar flex flex-col items-center bg-white h-0 transition-all overflow-y-auto"
      :class="{ 'h-full p-8 gap-8': opened }"
    >
      <template v-for="link in navLinks">
        <router-link
          class="text-2xl font-[PermanentMarker] text-primary-500"
          :to="link.to"
          extact
          @click="toggleMenu(false)"
          >{{ link.title }}</router-link
        >
      </template>
    </nav>
  </div>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import { onClickOutside } from "@vueuse/core";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

  const hasScrolled = ref(false);

  window.addEventListener("scroll", (e) => {
    hasScrolled.value = window.scrollY > 0;
    if (opened.value) {
      toggleMenu(false);
    }
  });

  const opened = ref(false);
  const navLinks = ref([
    {
      title: "Accueil",
      to: { name: "Home" },
    },
    {
      title: "Présentation",
      to: "/#home-presentation",
    },
    {
      title: "Prestations",
      to: "/#home-prestation",
    },
    {
      title: "Galerie",
      to: { name: "Galery" },
    },
    {
      title: "Contact",
      to: "/#home-contact",
    },
  ]);

  const toggleMenu = (forceState = null) => {
    opened.value =
      forceState !== null && typeof forceState === "boolean"
        ? forceState
        : !opened.value;
  };

  onMounted(() => {
    onClickOutside(document.querySelector("#menu"), (e) => {
      if (!e.target.closest(".toggle-button")) {
        opened.value = false;
      }
    });
  });
</script>

<style scoped>
  .animate__mySlideInRight {
    animation-name: mySlideInRight;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
  }

  .animate__mySlideInLeft {
    animation-name: mySlideInLeft;
    animation-duration: 0.5s;
  }

  .read-progress {
    box-shadow: 0 1px 5px rgba(255, 255, 255, 1);
    transform-origin: left;
    animation: width-scroll 1s ease-in-out;
    animation-timeline: scroll();
  }

  @keyframes width-scroll {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  .snowy:after {
    background: url("/ressources/images/section-after.svg") no-repeat;
  }
</style>
