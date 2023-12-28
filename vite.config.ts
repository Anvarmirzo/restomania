import * as path from 'path';
import {esbuildCommonjs} from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
// import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(() => {
    // const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            react(),
            svgr({}),
            eslintPlugin({
                cache: false,
                include: ['./src/**/*.ts', './src/**/*.tsx'],
                exclude: [],
            }),
        ],
        optimizeDeps: {
            esbuildOptions: {
                plugins: [esbuildCommonjs(['react-moment'])],
            },
        },
        resolve: {
            mainFields: [],
            alias: {
                'app': `${path.resolve(__dirname, './src/app')}`,
                'pages': `${path.resolve(__dirname, './src/pages')}`,
                'widgets': `${path.resolve(__dirname, './src/widgets')}`,
                'features': `${path.resolve(__dirname, './src/features')}`,
                'entities': `${path.resolve(__dirname, './src/entities')}`,
                'shared': `${path.resolve(__dirname, './src/shared')}`,
            }
        },
        server: {
            // https: {
            // 	key: fs.readFileSync("./.cert/key.pem"),
            // 	cert: fs.readFileSync("./.cert/cert.pem"),
            // },
        },
    };
});
