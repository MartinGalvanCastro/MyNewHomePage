import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins:[tsconfigPaths()],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: 'report',
		},
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		deps: {
			inline: ['vitest-canvas-mock'],
		},
		threads: false,
		environmentOptions: {
			jsdom: {
				resources: 'usable',
			},
		},
		exclude:[...configDefaults.exclude],
		globals: true,
		watch:false
	},
});
