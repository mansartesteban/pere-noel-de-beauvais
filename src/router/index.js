import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import { createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/public/views/Main.vue"),
    children: [
      {
        name: "Home",
        path: "",
        component: () => import("@/components/public/views/Home.vue"),
      },
      {
        name: "Galery",
        path: "galery",
        component: () => import("@/components/public/views/Gallery.vue"),
      },
      {
        name: "Legacy",
        path: "legacy",
      },
      {
        name: "Credits",
        path: "credits",
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 32,
        behavior: "smooth", // ou 'auto'
      };
    }

    return { top: 0 };
  },
});

export default (app) => {
  app.use(router);
};
