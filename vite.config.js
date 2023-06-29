import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path"; // @types/node muss dafür noch installiert werden

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "~@": path.resolve(__dirname, "/src"), // damit HG-Bilder beim build mit eingebunden werden
        },
    },
});
