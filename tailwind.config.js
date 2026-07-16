/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        "base-white": "#fff",
        "neutral-300": "#666664",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
    screens: {
      lg: {
        raw: "screen and (max-width: 1200px)",
      },
      mq1400: { max: "1400px" },
      mq1275: { max: "1275px" },
      mq1125: { max: "1125px" },
      mq1050: { max: "1050px" },
      mq975: { max: "975px" },
      mq825: { max: "825px" },
      mq750: { max: "750px" },
      mq725: { max: "725px" },
      mq650: { max: "650px" },
      mq450: { max: "450px" },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
