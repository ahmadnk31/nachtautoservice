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
          // Put all source code that uses React in the same chunk as React
          // This ensures React is available when our code executes
          if (id.includes('src/i18n')) {
            return 'vendor';
          }
          if (id.includes('node_modules')) {
            // Put ALL React-related packages in vendor to ensure React loads first
            // This includes React core and all React-dependent packages
            if (
              id.includes('react') || 
              id.includes('@tanstack') ||
              id.includes('@vercel/analytics') ||
              id.includes('@radix-ui') ||
              id.includes('next-themes')
            ) {
              return 'vendor';
            }
            // Only truly non-React packages go to vendor-other
            // Common non-React packages: date-fns, zod, clsx, tailwind-merge, etc.
            if (
              id.includes('date-fns') ||
              id.includes('zod') ||
              id.includes('clsx') ||
              id.includes('tailwind-merge') ||
              id.includes('class-variance-authority') ||
              id.includes('cmdk') ||
              id.includes('input-otp') ||
              id.includes('vaul') ||
              id.includes('embla-carousel-core') ||
              id.includes('recharts') ||
              id.includes('sonner')
            ) {
              return 'vendor-other';
            }
            // If unsure, put it in vendor to be safe
            return 'vendor';
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
