import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // selfDestroying: true,
      manifest: {
        name: "Xenpaper",
        short_name: "Xenpaper",
        description: "Text-based microtonal sequencer",
        display: "fullscreen",
        theme_color: "#0e151b",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
