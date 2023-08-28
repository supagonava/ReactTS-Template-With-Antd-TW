import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3010,
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        react(),
        VitePWA({
            // add this to cache all the imports
            workbox: {
                globPatterns: ["**/*"],
            },
            // add this to cache all the
            // static assets in the public folder
            includeAssets: ["**/*"],
            manifest: {
                theme_color: "",
                background_color: "",
                display: "standalone",
                scope: "/",
                start_url: "/",
                short_name: "",
                description: "",
                name: "",
                icons: [
                    {
                        src: "/logo.png",
                        sizes: "488x162",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
