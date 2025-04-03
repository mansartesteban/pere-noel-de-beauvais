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
  history: createMemoryHistory(),
  routes,
});

export default (app) => {
  app.use(router);
};
