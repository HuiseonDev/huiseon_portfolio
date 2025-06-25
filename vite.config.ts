/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      compressionOptions: { level: 9 },
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@store", replacement: path.resolve(__dirname, "src/store") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@tests", replacement: path.resolve(__dirname, "src/tests") },
      { find: "#types", replacement: path.resolve(__dirname, "src/types") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
