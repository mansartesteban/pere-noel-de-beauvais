import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";

const root = path.resolve(__dirname);

export default defineConfig({
  plugins: [
    Vue(),
    tailwindcss(),
    AutoImport({
      imports: [
        // presets
        "vue",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(root, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
