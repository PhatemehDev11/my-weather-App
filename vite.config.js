import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },

      manifest: {
        name: "Weather App",
        short_name: "Weather",
        description: "Modern weather app built with React & Tailwind",
        theme_color: "#0ea5e9",
        background_color: "#0ea5e9",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/7.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/8.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
