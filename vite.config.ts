import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),tsconfigPaths({
		root:__dirname,
	})],
	root: path.resolve(__dirname, 'src'),
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
			'@':path.resolve(__dirname, 'src')
		}
	},
	server:{
		port:3000,
	}
});
