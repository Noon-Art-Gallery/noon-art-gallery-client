import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
