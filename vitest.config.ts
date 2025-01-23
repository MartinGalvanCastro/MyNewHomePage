import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "./src/__test__/setupTests.ts"),
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
      exclude: [
        "**/__test__/**",
        "**/**/*.config.{ts,mjs}",
        "**/**/testingUtils/**/*.{ts,tsx}",
        "**/layout.tsx",
        "**/page.tsx",
        "**/**/AppProvider.tsx",
        "middleware.ts",
      ],
    },
  },
});
