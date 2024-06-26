import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin(),
    ],
    server: {
        hmr: true // Activer le rechargement à chaud
    },
    build: {
        rollupOptions: {
            input: {
                app: "./assets/js/app.js"
            },
        }
    },
});
