import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    // Proxy only needed if you run Wrangler dev for Functions locally
    proxy: { "/api": "http://127.0.0.1:8788" },
  },
});
