import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path'; // @types/node muss dafür noch installiert werden
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            external: ['sharp'],
        },
    },
    plugins: [
        react(),
        svgr(),
        viteCompression({ deleteOriginFile: true }),
        imagePresets({
            small: widthPreset({
                loading: 'lazy',
                widths: [375, 500],
                formats: {
                    png: { quality: 75 },
                    webp: { quality: 75 }, //Reihenfolge der Foramte ist wichtig
                },
            }),
            normal: widthPreset({
                loading: 'lazy',
                widths: [375, 500, 800],
                formats: {
                    png: { quality: 75 },
                    webp: { quality: 75 },
                },
            }),
        }),
    ],
    resolve: {
        alias: {
            '~@': path.resolve(__dirname, '/src'), // damit HG-Bilder beim build mit eingebunden werden
        },
    },
});
