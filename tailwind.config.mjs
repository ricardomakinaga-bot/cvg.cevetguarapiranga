/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cvg: {
          deep: "rgb(13 71 161 / <alpha-value>)",
          primary: "rgb(25 118 210 / <alpha-value>)",
          light: "rgb(66 165 245 / <alpha-value>)",
          soft: "rgb(187 222 251 / <alpha-value>)",
          clinical: "rgb(227 242 253 / <alpha-value>)",
          background: "rgb(245 247 250 / <alpha-value>)",
          text: "rgb(20 30 45 / <alpha-value>)",
          muted: "rgb(66 66 66 / <alpha-value>)",
          border: "rgb(224 224 224 / <alpha-value>)",
          alert: "rgb(211 47 47 / <alpha-value>)",
          emergency: "rgb(229 57 53 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cvg: "0 12px 32px rgb(20 30 45 / 0.10)",
      },
      maxWidth: {
        shell: "1180px",
      },
      backgroundImage: {
        "cvg-primary": "linear-gradient(135deg, rgb(13,71,161) 0%, rgb(25,118,210) 50%, rgb(66,165,245) 100%)",
        "cvg-light": "linear-gradient(135deg, rgb(227,242,253) 0%, rgb(187,222,251) 100%)",
      },
    },
  },
  plugins: [],
};
