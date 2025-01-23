import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "!./src/**/__test__/**/*", // Excluir la carpeta __test__
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord", "night"],
  },
} satisfies Config;
