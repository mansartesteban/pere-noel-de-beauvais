import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

import "@/assets/styles/main.css";

const app = createApp(App);

router(app);

app.mount("#app");
