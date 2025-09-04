import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
    // Proxy only needed if you run Wrangler dev for Functions locally
    proxy: { "/api": "http://127.0.0.1:8788" },
  },
  build: {
    target: "esnext",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    esbuildOptions: {
      target: "esnext",
    },
  },
});
