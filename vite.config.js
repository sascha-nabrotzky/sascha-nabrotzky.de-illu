import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            // damit HG-Bilder beim build mit eingebunden werden
            "~@": path.resolve(__dirname, "/src"),
        },
    },
});
