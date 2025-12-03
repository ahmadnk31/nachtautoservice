import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React core - must load first
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('scheduler')) {
              return 'vendor';
            }
            // All React-dependent packages go in vendor to ensure React loads first
            if (
              id.includes('react') || 
              id.includes('@tanstack/react-query') ||
              id.includes('@vercel/analytics') ||
              id.includes('react-router')
            ) {
              return 'vendor';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            // Other utilities
            if (id.includes('lucide-react') || id.includes('date-fns')) {
              return 'utils';
            }
            // Everything else (non-React dependencies)
            return 'vendor-other';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
}));
