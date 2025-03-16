import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/reco/", // 👈 Добавлено для GitHub Pages
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
