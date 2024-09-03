import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/hero/1.svg')",
      },
      listStyleImage: {
        checkmark: 'url("/images/our_introduction/icon2.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
