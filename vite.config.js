import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/ts/app.tsx"],
            refresh: true,
        }),
        react({
            fastRefresh: false,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/ts/",
        },
    },
});
