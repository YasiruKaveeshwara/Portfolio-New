import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Warn when a chunk exceeds 500 KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor libraries into named chunks for better caching
        manualChunks: {
          // Core React runtime — cached across all deploys
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Framer Motion is large (~140 KB gzip) — isolate so page chunks stay small
          "vendor-motion": ["framer-motion"],
          // Radix primitives actually used
          "vendor-radix": ["@radix-ui/react-tooltip", "@radix-ui/react-toast"],
          // Particles library — only loaded lazily, so keep in own chunk
          "vendor-particles": ["react-tsparticles", "tsparticles-slim"],
        },
      },
    },
  },
}));
