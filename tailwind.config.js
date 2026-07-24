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
        "gosirat-green": "#176938",
        "gosirat-green-alt": "#0d6332",
        "gosirat-green-dark": "#124225",
        "gosirat-green-light": "#89b99a",
        "gosirat-accent": "#2ecc71",
        "gosirat-accent-light": "#8CE0B4",
        "gosirat-gray": "#57605b",
        "gosirat-gray-light": "#bababa",
        "gosirat-black": "#0c140f",
        "gosirat-dark-alt": "#1a1a1a",
        "gosirat-light": "#f4f7f4",
        "gosirat-bg-light": "#f8fbf8",
        "gosirat-text": "#202A32",
        "gosirat-text-dark": "#101828",
        "gosirat-darker": "#09131a",
        "bg-gosirat-black": "#1F252E",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 3s ease-in-out infinite',
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
