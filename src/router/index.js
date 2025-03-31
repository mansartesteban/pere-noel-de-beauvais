import { createRouter } from "vue-router";
import { createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/public/views/main.vue"),
    children: [
      {
        name: "Home",
        path: "",
        component: () => import("@/components/public/views/home.vue"),
      },
      {
        name: "Galery",
        path: "galery",
        component: () => import("@/components/public/views/gallery.vue"),
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
  history: createMemoryHistory(),
  routes,
});

export default (app) => {
  app.use(router);
};
